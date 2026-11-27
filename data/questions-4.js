/* Özgün soru bankası — 4. paket: Temel Bilimler. Tüm sorular bu site için yazılmıştır. */
(function () {
  const D = window.DUS_DATA;
  const B = (id, code, tr, ru, topics) => D.branches.push({ id, code, group: "temel", name: { tr, ru }, topics: topics.map(([tid, ttr, tru]) => ({ id: tid, name: { tr: ttr, ru: tru } })) });
  const o = (a) => a.map((x) => (typeof x === "string" ? x : { tr: x[0], ru: x[1] }));
  const Q = (id, branch, tp, tr, ru, opts, answer, etr, eru) => D.questions.push({ id, branch, topic: tp, q: { tr, ru }, options: o(opts), answer, exp: { tr: etr, ru: eru } });

  B("anat", "AN", "Anatomi", "Анатомия", [["bas", "Baş-boyun kasları ve bezleri", "Мышцы и железы головы и шеи"], ["sinir", "Sinirler ve damarlar", "Нервы и сосуды"]]);
  B("hist", "Hİ", "Histoloji ve Embriyoloji", "Гистология и эмбриология", [["dis", "Diş gelişimi ve dokuları", "Развитие и ткани зуба"], ["emb", "Yüz ve ağız embriyolojisi", "Эмбриология лица и полости рта"]]);
  B("fizy", "Fİ", "Fizyoloji", "Физиология", [["hucre", "Hücre, sinir ve kas", "Клетка, нерв и мышца"], ["sistem", "Sistemler", "Системы органов"]]);
  B("biyo", "BK", "Biyokimya", "Биохимия", [["metab", "Metabolizma ve yapı", "Метаболизм и структура"], ["vit", "Vitaminler ve enzimler", "Витамины и ферменты"]]);
  B("mikr", "Mİ", "Mikrobiyoloji", "Микробиология", [["bakt", "Bakteriyoloji ve sterilizasyon", "Бактериология и стерилизация"], ["viro", "Virüsler, mantarlar ve bağışıklık", "Вирусы, грибы и иммунитет"]]);
  B("pato", "PA", "Patoloji", "Патология", [["genel", "Genel patoloji", "Общая патология"], ["agiz", "Ağız patolojisi", "Патология полости рта"]]);
  B("farm", "FA", "Farmakoloji", "Фармакология", [["genel", "Genel farmakoloji", "Общая фармакология"], ["dis", "Diş hekimliğinde ilaçlar", "Препараты в стоматологии"]]);
  B("gene", "GE", "Biyoloji ve Genetik", "Биология и генетика", [["gen", "Hücre biyolojisi ve genetik", "Клеточная биология и генетика"]]);

  /* ---------- Anatomi ---------- */
  Q("anat-1", "anat", "bas", "Çiğneme kaslarından hangisi alt çeneyi öne çeker ve ağzın açılmasına yardım eder?", "Какая из жевательных мышц выдвигает нижнюю челюсть вперёд и участвует в открывании рта?",
    ["M. masseter", "M. temporalis", "M. pterygoideus medialis", "M. pterygoideus lateralis", "M. buccinator"], 3,
    "M. pterygoideus lateralis kondil başını ve eklem diskini öne çeker. Diğer üç çiğneme kası alt çeneyi yukarı kaldırarak ağzı kapatır; m. buccinator ise çiğneme kası değil, mimik kasıdır.",
    "Латеральная крыловидная мышца смещает головку и диск вперёд. Остальные три жевательные мышцы поднимают челюсть; щёчная мышца относится к мимическим, а не жевательным.");
  Q("anat-2", "anat", "sinir", "Çiğneme kaslarını hangi sinir uyarır?", "Какой нерв иннервирует жевательные мышцы?",
    ["N. facialis", "N. mandibularis", "N. maxillaris", "N. glossopharyngeus", "N. hypoglossus"], 1,
    "Çiğneme kasları birinci yutak arkından gelişir ve n. trigeminus'un üçüncü dalı olan n. mandibularis'in motor lifleriyle uyarılır. Mimik kasları ise n. facialis ile uyarılır.",
    "Жевательные мышцы развиваются из первой жаберной дуги и иннервируются двигательными волокнами нижнечелюстного нерва (V3). Мимические мышцы иннервирует лицевой нерв.");
  Q("anat-3", "anat", "sinir", "Dilin ön üçte ikisinin tat duyusunu hangi sinir taşır?", "Какой нерв проводит вкусовую чувствительность от передних двух третей языка?",
    ["Chorda tympani", "N. lingualis'in kendi lifleri", "N. glossopharyngeus", "N. vagus", "N. hypoglossus"], 0,
    "Tat lifleri n. facialis'in dalı olan chorda tympani ile taşınır; bu lifler n. lingualis'e katılarak dile ulaşır. Aynı bölgenin genel duyusunu n. lingualis, dilin arka üçte birinin duyusunu ise n. glossopharyngeus alır.",
    "Вкусовые волокна идут в составе барабанной струны (ветвь лицевого нерва), присоединяющейся к язычному нерву. Общую чувствительность этой зоны обеспечивает язычный нерв, а заднюю треть языка — языкоглоточный.");
  Q("anat-4", "anat", "sinir", "Dil kaslarının motor siniri hangisidir?", "Какой нерв является двигательным для мышц языка?",
    ["N. lingualis", "N. facialis", "N. glossopharyngeus", "N. mandibularis", "N. hypoglossus"], 4,
    "M. palatoglossus dışındaki tüm dil kaslarını n. hypoglossus uyarır. Tek taraflı felcinde dil dışarı çıkarıldığında felçli tarafa sapar.",
    "Все мышцы языка, кроме нёбно-язычной, иннервирует подъязычный нерв. При одностороннем параличе высунутый язык отклоняется в поражённую сторону.");
  Q("anat-5", "anat", "bas", "Parotis bezinin kanalı ağız boşluğuna nerede açılır?", "Где открывается в полость рта проток околоушной железы?",
    [["Dil altında, frenulumun iki yanında", "Под языком по бокам от уздечки"], ["Ağız tabanında, sublingual kıvrım boyunca", "На дне полости рта вдоль подъязычной складки"], ["Üst ikinci büyük azı hizasında yanak mukozasına", "На слизистой щеки на уровне верхнего второго моляра"], ["Sert damağın arka kısmına", "В задней части твёрдого нёба"], ["Alt kesicilerin lingualine", "С язычной стороны нижних резцов"]], 2,
    "Stensen kanalı m. masseter'in üzerinden geçer, m. buccinator'u delerek üst ikinci molar hizasındaki parotis papillasına açılır. Submandibular bezin kanalı ise dil altındaki karunkulaya açılır.",
    "Стенонов проток проходит по жевательной мышце, прободает щёчную и открывается на сосочке напротив верхнего второго моляра. Проток поднижнечелюстной железы открывается на подъязычном сосочке.");
  Q("anat-6", "anat", "sinir", "Foramen rotundum'dan hangi yapı geçer?", "Что проходит через круглое отверстие?",
    ["N. ophthalmicus", "N. maxillaris", "N. mandibularis", "A. meningea media", "N. facialis"], 1,
    "N. maxillaris foramen rotundum'dan geçerek pterygopalatin çukura ulaşır. N. mandibularis foramen ovale'den, a. meningea media ise foramen spinosum'dan geçer.",
    "Верхнечелюстной нерв через круглое отверстие выходит в крыловидно-нёбную ямку. Нижнечелюстной нерв проходит через овальное отверстие, средняя менингеальная артерия — через остистое.");
  Q("anat-7", "anat", "sinir", "A. maxillaris hangi arterin uç dalıdır?", "Конечной ветвью какой артерии является верхнечелюстная артерия?",
    ["A. carotis interna", "A. facialis", "A. lingualis", "A. carotis externa", "A. subclavia"], 3,
    "A. carotis externa parotis bezi içinde iki uç dala ayrılır: a. maxillaris ve a. temporalis superficialis. A. maxillaris dişleri, çeneleri, çiğneme kaslarını ve damağı besler.",
    "Наружная сонная артерия в толще околоушной железы делится на две конечные ветви: верхнечелюстную и поверхностную височную. Верхнечелюстная артерия кровоснабжает зубы, челюсти, жевательные мышцы и нёбо.");
  Q("anat-8", "anat", "bas", "Temporomandibuler eklemde eklem diskine tutunan kas hangisidir?", "Какая мышца прикрепляется к суставному диску височно-нижнечелюстного сустава?",
    [["M. pterygoideus lateralis'in üst başı", "Верхняя головка латеральной крыловидной мышцы"], "M. masseter", "M. temporalis", "M. pterygoideus medialis", "M. digastricus"], 0,
    "Kasın üst başı eklem kapsülüne ve diske, alt başı ise kondil boynundaki fovea pterygoidea'ya tutunur.",
    "Верхняя головка прикрепляется к капсуле и диску, нижняя — к крыловидной ямке на шейке мыщелкового отростка.");

  /* ---------- Histoloji ve Embriyoloji ---------- */
  Q("hist-1", "hist", "dis", "Mineyi oluşturan hücre hangisidir?", "Какие клетки образуют эмаль?",
    [["Odontoblast", "Одонтобласты"], ["Sementoblast", "Цементобласты"], ["Ameloblast", "Амелобласты"], ["Fibroblast", "Фибробласты"], ["Osteoblast", "Остеобласты"]], 2,
    "Ameloblastlar mine organının iç mine epitelinden farklılaşır ve ektoderm kökenlidir. Diş sürdükten sonra kayboldukları için mine kendini yenileyemez.",
    "Амелобласты дифференцируются из внутреннего эмалевого эпителия и имеют эктодермальное происхождение. После прорезывания они исчезают, поэтому эмаль не восстанавливается.");
  Q("hist-2", "hist", "dis", "Dentin ve pulpa hangi yapıdan gelişir?", "Из какой структуры развиваются дентин и пульпа?",
    [["Mine organı", "Эмалевый орган"], ["Dental papilla", "Зубной сосочек"], ["Dental folikül (kese)", "Зубной мешочек"], ["Dental lamina", "Зубная пластинка"], ["Hertwig epitel kını", "Эпителиальное влагалище Гертвига"]], 1,
    "Nöral krest kökenli ektomezenkimden oluşan dental papilla dentini ve pulpayı; dental folikül ise sementi, periodontal ligamenti ve alveol kemiğini oluşturur.",
    "Зубной сосочек (эктомезенхима из нервного гребня) образует дентин и пульпу; зубной мешочек — цемент, периодонтальную связку и альвеолярную кость.");
  Q("hist-3", "hist", "dis", "Hertwig epitel kınının görevi nedir?", "Какова функция эпителиального влагалища Гертвига?",
    [["Mineyi mineralize etmek", "Минерализация эмали"], ["Dişi ağız boşluğuna sürdürmek", "Прорезывание зуба"], ["Pulpayı beslemek", "Питание пульпы"], ["Tükürük salgılamak", "Секреция слюны"], ["Kökün şeklini belirlemek ve kök dentininin oluşumunu başlatmak", "Определение формы корня и индукция образования корневого дентина"]], 4,
    "Kın, mine organının servikal halkasından aşağı doğru uzar; kök sayısını ve biçimini belirler. Parçalandıktan sonra periodontal ligamentte kalan hücre grupları Malassez epitel artıkları olarak adlandırılır.",
    "Влагалище растёт вниз от шеечной петли эмалевого органа и определяет число и форму корней. После его распада в периодонте остаются эпителиальные островки Малассе.");
  Q("hist-4", "hist", "dis", "Mine organının dört tabakasının belirginleştiği ve kron biçiminin şekillendiği diş gelişim evresi hangisidir?", "На какой стадии развития зуба различимы четыре слоя эмалевого органа и формируется очертание коронки?",
    [["Tomurcuk evresi", "Стадия почки"], ["Takke evresi", "Стадия шапочки"], ["Çan evresi", "Стадия колокола"], ["Apozisyon evresi", "Стадия аппозиции"], ["Sürme evresi", "Стадия прорезывания"]], 2,
    "Çan evresinde iç mine epiteli, stratum intermedium, stellat retikulum ve dış mine epiteli ayırt edilir; hücre farklılaşması (histodiferansiyasyon) ve biçimlenme (morfodiferansiyasyon) bu evrede gerçekleşir.",
    "На стадии колокола различимы внутренний эмалевый эпителий, промежуточный слой, звёздчатый ретикулум и наружный эмалевый эпителий; происходят гисто- и морфодифференцировка.");
  Q("hist-5", "hist", "emb", "Primer damak hangi yapıların birleşmesiyle oluşur?", "Слиянием каких структур образуется первичное нёбо?",
    [["Medial nazal çıkıntıların", "Медиальных носовых отростков"], ["Lateral nazal çıkıntıların", "Латеральных носовых отростков"], ["Maksiller çıkıntıların damak uzantılarının", "Нёбных отростков верхнечелюстных выступов"], ["Mandibuler çıkıntıların", "Нижнечелюстных отростков"], ["İkinci yutak arklarının", "Вторых жаберных дуг"]], 0,
    "Medial nazal çıkıntıların birleşmesiyle oluşan intermaksiller segment, primer damağı ve dört kesici dişi taşıyan bölümü oluşturur. Sekonder damak ise maksiller çıkıntıların damak uzantılarından gelişir.",
    "Межчелюстной сегмент, образованный слиянием медиальных носовых отростков, формирует первичное нёбо и участок с четырьмя резцами. Вторичное нёбо развивается из нёбных отростков верхнечелюстных выступов.");
  Q("hist-6", "hist", "emb", "Dudak yarığı hangi yapıların birleşmemesi sonucu ortaya çıkar?", "Несращение каких структур приводит к расщелине губы?",
    [["İki mandibuler çıkıntının", "Двух нижнечелюстных отростков"], ["İki damak uzantısının", "Двух нёбных отростков"], ["Lateral nazal ve maksiller çıkıntıların", "Латерального носового и верхнечелюстного отростков"], ["Maksiller çıkıntı ile medial nazal çıkıntının", "Верхнечелюстного и медиального носового отростков"], ["Birinci ve ikinci yutak arklarının", "Первой и второй жаберных дуг"]], 3,
    "Damak yarığı ise iki damak uzantısının birbirleriyle ya da primer damakla birleşmemesi sonucu oluşur. İki durum birlikte de görülebilir.",
    "Расщелина нёба возникает при несращении нёбных отростков между собой или с первичным нёбом. Оба порока могут сочетаться.");
  Q("hist-7", "hist", "emb", "Dilin ön üçte ikisi hangi yutak arkından gelişir?", "Из какой жаберной дуги развиваются передние две трети языка?",
    [["Birinci", "Первой"], ["İkinci", "Второй"], ["Üçüncü", "Третьей"], ["Dördüncü", "Четвёртой"], ["Altıncı", "Шестой"]], 0,
    "Birinci arktan gelişen iki lateral dil kabartısı ve tuberculum impar dilin gövdesini oluşturur; bu nedenle genel duyusunu n. mandibularis'in dalı taşır. Dilin kökü üçüncü ve dördüncü arklardan gelişir.",
    "Тело языка образуют два латеральных язычных бугорка и непарный бугорок первой дуги, поэтому общую чувствительность обеспечивает ветвь нижнечелюстного нерва. Корень языка развивается из третьей и четвёртой дуг.");
  Q("hist-8", "hist", "dis", "Periodontal ligamentte bulunan Malassez epitel artıklarının kaynağı nedir?", "Каково происхождение эпителиальных островков Малассе в периодонтальной связке?",
    [["Dental lamina", "Зубная пластинка"], ["Ağız epiteli", "Эпителий полости рта"], ["Stellat retikulum", "Звёздчатый ретикулум"], ["Dental papilla", "Зубной сосочек"], ["Hertwig epitel kını", "Эпителиальное влагалище Гертвига"]], 4,
    "Bu hücre grupları normalde sessizdir; kronik iltihapla uyarıldıklarında çoğalarak radiküler kistin epitelini oluşturabilirler.",
    "Эти клетки в норме неактивны; при хроническом воспалении они пролиферируют и могут образовать эпителиальную выстилку радикулярной кисты.");

  /* ---------- Fizyoloji ---------- */
  Q("fizy-1", "fizy", "hucre", "Dinlenim zar potansiyelinin oluşmasında en büyük payı hangi iyonun geçirgenliği taşır?", "Проницаемость мембраны для какого иона вносит основной вклад в потенциал покоя?",
    [["Sodyum", "Натрий"], ["Kalsiyum", "Кальций"], ["Potasyum", "Калий"], ["Klor", "Хлор"], ["Magnezyum", "Магний"]], 2,
    "Dinlenim halinde zar potasyuma sodyumdan çok daha geçirgendir; potasyumun hücre dışına sızması içeriyi negatif yapar. Na⁺/K⁺ pompası ise bu iyon farkını sürdürür.",
    "В покое мембрана гораздо более проницаема для калия, чем для натрия; выход калия делает внутреннюю сторону отрицательной. Na⁺/K⁺-насос поддерживает градиенты.");
  Q("fizy-2", "fizy", "hucre", "Sinir hücresinde aksiyon potansiyelinin depolarizasyon evresini ne başlatır?", "Чем обусловлена фаза деполяризации потенциала действия в нейроне?",
    [["Voltaj kapılı sodyum kanallarının açılması", "Открытием потенциалзависимых натриевых каналов"], ["Voltaj kapılı potasyum kanallarının açılması", "Открытием потенциалзависимых калиевых каналов"], ["Klor kanallarının açılması", "Открытием хлорных каналов"], ["Na⁺/K⁺ pompasının durması", "Остановкой Na⁺/K⁺-насоса"], ["Kalsiyumun hücre dışına çıkması", "Выходом кальция из клетки"]], 0,
    "Eşik değere ulaşıldığında sodyum kanalları açılır ve sodyum hızla hücre içine girer. Repolarizasyon, sodyum kanallarının kapanması ve potasyumun dışarı çıkmasıyla gerçekleşir.",
    "При достижении порога натриевые каналы открываются, и натрий быстро входит в клетку. Реполяризация связана с инактивацией натриевых каналов и выходом калия.");
  Q("fizy-3", "fizy", "hucre", "Sinir–kas kavşağında salınan nörotransmitter hangisidir?", "Какой медиатор выделяется в нервно-мышечном синапсе?",
    [["Noradrenalin", "Норадреналин"], ["Dopamin", "Дофамин"], ["GABA", "ГАМК"], ["Asetilkolin", "Ацетилхолин"], ["Glisin", "Глицин"]], 3,
    "Asetilkolin kas zarındaki nikotinik reseptörlere bağlanır ve son plak potansiyelini oluşturur. Sinaps aralığında asetilkolinesteraz tarafından hızla yıkılır.",
    "Ацетилхолин связывается с никотиновыми рецепторами мышечной мембраны и вызывает потенциал концевой пластинки. В синаптической щели его быстро разрушает ацетилхолинэстераза.");
  Q("fizy-4", "fizy", "sistem", "Bol ve sulu tükürük salgısını hangi uyarı sağlar?", "Какая стимуляция вызывает обильное выделение жидкой слюны?",
    [["Sempatik uyarı", "Симпатическая"], ["Parasempatik uyarı", "Парасимпатическая"], ["Somatik motor uyarı", "Соматическая двигательная"], ["Aldosteron", "Альдостерон"], ["Antidiüretik hormon", "Антидиуретический гормон"]], 1,
    "Parasempatik uyarı bol, sulu ve enzimden zengin salgı oluşturur. Sempatik uyarı ise az miktarda, koyu ve müsinden zengin salgıya yol açar.",
    "Парасимпатическая стимуляция даёт обильную жидкую слюну, богатую ферментами. Симпатическая — небольшое количество густой слюны, богатой муцином.");
  Q("fizy-5", "fizy", "sistem", "Uyarılmamış (dinlenim) durumdaki tükürüğün en büyük bölümünü hangi bez üretir?", "Какая железа вырабатывает основную часть нестимулированной слюны (в покое)?",
    [["Parotis bezi", "Околоушная"], ["Sublingual bez", "Подъязычная"], ["Küçük tükürük bezleri", "Малые слюнные железы"], ["Von Ebner bezleri", "Железы Эбнера"], ["Submandibular bez", "Поднижнечелюстная"]], 4,
    "Dinlenim halinde tükürüğün yaklaşık üçte ikisini submandibular bez salgılar. Çiğneme ya da tatla uyarıldığında parotis bezinin katkısı belirgin biçimde artar.",
    "В покое около двух третей слюны выделяет поднижнечелюстная железа. При стимуляции жеванием или вкусом заметно возрастает вклад околоушной.");
  Q("fizy-6", "fizy", "sistem", "Kan kalsiyum düzeyini yükselten hormon hangisidir?", "Какой гормон повышает уровень кальция в крови?",
    [["Kalsitonin", "Кальцитонин"], ["İnsülin", "Инсулин"], ["Parathormon", "Паратгормон"], ["Tiroksin", "Тироксин"], ["Aldosteron", "Альдостерон"]], 2,
    "Parathormon kemikten kalsiyum çıkışını ve böbrekten geri emilimini artırır, D vitamininin aktifleşmesini uyarır. Kalsitonin ise ters yönde, kalsiyumu düşürücü etki gösterir.",
    "Паратгормон усиливает выход кальция из кости и его реабсорбцию в почках, стимулирует активацию витамина D. Кальцитонин действует противоположно, снижая кальций.");
  Q("fizy-7", "fizy", "sistem", "Oksijenin kanda taşınmasının başlıca yolu hangisidir?", "Каков основной способ транспорта кислорода кровью?",
    [["Hemoglobine bağlı olarak", "В связи с гемоглобином"], ["Plazmada çözünmüş olarak", "В растворённом в плазме виде"], ["Bikarbonat halinde", "В виде бикарбоната"], ["Albümine bağlı olarak", "В связи с альбумином"], ["Karbaminohemoglobin halinde", "В виде карбаминогемоглобина"]], 0,
    "Oksijenin yaklaşık %97–98'i hemoglobine bağlı, kalanı plazmada çözünmüş olarak taşınır. Karbondioksit ise en çok bikarbonat halinde taşınır.",
    "Около 97–98 % кислорода переносится гемоглобином, остальное растворено в плазме. Углекислый газ транспортируется преимущественно в виде бикарбоната.");
  Q("fizy-8", "fizy", "sistem", "Kalbin doğal uyarı odağı (pacemaker) hangisidir?", "Что является естественным водителем ритма сердца?",
    [["Atriyoventriküler düğüm", "Атриовентрикулярный узел"], ["His demeti", "Пучок Гиса"], ["Purkinje lifleri", "Волокна Пуркинье"], ["Sinoatriyal düğüm", "Синоатриальный узел"], ["Ventrikül kası", "Миокард желудочков"]], 3,
    "Sinoatriyal düğüm en yüksek kendiliğinden uyarı hızına sahip olduğu için ritmi belirler. Atriyoventriküler düğüm iletimi kısa süre geciktirerek karıncıkların dolmasına zaman tanır.",
    "Синоатриальный узел имеет наибольшую собственную частоту возбуждения и потому задаёт ритм. Атриовентрикулярный узел задерживает проведение, давая желудочкам время наполниться.");

  /* ---------- Biyokimya ---------- */
  Q("biyo-1", "biyo", "vit", "C vitamini eksikliğinde dişeti kanaması ve yara iyileşmesinde gecikme görülmesinin temel nedeni nedir?", "В чём основная причина кровоточивости дёсен и замедленного заживления ран при дефиците витамина C?",
    [["Pıhtılaşma faktörlerinin yapılamaması", "Нарушение синтеза факторов свёртывания"], ["Kollajendeki prolin ve lizinin hidroksillenememesi", "Нарушение гидроксилирования пролина и лизина в коллагене"], ["Kalsiyum emiliminin azalması", "Снижение всасывания кальция"], ["Hemoglobin yapımının durması", "Прекращение синтеза гемоглобина"], ["Keratin yapımının bozulması", "Нарушение синтеза кератина"]], 1,
    "C vitamini prolil ve lizil hidroksilaz enzimlerinin kofaktörüdür. Eksikliğinde kollajen sarmalı kararsız olur; bu tablo skorbüt olarak adlandırılır.",
    "Витамин C — кофактор пролил- и лизилгидроксилаз. При его дефиците спираль коллагена нестабильна; это состояние называют цингой.");
  Q("biyo-2", "biyo", "vit", "K vitamini hangi pıhtılaşma faktörlerinin etkinleşmesi için gereklidir?", "Для активации каких факторов свёртывания необходим витамин K?",
    ["I, V, VIII, XIII", "III, IV, V, VIII", "VIII, IX, XI, XII", "I, II, V, XI", "II, VII, IX, X"], 4,
    "K vitamini bu faktörlerdeki glutamat kalıntılarının gama-karboksillenmesini sağlar; böylece kalsiyum bağlayabilirler. Varfarin bu basamağı engelleyerek etki eder.",
    "Витамин K обеспечивает гамма-карбоксилирование остатков глутамата в этих факторах, что позволяет им связывать кальций. Варфарин блокирует именно этот этап.");
  Q("biyo-3", "biyo", "vit", "D vitamininin en etkin biçimi olan kalsitriol (1,25-dihidroksikolekalsiferol) hangi organda oluşur?", "В каком органе образуется наиболее активная форма витамина D — кальцитриол (1,25-дигидроксихолекальциферол)?",
    [["Deri", "Кожа"], ["Karaciğer", "Печень"], ["Böbrek", "Почки"], ["Bağırsak", "Кишечник"], ["Kemik", "Кость"]], 2,
    "Deride oluşan ya da besinle alınan D vitamini karaciğerde 25. karbonundan, böbrekte ise 1. karbonundan hidroksillenir. Böbrekteki basamağı parathormon uyarır.",
    "Витамин D, образовавшийся в коже или поступивший с пищей, гидроксилируется в печени по 25-му, а в почках — по 1-му положению. Почечный этап стимулирует паратгормон.");
  Q("biyo-4", "biyo", "metab", "Glikolizin hız kısıtlayıcı enzimi hangisidir?", "Какой фермент является скорость-лимитирующим в гликолизе?",
    [["Fosfofruktokinaz-1", "Фосфофруктокиназа-1"], ["Heksokinaz", "Гексокиназа"], ["Piruvat kinaz", "Пируваткиназа"], ["Laktat dehidrogenaz", "Лактатдегидрогеназа"], ["Aldolaz", "Альдолаза"]], 0,
    "Fosfofruktokinaz-1, fruktoz-6-fosfatı fruktoz-1,6-bisfosfata dönüştürür. ATP ve sitrat enzimi baskılar; AMP ve fruktoz-2,6-bisfosfat ise etkinleştirir.",
    "Фосфофруктокиназа-1 превращает фруктозо-6-фосфат во фруктозо-1,6-бисфосфат. АТФ и цитрат ингибируют фермент, АМФ и фруктозо-2,6-бисфосфат — активируют.");
  Q("biyo-5", "biyo", "metab", "Sitrik asit (Krebs) döngüsü hücrenin neresinde gerçekleşir?", "Где в клетке протекает цикл лимонной кислоты (цикл Кребса)?",
    [["Sitozol", "В цитозоле"], ["Çekirdek", "В ядре"], ["Endoplazmik retikulum", "В эндоплазматическом ретикулуме"], ["Mitokondri matriksi", "В матриксе митохондрий"], ["Lizozom", "В лизосомах"]], 3,
    "Glikoliz sitozolde, Krebs döngüsü mitokondri matriksinde, elektron taşıma zinciri ise mitokondri iç zarında gerçekleşir.",
    "Гликолиз идёт в цитозоле, цикл Кребса — в матриксе митохондрий, а цепь переноса электронов — на внутренней мембране митохондрий.");
  Q("biyo-6", "biyo", "metab", "Kollajende en bol bulunan amino asit hangisidir?", "Какая аминокислота преобладает в коллагене?",
    [["Prolin", "Пролин"], ["Glisin", "Глицин"], ["Lizin", "Лизин"], ["Alanin", "Аланин"], ["Sistein", "Цистеин"]], 1,
    "Kollajen zincirinde her üç amino asitten biri glisindir (Gly–X–Y dizisi). Küçük yapısı sayesinde üçlü sarmalın merkezine sığar; X ve Y konumlarında çoğunlukla prolin ve hidroksiprolin bulunur.",
    "В цепи коллагена каждая третья аминокислота — глицин (последовательность Gly–X–Y). Благодаря малому размеру он помещается в центре тройной спирали; в положениях X и Y обычно пролин и гидроксипролин.");
  Q("biyo-7", "biyo", "vit", "Tükürükte bulunan ve nişastanın sindirimini başlatan enzim hangisidir?", "Какой фермент слюны начинает переваривание крахмала?",
    [["Lipaz", "Липаза"], ["Pepsin", "Пепсин"], ["Lizozim", "Лизоцим"], ["Laktaz", "Лактаза"], ["Alfa-amilaz", "Альфа-амилаза"]], 4,
    "Alfa-amilaz (pityalin) nişastadaki α-1,4 glikozit bağlarını parçalar. Midenin asidik ortamında etkinliğini yitirir. Lizozim ise bakteri hücre duvarını parçalayan koruyucu bir enzimdir.",
    "Альфа-амилаза (птиалин) расщепляет α-1,4-гликозидные связи крахмала и инактивируется в кислой среде желудка. Лизоцим — защитный фермент, разрушающий клеточную стенку бактерий.");
  Q("biyo-8", "biyo", "metab", "Kemik ve diş sert dokularının temel mineral bileşeni hangisidir?", "Какой минерал составляет основу твёрдых тканей кости и зуба?",
    [["Kalsiyum karbonat", "Карбонат кальция"], ["Kalsiyum oksalat", "Оксалат кальция"], ["Hidroksiapatit", "Гидроксиапатит"], ["Magnezyum fosfat", "Фосфат магния"], ["Kalsiyum sülfat", "Сульфат кальция"]], 2,
    "Hidroksiapatit bir kalsiyum fosfat kristalidir: Ca₁₀(PO₄)₆(OH)₂. Hidroksil grubunun yerine florür geçtiğinde aside daha dirençli florapatit oluşur.",
    "Гидроксиапатит — кристалл фосфата кальция: Ca₁₀(PO₄)₆(OH)₂. При замещении гидроксильной группы фтором образуется более кислотоустойчивый фторапатит.");

  /* ---------- Mikrobiyoloji ---------- */
  Q("mikr-1", "mikr", "bakt", "Gram negatif bakterilerin endotoksini hangi yapıdır?", "Какая структура является эндотоксином грамотрицательных бактерий?",
    [["Teikoik asit", "Тейхоевая кислота"], ["Peptidoglikan", "Пептидогликан"], ["Kapsül", "Капсула"], ["Lipopolisakkarit", "Липополисахарид"], ["Flagellin", "Флагеллин"]], 3,
    "Dış zarda bulunan lipopolisakkaritin toksik bölümü lipid A'dır; ateş ve şoka yol açabilir. Teikoik asit ise Gram pozitif bakterilerin hücre duvarında bulunur.",
    "Токсичная часть липополисахарида наружной мембраны — липид A; он способен вызывать лихорадку и шок. Тейхоевые кислоты характерны для клеточной стенки грамположительных бактерий.");
  Q("mikr-2", "mikr", "bakt", "Otoklavda standart sterilizasyon koşulu hangisidir?", "Каковы стандартные условия стерилизации в автоклаве?",
    [["121 °C'de 15 dakika", "121 °C, 15 минут"], ["100 °C'de 5 dakika", "100 °C, 5 минут"], ["80 °C'de 30 dakika", "80 °C, 30 минут"], ["160 °C'de 2 dakika", "160 °C, 2 минуты"], ["60 °C'de 60 dakika", "60 °C, 60 минут"]], 0,
    "Basınçlı doymuş buhar 121 °C'de yaklaşık 1 atmosfer ek basınç altında 15–20 dakikada sporlar dahil tüm mikroorganizmaları öldürür. 134 °C'de süre 3–4 dakikaya iner.",
    "Насыщенный пар под давлением при 121 °C (около 1 атм избыточного давления) за 15–20 минут уничтожает все микроорганизмы, включая споры. При 134 °C достаточно 3–4 минут.");
  Q("mikr-3", "mikr", "bakt", "Otoklav sterilizasyonunun biyolojik olarak denetlenmesinde hangi mikroorganizmanın sporları kullanılır?", "Споры какого микроорганизма используют для биологического контроля стерилизации в автоклаве?",
    ["Clostridium tetani", "Geobacillus stearothermophilus", "Bacillus anthracis", "Staphylococcus aureus", "Escherichia coli"], 1,
    "Isıya en dayanıklı sporlardan olduğu için buharla sterilizasyonun denetiminde kullanılır. Kuru hava ve etilen oksit sterilizasyonunda ise Bacillus atrophaeus sporları tercih edilir.",
    "Эти споры — одни из самых термоустойчивых, поэтому применяются для контроля паровой стерилизации. Для сухожаровой и газовой (этиленоксид) используют споры Bacillus atrophaeus.");
  Q("mikr-4", "mikr", "viro", "Aşağıdaki hepatit virüslerinden hangisi DNA virüsüdür?", "Какой из вирусов гепатита является ДНК-содержащим?",
    [["Hepatit A virüsü", "Вирус гепатита A"], ["Hepatit C virüsü", "Вирус гепатита C"], ["Hepatit D virüsü", "Вирус гепатита D"], ["Hepatit E virüsü", "Вирус гепатита E"], ["Hepatit B virüsü", "Вирус гепатита B"]], 4,
    "Hepatit B virüsü kan ve vücut sıvılarıyla bulaşır; diş hekimleri için en önemli mesleki bulaş risklerinden biridir ve aşıyla önlenebilir. Diğer hepatit virüsleri RNA virüsüdür.",
    "Вирус гепатита B передаётся с кровью и биологическими жидкостями; это один из главных профессиональных рисков стоматолога, предотвратимый вакцинацией. Остальные вирусы гепатита — РНК-содержащие.");
  Q("mikr-5", "mikr", "viro", "Ağız kandidozunun en sık etkeni hangisidir?", "Какой возбудитель чаще всего вызывает кандидоз полости рта?",
    ["Candida glabrata", "Candida krusei", "Candida albicans", "Aspergillus fumigatus", "Cryptococcus neoformans"], 2,
    "C. albicans ağız florasının olağan bir üyesidir; bağışıklığın baskılanması, uzun süreli antibiyotik ya da kortikosteroid kullanımı, ağız kuruluğu ve protez kullanımı gibi durumlarda hastalık yapar.",
    "C. albicans — обычный представитель микрофлоры рта; вызывает заболевание при иммуносупрессии, длительном приёме антибиотиков или кортикостероидов, сухости во рту и ношении протезов.");
  Q("mikr-6", "mikr", "viro", "Herpes simpleks virüsü tip 1, ilk enfeksiyondan sonra en sık nerede gizli (latent) kalır?", "Где чаще всего сохраняется в латентном состоянии вирус простого герпеса 1 типа после первичной инфекции?",
    [["Trigeminal ganglion", "В тройничном ганглии"], ["Tükürük bezleri", "В слюнных железах"], ["Sakral gangliyonlar", "В крестцовых ганглиях"], ["B lenfositleri", "В B-лимфоцитах"], ["Bademcikler", "В миндалинах"]], 0,
    "Virüs duyu sinirleri boyunca trigeminal gangliyona taşınır. Stres, güneş ışığı ya da ateş gibi etkenlerle yeniden etkinleşerek dudak uçuğuna yol açar. Tip 2 ise çoğunlukla sakral gangliyonlarda kalır.",
    "Вирус по чувствительным волокнам попадает в тройничный ганглий. При стрессе, инсоляции или лихорадке он реактивируется и вызывает герпес губ. Тип 2 обычно сохраняется в крестцовых ганглиях.");
  Q("mikr-7", "mikr", "viro", "Tükürükte ve mukoza salgılarında baskın olan antikor sınıfı hangisidir?", "Какой класс антител преобладает в слюне и секретах слизистых?",
    ["IgG", "IgM", "IgE", "IgA", "IgD"], 3,
    "Sekretuar IgA ikili (dimer) yapıdadır ve salgı parçası sayesinde enzimlerle parçalanmaya dirençlidir. Mikroorganizmaların mukozaya tutunmasını engeller.",
    "Секреторный IgA — димер; секреторный компонент защищает его от расщепления ферментами. Он препятствует прикреплению микроорганизмов к слизистой.");
  Q("mikr-8", "mikr", "bakt", "Servikofasiyal bölgede sert şişlik, fistüller ve cerahatte “sülfür granülleri” ile seyreden enfeksiyonun etkeni hangisidir?", "Какой возбудитель вызывает инфекцию шейно-лицевой области с плотным инфильтратом, свищами и «серными гранулами» в гное?",
    ["Staphylococcus aureus", "Actinomyces israelii", "Streptococcus pyogenes", "Mycobacterium tuberculosis", "Treponema pallidum"], 1,
    "Aktinomikoz çoğunlukla diş çekimi ya da travma sonrası gelişir. Etken, ağız florasında bulunan Gram pozitif, anaerop, dallanan bir bakteridir; tedavide uzun süreli penisilin kullanılır.",
    "Актиномикоз обычно развивается после удаления зуба или травмы. Возбудитель — грамположительная анаэробная ветвящаяся бактерия микрофлоры рта; лечат длительным курсом пенициллина.");

  /* ---------- Patoloji ---------- */
  Q("pato-1", "pato", "genel", "Akut iltihabın baskın hücresi hangisidir?", "Какие клетки преобладают при остром воспалении?",
    [["Lenfosit", "Лимфоциты"], ["Plazma hücresi", "Плазматические клетки"], ["Nötrofil", "Нейтрофилы"], ["Makrofaj", "Макрофаги"], ["Fibroblast", "Фибробласты"]], 2,
    "Nötrofiller iltihap alanına ilk ulaşan hücrelerdir ve ilk 24 saatte baskındır. Kronik iltihapta ise lenfositler, plazma hücreleri ve makrofajlar öne çıkar.",
    "Нейтрофилы первыми приходят в очаг и преобладают в первые 24 часа. При хроническом воспалении доминируют лимфоциты, плазматические клетки и макрофаги.");
  Q("pato-2", "pato", "genel", "Granülomatöz iltihabın tanımlayıcı hücresi hangisidir?", "Какие клетки характерны для гранулематозного воспаления?",
    [["Eozinofil", "Эозинофилы"], ["Nötrofil", "Нейтрофилы"], ["Mast hücresi", "Тучные клетки"], ["Bazofil", "Базофилы"], ["Epiteloid histiyosit", "Эпителиоидные гистиоциты"]], 4,
    "Granülom, etkinleşmiş makrofajların (epiteloid histiyositlerin) kümelenmesidir; çevresinde lenfositler, içinde çoğu kez çok çekirdekli dev hücreler bulunur. Tüberküloz ve sarkoidoz tipik örneklerdir.",
    "Гранулёма — скопление активированных макрофагов (эпителиоидных гистиоцитов), окружённое лимфоцитами, часто с гигантскими многоядерными клетками. Типичные примеры — туберкулёз и саркоидоз.");
  Q("pato-3", "pato", "genel", "Apoptozu nekrozdan ayıran özellik hangisidir?", "Какой признак отличает апоптоз от некроза?",
    [["Hücrenin şişmesi", "Набухание клетки"], ["Çevrede iltihap oluşmaması", "Отсутствие воспаления вокруг"], ["Hücre zarının erken parçalanması", "Раннее разрушение клеточной мембраны"], ["Her zaman patolojik olması", "Всегда патологический характер"], ["Geniş doku alanlarını tutması", "Поражение обширных участков ткани"]], 1,
    "Apoptozda hücre büzülür, kromatin yoğunlaşır ve hücre zarla çevrili cisimciklere ayrılır; içerik dışarı sızmadığı için iltihap gelişmez. Embriyonik gelişim gibi fizyolojik süreçlerde de görülür.",
    "При апоптозе клетка сморщивается, хроматин конденсируется, клетка распадается на окружённые мембраной тельца; содержимое не выходит наружу, поэтому воспаления нет. Он встречается и в физиологических процессах, например в эмбриогенезе.");
  Q("pato-4", "pato", "genel", "Olgun bir hücre tipinin, başka bir olgun hücre tipine dönüşmesine ne ad verilir?", "Как называется замещение одного зрелого типа клеток другим зрелым типом?",
    [["Metaplazi", "Метаплазия"], ["Displazi", "Дисплазия"], ["Hiperplazi", "Гиперплазия"], ["Hipertrofi", "Гипертрофия"], ["Atrofi", "Атрофия"]], 0,
    "Metaplazi geri dönebilen bir uyum yanıtıdır; örneğin sigara içenlerde solunum yolu epitelinin çok katlı yassı epitele dönüşmesi. Displazi ise hücrelerde düzensizlik ve olgunlaşma bozukluğu anlamına gelir.",
    "Метаплазия — обратимая адаптивная реакция; пример — превращение эпителия дыхательных путей курильщика в многослойный плоский. Дисплазия означает атипию и нарушение созревания клеток.");
  Q("pato-5", "pato", "agiz", "Ağız boşluğunun en sık görülen kötü huylu tümörü hangisidir?", "Какая злокачественная опухоль полости рта встречается чаще всего?",
    [["Malign melanom", "Меланома"], ["Bazal hücreli karsinom", "Базальноклеточный рак"], ["Adenoid kistik karsinom", "Аденокистозный рак"], ["Skuamöz hücreli karsinom", "Плоскоклеточный рак"], ["Lenfoma", "Лимфома"]], 3,
    "Ağız kanserlerinin büyük çoğunluğu skuamöz hücreli karsinomdur. Tütün ve alkol başlıca risk etkenleridir; dilin yan kenarı ve ağız tabanı en sık tutulan bölgelerdir.",
    "Подавляющее большинство раков полости рта — плоскоклеточные. Основные факторы риска — табак и алкоголь; чаще всего поражаются боковая поверхность языка и дно полости рта.");
  Q("pato-6", "pato", "agiz", "Lökoplaki nasıl tanımlanır?", "Как определяют лейкоплакию?",
    [["Kazımakla kalkan beyaz plak", "Белый налёт, снимающийся при соскабливании"], ["Ağrılı, yüzeyel ülser", "Болезненная поверхностная язва"], ["Kazımakla kalkmayan ve başka bir hastalıkla açıklanamayan beyaz plak", "Белая бляшка, которая не соскабливается и не объясняется другим заболеванием"], ["Kırmızı, kadifemsi alan", "Красный бархатистый участок"], ["Pigmentli düz leke", "Плоское пигментное пятно"]], 2,
    "Lökoplaki klinik bir terimdir; kesin tanı için biyopsi gerekir. Kırmızı ve kadifemsi görünümdeki eritroplakide kötü huylu dönüşüm riski çok daha yüksektir.",
    "Лейкоплакия — клинический термин; для окончательного диагноза нужна биопсия. У красной бархатистой эритроплакии риск озлокачествления значительно выше.");
  Q("pato-7", "pato", "agiz", "Tükürük bezlerinin en sık görülen tümörü hangisidir?", "Какая опухоль слюнных желёз встречается чаще всего?",
    [["Warthin tümörü", "Опухоль Уортина"], ["Mukoepidermoid karsinom", "Мукоэпидермоидный рак"], ["Adenoid kistik karsinom", "Аденокистозный рак"], ["Asinik hücreli karsinom", "Ацинозно-клеточный рак"], ["Pleomorfik adenom", "Плеоморфная аденома"]], 4,
    "Pleomorfik adenom iyi huyludur ve en sık parotis bezinde görülür. Yetersiz çıkarıldığında yineleyebilir. En sık görülen kötü huylu tükürük bezi tümörü ise mukoepidermoid karsinomdur.",
    "Плеоморфная аденома доброкачественна и чаще всего возникает в околоушной железе. При неполном удалении рецидивирует. Самая частая злокачественная опухоль слюнных желёз — мукоэпидермоидный рак.");
  Q("pato-8", "pato", "agiz", "Yanak mukozasında iki taraflı, ağ biçiminde beyaz çizgilerle (Wickham çizgileri) seyreden hastalık hangisidir?", "Для какого заболевания характерны двусторонние сетчатые белые линии (сетка Уикхема) на слизистой щёк?",
    [["Lökoplaki", "Лейкоплакия"], ["Oral liken planus", "Красный плоский лишай полости рта"], ["Kandidoz", "Кандидоз"], ["Pemfigus vulgaris", "Вульгарная пузырчатка"], ["Aftöz stomatit", "Афтозный стоматит"]], 1,
    "Liken planus T hücre aracılı kronik bir hastalıktır. Retiküler tip çoğunlukla belirtisizdir; eroziv tipte ağrı ve yanma görülür ve hastanın düzenli izlenmesi gerekir.",
    "Красный плоский лишай — хроническое T-клеточно-опосредованное заболевание. Сетчатая форма обычно бессимптомна; эрозивная сопровождается болью и жжением и требует регулярного наблюдения.");

  /* ---------- Farmakoloji ---------- */
  Q("farm-1", "farm", "genel", "“İlk geçiş etkisi” neyi ifade eder?", "Что означает «эффект первого прохождения»?",
    [["İlacın ilk dozunun daha etkili olmasını", "Большую эффективность первой дозы"], ["İlacın böbrekten ilk süzülmesini", "Первую фильтрацию препарата почками"], ["İlacın plazma proteinlerine bağlanmasını", "Связывание препарата с белками плазмы"], ["Ağızdan alınan ilacın sistemik dolaşıma ulaşmadan karaciğerde metabolize edilmesini", "Метаболизм принятого внутрь препарата в печени до попадания в системный кровоток"], ["İlacın beyne ilk geçişini", "Первое поступление препарата в мозг"]], 3,
    "Bağırsaktan emilen ilaç portal ven yoluyla önce karaciğere gider. İlk geçiş etkisi yüksek olan ilaçların ağız yoluyla biyoyararlanımı düşüktür; dil altı uygulama bu etkiyi büyük ölçüde atlatır.",
    "Всосавшийся в кишечнике препарат по воротной вене сначала попадает в печень. У препаратов с выраженным эффектом первого прохождения пероральная биодоступность низкая; подъязычный приём во многом его обходит.");
  Q("farm-2", "farm", "genel", "Düzenli aralıklarla verilen bir ilaç, plazmada kararlı durum derişimine yaklaşık kaç yarı ömürde ulaşır?", "Через сколько примерно периодов полувыведения достигается равновесная концентрация при регулярном приёме препарата?",
    ["1", "2", "4–5", "8–10", "20"], 2,
    "Dört-beş yarı ömür sonunda kararlı durumun yaklaşık %95'ine ulaşılır. İlaç kesildiğinde vücuttan atılması da yaklaşık aynı süreyi alır.",
    "Через четыре–пять периодов полувыведения достигается около 95 % равновесного уровня. Примерно столько же времени занимает выведение после отмены.");
  Q("farm-3", "farm", "dis", "Lokal anesteziklerin etki mekanizması hangisidir?", "Каков механизм действия местных анестетиков?",
    [["Voltaj kapılı sodyum kanallarını bloke ederler", "Блокируют потенциалзависимые натриевые каналы"], ["Potasyum kanallarını açarlar", "Открывают калиевые каналы"], ["Asetilkolin salınımını artırırlar", "Усиливают выделение ацетилхолина"], ["GABA reseptörlerini uyarırlar", "Стимулируют ГАМК-рецепторы"], ["Prostaglandin sentezini engellerler", "Подавляют синтез простагландинов"]], 0,
    "İlacın iyonlaşmamış biçimi sinir zarını geçer, hücre içinde iyonlaşarak kanala iç yüzünden bağlanır. İltihaplı dokuda ortam asidik olduğundan iyonlaşmamış biçim azalır ve anestezi güçleşir.",
    "Неионизированная форма проходит через мембрану, внутри клетки ионизируется и связывается с каналом изнутри. В воспалённой ткани среда кислая, неионизированной формы меньше, и анестезия слабее.");
  Q("farm-4", "farm", "dis", "Steroid olmayan antiinflamatuar ilaçların (NSAİİ) temel etki mekanizması nedir?", "Каков основной механизм действия нестероидных противовоспалительных средств (НПВС)?",
    [["Opioid reseptörlerini uyarmak", "Стимуляция опиоидных рецепторов"], ["Histamin reseptörlerini bloke etmek", "Блокада гистаминовых рецепторов"], ["Fosfolipaz A₂'yi baskılamak", "Подавление фосфолипазы A₂"], ["Sodyum kanallarını bloke etmek", "Блокада натриевых каналов"], ["Siklooksijenazı baskılayarak prostaglandin sentezini azaltmak", "Подавление циклооксигеназы и снижение синтеза простагландинов"]], 4,
    "Prostaglandinlerin azalması ağrı, ateş ve iltihabı azaltır. Mide mukozasını koruyan prostaglandinler de azaldığı için mide yakınmaları sık görülen yan etkidir. Fosfolipaz A₂'yi baskılayan ilaçlar kortikosteroidlerdir.",
    "Снижение простагландинов уменьшает боль, лихорадку и воспаление. Так как снижаются и защитные простагландины желудка, часты желудочные побочные эффекты. Фосфолипазу A₂ подавляют кортикостероиды.");
  Q("farm-5", "farm", "dis", "Penisilinler bakterilere hangi yolla etki eder?", "Каков механизм действия пенициллинов на бактерии?",
    [["Protein sentezini 30S alt biriminde durdururlar", "Останавливают синтез белка на 30S-субъединице"], ["Hücre duvarı sentezini engellerler", "Нарушают синтез клеточной стенки"], ["DNA girazı baskılarlar", "Подавляют ДНК-гиразу"], ["Folik asit sentezini engellerler", "Блокируют синтез фолиевой кислоты"], ["Hücre zarını doğrudan parçalarlar", "Непосредственно разрушают клеточную мембрану"]], 1,
    "Beta-laktam antibiyotikler penisilin bağlayan proteinlere bağlanır ve peptidoglikan zincirleri arasındaki çapraz bağların kurulmasını engeller. Çoğalmakta olan bakterilerde öldürücü (bakterisit) etki gösterirler.",
    "Бета-лактамы связываются с пенициллинсвязывающими белками и нарушают образование поперечных сшивок пептидогликана. На размножающиеся бактерии действуют бактерицидно.");
  Q("farm-6", "farm", "dis", "Diş gelişimi döneminde kullanıldığında dişlerde kalıcı renklenmeye yol açan antibiyotik grubu hangisidir?", "Какая группа антибиотиков при применении в период формирования зубов вызывает их стойкое окрашивание?",
    [["Penisilinler", "Пенициллины"], ["Makrolidler", "Макролиды"], ["Sefalosporinler", "Цефалоспорины"], ["Tetrasiklinler", "Тетрациклины"], ["Aminoglikozitler", "Аминогликозиды"]], 3,
    "Tetrasiklinler kalsiyuma bağlanarak mineralize olmakta olan diş ve kemik dokusuna yerleşir. Bu nedenle gebelikte ve yaklaşık 8 yaşından küçük çocuklarda kullanılmazlar.",
    "Тетрациклины связываются с кальцием и откладываются в минерализующихся тканях зуба и кости. Поэтому их не назначают беременным и детям примерно до 8 лет.");
  Q("farm-7", "farm", "dis", "Aşağıdaki ilaçlardan hangisi dişeti büyümesine yol açabilir?", "Какой из перечисленных препаратов может вызывать гиперплазию десны?",
    [["Fenitoin", "Фенитоин"], ["Parasetamol", "Парацетамол"], ["Amoksisilin", "Амоксициллин"], ["Metformin", "Метформин"], ["Omeprazol", "Омепразол"]], 0,
    "İlaca bağlı dişeti büyümesinin üç klasik nedeni fenitoin (antiepileptik), siklosporin (bağışıklık baskılayıcı) ve nifedipin gibi kalsiyum kanal blokerleridir. İyi plak kontrolü büyümenin şiddetini azaltır.",
    "Три классические причины лекарственной гиперплазии десны — фенитоин (противоэпилептик), циклоспорин (иммунодепрессант) и блокаторы кальциевых каналов, например нифедипин. Хороший контроль налёта уменьшает выраженность.");
  Q("farm-8", "farm", "dis", "Parasetamol zehirlenmesinde kullanılan antidot hangisidir?", "Какой антидот применяют при отравлении парацетамолом?",
    [["Nalokson", "Налоксон"], ["Flumazenil", "Флумазенил"], ["N-asetilsistein", "N-ацетилцистеин"], ["Atropin", "Атропин"], ["Protamin sülfat", "Протамина сульфат"]], 2,
    "Yüksek dozda parasetamolün toksik metaboliti karaciğerdeki glutatyonu tüketir ve karaciğer hasarına yol açar. N-asetilsistein glutatyon depolarını yeniler. Nalokson opioid, flumazenil ise benzodiazepin zehirlenmesinde kullanılır.",
    "Токсичный метаболит парацетамола в высоких дозах истощает запасы глутатиона в печени и повреждает её. N-ацетилцистеин восполняет глутатион. Налоксон применяют при отравлении опиоидами, флумазенил — бензодиазепинами.");

  /* ---------- Biyoloji ve Genetik ---------- */
  Q("gene-1", "gene", "gen", "İnsanın vücut (somatik) hücrelerinde kaç kromozom bulunur?", "Сколько хромосом в соматических клетках человека?",
    ["23", "44", "46", "48", "92"], 2,
    "Vücut hücreleri 22 çift otozom ve bir çift cinsiyet kromozomu olmak üzere 46 kromozom taşır (diploit). Üreme hücreleri ise 23 kromozomludur (haploit).",
    "Соматические клетки содержат 46 хромосом: 22 пары аутосом и пару половых хромосом (диплоидный набор). Половые клетки имеют 23 хромосомы (гаплоидный набор).");
  Q("gene-2", "gene", "gen", "Mayoz bölünmenin sonunda hangi hücreler oluşur?", "Какие клетки образуются в результате мейоза?",
    [["İki diploit hücre", "Две диплоидные клетки"], ["Dört haploit hücre", "Четыре гаплоидные клетки"], ["İki haploit hücre", "Две гаплоидные клетки"], ["Dört diploit hücre", "Четыре диплоидные клетки"], ["Tek bir poliploit hücre", "Одна полиплоидная клетка"]], 1,
    "Mayoz, art arda iki bölünmeyle kromozom sayısını yarıya indirir ve parça değişimi (krossing-over) sayesinde genetik çeşitlilik sağlar. Mitozda ise ana hücreyle özdeş iki diploit hücre oluşur.",
    "Мейоз за два последовательных деления вдвое уменьшает число хромосом и обеспечивает генетическое разнообразие благодаря кроссинговеру. При митозе образуются две диплоидные клетки, идентичные материнской.");
  Q("gene-3", "gene", "gen", "Protein sentezi hücrenin hangi yapısında gerçekleşir?", "В какой структуре клетки происходит синтез белка?",
    [["Lizozom", "Лизосома"], ["Golgi aygıtı", "Аппарат Гольджи"], ["Peroksizom", "Пероксисома"], ["Sentrozom", "Центросома"], ["Ribozom", "Рибосома"]], 4,
    "Ribozomlar mRNA'daki şifreyi okuyarak amino asitleri birbirine bağlar. Salgılanacak proteinler granüllü endoplazmik retikulum üzerindeki ribozomlarda yapılır ve Golgi aygıtında işlenir.",
    "Рибосомы считывают код мРНК и соединяют аминокислоты. Секретируемые белки синтезируются на рибосомах гранулярного эндоплазматического ретикулума и дорабатываются в аппарате Гольджи.");
  Q("gene-4", "gene", "gen", "DNA'da adenin hangi bazla eşleşir?", "С каким основанием спаривается аденин в ДНК?",
    [["Timin", "Тимин"], ["Guanin", "Гуанин"], ["Sitozin", "Цитозин"], ["Urasil", "Урацил"], ["Adenin", "Аденин"]], 0,
    "Adenin timinle iki, guanin sitozinle üç hidrojen bağı kurar. RNA'da timinin yerini urasil alır.",
    "Аденин образует с тимином две водородные связи, гуанин с цитозином — три. В РНК вместо тимина находится урацил.");
  Q("gene-5", "gene", "gen", "DNA'daki bilginin RNA'ya aktarılmasına ne ad verilir?", "Как называется перенос информации с ДНК на РНК?",
    [["Replikasyon", "Репликация"], ["Translasyon", "Трансляция"], ["Mutasyon", "Мутация"], ["Transkripsiyon", "Транскрипция"], ["Transdüksiyon", "Трансдукция"]], 3,
    "Transkripsiyonu RNA polimeraz gerçekleştirir. Replikasyon DNA'nın kendini eşlemesi, translasyon ise mRNA'daki şifrenin proteine çevrilmesidir.",
    "Транскрипцию осуществляет РНК-полимераза. Репликация — удвоение ДНК, трансляция — перевод кода мРНК в белок.");
  Q("gene-6", "gene", "gen", "Down sendromunun en sık nedeni hangisidir?", "Какова наиболее частая причина синдрома Дауна?",
    [["Trizomi 13", "Трисомия 13"], ["Trizomi 18", "Трисомия 18"], ["Trizomi 21", "Трисомия 21"], ["Monozomi X", "Моносомия X"], ["47,XXY", "47,XXY"]], 2,
    "Olguların büyük çoğunluğu, mayozda kromozomların ayrılmamasına bağlı fazladan bir 21. kromozomdan kaynaklanır. Ağız bulguları arasında büyük dil, gecikmiş diş sürmesi ve periodontal hastalığa yatkınlık sayılabilir.",
    "В большинстве случаев причина — лишняя 21-я хромосома вследствие нерасхождения хромосом в мейозе. Среди проявлений в полости рта — макроглоссия, задержка прорезывания и склонность к заболеваниям пародонта.");
  Q("gene-7", "gene", "gen", "Hücrede ATP üretiminin başlıca gerçekleştiği organel hangisidir?", "В какой органелле клетки образуется основная часть АТФ?",
    [["Çekirdek", "Ядро"], ["Mitokondri", "Митохондрия"], ["Lizozom", "Лизосома"], ["Golgi aygıtı", "Аппарат Гольджи"], ["Düz endoplazmik retikulum", "Гладкий эндоплазматический ретикулум"]], 1,
    "Oksidatif fosforilasyon mitokondrinin iç zarında gerçekleşir. Mitokondrinin kendine ait halkasal bir DNA'sı vardır ve bu DNA anneden aktarılır.",
    "Окислительное фосфорилирование происходит на внутренней мембране митохондрий. Митохондрии имеют собственную кольцевую ДНК, наследуемую от матери.");
  Q("gene-8", "gene", "gen", "Yalnızca mine oluşumunu etkileyen kalıtsal gelişim bozukluğu hangisidir?", "Какое наследственное нарушение развития затрагивает только формирование эмали?",
    [["Dentinogenezis imperfekta", "Несовершенный дентиногенез"], ["Dentin displazisi", "Дисплазия дентина"], ["Osteogenezis imperfekta", "Несовершенный остеогенез"], ["Kleidokraniyal displazi", "Ключично-черепная дисплазия"], ["Amelogenezis imperfekta", "Несовершенный амелогенез"]], 4,
    "Amelogenezis imperfektada mine ince, yumuşak ya da yetersiz mineralize olabilir; dentin ve pulpa normaldir. Dentinogenezis imperfektada ise dentin etkilenir, dişler opalesan görünür ve pulpa odaları daralır.",
    "При несовершенном амелогенезе эмаль тонкая, мягкая или недостаточно минерализована; дентин и пульпа нормальны. При несовершенном дентиногенезе поражён дентин: зубы опалесцируют, полости зуба облитерируются.");
})();
