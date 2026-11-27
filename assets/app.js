(function () {
  "use strict";
  const D = window.DUS_DATA, T = window.DUS_I18N, SB = window.DUS_BACKEND || null;
  const VER = 12; /* version.txt ile aynı tutulur; büyürse açık sayfalar kendini yeniler */
  const KEY = "dus.v1", LETTERS = "ABCDEFGH", SEC_PER_Q = 75, PAGE = 20;
  const defaults = { lang: "tr", theme: "light", ans: {}, fav: [], exams: [], streak: { last: null, count: 0, best: 0 }, custom: [], cbr: [], sess: null, synced: 0, days: {} };

  let S;
  try { S = Object.assign({}, defaults, JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { S = Object.assign({}, defaults); }
  const rawSave = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* depolama dolu */ } };
  const save = () => { rawSave(); queuePush(); };

  const app = document.getElementById("app"), dlg = document.getElementById("dlg"), nav = document.getElementById("nav");
  let ses = null, last = null, timer = null, shown = PAGE, searchQ = "";

  /* ---------- yardımcılar ---------- */
  const t = (k, ...a) => { let s = T[S.lang][k] ?? T.tr[k] ?? k; a.forEach((v, i) => { s = s.replace("{" + i + "}", v); }); return s; };
  const L = (o) => (o == null ? "" : typeof o === "string" ? o : o[S.lang] || o.tr || o.ru || "");
  const missingRu = (q) => S.lang === "ru" && typeof q.q === "object" && !q.q.ru;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const ymd = (d) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const mmss = (s) => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60); return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s % 60).padStart(2, "0"); };
  const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);

  const allQ = () => D.questions.concat(S.custom);
  const qMap = () => { const m = {}; allQ().forEach((q) => { m[q.id] = q; }); return m; };
  function branches() {
    const m = new Map();
    D.branches.concat(S.cbr).forEach((b) => {
      if (!m.has(b.id)) m.set(b.id, { id: b.id, code: b.code, group: b.group || "klinik", name: b.name, topics: (b.topics || []).slice() });
      else (b.topics || []).forEach((tp) => { const x = m.get(b.id); if (!x.topics.some((y) => y.id === tp.id)) x.topics.push(tp); });
    });
    return [...m.values()];
  }
  const branch = (id) => branches().find((b) => b.id === id);
  const qOf = (b, tp) => allQ().filter((q) => (!b || q.branch === b) && (!tp || q.topic === tp));
  const prog = (list) => { let ok = 0, seen = 0; list.forEach((q) => { const a = S.ans[q.id]; if (a) { seen++; if (a.l) ok++; } }); return { n: list.length, ok, seen }; };
  const mistakes = (b) => qOf(b).filter((q) => S.ans[q.id] && !S.ans[q.id].l);
  const code = (b) => esc(b.code || L(b.name).slice(0, 2).toUpperCase());

  function record(id, ok) {
    const a = S.ans[id] || (S.ans[id] = { c: 0, w: 0, l: 0 });
    ok ? a.c++ : a.w++; a.l = ok ? 1 : 0;
    const today = ymd(new Date());
    S.days[today] = (S.days[today] || 0) + 1;
    const keys = Object.keys(S.days).sort(); while (keys.length > 60) delete S.days[keys.shift()];
    if (S.streak.last !== today) {
      const y = new Date(); y.setDate(y.getDate() - 1);
      S.streak.count = S.streak.last === ymd(y) ? S.streak.count + 1 : 1;
      S.streak.last = today; S.streak.best = Math.max(S.streak.best || 0, S.streak.count);
    }
    save();
  }
  function streakNow() {
    const y = new Date(); y.setDate(y.getDate() - 1);
    return S.streak.last === ymd(new Date()) || S.streak.last === ymd(y) ? S.streak.count : 0;
  }

  /* ---------- ortak parçalar ---------- */
  const star = (id) => {
    const on = S.fav.includes(id);
    return `<button class="star${on ? " on" : ""}" data-act="fav" data-id="${esc(id)}" aria-pressed="${on}" aria-label="${t(on ? "favRemove" : "favAdd")}" title="${t(on ? "favRemove" : "favAdd")}">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.7l5.8-.8z"/></svg></button>`;
  };
  const ICONS = {
    home: '<path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    star: '<path d="M12 3.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.7l5.8-.8z"/>',
    x: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/>',
    chart: '<path d="M5 20V10m7 10V4m7 16v-7"/>',
    set: '<path d="M4 7h10m4 0h2M4 17h2m4 0h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    vol: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'
  };
  const ic = (n) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;
  const GOAL = 20, BLOCK = 10, HUES = [172, 212, 26, 262, 338, 140, 44, 300];
  function lastDays(n) { const out = []; for (let i = n - 1; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); out.push(d); } return out; }
  /* ---------- sesli okuma (tarayıcının kendi konuşma motoru) ---------- */
  const canSay = !/[?&]nosay=1/.test(location.search) && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  let sayId = null;
  if (canSay) { window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices(); }
  const say = (id, rev) => (`<button class="star say${sayId === id ? " on" : ""}" data-act="say" data-id="${esc(id)}" data-rev="${rev ? 1 : 0}" aria-label="${t("sayOn")}" title="${t("sayOn")}">${ic("vol")}</button>`);
  function toast(msg) { const d = document.createElement("div"); d.className = "toast"; d.setAttribute("role", "status"); d.textContent = msg; document.body.appendChild(d); setTimeout(() => d.remove(), 4500); }
  const markSay = () => document.querySelectorAll(".say").forEach((b) => b.classList.toggle("on", b.dataset.id === sayId));
  function stopSay() { if (!canSay) return; sayId = null; window.speechSynthesis.cancel(); markSay(); }
  function startSay(id, withAnswer) {
    const q = qMap()[id]; if (!q) return;
    const clean = (x) => String(x).replace(/\s*\n+\s*/g, " ").trim();
    const stem = clean(L(q.q));
    let text = stem + (/[.?!:]$/.test(stem) ? " " : ". ") + q.options.map((op, i) => LETTERS[i] + ". " + L(op)).join(". ") + ".";
    if (withAnswer) text += " " + t("answer") + ": " + LETTERS[q.answer] + ". " + clean(L(q.exp));
    const lang = S.lang === "ru" ? "ru-RU" : "tr-TR", u = new SpeechSynthesisUtterance(text);
    const v = window.speechSynthesis.getVoices().find((x) => x.lang.replace("_", "-").toLowerCase().startsWith(lang.slice(0, 2)));
    u.lang = lang; if (v) u.voice = v; u.rate = 0.95;
    u.onend = u.onerror = () => { if (sayId === id) { sayId = null; markSay(); } };
    sayId = id; markSay(); window.speechSynthesis.speak(u);
  }
  const bar = (v, cls = "") => `<span class="bar ${cls}"><i style="width:${v}%"></i></span>`;
  function meta(q) {
    const b = branch(q.branch), tp = b && b.topics.find((x) => x.id === q.topic);
    return [b && L(b.name), tp && L(tp.name), L(q.source)].filter(Boolean).map(esc).join(" · ");
  }
  /* Soru kartı. o.pick: işaretlenen seçenek, o.reveal: doğru cevabı göster, o.live: tıklanabilir */
  function qCard(q, o = {}) {
    const opts = q.options.map((op, i) => {
      let cls = "";
      if (o.reveal) { if (i === q.answer) cls = "ok"; else if (o.pick === i) cls = "bad"; }
      else if (o.pick === i) cls = "sel";
      const inner = `<span class="bub">${LETTERS[i]}</span><span class="opt-t">${esc(L(op))}</span>`;
      return o.live
        ? `<li><button class="opt ${cls}" data-act="pick" data-i="${i}" ${o.locked ? "disabled" : ""}>${inner}</button></li>`
        : `<li><div class="opt ${cls}">${inner}</div></li>`;
    }).join("");
    const exp = o.reveal && L(q.exp) ? `<div class="exp"><b>${t("explanation")}</b><p>${esc(L(q.exp))}</p></div>` : "";
    return `<article class="q">
      <div class="q-head"><span class="q-meta">${o.num ? `<b class="q-num">${o.num}</b>` : ""}${meta(q)}</span><span class="q-acts">${say(q.id, o.reveal)}${star(q.id)}</span></div>
      ${missingRu(q) ? `<p class="note">${t("onlyTr")}</p>` : ""}
      <p class="q-text">${esc(L(q.q))}</p>
      ${q.image ? `<img class="q-img" src="${esc(q.image)}" alt="">` : ""}
      <ol class="opts">${opts}</ol>${exp}</article>`;
  }
  const empty = (msg) => `<p class="empty">${msg}</p>`;
  const pageHead = (title, sub, backHref) => `<div class="ph">${backHref ? `<a class="back" href="${backHref}">← ${t("back")}</a>` : ""}<h1>${title}</h1>${sub ? `<p>${sub}</p>` : ""}</div>`;

  /* ---------- sayfalar ---------- */
  function home() {
    const all = allQ(), p = prog(all), seen = Object.values(S.ans), c = seen.reduce((s, a) => s + a.c, 0), w = seen.reduce((s, a) => s + a.w, 0);
    const today = S.days[ymd(new Date())] || 0, loc = S.lang === "ru" ? "ru-RU" : "tr-TR";
    const week = lastDays(7).map((d) => `<li class="${S.days[ymd(d)] ? "on" : ""}"><i></i><span>${esc(d.toLocaleDateString(loc, { weekday: "short" }).slice(0, 2))}</span></li>`).join("");
    const card = (b, i) => {
      const pb = prog(qOf(b.id));
      return `<a class="card br" href="#/b/${b.id}" style="--h:${HUES[i % HUES.length]}"><span class="mono">${code(b)}</span>
        <span class="br-b"><strong>${esc(L(b.name))}</strong><small>${pb.n} ${t("questions")} · ${pb.ok} ${t("learned")}</small>${bar(pct(pb.ok, pb.n))}</span><span class="chev" aria-hidden="true">›</span></a>`;
    };
    const brs = branches(), grp = (g) => brs.map((b, i) => (b.group === g ? card(b, i) : "")).join("");
    return `<section class="hero">
        <div class="hero-main"><p class="eyebrow">${t("tagline")}</p><h1>${t("heroTitle")}</h1><p>${t("heroSub")}</p>
          <div class="row"><button class="btn light" data-act="mix">${t("quickMix")}</button><button class="btn ghost" data-act="setup">${t("quickExam")}</button></div></div>
        <div class="goal"><div class="ring" style="--p:${Math.min(100, pct(today, GOAL))}"><b>${today}<small>/${GOAL}</small></b></div><span>${t("goalToday", GOAL)}</span></div>
      </section>
      <section class="kpis"><div><b>${streakNow()}<small> ${t("days")}</small></b><span>${t("streak")}</span></div><div><b>${p.seen}<small>/${p.n}</small></b><span>${t("solved")}</span></div>
        <div><b>${pct(c, c + w)}<small>%</small></b><span>${t("accuracy")}</span></div><ul class="week" aria-label="${t("week")}">${week}</ul></section>
      <h2>${t("groupKlinik")}</h2><div class="grid">${grp("klinik")}</div><h2>${t("groupTemel")}</h2><div class="grid">${grp("temel")}</div>`;
  }

  function branchPage(id) {
    const b = branch(id); if (!b) return home();
    const list = qOf(id), pb = prog(list), ms = mistakes(id).length;
    const modes = [
      ["learn", "modeLearn", "modeLearnD", `href="#/learn/${id}"`, "a", "book"],
      ["train", "modeTrain", "modeTrainD", `data-act="train" data-b="${id}"`, "button", "pen"],
      ["exam", "modeExam", "modeExamD", `data-act="setup" data-b="${id}"`, "button", "clock"],
      ["mist", "modeMistakes", "modeMistakesD", `data-act="mist" data-b="${id}"`, "button", "x"]
    ].map(([k, n, d, attr, tag, i]) => `<${tag} class="card mode m-${k}" ${attr}><span class="ic-w">${ic(i)}</span><strong>${t(n)}${k === "mist" && ms ? ` <em>${ms}</em>` : ""}</strong><small>${t(d)}</small></${tag}>`).join("");
    const blocks = [];
    for (let i = 0; i < list.length; i += BLOCK) {
      const part = list.slice(i, i + BLOCK), pp = prog(part);
      blocks.push(`<button class="blk ${pp.ok === pp.n ? "done" : ""}" data-act="block" data-b="${id}" data-i="${i}"><b>${t("block", i / BLOCK + 1)}</b><small>${i + 1}–${i + part.length}</small>${bar(pct(pp.ok, pp.n))}<span>${pp.ok} / ${pp.n}</span></button>`);
    }
    const topics = b.topics.map((tp) => {
      const pt = prog(qOf(id, tp.id)); if (!pt.n) return "";
      return `<li class="topic"><span class="topic-n"><strong>${esc(L(tp.name))}</strong><small>${pt.ok} / ${pt.n}</small>${bar(pct(pt.ok, pt.n))}</span>
        <span class="row"><a class="btn sm" href="#/learn/${id}/${tp.id}">${t("learn")}</a><button class="btn sm primary" data-act="train" data-b="${id}" data-t="${tp.id}">${t("solve")}</button></span></li>`;
    }).join("");
    return pageHead(esc(L(b.name)), `${pb.n} ${t("questions")} · ${pb.ok} ${t("learned")}`, "#/") + `<div class="grid modes">${modes}</div>` +
      (list.length ? `<h2>${t("blocks")}</h2><div class="blks">${blocks.join("")}</div><h2>${t("topics")}</h2><ul class="topics">${topics}</ul>` : empty(t("noQuestions")));
  }

  function listPage(title, list, backHref, o = {}) {
    const head = pageHead(title, o.sub || `${list.length} ${t("questions")}`, backHref);
    if (!list.length) return head + empty(o.emptyMsg || t("noQuestions"));
    const act = o.solveAct ? `<div class="row"><button class="btn primary" data-act="${o.solveAct}">${t("solveAll", list.length)}</button></div>` : "";
    const body = list.slice(0, shown).map((q, i) => qCard(q, { reveal: true, num: i + 1 })).join("");
    return head + act + `<div class="stack">${body}</div>` + (list.length > shown ? `<div class="row c"><button class="btn" data-act="more">${t("showMore")}</button></div>` : "");
  }

  function searchPage() {
    const needle = searchQ.trim().toLocaleLowerCase(S.lang);
    let body = empty(t("searchHint"));
    if (needle.length >= 2) {
      const hit = allQ().filter((q) => (L(q.q) + " " + q.options.map(L).join(" ") + " " + L(q.exp)).toLocaleLowerCase(S.lang).includes(needle));
      body = hit.length ? `<p class="count">${t("results", hit.length)}</p><div class="stack">${hit.slice(0, 50).map((q) => qCard(q, { reveal: true })).join("")}</div>` : empty(t("noResults"));
    }
    return pageHead(t("navSearch")) + `<input class="search" id="search" type="search" placeholder="${t("searchPh")}" value="${esc(searchQ)}" autocomplete="off" aria-label="${t("navSearch")}"><div id="sres">${body}</div>`;
  }

  function statsPage() {
    const seen = Object.values(S.ans), c = seen.reduce((s, a) => s + a.c, 0), w = seen.reduce((s, a) => s + a.w, 0);
    const rows = branches().map((b) => { const pb = prog(qOf(b.id)); return `<li><span>${esc(L(b.name))}</span>${bar(pct(pb.ok, pb.n))}<b>${pb.ok} / ${pb.n}</b></li>`; }).join("");
    const exams = S.exams.slice().reverse().slice(0, 15).map((e) => {
      const b = e.b && branch(e.b);
      return `<tr><td>${new Date(e.d).toLocaleDateString(S.lang === "ru" ? "ru-RU" : "tr-TR")}</td><td>${esc(b ? L(b.name) : t("allBranches"))}</td><td>${e.c} / ${e.n}</td><td><b>${pct(e.c, e.n)} %</b></td><td>${mmss(e.s)}</td></tr>`;
    }).join("");
    return pageHead(t("statsTitle")) +
      `<dl class="sheet wide"><div><dt>${t("totalSolved")}</dt><dd>${seen.length}</dd></div><div><dt>${t("accuracy")}</dt><dd>${pct(c, c + w)}<small> %</small></dd></div>
        <div><dt>${t("streak")}</dt><dd>${streakNow()}<small> ${t("days")}</small></dd></div><div><dt>${t("bestStreak")}</dt><dd>${S.streak.best || 0}<small> ${t("days")}</small></dd></div></dl>
      <h2>${t("byBranch")}</h2><ul class="bars">${rows}</ul>
      <h2>${t("exams")}</h2>` + (exams ? `<div class="tbl"><table><thead><tr><th>${t("date")}</th><th>${t("setupScope")}</th><th>${t("correct")}</th><th>${t("score")}</th><th>${t("time")}</th></tr></thead><tbody>${exams}</tbody></table></div>` : empty(t("noExams")));
  }

  function settingsPage() {
    return pageHead(t("setTitle")) + `<div class="stack">
      <section class="card set"><h3>${t("setTheme")}</h3><div class="row"><button class="btn ${S.theme === "dark" ? "" : "primary"}" data-act="theme" ${S.theme === "dark" ? "" : "disabled"}>${t("light")}</button><button class="btn ${S.theme === "dark" ? "primary" : ""}" data-act="theme" ${S.theme === "dark" ? "disabled" : ""}>${t("dark")}</button></div></section>
      <section class="card set"><h3>${t("setImport")}</h3><p>${t("setImportD")}</p><p class="count">${t("customCount", S.custom.length)}</p>
        <div class="row"><label class="btn primary">${t("chooseFile")}<input type="file" id="imp" accept=".json,application/json" hidden></label>
        <button class="btn" data-act="tpl">${t("template")}</button>${S.custom.length ? `<button class="btn danger" data-act="rmcustom">${t("removeCustom")}</button>` : ""}</div><p id="impmsg" class="count" role="status"></p></section>
      <section class="card set"><h3>${t("setReset")}</h3><p>${t("setResetD")}</p>
        <div class="row"><button class="btn" data-act="export">${t("exportP")}</button><button class="btn danger" data-act="reset">${t("reset")}</button></div></section></div><p class="count ver">${t("version", VER)}</p>`;
  }

  /* ---------- oturum (alıştırma / sınav) ---------- */
  function startSession(mode, list, b) {
    if (!list.length) return;
    ses = { mode, b: b || null, ids: list.map((q) => q.id), qs: list, i: 0, picks: {}, t0: Date.now(), limit: mode === "exam" ? list.length * SEC_PER_Q : 0 };
    location.hash = "#/quiz"; if (route()[0] === "quiz") render();
  }
  function quizPage() {
    if (!ses) { location.hash = "#/"; return ""; }
    const q = ses.qs[ses.i], n = ses.qs.length, pick = ses.picks[q.id], exam = ses.mode === "exam", done = pick != null;
    const lastQ = ses.i === n - 1;
    let foot;
    if (exam) {
      foot = `<button class="btn" data-act="prevq" ${ses.i ? "" : "disabled"}>${t("prev")}</button>
        ${lastQ ? "" : `<button class="btn" data-act="nextq">${t("next")}</button>`}<button class="btn primary" data-act="finish">${t("finish")}</button>`;
    } else {
      foot = `<span class="verdict ${done ? (pick === q.answer ? "ok" : "bad") : ""}">${done ? t(pick === q.answer ? "correct" : "wrong") : ""}</span>
        <button class="btn primary" data-act="${lastQ ? "finish" : "nextq"}" ${done ? "" : "disabled"}>${t(lastQ ? "finish" : "next")}</button>`;
    }
    const navGrid = exam ? `<div class="qnav" aria-label="${t("questions")}">${ses.qs.map((x, i) => `<button data-act="goto" data-i="${i}" class="${i === ses.i ? "cur" : ""} ${ses.picks[x.id] != null ? "ans" : ""}">${i + 1}</button>`).join("")}</div>` : "";
    return `<div class="quiz">
      <div class="quiz-top"><button class="btn sm" data-act="quit">✕ ${t("quit")}</button>
        <span class="quiz-pos">${t("qOf", ses.i + 1, n)}</span>
        ${exam ? `<span class="clock" id="clock" aria-live="off">${mmss(remaining())}</span>` : `<span class="tag">${t("modeTrain")}</span>`}</div>
      ${bar(pct(ses.i + (done && !exam ? 1 : 0), n), "thin")}
      ${qCard(q, { pick, reveal: !exam && done, live: true, locked: !exam && done })}
      <div class="quiz-foot">${foot}</div>${navGrid}</div>`;
  }
  const remaining = () => (ses ? ses.limit - (Date.now() - ses.t0) / 1000 : 0);
  function tick() {
    clearInterval(timer);
    if (!ses || ses.mode !== "exam") return;
    timer = setInterval(() => {
      const el = document.getElementById("clock");
      if (!ses || !el) return clearInterval(timer);
      const r = remaining(); el.textContent = mmss(r); el.classList.toggle("low", r < 60);
      if (r <= 0) finish(true);
    }, 500);
  }
  function finish(force) {
    if (!ses) return;
    const exam = ses.mode === "exam", blank = ses.qs.filter((q) => ses.picks[q.id] == null).length;
    if (exam && !force && blank && !confirm(t("finishQ", blank))) return;
    clearInterval(timer);
    let c = 0; ses.qs.forEach((q) => { const p = ses.picks[q.id]; if (p === q.answer) c++; if (exam && p != null) record(q.id, p === q.answer); });
    const s = Math.round((Date.now() - ses.t0) / 1000);
    last = { mode: ses.mode, b: ses.b, qs: ses.qs, picks: ses.picks, c, blank, s };
    if (exam) { S.exams.push({ d: Date.now(), b: ses.b, n: ses.qs.length, c, s }); save(); }
    ses = null; shown = PAGE; location.hash = "#/result";
  }
  function resultPage() {
    if (!last) { location.hash = "#/"; return ""; }
    const n = last.qs.length, w = n - last.c - last.blank, p = pct(last.c, n);
    const review = last.qs.map((q, i) => {
      const pk = last.picks[q.id], st = pk == null ? "empty" : pk === q.answer ? "ok" : "bad";
      return `<details class="rev ${st}"><summary><b>${i + 1}</b><span>${esc(L(q.q))}</span><em>${t(st === "ok" ? "correct" : st === "bad" ? "wrong" : "empty")}</em></summary>${qCard(q, { pick: pk, reveal: true })}</details>`;
    }).join("");
    return pageHead(t("resultTitle"), t(last.mode === "exam" ? "modeExam" : "modeTrain")) +
      (last.mode === "exam" ? `<p class="badge ${p >= 70 ? "ok" : "bad"}">${t(p >= 70 ? "passed" : "failed")} · ${t("passNote")}</p>` : "") +
      `<section class="result"><div class="ring" style="--p:${p}"><b>${p}<small>%</small></b></div>
        <dl class="sheet"><div><dt>${t("correct")}</dt><dd class="ok">${last.c}</dd></div><div><dt>${t("wrong")}</dt><dd class="bad">${w}</dd></div>
        <div><dt>${t("empty")}</dt><dd>${last.blank}</dd></div><div><dt>${t("time")}</dt><dd>${mmss(last.s)}</dd></div></dl></section>
      <div class="row">${w + last.blank ? `<button class="btn primary" data-act="retry">${t("retryWrong")}</button>` : ""}<a class="btn" href="#/">${t("toHome")}</a></div>
      <h2>${t("review")}</h2><div class="stack tight">${review}</div>`;
  }

  /* ---------- sınav kurulumu ---------- */
  function openSetup(b) {
    const brs = branches();
    const fill = () => {
      const scope = dlg.querySelector("#scope").value, n = qOf(scope || null).length;
      const counts = [10, 20, 40, 80, 120].filter((x) => x < n).concat([n]);
      const cur = +dlg.dataset.n && counts.includes(+dlg.dataset.n) ? +dlg.dataset.n : counts[Math.min(1, counts.length - 1)];
      dlg.dataset.n = cur;
      dlg.querySelector("#counts").innerHTML = counts.map((x) => `<button type="button" class="chip ${x === cur ? "on" : ""}" data-act="count" data-n="${x}">${x}</button>`).join("");
      dlg.querySelector("#stime").textContent = t("setupTime", Math.ceil((cur * SEC_PER_Q) / 60));
      dlg.querySelector("#go").disabled = !n;
    };
    dlg.dataset.n = "";
    dlg.innerHTML = `<form method="dialog" class="setup"><h2>${t("setupExam")}</h2>
      <label>${t("setupScope")}<select id="scope"><option value="">${t("allBranches")}</option>${brs.map((x) => `<option value="${x.id}" ${x.id === b ? "selected" : ""}>${esc(L(x.name))}</option>`).join("")}</select></label>
      <div><span class="lbl">${t("setupCount")}</span><div class="chips" id="counts"></div></div><p class="count" id="stime"></p>
      <div class="row end"><button class="btn" value="x">${t("cancel")}</button><button class="btn primary" id="go" type="button" data-act="go">${t("start")}</button></div></form>`;
    dlg.querySelector("#scope").onchange = () => { dlg.dataset.n = ""; fill(); };
    dlg._fill = fill; fill(); dlg.showModal();
  }

  /* ---------- içe aktarma ---------- */
  function normalize(data) {
    const qs = Array.isArray(data) ? data : data.questions;
    if (!Array.isArray(qs)) throw new Error("questions[]");
    const out = qs.map((q, i) => {
      let a = q.answer; if (typeof a === "string") a = LETTERS.indexOf(a.trim().toUpperCase());
      if (!q.q || !Array.isArray(q.options) || q.options.length < 2 || !(a >= 0 && a < q.options.length) || !q.branch) throw new Error("#" + (i + 1));
      return { id: String(q.id || "c-" + Date.now() + "-" + i), branch: String(q.branch), topic: q.topic ? String(q.topic) : "", source: q.source || "", q: q.q, options: q.options, answer: a, exp: q.exp || "", image: q.image || "" };
    });
    return { qs: out, brs: Array.isArray(data.branches) ? data.branches.filter((b) => b && b.id && b.name) : [] };
  }
  function importFile(file) {
    const msg = document.getElementById("impmsg"), r = new FileReader();
    r.onload = () => {
      try {
        const { qs, brs } = normalize(JSON.parse(r.result)), ids = new Set(qs.map((q) => q.id));
        S.custom = S.custom.filter((q) => !ids.has(q.id)).concat(qs);
        const known = new Set(branches().map((b) => b.id));
        qs.forEach((q) => { if (!known.has(q.branch) && !brs.some((b) => b.id === q.branch)) brs.push({ id: q.branch, name: q.branch, topics: [] }); });
        S.cbr = S.cbr.filter((b) => !brs.some((x) => x.id === b.id)).concat(brs);
        save(); render(); document.getElementById("impmsg").textContent = t("imported", qs.length);
      } catch (e) { msg.textContent = t("importErr", e.message); }
    };
    r.readAsText(file);
  }
  function download(name, obj) {
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" }));
    a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }
  const TEMPLATE = {
    branches: [{ id: "rest", code: "RE", name: { tr: "Restoratif Diş Tedavisi", ru: "Терапевтическая стоматология" }, topics: [{ id: "konu-1", name: { tr: "Konu adı", ru: "Название темы" } }] }],
    questions: [{ id: "benzersiz-kimlik-1", branch: "rest", topic: "konu-1", source: "Kaynak / yıl (isteğe bağlı)", q: { tr: "Soru metni", ru: "Текст вопроса (необязательно)" },
      options: [{ tr: "A seçeneği", ru: "Вариант A" }, "B", "C", "D", "E"], answer: "A", exp: { tr: "Açıklama (isteğe bağlı)", ru: "Объяснение" }, image: "" }]
  };

  /* ---------- hesap ve eşitleme (Supabase) ---------- */
  let accMsg = null, recovery = false, busy = false, pushT = null, syncErr = false;
  async function api(path, opt = {}, auth = true) {
    const h = Object.assign({ apikey: SB.key, "Content-Type": "application/json" }, opt.headers || {});
    if (auth && S.sess) { await fresh(); h.Authorization = "Bearer " + S.sess.at; }
    const r = await fetch(SB.url + path, Object.assign({}, opt, { headers: h })), txt = await r.text();
    let j = null; try { j = txt ? JSON.parse(txt) : null; } catch (e) { /* gövde boş */ }
    if (!r.ok) throw Object.assign(new Error((j && (j.msg || j.error_description || j.message)) || String(r.status)), { status: r.status, code: j && (j.error_code || j.code || j.error) });
    return j;
  }
  function setSess(j) { S.sess = { at: j.access_token, rt: j.refresh_token, exp: Math.floor(Date.now() / 1000) + (j.expires_in || 3600), uid: j.user.id, email: j.user.email }; rawSave(); }
  async function fresh() {
    if (!S.sess || S.sess.exp - 60 > Date.now() / 1000) return;
    try { setSess(await api("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: JSON.stringify({ refresh_token: S.sess.rt }) }, false)); }
    catch (e) { if (e.status >= 400 && e.status < 500) { S.sess = null; rawSave(); } throw e; }
  }
  function merge(r) {
    if (!r || typeof r !== "object") return;
    Object.entries(r.ans || {}).forEach(([id, a]) => { const m = S.ans[id]; if (!m || a.c + a.w > m.c + m.w) S.ans[id] = a; });
    S.fav = [...new Set(S.fav.concat(r.fav || []))];
    const seen = new Set(S.exams.map((e) => e.d));
    S.exams = S.exams.concat((r.exams || []).filter((e) => !seen.has(e.d))).sort((x, y) => x.d - y.d);
    const rs = r.streak || {}, best = Math.max(S.streak.best || 0, rs.best || 0);
    if ((rs.last || "") > (S.streak.last || "") || (rs.last === S.streak.last && rs.count > S.streak.count)) S.streak = { last: rs.last, count: rs.count };
    S.streak.best = best;
    Object.entries(r.days || {}).forEach(([d, n]) => { S.days[d] = Math.max(S.days[d] || 0, n); });
  }
  async function push() {
    if (!SB || !S.sess) return;
    try {
      await api("/rest/v1/progress?on_conflict=user_id", { method: "POST", headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ user_id: S.sess.uid, data: { ans: S.ans, fav: S.fav, exams: S.exams, streak: S.streak, days: S.days }, updated_at: new Date().toISOString() }) });
      S.synced = Date.now(); syncErr = false; rawSave();
    } catch (e) { syncErr = true; }
    const el = document.getElementById("syncinfo"); if (el) el.textContent = syncText();
  }
  async function pull() {
    const rows = await api("/rest/v1/progress?select=data&user_id=eq." + S.sess.uid);
    if (rows && rows[0]) merge(rows[0].data);
    rawSave(); await push();
  }
  function queuePush() { if (!SB || !S.sess) return; clearTimeout(pushT); pushT = setTimeout(push, 2000); }
  const syncText = () => (syncErr ? t("syncErr") : S.synced ? t("syncedAt", new Date(S.synced).toLocaleString(S.lang === "ru" ? "ru-RU" : "tr-TR")) : t("syncNever"));
  function authError(e) {
    const map = { invalid_credentials: "errCred", email_not_confirmed: "errConfirm", user_already_exists: "errExists", email_exists: "errExists", weak_password: "errWeak",
      over_email_send_rate_limit: "errRate", over_request_rate_limit: "errRate", validation_failed: "errInput", email_address_invalid: "errInput", same_password: "errWeak" };
    return e instanceof TypeError ? t("errNet") : map[e.code] ? t(map[e.code]) : t("errGeneric", e.message);
  }
  async function authAct(fn) {
    if (busy) return; busy = true; accMsg = null; render();
    try { accMsg = (await fn()) || null; } catch (e) { accMsg = { bad: 1, text: authError(e) }; }
    busy = false; render();
  }
  const creds = () => ({ email: (document.getElementById("acc-email") || {}).value || "", password: (document.getElementById("acc-pw") || {}).value || "" });
  const redirect = () => encodeURIComponent(location.origin + location.pathname);
  function accountPage() {
    if (!SB) return pageHead(t("navAccount")) + empty(t("accOff"));
    const msg = accMsg ? `<p class="msg ${accMsg.bad ? "bad" : "ok"}" role="status">${esc(accMsg.text)}</p>` : "", dis = busy ? "disabled" : "";
    if (S.sess && recovery) return pageHead(t("accNewPw")) + `<form class="card set acc" data-form="setpw">
      <label>${t("accPw")}<input id="acc-pw" type="password" autocomplete="new-password" minlength="8" required></label>${msg}
      <div class="row"><button class="btn primary" ${dis}>${t("accSave")}</button></div></form>`;
    if (S.sess) return pageHead(t("navAccount")) + `<section class="card set"><h3>${esc(S.sess.email)}</h3><p>${t("accInD")}</p><p class="count" id="syncinfo">${syncText()}</p>${msg}
      <div class="row"><button class="btn primary" data-act="syncnow" ${dis}>${t("accSync")}</button><button class="btn" data-act="logout" ${dis}>${t("accOut")}</button></div></section>`;
    return pageHead(t("navAccount"), t("accD")) + `<form class="card set acc" data-form="login">
      <label>${t("accEmail")}<input id="acc-email" type="email" autocomplete="email" required></label>
      <label>${t("accPw")}<input id="acc-pw" type="password" autocomplete="current-password" minlength="8" required></label>${msg}
      <div class="row"><button class="btn primary" ${dis}>${t("accIn")}</button><button class="btn" type="button" data-act="signup" ${dis}>${t("accUp")}</button>
      <button class="link" type="button" data-act="forgot" ${dis}>${t("accForgot")}</button></div></form>`;
  }
  const authActs = {
    login: () => authAct(async () => { setSess(await api("/auth/v1/token?grant_type=password", { method: "POST", body: JSON.stringify(creds()) }, false)); await pull(); }),
    signup: () => authAct(async () => {
      const c = creds(); if (!c.email || c.password.length < 8) return { bad: 1, text: t("errInput") };
      const j = await api("/auth/v1/signup?redirect_to=" + redirect(), { method: "POST", body: JSON.stringify(c) }, false);
      if (j.access_token) { setSess(j); await pull(); return null; }
      return { text: t("accCheckMail") };
    }),
    forgot: () => authAct(async () => {
      const c = creds(); if (!c.email) return { bad: 1, text: t("errInput") };
      await api("/auth/v1/recover?redirect_to=" + redirect(), { method: "POST", body: JSON.stringify({ email: c.email }) }, false); return { text: t("accResetSent") };
    }),
    setpw: () => authAct(async () => { await api("/auth/v1/user", { method: "PUT", body: JSON.stringify({ password: creds().password }) }); recovery = false; return { text: t("accPwDone") }; }),
    syncnow: () => authAct(async () => { await pull(); if (syncErr) return { bad: 1, text: t("syncErr") }; }),
    logout: () => authAct(async () => { clearTimeout(pushT); await push(); try { await api("/auth/v1/logout", { method: "POST" }); } catch (e) { /* oturum zaten kapalı */ } S.sess = null; S.synced = 0; rawSave(); })
  };
  /* E-postadaki onay ve şifre sıfırlama bağlantılarından dönüş */
  function authCallback() {
    const h = location.hash.slice(1); if (!SB || !/(^|&)(access_token|error)=/.test(h)) return;
    const p = new URLSearchParams(h); history.replaceState(null, "", location.pathname + location.search + "#/account");
    if (p.get("error")) { accMsg = { bad: 1, text: t("errGeneric", p.get("error_description") || p.get("error")) }; return; }
    const tok = { access_token: p.get("access_token"), refresh_token: p.get("refresh_token"), expires_in: +p.get("expires_in") || 3600 };
    recovery = p.get("type") === "recovery";
    api("/auth/v1/user", { headers: { Authorization: "Bearer " + tok.access_token } }, false)
      .then((u) => { setSess(Object.assign(tok, { user: u })); return pull(); }).catch((e) => { accMsg = { bad: 1, text: authError(e) }; }).then(render);
  }

  /* ---------- yönlendirme ---------- */
  const route = () => location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
  function render() {
    const r = route(), m = qMap();
    document.documentElement.lang = S.lang; document.documentElement.dataset.theme = S.theme;
    document.getElementById("brand-sub").textContent = t("brandSub"); document.title = "Luzichik — " + t("brandSub");
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.v === S.lang));
    const items = [["", "navHome", "home"], ["search", "navSearch", "search"], ["fav", "navFav", "star"], ["mistakes", "navMistakes", "x"], ["stats", "navStats", "chart"], ["settings", "navSettings", "set", 1], ["account", "navAccount", "user", 1]];
    nav.innerHTML = items.map(([h, k, i, sec]) => `<a href="#/${h}" class="${sec ? "sec" : ""}" ${(r[0] || "") === h ? 'aria-current="page"' : ""}>${ic(i)}<span>${t(k)}</span></a>`).join("");
    document.body.classList.toggle("in-quiz", r[0] === "quiz");
    let html;
    switch (r[0]) {
      case "b": html = branchPage(r[1]); break;
      case "learn": { const b = branch(r[1]), tp = b && b.topics.find((x) => x.id === r[2]); html = b ? listPage(esc(L(tp ? tp.name : b.name)), qOf(r[1], r[2]), "#/b/" + r[1], { sub: t("modeLearn") + " · " + qOf(r[1], r[2]).length + " " + t("questions") }) : home(); break; }
      case "fav": html = listPage(t("navFav"), S.fav.map((id) => m[id]).filter(Boolean), null, { emptyMsg: t("favEmpty"), solveAct: "solvefav" }); break;
      case "mistakes": html = listPage(t("navMistakes"), mistakes(), null, { emptyMsg: t("mistakesEmpty"), solveAct: "mist" }); break;
      case "search": html = searchPage(); break;
      case "stats": html = statsPage(); break;
      case "settings": html = settingsPage(); break;
      case "account": html = accountPage(); break;
      case "quiz": html = quizPage(); break;
      case "result": html = resultPage(); break;
      default: html = home();
    }
    app.innerHTML = html; tick();
  }
  let prevRoute = "";
  window.addEventListener("hashchange", () => {
    stopSay();
    const now = location.hash;
    if (ses && route()[0] !== "quiz") { ses = null; clearInterval(timer); }
    if (now !== prevRoute) { shown = PAGE; window.scrollTo(0, 0); }
    prevRoute = now; render();
  });

  /* ---------- olaylar ---------- */
  const acts = {
    signup: () => authActs.signup(), forgot: () => authActs.forgot(), syncnow: () => authActs.syncnow(), logout: () => authActs.logout(),
    say: (el) => { if (!canSay) return toast(t("sayNo")); const id = el.dataset.id; if (sayId === id) return stopSay(); stopSay(); startSay(id, el.dataset.rev === "1"); },
    lang: (el) => { stopSay(); S.lang = el.dataset.v; save(); render(); },
    theme: () => { S.theme = S.theme === "dark" ? "light" : "dark"; save(); render(); },
    fav: (el) => { const id = el.dataset.id, i = S.fav.indexOf(id); i < 0 ? S.fav.push(id) : S.fav.splice(i, 1); save();
      const on = i < 0; document.querySelectorAll(`.star[data-id="${CSS.escape(id)}"]`).forEach((s) => { s.classList.toggle("on", on); s.setAttribute("aria-pressed", on); }); },
    mix: () => startSession("train", shuffle(allQ()).slice(0, 20)),
    train: (el) => startSession("train", shuffle(qOf(el.dataset.b, el.dataset.t)), el.dataset.b),
    block: (el) => startSession("train", qOf(el.dataset.b).slice(+el.dataset.i, +el.dataset.i + BLOCK), el.dataset.b),
    mist: (el) => { const l = mistakes(el.dataset.b); l.length ? startSession("train", shuffle(l), el.dataset.b) : (location.hash = "#/mistakes"); },
    solvefav: () => { const m = qMap(); startSession("train", shuffle(S.fav.map((id) => m[id]).filter(Boolean))); },
    setup: (el) => openSetup(el.dataset.b || ""),
    count: (el) => { dlg.dataset.n = el.dataset.n; dlg._fill(); },
    go: () => { const b = dlg.querySelector("#scope").value || null, n = +dlg.dataset.n; dlg.close(); startSession("exam", shuffle(qOf(b)).slice(0, n), b); },
    pick: (el) => {
      if (!ses) return; const q = ses.qs[ses.i], i = +el.dataset.i;
      if (ses.mode === "exam") { ses.picks[q.id] = ses.picks[q.id] === i ? null : i; if (ses.picks[q.id] == null) delete ses.picks[q.id]; }
      else { if (ses.picks[q.id] != null) return; ses.picks[q.id] = i; record(q.id, i === q.answer); }
      render();
    },
    nextq: () => { stopSay(); if (ses && ses.i < ses.qs.length - 1) { ses.i++; render(); window.scrollTo(0, 0); } },
    prevq: () => { stopSay(); if (ses && ses.i > 0) { ses.i--; render(); window.scrollTo(0, 0); } },
    goto: (el) => { stopSay(); ses.i = +el.dataset.i; render(); window.scrollTo(0, 0); },
    finish: () => finish(false),
    quit: () => { if (confirm(t("quitQ"))) { const b = ses && ses.b; ses = null; clearInterval(timer); location.hash = b ? "#/b/" + b : "#/"; } },
    retry: () => { const l = last.qs.filter((q) => last.picks[q.id] !== q.answer); startSession("train", shuffle(l), last.b); },
    more: () => { shown += PAGE; render(); },
    tpl: () => download("dus-soru-sablonu.json", TEMPLATE),
    export: () => download("dus-ilerleme.json", { ans: S.ans, fav: S.fav, exams: S.exams, streak: S.streak, days: S.days }),
    rmcustom: () => { if (confirm(t("removeCustom") + "?")) { S.custom = []; S.cbr = []; save(); render(); } },
    reset: () => { if (confirm(t("resetQ"))) { S.ans = {}; S.fav = []; S.exams = []; S.streak = { last: null, count: 0, best: 0 }; S.days = {}; save(); render(); } }
  };
  document.addEventListener("click", (e) => { const el = e.target.closest("[data-act]"); if (el && acts[el.dataset.act]) acts[el.dataset.act](el); });
  document.addEventListener("input", (e) => {
    if (e.target.id !== "search") return;
    searchQ = e.target.value; const tmp = document.createElement("div"); tmp.innerHTML = searchPage();
    document.getElementById("sres").innerHTML = tmp.querySelector("#sres").innerHTML;
  });
  document.addEventListener("submit", (e) => { const f = e.target.dataset.form; if (f && authActs[f]) { e.preventDefault(); authActs[f](); } });
  document.addEventListener("change", (e) => { if (e.target.id === "imp" && e.target.files[0]) importFile(e.target.files[0]); });
  document.addEventListener("keydown", (e) => {
    if (!ses || route()[0] !== "quiz" || dlg.open || e.metaKey || e.ctrlKey || e.altKey) return;
    const q = ses.qs[ses.i], k = e.key.toUpperCase(), i = /^[1-9]$/.test(k) ? +k - 1 : LETTERS.indexOf(k);
    if (k.length === 1 && i >= 0 && i < q.options.length) { e.preventDefault(); acts.pick({ dataset: { i } }); }
    else if (e.key === "Enter" || e.key === "ArrowRight") { if (ses.mode === "exam" || ses.picks[q.id] != null) { e.preventDefault(); ses.i < ses.qs.length - 1 ? acts.nextq() : e.key === "Enter" && finish(false); } }
    else if (e.key === "ArrowLeft" && ses.mode === "exam") acts.prevq();
  });

  authCallback(); prevRoute = location.hash; render();
  if (SB && S.sess) pull().then(render).catch(() => {});
  /* Yeni sürüm yayınlandıysa sayfayı bir kez yenile (sunucu sayfayı 10 dakika önbellekte tutturuyor) */
  if (/^https?:$/.test(location.protocol)) fetch("version.txt?" + Date.now(), { cache: "no-store" }).then((r) => (r.ok ? r.text() : "")).then((v) => {
    v = v.trim(); let seen = null; try { seen = sessionStorage.getItem("lz.ver"); } catch (e) { return; }
    if (+v > VER && seen !== v) { sessionStorage.setItem("lz.ver", v); location.replace(location.pathname + "?v=" + v + location.hash); }
  }).catch(() => {});
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
