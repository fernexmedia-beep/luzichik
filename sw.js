/* Çevrimdışı destek: önce ağdan dener, ağ yoksa son kaydedilen kopyayı verir. */
const CACHE = "luzichik-v13";
const FILES = ["./", "index.html", "assets/style.css", "assets/app.js", "assets/i18n.js", "assets/config.js", "assets/icon.svg", "data/questions.js", "data/questions-2.js", "data/questions-3.js", "data/questions-4.js", "data/questions-5.js", "data/questions-6.js", "data/questions-7.js", "data/questions-8.js", "manifest.webmanifest"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin || u.pathname.endsWith("version.txt")) return;
  e.respondWith(
    fetch(e.request).then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match("index.html")))
  );
});
