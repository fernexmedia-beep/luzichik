/* Özgün soru bankası — 5. paket: Temel Bilimler, sınav biçimli sorular (öncüllü, olumsuz köklü, vaka).
   Tüm sorular bu site için yazılmıştır. */
(function () {
  const D = window.DUS_DATA;
  const o = (a) => a.map((x) => (typeof x === "string" ? x : { tr: x[0], ru: x[1] }));
  const Q = (id, branch, tp, tr, ru, opts, answer, etr, eru) => D.questions.push({ id, branch, topic: tp, q: { tr, ru }, options: o(opts), answer, exp: { tr: etr, ru: eru } });
  /* Öncüllü sorular için hazır seçenek dizileri */
  const PA = [["Yalnız I", "Только I"], ["Yalnız III", "Только III"], ["I ve II", "I и II"], ["II ve III", "II и III"], ["I, II ve III", "I, II и III"]];
  const PB = [["Yalnız I", "Только I"], ["Yalnız II", "Только II"], ["I ve II", "I и II"], ["I ve III", "I и III"], ["I, II ve III", "I, II и III"]];

  /* ---------- Anatomi ---------- */
  Q("anat-9", "anat", "sinir", "I. Mimik kaslarını uyarır.\nII. Kafatasını foramen stylomastoideum'dan terk eder.\nIII. Çiğneme kaslarını uyarır.\n\nN. facialis ile ilgili yukarıdaki ifadelerden hangileri doğrudur?", "I. Иннервирует мимические мышцы.\nII. Выходит из черепа через шилососцевидное отверстие.\nIII. Иннервирует жевательные мышцы.\n\nКакие из утверждений о лицевом нерве верны?",
    PA, 2,
    "N. facialis ikinci yutak arkının siniridir; mimik kaslarını, m. stapedius'u, m. stylohyoideus'u ve m. digastricus'un arka karnını uyarır. Çiğneme kaslarını n. mandibularis uyarır.",
    "Лицевой нерв — нерв второй жаберной дуги; иннервирует мимические мышцы, стременную, шилоподъязычную мышцы и заднее брюшко двубрюшной. Жевательные мышцы иннервирует нижнечелюстной нерв.");
  Q("anat-10", "anat", "bas", "Aşağıdakilerden hangisi suprahyoid kaslardan biri değildir?", "Какая из мышц не относится к надподъязычным?",
    ["M. digastricus", "M. mylohyoideus", "M. geniohyoideus", "M. stylohyoideus", "M. sternohyoideus"], 4,
    "M. sternohyoideus hyoid kemiğin altında yer alan infrahyoid kaslardandır ve hyoidi aşağı çeker. Suprahyoid kaslar ağız tabanını oluşturur, yutma sırasında hyoidi yükseltir ve alt çenenin açılmasına yardım eder.",
    "Грудино-подъязычная мышца относится к подподъязычным и опускает подъязычную кость. Надподъязычные мышцы образуют дно полости рта, поднимают подъязычную кость при глотании и участвуют в опускании нижней челюсти.");
  Q("anat-11", "anat", "sinir", "Üst birinci büyük azı dişinin meziobukkal kökünün duyusunu, bulunduğunda hangi sinir alır?", "Какой нерв (при его наличии) обеспечивает чувствительность мезиально-щёчного корня верхнего первого моляра?",
    ["N. alveolaris superior posterior", "N. alveolaris superior medius", "N. alveolaris superior anterior", "N. palatinus major", "N. nasopalatinus"], 1,
    "N. alveolaris superior medius her bireyde bulunmaz; bulunduğunda üst premolarları ve birinci moların meziobukkal kökünü uyarır. Bu nedenle birinci molar anestezisinde arka üst alveol sinir bloğuna ek infiltrasyon gerekebilir.",
    "Средний верхний альвеолярный нерв есть не у всех; при наличии он иннервирует верхние премоляры и мезиально-щёчный корень первого моляра. Поэтому при анестезии первого моляра к туберальной анестезии может потребоваться дополнительная инфильтрация.");
  Q("anat-12", "anat", "sinir", "Üst kesici dişlerin palatinalindeki sert damak mukozasının duyusunu hangi sinir alır?", "Какой нерв обеспечивает чувствительность слизистой твёрдого нёба позади верхних резцов?",
    ["N. palatinus major", "N. palatinus minor", "N. infraorbitalis", "N. nasopalatinus", "N. buccalis"], 3,
    "N. nasopalatinus foramen incisivum'dan çıkar ve kaninden kanine uzanan ön damak mukozasını uyarır. Sert damağın arka bölümünü ise n. palatinus major uyarır.",
    "Носонёбный нерв выходит через резцовое отверстие и иннервирует слизистую переднего отдела нёба от клыка до клыка. Задний отдел твёрдого нёба иннервирует большой нёбный нерв.");
  Q("anat-13", "anat", "bas", "Maksiller sinüs burun boşluğunda nereye açılır?", "Куда в полости носа открывается верхнечелюстная пазуха?",
    [["Orta meatusa", "В средний носовой ход"], ["Alt meatusa", "В нижний носовой ход"], ["Üst meatusa", "В верхний носовой ход"], ["Sfenoetmoidal resese", "В клиновидно-решётчатое углубление"], ["Nazofarinkse", "В носоглотку"]], 0,
    "Sinüsün ağzı iç duvarın üst bölümünde yer alır ve orta meatustaki hiatus semilunaris'e açılır. Ağzın yüksekte olması doğal boşalmayı güçleştirir. Alt meatusa ise ductus nasolacrimalis açılır.",
    "Соустье расположено в верхней части медиальной стенки и открывается в полулунную расщелину среднего хода. Высокое положение соустья затрудняет естественный дренаж. В нижний ход открывается носослёзный проток.");
  Q("anat-14", "anat", "sinir", "Alt yirmi yaş dişi çekiminden sonra hastada aynı taraf dilin ön üçte ikisinde hem his hem tat kaybı gelişiyor. En olası olarak hangi yapı zarar görmüştür?", "После удаления нижнего зуба мудрости у пациента на той же стороне пропали чувствительность и вкус на передних двух третях языка. Какая структура, вероятнее всего, повреждена?",
    ["N. alveolaris inferior", "N. hypoglossus", "N. lingualis", "N. glossopharyngeus", "N. buccalis"], 2,
    "N. lingualis dilin ön üçte ikisinin genel duyusunu taşır; chorda tympani'nin tat lifleri de bu sinire katılarak dile ulaşır. Bu nedenle sinirin üçüncü molar bölgesindeki hasarında iki duyu birlikte kaybolur.",
    "Язычный нерв проводит общую чувствительность от передних двух третей языка; к нему присоединяются вкусовые волокна барабанной струны. Поэтому при его повреждении в области третьего моляра выпадают оба вида чувствительности.");
  Q("anat-15", "anat", "bas", "A. carotis communis genellikle hangi seviyede iç ve dış dallarına ayrılır?", "На каком уровне обычно делится общая сонная артерия на внутреннюю и наружную?",
    [["Krikoid kıkırdak hizasında", "На уровне перстневидного хряща"], ["Hyoid kemiğin gövdesi hizasında", "На уровне тела подъязычной кости"], ["Angulus mandibulae hizasında", "На уровне угла нижней челюсти"], ["Klavikula hizasında", "На уровне ключицы"], ["Tiroid kıkırdağın üst kenarı hizasında", "На уровне верхнего края щитовидного хряща"]], 4,
    "Ayrılma yeri yaklaşık üçüncü–dördüncü boyun omuru düzeyindedir. Burada basınç algılayan sinus caroticus ve kimyasal değişiklikleri algılayan glomus caroticum bulunur.",
    "Бифуркация находится примерно на уровне III–IV шейных позвонков. Здесь расположены каротидный синус (барорецепторы) и каротидный гломус (хеморецепторы).");
  Q("anat-16", "anat", "sinir", "Parotis bezinin salgısını uyaran parasempatik lifler hangi kraniyal sinirden köken alır?", "От какого черепного нерва происходят парасимпатические секреторные волокна околоушной железы?",
    ["N. facialis", "N. glossopharyngeus", "N. vagus", "N. trigeminus", "N. hypoglossus"], 1,
    "Lifler n. petrosus minor ile ganglion oticum'a gelir; gangliyon sonrası lifler n. auriculotemporalis ile beze ulaşır. Submandibular ve sublingual bezlerin parasempatik lifleri ise n. facialis'ten (chorda tympani) gelir.",
    "Волокна идут в составе малого каменистого нерва к ушному узлу; постганглионарные волокна достигают железы с ушно-височным нервом. Поднижнечелюстная и подъязычная железы получают парасимпатические волокна от лицевого нерва (барабанная струна).");

  /* ---------- Histoloji ve Embriyoloji ---------- */
  Q("hist-9", "hist", "dis", "I. Manto dentini ilk oluşan dentin tabakasıdır.\nII. Sekonder dentin, kök gelişimi tamamlandıktan sonra yaşam boyu yapılır.\nIII. Tersiyer dentin, uyaran olmaksızın pulpa çevresinin tümünde düzenli olarak oluşur.\n\nYukarıdaki ifadelerden hangileri doğrudur?", "I. Плащевой дентин — первый образующийся слой дентина.\nII. Вторичный дентин откладывается в течение всей жизни после завершения формирования корня.\nIII. Третичный дентин образуется равномерно по всей периферии пульпы без раздражителя.\n\nКакие утверждения верны?",
    PA, 2,
    "Tersiyer dentin yalnızca çürük, aşınma ya da kavite hazırlığı gibi bir uyaranın etkilediği bölgede, yerel olarak oluşur ve tübül yapısı düzensizdir.",
    "Третичный дентин образуется только локально — в зоне действия раздражителя (кариес, стираемость, препарирование) — и имеет нерегулярную структуру канальцев.");
  Q("hist-10", "hist", "dis", "Aşağıdaki diş dokularından hangisi nöral krest kaynaklı ektomezenkimden gelişmez?", "Какая из тканей зуба не развивается из эктомезенхимы нервного гребня?",
    [["Dentin", "Дентин"], ["Pulpa", "Пульпа"], ["Sement", "Цемент"], ["Periodontal ligament", "Периодонтальная связка"], ["Mine", "Эмаль"]], 4,
    "Mine, ağız ektoderminden gelişen mine organının ürünüdür. Dişin diğer tüm dokuları ile destek dokuları ektomezenkim kökenlidir.",
    "Эмаль — продукт эмалевого органа, развивающегося из эктодермы полости рта. Все остальные ткани зуба и опорные ткани имеют эктомезенхимное происхождение.");
  Q("hist-11", "hist", "dis", "Hücreli (selüler) sement en çok nerede bulunur?", "Где преимущественно располагается клеточный цемент?",
    [["Kökün apikal üçlüsünde ve furkasyon bölgesinde", "В апикальной трети корня и в области фуркации"], ["Mine–sement sınırında", "У эмалево-цементной границы"], ["Kökün servikal üçlüsünde", "В пришеечной трети корня"], ["Kronun yüzeyinde", "На поверхности коронки"], ["Kök kanalının iç yüzünde", "На внутренней поверхности корневого канала"]], 0,
    "Hücresiz sement kökün servikal bölümünü ince bir tabaka halinde örter ve dişin tutunmasında asıl görevi üstlenir. Hücreli sement daha kalındır, içinde sementositler bulunur ve yaşam boyu birikerek aşınmayı dengeler.",
    "Бесклеточный цемент тонким слоем покрывает пришеечную часть корня и играет основную роль в прикреплении. Клеточный цемент толще, содержит цементоциты и откладывается всю жизнь, компенсируя стираемость.");
  Q("hist-12", "hist", "dis", "Mine prizmalarının biçimlenmesinden sorumlu olan ameloblast yapısı hangisidir?", "Какая структура амелобласта отвечает за формирование эмалевых призм?",
    [["Korff lifleri", "Волокна Корфа"], ["Tomes uzantısı", "Отросток Томса"], ["Stratum intermedium", "Промежуточный слой"], ["Nasmyth zarı", "Насмитова оболочка"], ["Hertwig kını", "Влагалище Гертвига"]], 1,
    "Salgı evresindeki ameloblastın uç kısmındaki Tomes uzantısı, mine matriksini yönlü biçimde salgılayarak prizma yapısını oluşturur. Odontoblastın dentin tübülü içindeki uzantısı ise “Tomes lifi” olarak adlandırılır; iki terim karıştırılmamalıdır.",
    "Отросток Томса на конце секретирующего амелобласта направленно выделяет матрикс эмали, формируя призмы. Отросток одонтобласта в дентинном канальце называют «волокном Томса»; эти термины не следует путать.");
  Q("hist-13", "hist", "emb", "Aşağıdakilerden hangisi Meckel kıkırdağından gelişir?", "Что из перечисленного развивается из меккелева хряща?",
    ["Stapes", [ "Hyoid kemiğin küçük boynuzu", "Малый рог подъязычной кости"], "Malleus", ["Stiloid çıkıntı", "Шиловидный отросток"], ["Tiroid kıkırdak", "Щитовидный хрящ"]], 2,
    "Birinci yutak arkının kıkırdağı olan Meckel kıkırdağından malleus ve incus gelişir. Alt çene bu kıkırdağın çevresindeki mezenkimden zar içi kemikleşmeyle oluşur. Stapes, stiloid çıkıntı ve hyoidin küçük boynuzu ikinci arkın ürünleridir.",
    "Из меккелева хряща (хрящ первой жаберной дуги) развиваются молоточек и наковальня. Нижняя челюсть образуется из окружающей его мезенхимы путём перепончатого окостенения. Стремя, шиловидный отросток и малый рог подъязычной кости — производные второй дуги.");
  Q("hist-14", "hist", "emb", "İkinci yutak arkının siniri hangisidir?", "Какой нерв соответствует второй жаберной дуге?",
    ["N. trigeminus", "N. glossopharyngeus", "N. vagus", "N. facialis", "N. hypoglossus"], 3,
    "Birinci arkın siniri n. trigeminus, ikincinin n. facialis, üçüncünün n. glossopharyngeus, dördüncü ve altıncı arkların siniri ise n. vagus'tur.",
    "Нерв первой дуги — тройничный, второй — лицевой, третьей — языкоглоточный, четвёртой и шестой — блуждающий.");
  Q("hist-15", "hist", "dis", "Aşağıdakilerden hangisi çiğneme (mastikatör) mukozasına örnektir?", "Что из перечисленного относится к жевательной слизистой?",
    [["Yanak mukozası", "Слизистая щеки"], ["Ağız tabanı", "Дно полости рта"], ["Yumuşak damak", "Мягкое нёбо"], ["Dilin alt yüzü", "Нижняя поверхность языка"], ["Sert damak", "Твёрдое нёбо"]], 4,
    "Çiğneme mukozası dişeti ve sert damağı kaplar; keratinizedir ve alttaki kemiğe sıkıca bağlıdır. Yanak, ağız tabanı ve yumuşak damak örtücü mukozayla, dil sırtı ise özelleşmiş mukozayla kaplıdır.",
    "Жевательная слизистая покрывает десну и твёрдое нёбо; она ороговевает и плотно сращена с костью. Щека, дно полости рта и мягкое нёбо покрыты выстилающей слизистой, спинка языка — специализированной.");
  Q("hist-16", "hist", "dis", "Dil papillalarından hangisi tat tomurcuğu içermez?", "Какие сосочки языка не содержат вкусовых почек?",
    [["Fungiform papilla", "Грибовидные"], ["Filiform papilla", "Нитевидные"], ["Sirkumvallat papilla", "Желобоватые"], ["Foliat papilla", "Листовидные"], ["Hepsi içerir", "Содержат все"]], 1,
    "Filiform papillalar sayıca en fazla olan papillalardır; keratinizedir ve mekanik işlev görür. En çok tat tomurcuğu sirkumvallat papillalarda bulunur.",
    "Нитевидные сосочки — самые многочисленные; они ороговевают и выполняют механическую функцию. Больше всего вкусовых почек в желобоватых сосочках.");

  /* ---------- Fizyoloji ---------- */
  Q("fizy-9", "fizy", "hucre", "İskelet kasında kasılmanın başlaması için kalsiyum hangi proteine bağlanır?", "С каким белком связывается кальций для запуска сокращения скелетной мышцы?",
    [["Tropomiyozin", "Тропомиозин"], ["Aktin", "Актин"], ["Troponin C", "Тропонин C"], ["Kalmodulin", "Кальмодулин"], ["Miyozin hafif zinciri", "Лёгкая цепь миозина"]], 2,
    "Kalsiyum troponin C'ye bağlanınca tropomiyozin yer değiştirir ve aktin üzerindeki miyozin bağlanma bölgeleri açılır. Düz kasta ise kalsiyum kalmoduline bağlanır.",
    "При связывании кальция с тропонином C тропомиозин смещается и открывает участки связывания миозина на актине. В гладкой мышце кальций связывается с кальмодулином.");
  Q("fizy-10", "fizy", "hucre", "I. İleti Ranvier boğumları arasında sıçrayarak ilerler.\nII. Voltaj kapılı sodyum kanalları Ranvier boğumlarında yoğunlaşmıştır.\nIII. İleti hızı, aynı çaptaki miyelinsiz liften daha düşüktür.\n\nMiyelinli sinir lifleriyle ilgili yukarıdaki ifadelerden hangileri doğrudur?", "I. Возбуждение распространяется скачками между перехватами Ранвье.\nII. Потенциалзависимые натриевые каналы сосредоточены в перехватах Ранвье.\nIII. Скорость проведения ниже, чем в безмиелиновом волокне того же диаметра.\n\nКакие утверждения о миелиновых волокнах верны?",
    PA, 2,
    "Miyelin kılıf yalıtım sağlar; aksiyon potansiyeli yalnızca boğumlarda yeniden oluşur. Bu sıçrayıcı ileti hem çok daha hızlıdır hem de daha az enerji harcar.",
    "Миелиновая оболочка служит изолятором; потенциал действия возникает только в перехватах. Такое сальтаторное проведение значительно быстрее и требует меньше энергии.");
  Q("fizy-11", "fizy", "sistem", "Midenin parietal hücrelerinden salgılanan intrinsik faktörün eksikliğinde hangi vitaminin emilimi bozulur?", "Всасывание какого витамина нарушается при дефиците внутреннего фактора, вырабатываемого париетальными клетками желудка?",
    [["B₁₂ vitamini", "Витамин B₁₂"], ["Folik asit", "Фолиевая кислота"], ["C vitamini", "Витамин C"], ["D vitamini", "Витамин D"], ["K vitamini", "Витамин K"]], 0,
    "B₁₂ vitamini intrinsik faktöre bağlanarak ileumun son bölümünden emilir. Eksikliğinde megaloblastik (pernisiyöz) anemi gelişir; dilde kızarıklık, yanma ve papilla kaybı (atrofik glossit) görülebilir.",
    "Витамин B₁₂ всасывается в терминальном отделе подвздошной кишки в комплексе с внутренним фактором. При дефиците развивается мегалобластная (пернициозная) анемия; возможны покраснение, жжение языка и атрофия сосочков (атрофический глоссит).");
  Q("fizy-12", "fizy", "sistem", "Arter basıncındaki ani değişiklikleri algılayan baroreseptörler nerede bulunur?", "Где расположены барорецепторы, реагирующие на резкие изменения артериального давления?",
    [["Böbrek glomerüllerinde", "В почечных клубочках"], ["Akciğer alveollerinde", "В альвеолах лёгких"], ["Hipotalamusta", "В гипоталамусе"], ["Karotis sinüsünde ve aort kavsinde", "В каротидном синусе и дуге аорты"], ["Sağ ventrikül duvarında", "В стенке правого желудочка"]], 3,
    "Basınç düştüğünde reseptörlerden giden uyarılar azalır; sempatik etkinlik artar, kalp hızı ve damar direnci yükselir. Diş koltuğunda hızla ayağa kalkan hastada görülen baş dönmesi bu refleksin yetersiz kalmasıyla ilişkilidir.",
    "При падении давления импульсация от рецепторов снижается; возрастает симпатическая активность, увеличиваются частота сердцебиений и сосудистое сопротивление. Головокружение при резком подъёме из кресла связано с недостаточностью этого рефлекса.");
  Q("fizy-13", "fizy", "sistem", "Glukagon pankreasın hangi hücrelerinden salgılanır?", "Какие клетки поджелудочной железы секретируют глюкагон?",
    [["Beta hücreleri", "Бета-клетки"], ["Alfa hücreleri", "Альфа-клетки"], ["Delta hücreleri", "Дельта-клетки"], ["Asiner hücreler", "Ацинарные клетки"], ["Kanal hücreleri", "Протоковые клетки"]], 1,
    "Alfa hücreleri glukagon, beta hücreleri insülin, delta hücreleri somatostatin salgılar. Glukagon karaciğerde glikojen yıkımını ve glukoz yapımını artırarak kan şekerini yükseltir.",
    "Альфа-клетки выделяют глюкагон, бета-клетки — инсулин, дельта-клетки — соматостатин. Глюкагон повышает уровень глюкозы, усиливая гликогенолиз и глюконеогенез в печени.");
  Q("fizy-14", "fizy", "sistem", "Antidiüretik hormon (ADH) böbrekte esas olarak nereye etki eder?", "На какой отдел почки преимущественно действует антидиуретический гормон (АДГ)?",
    [["Glomerül", "Клубочек"], ["Proksimal tübül", "Проксимальный каналец"], ["Henle kulpunun inen kolu", "Нисходящее колено петли Генле"], ["Jukstaglomerüler aygıt", "Юкстагломерулярный аппарат"], ["Toplayıcı kanallar", "Собирательные трубочки"]], 4,
    "ADH toplayıcı kanal hücrelerinin zarına su kanallarının (akuaporin-2) yerleşmesini sağlar; su geri emilimi artar ve idrar yoğunlaşır.",
    "АДГ вызывает встраивание водных каналов (аквапорин-2) в мембрану клеток собирательных трубочек; реабсорбция воды возрастает, моча концентрируется.");
  Q("fizy-15", "fizy", "sistem", "Yutma refleksinin merkezi nerede bulunur?", "Где расположен центр глотательного рефлекса?",
    [["Beyin sapında (medulla oblongata)", "В стволе мозга (продолговатый мозг)"], ["Beyincikte", "В мозжечке"], ["Hipotalamusta", "В гипоталамусе"], ["Omurilikte", "В спинном мозге"], ["Talamusta", "В таламусе"]], 0,
    "Yutmanın ağız evresi istemlidir; yutak ve yemek borusu evreleri ise beyin sapındaki merkezce yönetilen reflekslerdir. Yutak evresinde solunum kısa süreli durur ve epiglot gırtlak girişini kapatır.",
    "Ротовая фаза глотания произвольна; глоточная и пищеводная — рефлекторны и управляются центром в стволе мозга. В глоточную фазу дыхание кратковременно останавливается, надгортанник закрывает вход в гортань.");
  Q("fizy-16", "fizy", "sistem", "Damar hasarında trombositlerin açığa çıkan kollajene tutunmasını hangi faktör sağlar?", "Какой фактор обеспечивает адгезию тромбоцитов к обнажённому коллагену при повреждении сосуда?",
    [["Fibrinojen", "Фибриноген"], ["Trombin", "Тромбин"], ["Von Willebrand faktörü", "Фактор фон Виллебранда"], ["Plazmin", "Плазмин"], ["Antitrombin", "Антитромбин"]], 2,
    "Von Willebrand faktörü, kollajen ile trombosit yüzeyindeki glikoprotein Ib arasında köprü kurar. Eksikliği en sık görülen kalıtsal kanama bozukluğudur ve diş çekiminden sonra uzayan kanamayla ortaya çıkabilir.",
    "Фактор фон Виллебранда образует мостик между коллагеном и гликопротеином Ib тромбоцитов. Его дефицит — самое частое наследственное нарушение гемостаза; может проявиться длительным кровотечением после удаления зуба.");

  /* ---------- Biyokimya ---------- */
  Q("biyo-9", "biyo", "metab", "Uzun süren açlıkta beynin glukoza ek olarak kullandığı başlıca enerji kaynağı hangisidir?", "Какой основной источник энергии, помимо глюкозы, использует мозг при длительном голодании?",
    [["Serbest yağ asitleri", "Свободные жирные кислоты"], ["Amino asitler", "Аминокислоты"], ["Laktat", "Лактат"], ["Keton cisimleri", "Кетоновые тела"], ["Gliserol", "Глицерин"]], 3,
    "Karaciğer yağ asitlerinden asetoasetat ve beta-hidroksibütirat üretir. Uzun zincirli yağ asitleri kan–beyin engelini yeterince geçemediği için beyin onları doğrudan kullanamaz.",
    "Печень образует из жирных кислот ацетоацетат и бета-гидроксибутират. Длинноцепочечные жирные кислоты плохо проходят гематоэнцефалический барьер, поэтому мозг не может использовать их напрямую.");
  Q("biyo-10", "biyo", "metab", "Üre döngüsü hangi organda gerçekleşir?", "В каком органе протекает цикл мочевины?",
    [["Böbrek", "Почки"], ["Karaciğer", "Печень"], ["Kas", "Мышцы"], ["Bağırsak", "Кишечник"], ["Dalak", "Селезёнка"]], 1,
    "Amino asit yıkımından açığa çıkan zehirli amonyak karaciğerde üreye dönüştürülür ve böbreklerle atılır. Döngünün ilk iki basamağı mitokondride, kalanı sitozolde gerçekleşir.",
    "Токсичный аммиак, образующийся при распаде аминокислот, превращается в печени в мочевину и выводится почками. Первые две реакции цикла идут в митохондриях, остальные — в цитозоле.");
  Q("biyo-11", "biyo", "metab", "Olgun eritrositte ATP hangi yolla üretilir?", "Каким путём образуется АТФ в зрелом эритроците?",
    [["Oksidatif fosforilasyon", "Окислительное фосфорилирование"], ["Yağ asitlerinin beta-oksidasyonu", "Бета-окисление жирных кислот"], ["Anaerobik glikoliz", "Анаэробный гликолиз"], ["Krebs döngüsü", "Цикл Кребса"], ["Keton cisimlerinin yıkımı", "Окисление кетоновых тел"]], 2,
    "Olgun eritrositte mitokondri bulunmadığı için enerji yalnızca glikolizle sağlanır ve son ürün laktattır. Pentoz fosfat yolu ise eritrositi oksidatif hasardan koruyan NADPH'yi üretir.",
    "В зрелом эритроците нет митохондрий, поэтому энергия образуется только путём гликолиза с конечным продуктом лактатом. Пентозофосфатный путь даёт НАДФН, защищающий эритроцит от окислительного повреждения.");
  Q("biyo-12", "biyo", "vit", "Aşağıdakilerden hangisi yağda eriyen vitaminlerden biri değildir?", "Какой из витаминов не относится к жирорастворимым?",
    [["A vitamini", "Витамин A"], ["D vitamini", "Витамин D"], ["E vitamini", "Витамин E"], ["K vitamini", "Витамин K"], ["C vitamini", "Витамин C"]], 4,
    "Yağda eriyen vitaminler A, D, E ve K'dir; emilimleri için safra gerekir ve vücutta depolanabilirler. C vitamini ve B grubu vitaminler suda erir.",
    "Жирорастворимые витамины — A, D, E и K; для их всасывания нужна желчь, и они могут накапливаться в организме. Витамин C и витамины группы B водорастворимы.");
  Q("biyo-13", "biyo", "vit", "Dermatit, ishal ve demans üçlüsüyle seyreden pellagra hangi vitaminin eksikliğinde görülür?", "Дефицит какого витамина вызывает пеллагру, проявляющуюся триадой: дерматит, диарея, деменция?",
    [["Niasin (B₃)", "Ниацин (B₃)"], ["Tiamin (B₁)", "Тиамин (B₁)"], ["Riboflavin (B₂)", "Рибофлавин (B₂)"], ["Piridoksin (B₆)", "Пиридоксин (B₆)"], ["Kobalamin (B₁₂)", "Кобаламин (B₁₂)"]], 0,
    "Niasin, NAD ve NADP koenzimlerinin yapısına girer. Tiamin eksikliği beriberiye, riboflavin eksikliği ise ağız köşesinde çatlaklara (angüler keilit) ve glossite yol açar.",
    "Ниацин входит в состав коферментов НАД и НАДФ. Дефицит тиамина вызывает бери-бери, рибофлавина — трещины в углах рта (ангулярный хейлит) и глоссит.");
  Q("biyo-14", "biyo", "vit", "Yarışmalı (kompetitif) enzim inhibisyonunda kinetik değerler nasıl değişir?", "Как изменяются кинетические параметры при конкурентном ингибировании фермента?",
    [["Km azalır, Vmax azalır", "Km снижается, Vmax снижается"], ["Km değişmez, Vmax azalır", "Km не меняется, Vmax снижается"], ["Km azalır, Vmax değişmez", "Km снижается, Vmax не меняется"], ["Km artar, Vmax değişmez", "Km возрастает, Vmax не меняется"], ["Km artar, Vmax artar", "Km возрастает, Vmax возрастает"]], 3,
    "İnhibitör, enzimin aktif bölgesi için substratla yarışır; substrat derişimi yeterince artırılırsa en yüksek hıza yine ulaşılır. Yarışmasız inhibisyonda ise Km değişmez, Vmax azalır.",
    "Ингибитор конкурирует с субстратом за активный центр; при достаточном повышении концентрации субстрата максимальная скорость достигается. При неконкурентном ингибировании Km не меняется, а Vmax снижается.");
  Q("biyo-15", "biyo", "metab", "Kolesterol sentezinin hız kısıtlayıcı enzimi hangisidir?", "Какой фермент лимитирует скорость синтеза холестерина?",
    [["Asetil-KoA karboksilaz", "Ацетил-КоА-карбоксилаза"], ["HMG-KoA redüktaz", "ГМГ-КоА-редуктаза"], ["Lipoprotein lipaz", "Липопротеинлипаза"], ["Yağ asidi sentaz", "Синтаза жирных кислот"], ["Fosfolipaz A₂", "Фосфолипаза A₂"]], 1,
    "HMG-KoA redüktaz, HMG-KoA'yı mevalonata dönüştürür. Statin grubu ilaçlar bu enzimi baskılayarak kolesterolü düşürür. Asetil-KoA karboksilaz ise yağ asidi sentezinin hız kısıtlayıcı enzimidir.",
    "ГМГ-КоА-редуктаза превращает ГМГ-КоА в мевалонат. Статины снижают холестерин, подавляя этот фермент. Ацетил-КоА-карбоксилаза лимитирует синтез жирных кислот.");
  Q("biyo-16", "biyo", "metab", "Tükürüğün en önemli tampon sistemi hangisidir?", "Какая буферная система слюны является важнейшей?",
    [["Fosfat tamponu", "Фосфатная"], ["Protein tamponu", "Белковая"], ["Bikarbonat tamponu", "Бикарбонатная"], ["Amonyak tamponu", "Аммиачная"], ["Hemoglobin tamponu", "Гемоглобиновая"]], 2,
    "Tükürük akışı arttıkça bikarbonat derişimi ve tamponlama gücü yükselir. Bu nedenle ağız kuruluğu olan kişilerde plak asidi daha geç nötrleşir ve çürük riski belirgin biçimde artar.",
    "С увеличением скорости слюноотделения концентрация бикарбоната и буферная ёмкость возрастают. Поэтому при сухости во рту кислота налёта нейтрализуется медленнее, и риск кариеса существенно выше.");

  /* ---------- Mikrobiyoloji ---------- */
  Q("mikr-9", "mikr", "bakt", "Bakteriler arasında genetik materyalin bir bakteriyofaj aracılığıyla aktarılmasına ne ad verilir?", "Как называется перенос генетического материала между бактериями с помощью бактериофага?",
    [["Konjugasyon", "Конъюгация"], ["Transformasyon", "Трансформация"], ["Transpozisyon", "Транспозиция"], ["Transdüksiyon", "Трансдукция"], ["Replikasyon", "Репликация"]], 3,
    "Konjugasyonda DNA, cinsiyet pilusu aracılığıyla doğrudan temasla aktarılır; antibiyotik direnç plazmidlerinin yayılmasındaki başlıca yoldur. Transformasyonda ise bakteri ortamdaki serbest DNA'yı alır.",
    "При конъюгации ДНК передаётся при прямом контакте через половой пиль — это основной путь распространения плазмид устойчивости. При трансформации бактерия поглощает свободную ДНК из среды.");
  Q("mikr-10", "mikr", "bakt", "I. Hücre duvarında kalın bir peptidoglikan tabakası bulunur.\nII. Hücre duvarının dışında lipopolisakkarit içeren bir dış zar vardır.\nIII. Hücre duvarı teikoik asit içerir.\n\nGram pozitif bakterilerle ilgili yukarıdaki ifadelerden hangileri doğrudur?", "I. В клеточной стенке имеется толстый слой пептидогликана.\nII. Снаружи от клеточной стенки расположена наружная мембрана с липополисахаридом.\nIII. Клеточная стенка содержит тейхоевые кислоты.\n\nКакие утверждения о грамположительных бактериях верны?",
    PB, 3,
    "Lipopolisakkarit içeren dış zar Gram negatif bakterilere özgüdür. Gram pozitiflerde kalın peptidoglikan tabakası kristal viyole boyasını tutar ve bakteri mor görünür.",
    "Наружная мембрана с липополисахаридом характерна для грамотрицательных бактерий. У грамположительных толстый слой пептидогликана удерживает кристаллический фиолетовый, и клетки окрашиваются в фиолетовый цвет.");
  Q("mikr-11", "mikr", "bakt", "Isıya dayanıksız aletlerin soğuk sterilizasyonunda kullanılan yüksek düzey dezenfektan hangisidir?", "Какой дезинфектант высокого уровня применяют для холодной стерилизации термолабильных инструментов?",
    [["%2 glutaraldehit", "2 % глутаральдегид"], ["%70 etil alkol", "70 % этиловый спирт"], ["%0,2 klorheksidin", "0,2 % хлоргексидин"], ["Kuaterner amonyum bileşikleri", "Четвертичные аммониевые соединения"], ["%3 hidrojen peroksit", "3 % перекись водорода"]], 0,
    "Glutaraldehit kısa sürede yüksek düzey dezenfeksiyon, yaklaşık 10 saatlik temasla ise sporları da öldürerek sterilizasyon sağlar. Tahriş edici olduğundan iyi havalandırılan ortamda ve koruyucu donanımla kullanılır.",
    "Глутаральдегид при короткой экспозиции обеспечивает дезинфекцию высокого уровня, а при контакте около 10 часов уничтожает и споры. Он раздражает ткани, поэтому работают с ним в проветриваемом помещении и со средствами защиты.");
  Q("mikr-12", "mikr", "viro", "HIV başlıca hangi hücreleri enfekte ederek bağışıklık yetmezliğine yol açar?", "Какие клетки преимущественно поражает ВИЧ, вызывая иммунодефицит?",
    [["B lenfositleri", "B-лимфоциты"], ["CD8⁺ T lenfositleri", "CD8⁺ T-лимфоциты"], ["Nötrofiller", "Нейтрофилы"], ["Eritrositler", "Эритроциты"], ["CD4⁺ T lenfositleri", "CD4⁺ T-лимфоциты"]], 4,
    "Virüsün gp120 proteini CD4 molekülüne ve bir yardımcı reseptöre (CCR5 ya da CXCR4) bağlanır. CD4⁺ hücre sayısı düştükçe ağız kandidozu gibi fırsatçı enfeksiyonlar ortaya çıkar.",
    "Белок gp120 вируса связывается с молекулой CD4 и корецептором (CCR5 или CXCR4). По мере снижения числа CD4⁺-клеток возникают оппортунистические инфекции, например кандидоз полости рта.");
  Q("mikr-13", "mikr", "viro", "HIV pozitif bir hastada dilin yan kenarlarında, kazımakla kalkmayan, dikey çizgilenmeler gösteren beyaz lezyonlar saptanıyor. En olası tanı ve etken hangisidir?", "У ВИЧ-положительного пациента на боковых поверхностях языка обнаружены белые несоскабливаемые очаги с вертикальной исчерченностью. Каковы наиболее вероятный диагноз и возбудитель?",
    [["Psödomembranöz kandidoz – Candida albicans", "Псевдомембранозный кандидоз — Candida albicans"], ["Kıllı lökoplaki – Epstein-Barr virüsü", "Волосатая лейкоплакия — вирус Эпштейна–Барр"], ["Herpetik stomatit – HSV-1", "Герпетический стоматит — ВПГ-1"], ["Kaposi sarkomu – HHV-8", "Саркома Капоши — HHV-8"], ["Oral liken planus – etken yok", "Красный плоский лишай — без возбудителя"]], 1,
    "Kıllı lökoplaki bağışıklığın baskılandığını gösteren bir bulgudur ve çoğunlukla belirti vermez. Psödomembranöz kandidozdaki beyaz plaklar ise kazımakla kalkar ve altında kızarık bir yüzey bırakır.",
    "Волосатая лейкоплакия — признак иммуносупрессии, обычно бессимптомна. Белые налёты при псевдомембранозном кандидозе, напротив, соскабливаются, оставляя покрасневшую поверхность.");
  Q("mikr-14", "mikr", "viro", "Anafilaksi hangi tip aşırı duyarlılık tepkisidir ve hangi antikor aracılık eder?", "К какому типу гиперчувствительности относится анафилаксия и какими антителами она опосредована?",
    [["Tip II – IgG", "Тип II — IgG"], ["Tip III – bağışıklık kompleksleri", "Тип III — иммунные комплексы"], ["Tip I – IgE", "Тип I — IgE"], ["Tip IV – T hücreleri", "Тип IV — T-клетки"], ["Tip I – IgA", "Тип I — IgA"]], 2,
    "Alerjen, mast hücrelerine bağlı IgE'ler arasında köprü kurar ve histamin gibi aracıların dakikalar içinde salınmasına yol açar. Lateks eldivene bağlı gecikmiş temas dermatiti ise Tip IV tepkidir.",
    "Аллерген связывает молекулы IgE на тучных клетках, вызывая выброс гистамина и других медиаторов в течение минут. Отсроченный контактный дерматит на латексные перчатки относится к IV типу.");
  Q("mikr-15", "mikr", "bakt", "Tetanoz toksini (tetanospazmin) hangi mekanizmayla kas spazmına ve trismusa yol açar?", "Каким образом столбнячный токсин (тетаноспазмин) вызывает спазм мышц и тризм?",
    [["Asetilkolin salınımını engelleyerek", "Блокирует выделение ацетилхолина"], ["Protein sentezini durdurarak", "Останавливает синтез белка"], ["Hücre zarında delikler açarak", "Образует поры в клеточной мембране"], ["Baskılayıcı nörotransmitterlerin salınımını engelleyerek", "Блокирует выделение тормозных нейромедиаторов"], ["Asetilkolinesterazı baskılayarak", "Подавляет ацетилхолинэстеразу"]], 3,
    "Toksin omurilikteki baskılayıcı ara nöronlardan glisin ve GABA salınımını engeller; motor nöronlar frenlenemez ve spastik felç gelişir. Botulinum toksini ise asetilkolin salınımını engelleyerek gevşek felce yol açar.",
    "Токсин блокирует выделение глицина и ГАМК из тормозных интернейронов спинного мозга; мотонейроны не тормозятся, развивается спастический паралич. Ботулотоксин, напротив, блокирует выделение ацетилхолина и вызывает вялый паралич.");
  Q("mikr-16", "mikr", "viro", "Küçük çocuklarda ağız içinde veziküller ile el ve ayaklarda döküntüyle seyreden el-ayak-ağız hastalığının etkeni hangisidir?", "Какой возбудитель вызывает у маленьких детей болезнь «рука–нога–рот» с везикулами в полости рта и сыпью на кистях и стопах?",
    [["Coxsackie A virüsü", "Вирус Коксаки A"], ["Herpes simpleks virüsü tip 1", "Вирус простого герпеса 1 типа"], ["Varisella-zoster virüsü", "Вирус ветряной оспы"], ["Kızamık virüsü", "Вирус кори"], ["Sitomegalovirüs", "Цитомегаловирус"]], 0,
    "Etken çoğunlukla Coxsackie A16 gibi enterovirüslerdir. Hastalık kendiliğinden iyileşir; tedavi destekleyicidir. Aynı virüs grubu, yumuşak damak ve bademcik çevresinde veziküllerle seyreden herpanjinaya da yol açar.",
    "Обычно это энтеровирусы, чаще Коксаки A16. Болезнь проходит самостоятельно, лечение поддерживающее. Та же группа вирусов вызывает герпангину с везикулами на мягком нёбе и дужках.");

  /* ---------- Patoloji ---------- */
  Q("pato-9", "pato", "genel", "Beyin dokusunda iskemi sonucu gelişen nekroz tipi hangisidir?", "Какой тип некроза развивается при ишемии ткани мозга?",
    [["Koagülasyon nekrozu", "Коагуляционный"], ["Kazeöz nekroz", "Казеозный"], ["Yağ nekrozu", "Жировой"], ["Fibrinoid nekroz", "Фибриноидный"], ["Likefaksiyon nekrozu", "Колликвационный"]], 4,
    "Beyin dışındaki organlarda iskemi çoğunlukla koagülasyon nekrozuna yol açar. Likefaksiyon nekrozu apse oluşumunda da görülür. Kazeöz nekroz tüberküloz için tipiktir.",
    "В остальных органах ишемия обычно вызывает коагуляционный некроз. Колликвационный некроз наблюдается также при формировании абсцесса. Казеозный некроз типичен для туберкулёза.");
  Q("pato-10", "pato", "genel", "I. Çevre dokulara invazyon\nII. Uzak organlara metastaz\nIII. Kapsülle çevrili olma ve yavaş büyüme\n\nYukarıdakilerden hangileri kötü huylu tümörlerin özelliklerindendir?", "I. Инвазия в окружающие ткани\nII. Метастазирование в отдалённые органы\nIII. Наличие капсулы и медленный рост\n\nЧто из перечисленного характерно для злокачественных опухолей?",
    PA, 2,
    "Kapsülle çevrili olma, yavaş büyüme ve iyi farklılaşma iyi huylu tümörlerin özellikleridir. Kötü huylu tümörü tanımlayan en güvenilir özellik metastaz yapabilmesidir.",
    "Наличие капсулы, медленный рост и высокая дифференцировка характерны для доброкачественных опухолей. Самый надёжный признак злокачественности — способность к метастазированию.");
  Q("pato-11", "pato", "genel", "Yara iyileşmesinde görülen granülasyon dokusunun temel bileşenleri hangileridir?", "Каковы основные компоненты грануляционной ткани при заживлении раны?",
    [["Yeni oluşan kılcal damarlar ve fibroblastlar", "Новообразованные капилляры и фибробласты"], ["Epiteloid histiyositler ve dev hücreler", "Эпителиоидные гистиоциты и гигантские клетки"], ["Nötrofiller ve nekrotik artıklar", "Нейтрофилы и некротические массы"], ["Olgun kollajen demetleri", "Зрелые пучки коллагена"], ["Yağ hücreleri", "Жировые клетки"]], 0,
    "Granülasyon dokusu pembe, nemli ve kolay kanayan bir dokudur; zamanla damarları azalır, kollajeni artar ve nedbe dokusuna dönüşür. “Granülom” ile karıştırılmamalıdır.",
    "Грануляционная ткань розовая, влажная, легко кровоточит; со временем сосудов становится меньше, коллагена — больше, и она превращается в рубец. Не следует путать её с гранулёмой.");
  Q("pato-12", "pato", "genel", "İltihaba bağlı olarak damar dışına çıkan, protein ve hücre içeriği yüksek sıvıya ne ad verilir?", "Как называется выходящая из сосудов при воспалении жидкость с высоким содержанием белка и клеток?",
    [["Transüda", "Транссудат"], ["Eksüda", "Экссудат"], ["Lenf", "Лимфа"], ["Plazma", "Плазма"], ["Serum", "Сыворотка"]], 1,
    "Eksüda, damar geçirgenliğinin artması sonucu oluşur. Transüda ise geçirgenlik değişmeden, basınç dengesinin bozulmasıyla (örneğin kalp yetmezliği ya da düşük albümin düzeyi) oluşur ve protein içeriği düşüktür.",
    "Экссудат образуется из-за повышения проницаемости сосудов. Транссудат возникает без изменения проницаемости — при нарушении баланса давлений (например, при сердечной недостаточности или гипоальбуминемии) — и беден белком.");
  Q("pato-13", "pato", "agiz", "Alt çenenin arka bölgesinde, radyografide “sabun köpüğü” ya da “bal peteği” görünümünde çok odacıklı radyolüsent lezyon oluşturan, yerel olarak saldırgan odontojenik tümör hangisidir?", "Какая местно-агрессивная одонтогенная опухоль в заднем отделе нижней челюсти даёт на снимке многокамерное просветление в виде «мыльных пузырей» или «пчелиных сот»?",
    [["Odontoma", "Одонтома"], ["Sementoblastom", "Цементобластома"], ["Ameloblastom", "Амелобластома"], ["Odontojenik miksoma", "Одонтогенная миксома"], ["Fibröz displazi", "Фиброзная дисплазия"]], 2,
    "Ameloblastom iyi huylu olmasına karşın çevre kemiğe sızar ve yetersiz çıkarıldığında sık yineler; bu nedenle sağlam doku sınırıyla çıkarılır. Odontoma ise diş dokularından oluşan radyoopak bir kitledir.",
    "Амелобластома доброкачественна, но инфильтрирует окружающую кость и часто рецидивирует при неполном удалении, поэтому её удаляют в пределах здоровых тканей. Одонтома — рентгеноконтрастное образование из тканей зуба.");
  Q("pato-14", "pato", "agiz", "Çok sayıda odontojenik keratokist ile birlikte bazal hücreli karsinomlar ve çatallı kaburgalar hangi sendromu düşündürür?", "О каком синдроме говорят множественные одонтогенные кератокисты в сочетании с базальноклеточными карциномами и раздвоенными рёбрами?",
    [["Gardner sendromu", "Синдром Гарднера"], ["Peutz-Jeghers sendromu", "Синдром Пейтца–Егерса"], ["Kleidokraniyal displazi", "Ключично-черепная дисплазия"], ["Gorlin-Goltz sendromu", "Синдром Горлина–Гольца"], ["Sjögren sendromu", "Синдром Шёгрена"]], 3,
    "Nevoid bazal hücreli karsinom sendromu otozomal dominant geçer. Odontojenik keratokistin yineleme oranı yüksektir. Gardner sendromunda ise çok sayıda osteom, artı dişler ve bağırsak polipleri görülür.",
    "Синдром невоидной базальноклеточной карциномы наследуется аутосомно-доминантно. Кератокиста отличается высокой частотой рецидивов. Для синдрома Гарднера характерны множественные остеомы, сверхкомплектные зубы и полипы кишечника.");
  Q("pato-15", "pato", "agiz", "Mukosel en sık nerede görülür?", "Где чаще всего встречается мукоцеле?",
    [["Üst dudak", "Верхняя губа"], ["Sert damak", "Твёрдое нёбо"], ["Dil sırtı", "Спинка языка"], ["Dişeti", "Десна"], ["Alt dudak", "Нижняя губа"]], 4,
    "Mukosel çoğunlukla küçük tükürük bezi kanalının ısırma gibi bir travmayla yırtılması ve salgının bağ dokusuna sızması sonucu oluşur. Ağız tabanında, büyük bezlerle ilişkili olanına ranula denir.",
    "Мукоцеле обычно возникает при разрыве протока малой слюнной железы (например, при прикусывании) и выходе секрета в соединительную ткань. Аналогичное образование на дне полости рта, связанное с крупными железами, называют ранулой.");
  Q("pato-16", "pato", "agiz", "Ağız mukozasında kolay yırtılan büller, pozitif Nikolsky belirtisi ve histolojide bazal tabakanın üzerinde ayrılma ile akantoliz saptanan hastada en olası tanı hangisidir?", "Каков наиболее вероятный диагноз у пациента с легко вскрывающимися пузырями на слизистой рта, положительным симптомом Никольского, супрабазальным расслоением и акантолизом при гистологии?",
    [["Müköz membran pemfigoidi", "Пемфигоид слизистых"], ["Pemfigus vulgaris", "Вульгарная пузырчатка"], ["Eritema multiforme", "Многоформная эритема"], ["Eroziv liken planus", "Эрозивный плоский лишай"], ["Herpetik gingivostomatit", "Герпетический гингивостоматит"]], 1,
    "Pemfigus vulgariste otoantikorlar, epitel hücrelerini birbirine bağlayan desmozom proteinlerine (desmoglein) yönelir. Pemfigoidde ise ayrılma epitelin altında, bazal membran düzeyindedir. Ağız lezyonları çoğu kez hastalığın ilk bulgusudur.",
    "При вульгарной пузырчатке аутоантитела направлены против белков десмосом (десмоглеинов), соединяющих клетки эпителия. При пемфигоиде расслоение субэпителиальное, на уровне базальной мембраны. Поражение рта часто бывает первым проявлением болезни.");

  /* ---------- Farmakoloji ---------- */
  Q("farm-9", "farm", "genel", "Yarışmalı (kompetitif) bir antagonist, agonistin doz–yanıt eğrisini nasıl değiştirir?", "Как конкурентный антагонист изменяет кривую «доза–эффект» агониста?",
    [["Eğriyi sola kaydırır", "Сдвигает кривую влево"], ["En yüksek etkiyi azaltır, eğrinin yerini değiştirmez", "Снижает максимальный эффект, не сдвигая кривую"], ["Eğriyi sağa kaydırır, en yüksek etki değişmez", "Сдвигает кривую вправо, максимальный эффект не меняется"], ["Eğriyi sola kaydırır ve en yüksek etkiyi artırır", "Сдвигает кривую влево и повышает максимальный эффект"], ["Eğriyi hiç etkilemez", "Не влияет на кривую"]], 2,
    "Agonist dozu artırılarak antagonistin etkisi yenilebilir; bu nedenle aynı en yüksek etkiye daha yüksek dozda ulaşılır. Yarışmasız antagonist ise en yüksek etkiyi azaltır.",
    "Действие антагониста преодолевается повышением дозы агониста, поэтому тот же максимум достигается при большей дозе. Неконкурентный антагонист снижает максимальный эффект.");
  Q("farm-10", "farm", "genel", "Bir ilacın terapötik indeksinin yüksek olması ne anlama gelir?", "Что означает высокий терапевтический индекс препарата?",
    [["Etkili doz ile toksik doz arasındaki fark geniştir; ilaç görece güvenlidir", "Разрыв между эффективной и токсической дозой велик; препарат относительно безопасен"], ["İlaç çok düşük dozda etkilidir", "Препарат действует в очень малой дозе"], ["İlacın yarı ömrü uzundur", "У препарата длительный период полувыведения"], ["İlaç plazma proteinlerine güçlü bağlanır", "Препарат прочно связывается с белками плазмы"], ["İlacın biyoyararlanımı yüksektir", "У препарата высокая биодоступность"]], 0,
    "Terapötik indeks, toksik dozun etkili doza oranıdır. Varfarin, digoksin ve lityum gibi indeksi dar olan ilaçlarda küçük doz değişiklikleri ya da ilaç etkileşimleri ciddi sonuç doğurabilir.",
    "Терапевтический индекс — отношение токсической дозы к эффективной. У препаратов с узким индексом (варфарин, дигоксин, литий) небольшие изменения дозы или лекарственные взаимодействия могут иметь серьёзные последствия.");
  Q("farm-11", "farm", "dis", "Lokal anestezi enjeksiyonundan hemen sonra hastada ağız çevresinde uyuşma, kulak çınlaması ve ağızda metalik tat, ardından kasılmalar gelişiyor. En olası neden hangisidir?", "Сразу после инъекции местного анестетика у пациента появились онемение вокруг рта, шум в ушах, металлический привкус, затем судороги. Какова наиболее вероятная причина?",
    [["Vazovagal senkop", "Вазовагальный обморок"], ["Alerjik tepki", "Аллергическая реакция"], ["Hiperventilasyon", "Гипервентиляция"], ["Adrenaline bağlı çarpıntı", "Сердцебиение от адреналина"], ["Sistemik lokal anestezik toksisitesi", "Системная токсичность местного анестетика"]], 4,
    "Tablo çoğunlukla ilacın damar içine verilmesi ya da aşırı doz sonucu gelişir; önce merkezi sinir sistemi uyarılır, ağır olgularda baskılanma ve kalp ritim bozuklukları izler. Enjeksiyon öncesi aspirasyon yapmak ve ilacı yavaş vermek en önemli önlemdir.",
    "Обычно это следствие внутрисосудистого введения или передозировки: сначала возбуждение ЦНС, в тяжёлых случаях — угнетение и нарушения ритма сердца. Главные меры профилактики — аспирационная проба и медленное введение.");
  Q("farm-12", "farm", "dis", "Yüksek dozda kullanıldığında methemoglobinemiye yol açabilen lokal anestezik hangisidir?", "Какой местный анестетик в высоких дозах может вызвать метгемоглобинемию?",
    [["Lidokain", "Лидокаин"], ["Mepivakain", "Мепивакаин"], ["Bupivakain", "Бупивакаин"], ["Prilokain", "Прилокаин"], ["Ropivakain", "Ропивакаин"]], 3,
    "Prilokainin metaboliti olan o-toluidin, hemoglobindeki demiri yükseltgeyerek oksijen taşıma yeteneğini bozar; hastada oksijene yanıt vermeyen morarma görülür. Tedavide metilen mavisi kullanılır.",
    "Метаболит прилокаина о-толуидин окисляет железо гемоглобина, нарушая перенос кислорода; возникает цианоз, не устраняемый кислородом. Для лечения применяют метиленовый синий.");
  Q("farm-13", "farm", "dis", "Aspirinin kanama zamanını uzatan etkisi nasıl açıklanır?", "Чем объясняется удлинение времени кровотечения под действием аспирина?",
    [["K vitaminine bağlı faktörlerin sentezini engeller", "Подавляет синтез витамин-K-зависимых факторов"], ["Trombosit siklooksijenazını geri dönüşümsüz baskılar", "Необратимо ингибирует циклооксигеназу тромбоцитов"], ["Antitrombini etkinleştirir", "Активирует антитромбин"], ["Fibrini doğrudan parçalar", "Непосредственно разрушает фибрин"], ["Trombosit sayısını azaltır", "Снижает число тромбоцитов"]], 1,
    "Trombositlerin çekirdeği olmadığı için enzimi yeniden yapamazlar; etki trombositin ömrü boyunca, yaklaşık 7–10 gün sürer. Diğer NSAİİ'lerde baskılanma geri dönüşümlüdür.",
    "У тромбоцитов нет ядра, и они не могут заново синтезировать фермент; эффект сохраняется на весь срок жизни тромбоцита — около 7–10 дней. У других НПВС ингибирование обратимо.");
  Q("farm-14", "farm", "dis", "Osteoporoz ya da kemik metastazı nedeniyle uzun süre bifosfonat kullanan hastada diş çekiminden sonra en çok korkulan komplikasyon hangisidir?", "Какого осложнения более всего опасаются после удаления зуба у пациента, длительно принимающего бисфосфонаты по поводу остеопороза или костных метастазов?",
    [["Aşırı kanama", "Массивное кровотечение"], ["Dişeti büyümesi", "Гиперплазия десны"], ["Çene kemiği osteonekrozu", "Остеонекроз челюсти"], ["Tükürük bezi iltihabı", "Воспаление слюнной железы"], ["Dişlerde renklenme", "Окрашивание зубов"]], 2,
    "Bifosfonatlar osteoklast işlevini baskılayarak kemiğin yeniden yapılanmasını yavaşlatır. Risk, özellikle damar yoluyla ve yüksek dozda kullanımda artar; iyileşmeyen ve kemiğin açıkta kaldığı yara tipik bulgudur.",
    "Бисфосфонаты подавляют функцию остеокластов и замедляют ремоделирование кости. Риск выше при внутривенном введении в высоких дозах; типичный признак — незаживающая рана с обнажённой костью.");
  Q("farm-15", "farm", "dis", "Penisilin alerjisi olan bir hastada odontojenik enfeksiyon tedavisinde alternatif olarak sıklıkla hangi antibiyotik kullanılır?", "Какой антибиотик часто применяют как альтернативу при лечении одонтогенной инфекции у пациента с аллергией на пенициллин?",
    [["Klindamisin", "Клиндамицин"], ["Amoksisilin", "Амоксициллин"], ["Ampisilin", "Ампициллин"], ["Sefaleksin", "Цефалексин"], ["Gentamisin", "Гентамицин"]], 0,
    "Klindamisin ağız florasındaki anaeroplara ve Gram pozitif koklara etkilidir ve kemiğe iyi geçer. En önemli yan etkisi, Clostridioides difficile'ye bağlı ishaldir. Amoksisilin ve ampisilin de penisilin grubundandır.",
    "Клиндамицин активен против анаэробов и грамположительных кокков микрофлоры рта и хорошо проникает в кость. Важнейший побочный эффект — диарея, связанная с Clostridioides difficile. Амоксициллин и ампициллин тоже относятся к пенициллинам.");
  Q("farm-16", "farm", "dis", "Diş muayenehanesinde anafilaksi gelişen hastada ilk uygulanması gereken ilaç ve yol hangisidir?", "Какой препарат и каким путём следует ввести в первую очередь при анафилаксии в стоматологическом кабинете?",
    [["Ağızdan antihistaminik", "Антигистаминное внутрь"], ["Damar yoluyla kortikosteroid", "Кортикостероид внутривенно"], ["Dil altı nitrogliserin", "Нитроглицерин под язык"], ["Kas içine adrenalin", "Адреналин внутримышечно"], ["Solunum yoluyla salbutamol", "Сальбутамол ингаляционно"]], 3,
    "Adrenalin uyluğun dış yan yüzüne kas içine uygulanır; damarları daraltır, bronşları genişletir ve aracı madde salınımını azaltır. Antihistaminik ve kortikosteroid yalnızca yardımcı tedavidir ve adrenalini geciktirmemelidir.",
    "Адреналин вводят внутримышечно в наружную поверхность бедра; он суживает сосуды, расширяет бронхи и уменьшает выброс медиаторов. Антигистаминные и кортикостероиды — лишь вспомогательная терапия и не должны задерживать введение адреналина.");

  /* ---------- Biyoloji ve Genetik ---------- */
  Q("gene-9", "gene", "gen", "Otozomal çekinik (resesif) bir hastalık için ikisi de taşıyıcı olan anne ve babanın her çocuğunun hasta olma olasılığı nedir?", "Какова вероятность болезни у каждого ребёнка, если оба родителя — носители аутосомно-рецессивного заболевания?",
    ["% 0", "% 25", "% 50", "% 75", "% 100"], 1,
    "Her gebelikte çocuğun hasta olma olasılığı %25, taşıyıcı olma olasılığı %50, sağlıklı ve taşıyıcı olmama olasılığı %25'tir.",
    "При каждой беременности вероятность болезни — 25 %, носительства — 50 %, рождения здорового ребёнка без носительства — 25 %.");
  Q("gene-10", "gene", "gen", "Hemofili A'nın kalıtım biçimi hangisidir?", "Каков тип наследования гемофилии A?",
    [["Otozomal baskın", "Аутосомно-доминантный"], ["Otozomal çekinik", "Аутосомно-рецессивный"], ["X'e bağlı baskın", "X-сцепленный доминантный"], ["Mitokondriyal", "Митохондриальный"], ["X'e bağlı çekinik", "X-сцепленный рецессивный"]], 4,
    "Faktör VIII eksikliğine bağlı hastalık çoğunlukla erkeklerde görülür; kadınlar genellikle taşıyıcıdır. Bu hastalarda diş çekimi öncesinde hematoloji ile birlikte planlama yapılması gerekir.",
    "Заболевание, обусловленное дефицитом фактора VIII, встречается преимущественно у мужчин; женщины обычно носители. Удаление зубов у таких пациентов планируют совместно с гематологом.");
  Q("gene-11", "gene", "gen", "Hücre döngüsünde DNA'nın eşlenmesi hangi evrede gerçekleşir?", "В какой фазе клеточного цикла происходит удвоение ДНК?",
    ["G₁", "G₂", "S", "M", "G₀"], 2,
    "S (sentez) evresinde DNA miktarı iki katına çıkar. G₁'de hücre büyür, G₂'de bölünmeye hazırlanır, M evresinde mitoz gerçekleşir. Bölünmeyen hücreler G₀ evresinde bekler.",
    "В S-фазе (синтез) количество ДНК удваивается. В G₁ клетка растёт, в G₂ готовится к делению, в M-фазе происходит митоз. Неделящиеся клетки находятся в фазе G₀.");
  Q("gene-12", "gene", "gen", "Mitozda kromozomların hücrenin ekvator düzleminde dizildiği evre hangisidir?", "В какой фазе митоза хромосомы выстраиваются в экваториальной плоскости клетки?",
    [["Metafaz", "Метафаза"], ["Profaz", "Профаза"], ["Anafaz", "Анафаза"], ["Telofaz", "Телофаза"], ["İnterfaz", "Интерфаза"]], 0,
    "Kromozomlar metafazda en yoğun hallerindedir; bu nedenle karyotip incelemesi bu evrede yapılır. Anafazda kardeş kromatitler ayrılarak zıt kutuplara çekilir.",
    "В метафазе хромосомы максимально конденсированы, поэтому кариотип исследуют именно в этой фазе. В анафазе сестринские хроматиды расходятся к противоположным полюсам.");
  Q("gene-13", "gene", "gen", "Polimeraz zincir tepkimesinde (PCR) yüksek sıcaklığa dayanabildiği için kullanılan enzim hangisidir?", "Какой фермент используют в полимеразной цепной реакции (ПЦР) благодаря его устойчивости к высокой температуре?",
    [["DNA ligaz", "ДНК-лигаза"], ["Ters transkriptaz", "Обратная транскриптаза"], ["Kısıtlama (restriksiyon) enzimi", "Рестриктаза"], ["Taq DNA polimeraz", "Taq-ДНК-полимераза"], ["RNA polimeraz", "РНК-полимераза"]], 3,
    "Enzim, sıcak su kaynaklarında yaşayan Thermus aquaticus bakterisinden elde edilir; DNA zincirlerinin ayrıldığı yaklaşık 95 °C'lik basamakta etkinliğini yitirmez.",
    "Фермент получают из бактерии Thermus aquaticus, обитающей в горячих источниках; он не теряет активности на этапе денатурации ДНК при температуре около 95 °C.");
  Q("gene-14", "gene", "gen", "Hücre zarının temel yapısını ne oluşturur?", "Что составляет основу строения клеточной мембраны?",
    [["Tek katlı protein tabakası", "Один слой белков"], ["Fosfolipit çift tabakası", "Двойной слой фосфолипидов"], ["Selüloz lifleri", "Волокна целлюлозы"], ["Kolesterol kristalleri", "Кристаллы холестерина"], ["Glikojen ağı", "Сеть гликогена"]], 1,
    "Akıcı mozaik modele göre fosfolipitlerin su sevmeyen kuyrukları içe, su seven başları dışa bakar; proteinler bu tabakanın içinde ya da yüzeyinde yer alır. Kolesterol zarın akışkanlığını düzenler.",
    "Согласно жидкостно-мозаичной модели, гидрофобные хвосты фосфолипидов обращены внутрь, гидрофильные головки — наружу; белки погружены в бислой или лежат на его поверхности. Холестерин регулирует текучесть мембраны.");
  Q("gene-15", "gene", "gen", "Asit hidrolaz enzimleri içeren ve hücre içi sindirimden sorumlu olan organel hangisidir?", "Какая органелла содержит кислые гидролазы и отвечает за внутриклеточное переваривание?",
    [["Peroksizom", "Пероксисома"], ["Ribozom", "Рибосома"], ["Golgi aygıtı", "Аппарат Гольджи"], ["Mitokondri", "Митохондрия"], ["Lizozom", "Лизосома"]], 4,
    "Lizozom enzimleri asidik pH'da çalışır; fagositozla alınan maddeleri ve yıpranmış organelleri parçalar. Peroksizomlar ise hidrojen peroksidi katalaz enzimiyle parçalar ve çok uzun zincirli yağ asitlerinin yıkımına katılır.",
    "Ферменты лизосом работают при кислом pH; они расщепляют фагоцитированный материал и изношенные органеллы. Пероксисомы разрушают перекись водорода каталазой и участвуют в окислении очень длинноцепочечных жирных кислот.");
  Q("gene-16", "gene", "gen", "Seyrek saçları, terleyememe yakınması, çok sayıda diş eksikliği ve konik biçimli kesici dişleri olan çocukta en olası tanı hangisidir?", "Каков наиболее вероятный диагноз у ребёнка с редкими волосами, нарушением потоотделения, множественным отсутствием зубов и коническими резцами?",
    [["Kleidokraniyal displazi", "Ключично-черепная дисплазия"], ["Amelogenezis imperfekta", "Несовершенный амелогенез"], ["Ektodermal displazi", "Эктодермальная дисплазия"], ["Down sendromu", "Синдром Дауна"], ["Osteogenezis imperfekta", "Несовершенный остеогенез"]], 2,
    "Hipohidrotik ektodermal displazide saç, ter bezleri ve dişler gibi ektoderm kökenli yapılar etkilenir. Kleidokraniyal displazide ise tersine çok sayıda artı diş, gecikmiş sürme ve köprücük kemiklerinde gelişim eksikliği görülür.",
    "При гипогидротической эктодермальной дисплазии поражаются производные эктодермы: волосы, потовые железы, зубы. При ключично-черепной дисплазии, напротив, наблюдаются множественные сверхкомплектные зубы, задержка прорезывания и недоразвитие ключиц.");
})();
