/* Özgün soru bankası — 6. paket: 16 branşın her birine 4 soru. Tüm sorular bu site için yazılmıştır. */
(function () {
  const D = window.DUS_DATA;
  const o = (a) => a.map((x) => (typeof x === "string" ? x : { tr: x[0], ru: x[1] }));
  const Q = (id, branch, tp, tr, ru, opts, answer, etr, eru) => D.questions.push({ id, branch, topic: tp, q: { tr, ru }, options: o(opts), answer, exp: { tr: etr, ru: eru } });
  const PA = [["Yalnız I", "Только I"], ["Yalnız III", "Только III"], ["I ve II", "I и II"], ["II ve III", "II и III"], ["I, II ve III", "I, II и III"]];
  const PB = [["Yalnız I", "Только I"], ["Yalnız II", "Только II"], ["I ve II", "I и II"], ["I ve III", "I и III"], ["I, II ve III", "I, II и III"]];

  /* ---------- Restoratif ---------- */
  Q("rest-17", "rest", "curuk", "I. Duyarlı diş yüzeyi\nII. Asit üreten mikroorganizmalar\nIII. Fermente olabilen karbonhidratlar\n\nYukarıdakilerden hangileri diş çürüğünün oluşması için gerekli etkenlerdendir?", "I. Восприимчивая поверхность зуба\nII. Кислотообразующие микроорганизмы\nIII. Ферментируемые углеводы\n\nЧто из перечисленного необходимо для возникновения кариеса?",
    PA, 4,
    "Çürük çok etkenli bir hastalıktır: konak, mikroorganizma ve besin etkenlerinin yeterli süre birlikte bulunması gerekir. Zaman dördüncü etken olarak kabul edilir.",
    "Кариес — многофакторное заболевание: необходимо достаточно длительное сочетание факторов хозяина, микрофлоры и питания. Время считают четвёртым фактором.");
  Q("rest-18", "rest", "materyal", "Amalgam restorasyonun bitirme ve parlatma işlemi en erken ne zaman yapılmalıdır?", "Когда самое раннее следует проводить финишную обработку и полировку амальгамовой пломбы?",
    [["Yerleştirildikten hemen sonra", "Сразу после постановки"], ["15 dakika sonra", "Через 15 минут"], ["1 saat sonra", "Через 1 час"], ["24 saat sonra", "Через 24 часа"], ["1 ay sonra", "Через 1 месяц"]], 3,
    "Amalgam yeterli dayanımına yaklaşık 24 saatte ulaşır. Parlatma yüzey pürüzlülüğünü azaltır; böylece plak tutulumu, korozyon ve kenar kırıkları azalır.",
    "Амальгама достигает достаточной прочности примерно через 24 часа. Полировка снижает шероховатость, уменьшая ретенцию налёта, коррозию и сколы краёв.");
  Q("rest-19", "rest", "sert-doku", "Dişlerini yatay hareketlerle ve sert fırçayla fırçalayan bir hastada, premolarların vestibül yüzünde, dişeti kenarına yakın, kama biçimli, sert ve parlak yüzeyli çürüksüz lezyonlar görülüyor. En olası tanı hangisidir?", "У пациента, чистящего зубы жёсткой щёткой горизонтальными движениями, на вестибулярной поверхности премоляров у десневого края обнаружены клиновидные некариозные дефекты с твёрдой блестящей поверхностью. Каков наиболее вероятный диагноз?",
    [["Atrizyon", "Патологическая стираемость (аттриция)"], ["Erozyon", "Эрозия"], ["Abrazyon", "Абразия"], ["İç rezorpsiyon", "Внутренняя резорбция"], ["Kök çürüğü", "Кариес корня"]], 2,
    "Abrazyon, diş dokusunun diş-diş teması dışındaki mekanik etkenlerle aşınmasıdır. Atrizyon dişlerin birbirine sürtünmesiyle, erozyon ise bakteri kaynaklı olmayan asitlerle oluşur ve yüzeyi düz, geniş çukurlar biçimindedir.",
    "Абразия — стирание тканей зуба механическими факторами, не связанными с контактом зубов. Аттриция возникает при трении зуб о зуб, эрозия — от кислот небактериального происхождения и имеет вид плоских широких дефектов.");
  Q("rest-20", "rest", "materyal", "Işıkla sertleştirilen kompozitin yüzeyinde kalan ince, yapışkan ve sertleşmemiş tabakanın nedeni nedir?", "Чем обусловлен тонкий липкий неотверждённый слой на поверхности светоотверждаемого композита?",
    [["Oksijenin polimerizasyonu engellemesi", "Ингибированием полимеризации кислородом"], ["Işık cihazının gücünün fazla olması", "Избыточной мощностью лампы"], ["Doldurucu oranının yüksek olması", "Высоким содержанием наполнителя"], ["Tükürükle bulaşma", "Загрязнением слюной"], ["Asitleme süresinin uzun olması", "Длительным протравливанием"]], 0,
    "Havadaki oksijen serbest radikallerle tepkimeye girerek yüzeydeki polimerizasyonu durdurur. Bu tabaka, sonraki kompozit katmanının kimyasal olarak bağlanmasını sağlar; son katmanda ise bitirme işlemiyle uzaklaştırılır.",
    "Кислород воздуха реагирует со свободными радикалами и останавливает полимеризацию на поверхности. Этот слой обеспечивает химическую связь со следующей порцией композита; на последнем слое его удаляют при финишной обработке.");

  /* ---------- Protetik ---------- */
  Q("prot-17", "prot", "sabit", "Sabit protez destek dişi için ideal kabul edilen kron–kök oranı hangisidir?", "Какое соотношение коронки и корня считают идеальным для опорного зуба несъёмного протеза?",
    ["2:1", "1:1", "3:2", "1:2", "3:1"], 3,
    "İdeal oran 1:2, kabul edilebilir oran 2:3'tür; 1:1 en alt sınır sayılır. Kemik desteği azaldıkça kron kolu uzar ve dişe gelen yan kuvvetlerin zararı artar.",
    "Идеальное соотношение — 1:2, приемлемое — 2:3; 1:1 считают минимально допустимым. При убыли кости рычаг коронки удлиняется, и боковые нагрузки становятся более вредными.");
  Q("prot-18", "prot", "hareketli", "Hareketli bölümlü protez planlamasında paralelometre hangi amaçla kullanılır?", "Для чего применяют параллелометр при планировании частичного съёмного протеза?",
    [["Dikey boyutu ölçmek", "Для измерения высоты прикуса"], ["Protezin giriş yolunu ve dişlerin ekvator çizgisini belirlemek", "Для определения пути введения протеза и линии обзора (экватора) зубов"], ["Diş rengini seçmek", "Для выбора цвета зубов"], ["Sentrik ilişkiyi kaydetmek", "Для регистрации центрального соотношения"], ["Kondil yolu eğimini ölçmek", "Для измерения наклона суставного пути"]], 1,
    "Paralelometreyle giriş yolu seçilir; destek dişlerdeki tutucu andırkatlar, engelleyici bölgeler ve kılavuz düzlemler saptanır.",
    "С помощью параллелометра выбирают путь введения, определяют ретенционные поднутрения, мешающие участки и направляющие плоскости на опорных зубах.");
  Q("prot-19", "prot", "olcu", "Tam protezlerde dikey boyutun olması gerekenden yüksek verilmesinin tipik sonucu hangisidir?", "Каково типичное следствие завышения высоты прикуса в полных протезах?",
    [["Ağız köşelerinde çatlaklar", "Заеды в углах рта"], ["Yüzün alt bölümünün kısa görünmesi", "Укорочение нижней трети лица"], ["Konuşurken dişlerin birbirine çarpması ve çiğneme kaslarında yorgunluk", "Стук зубов при разговоре и утомление жевательных мышц"], ["Çenenin öne doğru çıkık görünmesi", "Выступание подбородка вперёд"], ["Dudakların içe çökmesi", "Западение губ"]], 2,
    "Yüksek dikey boyutta dinlenme aralığı kaybolur; kaslar sürekli gergin kalır ve protez altındaki dokularda ağrı oluşur. Ağız köşesi çatlakları, kısa yüz görünümü ve çenenin öne çıkması ise düşük dikey boyutun bulgularıdır.",
    "При завышении исчезает межокклюзионный промежуток покоя; мышцы постоянно напряжены, под протезом возникает боль. Заеды, укорочение лица и выступание подбородка — признаки заниженной высоты.");
  Q("prot-20", "prot", "sabit", "Hidroflorik asitle pürüzlendirilen cam seramik yüzeyine, rezin simanla kimyasal bağ sağlamak için hangi ajan uygulanır?", "Какое средство наносят на протравленную плавиковой кислотой стеклокерамику для химической связи с композитным цементом?",
    [["Fosforik asit", "Фосфорная кислота"], ["Poliakrilik asit", "Полиакриловая кислота"], ["Glutaraldehit", "Глутаральдегид"], ["Öjenol", "Эвгенол"], ["Silan", "Силан"]], 4,
    "Silan iki işlevli bir moleküldür: bir ucu seramikteki silikaya, diğer ucu rezinin metakrilat gruplarına bağlanır. Zirkonya gibi cam içermeyen seramiklerde hidroflorik asit ve silan etkili değildir.",
    "Силан — бифункциональная молекула: один конец связывается с кремнезёмом керамики, другой — с метакрилатными группами смолы. Для бесстекольной керамики (например, диоксида циркония) плавиковая кислота и силан неэффективны.");

  /* ---------- Cerrahi ---------- */
  Q("cer-17", "cer", "cekim", "I. Sigara kullanımı\nII. Travmatik ve uzun süren çekim\nIII. Ağızdan alınan doğum kontrol ilaçları\n\nYukarıdakilerden hangileri alveolit (kuru soket) riskini artırır?", "I. Курение\nII. Травматичное и длительное удаление\nIII. Приём оральных контрацептивов\n\nЧто из перечисленного повышает риск альвеолита («сухой лунки»)?",
    PA, 4,
    "Bu etkenlerin tümü pıhtının erken parçalanmasını (fibrinoliz) kolaylaştırır. Alt üçüncü molar çekimleri ve yetersiz ağız hijyeni de riski artırır.",
    "Все эти факторы способствуют раннему распаду сгустка (фибринолизу). Риск также повышают удаление нижних третьих моляров и плохая гигиена.");
  Q("cer-18", "cer", "patoloji", "Diş çekildikten sonra, kökünün ucundaki kist dokusunun çenede bırakılmasıyla ortaya çıkan kist hangisidir?", "Какая киста возникает, если после удаления зуба в челюсти оставлена кистозная ткань у его верхушки?",
    [["Rezidüel kist", "Резидуальная киста"], ["Dentigeröz kist", "Фолликулярная киста"], ["Lateral periodontal kist", "Латеральная периодонтальная киста"], ["Nazopalatin kanal kisti", "Киста носонёбного канала"], ["Erüpsiyon kisti", "Киста прорезывания"]], 0,
    "Rezidüel kist, kökeni radiküler kist olan ve dişsiz bölgede radyolüsent alan olarak görülen bir kisttir. Bu nedenle çekim sonrası soketteki patolojik doku kazınarak temizlenmelidir.",
    "Резидуальная киста по происхождению радикулярная и выглядит как просветление в беззубом участке. Поэтому после удаления патологические ткани в лунке следует выскабливать.");
  Q("cer-19", "cer", "travma", "Mandibula angulus kırığında arkadaki (proksimal) kemik parçasını yukarı doğru çeken kaslar hangileridir?", "Какие мышцы смещают задний (проксимальный) отломок кверху при переломе угла нижней челюсти?",
    [["M. digastricus ve m. geniohyoideus", "Двубрюшная и подбородочно-подъязычная"], ["M. masseter, m. temporalis ve m. pterygoideus medialis", "Жевательная, височная и медиальная крыловидная"], ["M. mylohyoideus ve m. genioglossus", "Челюстно-подъязычная и подбородочно-язычная"], ["M. buccinator ve m. orbicularis oris", "Щёчная и круговая мышца рта"], ["M. sternocleidomastoideus", "Грудино-ключично-сосцевидная"]], 1,
    "Çeneyi kaldıran kaslar arka parçayı yukarı ve öne, suprahyoid kaslar ise öndeki parçayı aşağı ve arkaya çeker. Kırık hattının yönü bu çekişe karşı koyuyorsa kırık “elverişli”, kolaylaştırıyorsa “elverişsiz” olarak adlandırılır.",
    "Поднимающие челюсть мышцы тянут задний отломок вверх и вперёд, надподъязычные — передний отломок вниз и назад. Если линия перелома противодействует этой тяге, перелом называют «благоприятным», если способствует — «неблагоприятным».");
  Q("cer-20", "cer", "cekim", "Üst azı dişi çekiminden sonra ağız ile maksiller sinüs arasında açıklık oluşup oluşmadığını anlamak için hangi test uygulanır?", "Какую пробу проводят после удаления верхнего моляра, чтобы выявить сообщение полости рта с верхнечелюстной пазухой?",
    [["Perküsyon testi", "Перкуссия"], ["Vitalite testi", "Тест витальности"], ["Burun kapatılarak üfletme (Valsalva) testi", "Носовая проба с выдохом при зажатом носе (проба Вальсальвы)"], ["Isırma testi", "Накусочная проба"], ["Transillüminasyon", "Трансиллюминация"]], 2,
    "Hastanın burnu kapatılır ve hafifçe üflemesi istenir; soketten hava ya da kabarcıklı kan gelmesi açıklığı gösterir. Açıklık varsa hastaya sümkürmemesi, pipet kullanmaması ve sigara içmemesi söylenir.",
    "Пациенту зажимают нос и просят слегка выдохнуть; выход воздуха или пузырящейся крови из лунки указывает на сообщение. При его наличии запрещают сморкаться, пить через соломинку и курить.");

  /* ---------- Radyoloji ---------- */
  Q("rad-17", "rad", "teknik", "Panoramik radyografide hastanın çenesi olması gerekenden fazla yukarı kaldırılırsa görüntüde ne olur?", "Что происходит на панорамном снимке, если подбородок пациента поднят выше, чем нужно?",
    [["Oklüzal düzlem abartılı bir gülümseme eğrisi oluşturur", "Окклюзионная плоскость образует преувеличенную «улыбку»"], ["Ön dişler olduğundan geniş görünür", "Передние зубы выглядят шире"], ["Görüntünün bir yarısı diğerinden büyük çıkar", "Одна половина изображения больше другой"], ["Oklüzal düzlem düzleşir ya da ters eğri oluşturur; sert damak üst diş köklerinin üzerine biner", "Окклюзионная плоскость уплощается или выгибается в обратную сторону; твёрдое нёбо накладывается на корни верхних зубов"], ["Omurga görüntünün ortasında belirir", "Позвоночник проецируется на центр снимка"]], 3,
    "Çene fazla aşağıda olduğunda ise abartılı gülümseme eğrisi oluşur ve alt kesicilerin kökleri bulanıklaşır. Başın bir yana dönmesi, bir yarının diğerinden büyük görünmesine yol açar.",
    "При опущенном подбородке, напротив, возникает преувеличенная «улыбка» и размываются корни нижних резцов. Поворот головы приводит к тому, что одна половина выглядит крупнее другой.");
  Q("rad-18", "rad", "yorum", "Aşağıdakilerden hangisi radyografide radyoopak görülmez?", "Что из перечисленного не выглядит на рентгенограмме рентгеноконтрастным?",
    [["Amalgam dolgu", "Амальгамовая пломба"], ["Güta-perka", "Гуттаперча"], ["Mine", "Эмаль"], ["Metal kron", "Металлическая коронка"], ["Pulpa odası", "Полость зуба"]], 4,
    "Pulpa odası yumuşak doku içerdiğinden X-ışınlarını az tutar ve radyolüsent görünür. Çürük, periodontal aralık ve sinüsler de radyolüsenttir.",
    "Полость зуба содержит мягкие ткани, слабо поглощает лучи и выглядит как просветление. Кариес, периодонтальная щель и пазухи также рентгенопрозрачны.");
  Q("rad-19", "rad", "fizik", "Radyasyonun, eşik dozu bulunmayan ve görülme olasılığı dozla birlikte artan etkilerine ne ad verilir?", "Как называют эффекты излучения, не имеющие порога дозы, вероятность которых возрастает с дозой?",
    [["Deterministik etkiler", "Детерминированные эффекты"], ["Stokastik etkiler", "Стохастические эффекты"], ["Akut etkiler", "Острые эффекты"], ["Termal etkiler", "Тепловые эффекты"], ["Yerel etkiler", "Местные эффекты"]], 1,
    "Kanser ve kalıtsal etkiler stokastiktir; dozla birlikte şiddeti değil, olasılığı artar. Deri kızarıklığı ve katarakt gibi deterministik etkiler ise belirli bir eşik dozun üzerinde ortaya çıkar ve şiddetleri dozla artar.",
    "Рак и наследственные эффекты стохастичны: с дозой растёт не тяжесть, а вероятность. Детерминированные эффекты (эритема, катаракта) возникают выше порога, и их тяжесть зависит от дозы.");
  Q("rad-20", "rad", "teknik", "Konik ışınlı bilgisayarlı tomografinin (KIBT) en belirgin sınırlılığı hangisidir?", "Каково основное ограничение конусно-лучевой компьютерной томографии (КЛКТ)?",
    [["Yumuşak doku kontrastının düşük olması", "Низкий контраст мягких тканей"], ["Kemik yapıları gösterememesi", "Невозможность визуализировать кость"], ["Üç boyutlu görüntü verememesi", "Отсутствие трёхмерного изображения"], ["Yalnızca ön dişleri görüntüleyebilmesi", "Возможность исследовать только передние зубы"], ["Radyasyon içermemesi", "Отсутствие излучения"]], 0,
    "KIBT sert dokuları yüksek çözünürlükle ve tıbbi BT'ye göre daha düşük dozla gösterir; ancak yumuşak doku ayrımı zayıftır ve metal restorasyonlar görüntüde yapay izler oluşturur.",
    "КЛКТ отображает твёрдые ткани с высоким разрешением и меньшей дозой, чем медицинская КТ, но плохо дифференцирует мягкие ткани, а металлические реставрации дают артефакты.");

  /* ---------- Periodontoloji ---------- */
  Q("perio-17", "perio", "mikro", "I. Biyofilm yapısındadır.\nII. Su spreyi ile kolayca uzaklaştırılır.\nIII. Diş yüzeyine sıkıca tutunur.\n\nDental plakla ilgili yukarıdaki ifadelerden hangileri doğrudur?", "I. Имеет структуру биоплёнки.\nII. Легко удаляется струёй воды.\nIII. Плотно прикреплён к поверхности зуба.\n\nКакие утверждения о зубном налёте верны?",
    PB, 3,
    "Dental plak ancak fırçalama gibi mekanik yollarla uzaklaştırılabilir. Su spreyi ile kolayca uzaklaşan gevşek birikinti materia alba'dır.",
    "Зубной налёт удаляется только механически, например щёткой. Рыхлые отложения, легко смываемые водой, — это materia alba.");
  Q("perio-18", "perio", "tedavi", "Miller sınıflamasına göre, mukogingival birleşime ulaşmayan ve komşu ara yüzlerde kemik ya da yumuşak doku kaybı bulunmayan dişeti çekilmesi hangi sınıftır?", "К какому классу по Миллеру относится рецессия десны, не достигающая мукогингивального соединения, без потери кости и мягких тканей в межзубных участках?",
    [["Sınıf I", "I класс"], ["Sınıf II", "II класс"], ["Sınıf III", "III класс"], ["Sınıf IV", "IV класс"], ["Sınıf V", "V класс"]], 0,
    "Sınıf I ve II'de ara yüz dokuları sağlam olduğundan cerrahiyle kök yüzeyinin tam kapanması beklenir. Sınıf II'de çekilme mukogingival birleşime ulaşır ya da onu geçer. Sınıf III'te kısmi kapanma, Sınıf IV'te ise kapanma beklenmez.",
    "При I и II классах межзубные ткани сохранены, поэтому можно ожидать полного закрытия корня. При II классе рецессия достигает мукогингивального соединения или переходит его. При III классе возможно частичное закрытие, при IV — закрытия не ожидают.");
  Q("perio-19", "perio", "anatomi", "Sağlıklı dişetinde “portakal kabuğu” görünümü (stippling) hangi bölgede izlenir?", "В какой зоне здоровой десны наблюдается вид «апельсиновой корки» (стипплинг)?",
    [["Serbest dişeti kenarı", "Свободный десневой край"], ["Alveoler mukoza", "Альвеолярная слизистая"], ["Dişeti oluğu epiteli", "Эпителий десневой борозды"], ["Yapışık dişeti", "Прикреплённая десна"], ["Birleşim epiteli", "Соединительный эпителий"]], 3,
    "Bu görünüm, yapışık dişetinin alttaki kemiğe ve semente kollajen liflerle sıkıca bağlanmasından kaynaklanır. İltihapta ödem nedeniyle kaybolur; ancak her sağlıklı bireyde bulunmayabilir.",
    "Этот вид обусловлен плотным прикреплением десны коллагеновыми волокнами к кости и цементу. При воспалении он исчезает из-за отёка; однако присутствует не у всех здоровых людей.");
  Q("perio-20", "perio", "tedavi", "Oklüzal travmanın en tipik radyografik bulgusu hangisidir?", "Каков наиболее типичный рентгенологический признак окклюзионной травмы?",
    [["Alveoler kretin yatay erimesi", "Горизонтальная убыль альвеолярного гребня"], ["Kök yüzeyinde diş taşı", "Зубной камень на корне"], ["Periodontal aralığın genişlemesi", "Расширение периодонтальной щели"], ["Pulpa odasının genişlemesi", "Расширение полости зуба"], ["Ara yüz çürüğü", "Апроксимальный кариес"]], 2,
    "Aşırı oklüzal kuvvet periodontal aralıkta genişleme, lamina durada kalınlaşma ve diş hareketliliğinde artışa yol açabilir. Oklüzal travma tek başına cep oluşumuna ya da ataşman kaybına neden olmaz.",
    "Чрезмерная окклюзионная нагрузка вызывает расширение периодонтальной щели, утолщение lamina dura и повышение подвижности. Сама по себе окклюзионная травма не приводит к образованию карманов и потере прикрепления.");

  /* ---------- Ortodonti ---------- */
  Q("orto-17", "orto", "tani", "Ortodontide el-bilek radyografisi hangi amaçla alınır?", "С какой целью в ортодонтии делают рентгенограмму кисти и запястья?",
    [["Diş yaşını belirlemek", "Для определения зубного возраста"], ["Çene eklemini değerlendirmek", "Для оценки височно-нижнечелюстного сустава"], ["Gömülü dişlerin yerini saptamak", "Для локализации ретенированных зубов"], ["Kemik yoğunluğunu ölçmek", "Для измерения плотности кости"], ["İskelet yaşını ve büyüme atılımının dönemini belirlemek", "Для определения скелетного возраста и периода ростового скачка"]], 4,
    "Büyümeyi yönlendiren ortopedik ve fonksiyonel tedavilerin zamanlaması için büyüme atılımının bilinmesi gerekir. Aynı amaçla lateral sefalometrik filmdeki boyun omurlarının olgunlaşma evreleri de kullanılabilir.",
    "Для планирования ортопедического и функционального лечения нужно знать время ростового скачка. С той же целью используют стадии созревания шейных позвонков на боковой телерентгенограмме.");
  Q("orto-18", "orto", "tani", "Sekiz yaşındaki bir çocukta üst santral kesiciler arasında aralık var, lateral kesiciler distale doğru eğimli ve henüz kaninler sürmemiş. Başka bir bulgu yok. En uygun yaklaşım hangisidir?", "У восьмилетнего ребёнка между верхними центральными резцами промежуток, боковые резцы наклонены дистально, клыки ещё не прорезались. Других отклонений нет. Какова оптимальная тактика?",
    [["Aralığın hemen sabit apareyle kapatılması", "Немедленное закрытие промежутка несъёмной аппаратурой"], ["Dudak bağının (frenulum) alınması", "Френэктомия"], ["Lateral kesicilerin çekilmesi", "Удаление боковых резцов"], ["İzleme; durum çoğunlukla kaninler sürünce kendiliğinden düzelir", "Наблюдение; обычно состояние нормализуется после прорезывания клыков"], ["Üst çenenin genişletilmesi", "Расширение верхней челюсти"]], 3,
    "Bu geçici evre “çirkin ördek yavrusu dönemi” olarak bilinir: sürmekte olan kaninler lateral kesicilerin köklerine baskı yaparak kronları distale iter. Kaninler sürdüğünde aralık çoğunlukla kapanır.",
    "Этот временный этап называют стадией «гадкого утёнка»: прорезывающиеся клыки давят на корни боковых резцов и отклоняют коронки дистально. После прорезывания клыков промежуток обычно закрывается.");
  Q("orto-19", "orto", "biyomekanik", "Ortodontide “ankraj” terimi neyi ifade eder?", "Что в ортодонтии означает термин «опора» (анкораж)?",
    [["Dişlerin döndürülmesini", "Ротацию зубов"], ["İstenmeyen diş hareketine karşı gösterilen direnci", "Сопротивление нежелательному перемещению зубов"], ["Tedavi sonrası pekiştirmeyi", "Ретенцию после лечения"], ["Telin esnekliğini", "Упругость дуги"], ["Braketin dişe yapıştırılmasını", "Фиксацию брекета на зубе"]], 1,
    "Her kuvvet eşit ve zıt yönlü bir tepki kuvveti doğurur. Ankraj, hareket etmesi istenmeyen dişlerin bu tepki kuvvetine dayanabilmesidir; gerektiğinde ağız dışı apareyler ya da mini vidalarla güçlendirilir.",
    "Каждая сила вызывает равную противоположно направленную силу реакции. Опора — способность зубов, которые не должны смещаться, противостоять этой реакции; при необходимости её усиливают внеротовыми аппаратами или мини-винтами.");
  Q("orto-20", "orto", "aparey", "Uzun süre devam eden parmak emme alışkanlığının en tipik sonucu hangisidir?", "Каково наиболее типичное следствие длительной привычки сосать палец?",
    [["Ön açık kapanış", "Передний открытый прикус"], ["Derin kapanış", "Глубокий прикус"], ["Alt çenenin öne gelişmesi", "Переднее развитие нижней челюсти"], ["Arka dişlerde artmış dikey örtüşme", "Увеличенное вертикальное перекрытие в боковых отделах"], ["Üst kesicilerin geriye eğilmesi", "Ретрузия верхних резцов"]], 0,
    "Parmak, kesici dişlerin sürmesini engeller ve üst kesicileri öne iter; yanak kaslarının baskısıyla üst çene daralabilir ve arka çapraz kapanış gelişebilir. Alışkanlık daimi kesiciler sürmeden bırakılırsa değişikliklerin çoğu kendiliğinden düzelir.",
    "Палец препятствует прорезыванию резцов и смещает верхние резцы вперёд; из-за давления щёк верхняя челюсть сужается, возможен задний перекрёстный прикус. Если привычка прекращается до прорезывания постоянных резцов, большинство изменений исчезает самостоятельно.");

  /* ---------- Endodonti ---------- */
  Q("endo-17", "endo", "pulpa", "Bir dişte vitalite testlerine yanıt alınamıyor, perküsyonda ve ısırmada belirgin ağrı var, radyografide periapikal bölge normal görünüyor. En olası tanı hangisidir?", "Зуб не отвечает на тесты витальности, перкуссия и накусывание резко болезненны, на снимке периапикальная область без изменений. Каков наиболее вероятный диагноз?",
    [["Geri dönüşümlü pulpitis", "Обратимый пульпит"], ["Asemptomatik apikal periodontitis", "Бессимптомный апикальный периодонтит"], ["Pulpa nekrozu ve semptomatik apikal periodontitis", "Некроз пульпы и симптоматический апикальный периодонтит"], ["Kronik apikal apse", "Хронический апикальный абсцесс"], ["Kondensing osteitis", "Конденсирующий остеит"]], 2,
    "Testlere yanıt alınamaması pulpa nekrozunu, perküsyon ağrısı ise periapikal dokuların iltihabını gösterir. Erken dönemde kemik yıkımı radyografide henüz görülmeyebilir. Kronik apikal apsede fistül bulunur ve ağrı çoğunlukla yoktur.",
    "Отсутствие ответа на тесты говорит о некрозе пульпы, боль при перкуссии — о воспалении периапикальных тканей. На ранней стадии разрушение кости на снимке может быть ещё не видно. При хроническом апикальном абсцессе есть свищ, а боли обычно нет.");
  Q("endo-18", "endo", "morfoloji", "Üst kesici dişlerde endodontik giriş kavitesi hangi yüzeyden açılır?", "С какой поверхности создают эндодонтический доступ в верхних резцах?",
    [["Kesici kenardan", "С режущего края"], ["Vestibül yüzden", "С вестибулярной поверхности"], ["Mezial yüzden", "С мезиальной поверхности"], ["Distal yüzden", "С дистальной поверхности"], ["Palatinal yüzden", "С нёбной поверхности"]], 4,
    "Giriş, palatinal yüzde singulumun hemen üzerinden açılır; böylece estetik korunur ve kanala olabildiğince düz bir yoldan ulaşılır. Giriş ağzında bırakılan dentin çıkıntısı aletin kanala düz girmesini engeller.",
    "Доступ создают на нёбной поверхности сразу над бугорком: это сохраняет эстетику и обеспечивает максимально прямой путь в канал. Оставленный дентинный навес мешает прямому введению инструмента.");
  Q("endo-19", "endo", "dolgu", "Kök kanal tedavisinde çalışma boyunun belirlenmesinde günümüzde en güvenilir kabul edilen yöntem hangisidir?", "Какой метод определения рабочей длины при эндодонтическом лечении считают сегодня наиболее надёжным?",
    [["Hastanın ağrı duyması", "Болевая реакция пациента"], ["Kâğıt konun ucundaki kanın gözlenmesi", "Наблюдение крови на кончике бумажного штифта"], ["Dişin ortalama boyuna göre tahmin", "Оценка по средней длине зуба"], ["Elektronik apeks bulucunun radyografiyle birlikte kullanılması", "Электронный апекслокатор в сочетании с рентгенограммой"], ["Dokunma duyusu", "Тактильное ощущение"]], 3,
    "Elektronik apeks bulucular, kanal içindeki elektriksel direnç değişiminden yararlanarak apikal daralmanın yerini saptar. Radyografi ise kanalın eğimi ve yönü hakkında ek bilgi verir.",
    "Электронные апекслокаторы определяют положение апикального сужения по изменению электрического сопротивления в канале. Рентгенограмма дополнительно показывает изгиб и направление канала.");
  Q("endo-20", "endo", "irrigasyon", "Seanslar arasında kök kanalına yerleştirilen ve antibakteriyel etkisi yüksek pH'ına bağlı olan ilaç hangisidir?", "Какой препарат вносят в корневой канал между посещениями и антибактериальное действие которого обусловлено высоким pH?",
    [["Kalsiyum hidroksit", "Гидроксид кальция"], ["Öjenol", "Эвгенол"], ["Kortikosteroid patı", "Кортикостероидная паста"], ["Formokrezol", "Формокрезол"], ["Sodyum hipoklorit", "Гипохлорит натрия"]], 0,
    "Kalsiyum hidroksitin pH'ı yaklaşık 12,5'tir; salınan hidroksil iyonları bakteri hücre zarını ve DNA'sını bozar. Etkisini gösterebilmesi için kanalda en az bir hafta kalması önerilir.",
    "pH гидроксида кальция около 12,5; высвобождающиеся гидроксильные ионы повреждают мембрану и ДНК бактерий. Для эффекта его рекомендуют оставлять в канале не менее недели.");

  /* ---------- Çocuk Diş Hekimliği ---------- */
  Q("pedo-17", "pedo", "surme", "Süt azılarının pulpa boynuzları daimi dişlere göre nasıldır?", "Каковы рога пульпы молочных моляров по сравнению с постоянными зубами?",
    [["Daha kısa ve yüzeyden uzaktır", "Короче и дальше от поверхности"], ["Daha yüksek ve yüzeye yakındır", "Выше и ближе к поверхности"], ["Aynı yüksekliktedir", "Такой же высоты"], ["Süt dişlerinde pulpa boynuzu bulunmaz", "У молочных зубов рогов пульпы нет"], ["Yalnızca distalde bulunur", "Имеются только с дистальной стороны"]], 1,
    "Süt dişlerinde mine ve dentin ince, pulpa odası görece geniştir; özellikle mezial pulpa boynuzu yüzeye yakındır. Bu nedenle çürük pulpaya hızla ulaşır ve kavite hazırlığında pulpa kolayca açılabilir.",
    "У молочных зубов эмаль и дентин тонкие, полость зуба относительно велика; мезиальный рог особенно близок к поверхности. Поэтому кариес быстро достигает пульпы, а при препарировании её легко вскрыть.");
  Q("pedo-18", "pedo", "tedavi", "Çocuk hastaya işlemin önce yaşına uygun sözcüklerle anlatıldığı, ardından aletlerin gösterildiği ve sonra uygulamanın yapıldığı davranış yönlendirme tekniği hangisidir?", "Как называется метод управления поведением, при котором ребёнку сначала объясняют процедуру доступными словами, затем показывают инструменты и только потом выполняют её?",
    [["Ses kontrolü", "Контроль голосом"], ["Dikkat dağıtma", "Отвлечение внимания"], ["Olumlu pekiştirme", "Положительное подкрепление"], ["Model alma", "Моделирование"], ["Anlat–göster–uygula", "«Расскажи–покажи–сделай»"]], 4,
    "Bu teknik, bilinmeyenden duyulan korkuyu azaltır ve her yaştaki çocukta kullanılabilen temel yöntemdir.",
    "Этот метод снижает страх перед неизвестным и является базовым для детей любого возраста.");
  Q("pedo-19", "pedo", "tedavi", "Çocuklarda profesyonel olarak uygulanan florür verniğinin içeriği genellikle hangisidir?", "Каков обычно состав фторлака, применяемого у детей профессионально?",
    [["%0,05 sodyum florür", "0,05 % фторид натрия"], ["%0,2 sodyum florür", "0,2 % фторид натрия"], ["%5 sodyum florür", "5 % фторид натрия"], ["%1,23 asidüle fosfat florür", "1,23 % подкисленный фосфат-фторид"], ["%8 kalay florür", "8 % фторид олова"]], 2,
    "Vernik yaklaşık 22.600 ppm florür içerir, dişe yapışarak uzun süre temas sağlar ve yutulan miktar az olduğu için küçük çocuklarda güvenle kullanılır. %0,05'lik çözelti günlük, %0,2'lik çözelti haftalık gargaralar içindir.",
    "Лак содержит около 22 600 ppm фтора, прилипает к зубу, обеспечивая длительный контакт, и безопасен у маленьких детей из-за малого количества проглатываемого препарата. Раствор 0,05 % предназначен для ежедневных, 0,2 % — для еженедельных полосканий.");
  Q("pedo-20", "pedo", "surme", "Yedi yaşındaki bir çocukta alt daimi santral kesiciler, henüz düşmemiş süt kesicilerin lingualinden sürmüş. Süt dişleri hafif sallanıyor. En uygun yaklaşım hangisidir?", "У семилетнего ребёнка нижние постоянные центральные резцы прорезались язычно от ещё не выпавших молочных. Молочные зубы слегка подвижны. Какова оптимальная тактика?",
    [["Daimi kesicilerin çekilmesi", "Удаление постоянных резцов"], ["Hemen sabit ortodontik tedaviye başlanması", "Немедленное ортодонтическое лечение несъёмной аппаратурой"], ["Alt çenenin genişletilmesi", "Расширение нижней челюсти"], ["İzleme; süt dişleri kısa sürede düşmezse çekilmesi", "Наблюдение; удаление молочных зубов, если они не выпадут в ближайшее время"], ["Süt dişlerine kanal tedavisi yapılması", "Эндодонтическое лечение молочных зубов"]], 3,
    "Alt daimi kesicilerin lingualden sürmesi sık görülen bir durumdur. Süt dişleri düştükten ya da çekildikten sonra dil basıncı daimi dişleri çoğunlukla birkaç ay içinde yerine iter.",
    "Язычное прорезывание нижних постоянных резцов встречается часто. После выпадения или удаления молочных зубов давление языка обычно за несколько месяцев перемещает постоянные зубы на место.");

  /* ---------- Anatomi ---------- */
  Q("anat-17", "anat", "bas", "Ağız tabanını oluşturan ve “ağız diyaframı” olarak adlandırılan kas hangisidir?", "Какая мышца образует дно полости рта и называется «диафрагмой рта»?",
    ["M. genioglossus", "M. mylohyoideus", "M. digastricus", "M. buccinator", "M. platysma"], 1,
    "M. mylohyoideus alt çenenin iç yüzündeki linea mylohyoidea'dan başlar. Sublingual boşluk bu kasın üstünde, submandibular boşluk ise altındadır; diş kökünün kasın tutunma çizgisine göre konumu, enfeksiyonun hangi boşluğa yayılacağını belirler.",
    "Челюстно-подъязычная мышца начинается от одноимённой линии на внутренней поверхности нижней челюсти. Подъязычное пространство лежит над ней, поднижнечелюстное — под ней; положение верхушки корня относительно линии прикрепления определяет путь распространения инфекции.");
  Q("anat-18", "anat", "sinir", "N. trigeminus'un hem duyu hem de motor lif taşıyan dalı hangisidir?", "Какая ветвь тройничного нерва содержит и чувствительные, и двигательные волокна?",
    ["N. ophthalmicus", "N. maxillaris", "N. mandibularis", "N. infraorbitalis", "N. zygomaticus"], 2,
    "N. ophthalmicus ve n. maxillaris yalnızca duyusaldır. N. mandibularis ise çiğneme kaslarına, m. mylohyoideus'a, m. digastricus'un ön karnına, m. tensor veli palatini'ye ve m. tensor tympani'ye motor lif verir.",
    "Глазной и верхнечелюстной нервы только чувствительные. Нижнечелюстной нерв даёт двигательные волокна жевательным мышцам, челюстно-подъязычной, переднему брюшку двубрюшной, мышце, напрягающей нёбную занавеску, и мышце, напрягающей барабанную перепонку.");
  Q("anat-19", "anat", "sinir", "Gözyaşı bezi ile burun ve damak bezlerinin parasempatik liflerinin sinaps yaptığı gangliyon hangisidir?", "В каком ганглии переключаются парасимпатические волокна слёзной железы и желёз носа и нёба?",
    ["Ganglion oticum", "Ganglion submandibulare", "Ganglion ciliare", "Ganglion trigeminale", "Ganglion pterygopalatinum"], 4,
    "Lifler n. facialis'ten ayrılan n. petrosus major ile gelir. Ganglion oticum parotis bezine, ganglion submandibulare submandibular ve sublingual bezlere, ganglion ciliare ise gözün iç kaslarına lif gönderir.",
    "Волокна приходят в составе большого каменистого нерва от лицевого нерва. Ушной узел обслуживает околоушную железу, поднижнечелюстной — поднижнечелюстную и подъязычную, ресничный — внутренние мышцы глаза.");
  Q("anat-20", "anat", "bas", "Bir hastada yüzün sağ yarısında alnını kırıştıramama, gözünü kapatamama ve ağız köşesinde düşüklük birlikte görülüyor. Lezyon en olası olarak nerededir?", "У пациента на правой половине лица одновременно отмечаются невозможность наморщить лоб, закрыть глаз и опущение угла рта. Где наиболее вероятно расположено поражение?",
    [["Sağ n. facialis'te (periferik tip)", "В правом лицевом нерве (периферический тип)"], ["Sol beyin yarım küresinde (merkezi tip)", "В левом полушарии мозга (центральный тип)"], ["Sağ n. trigeminus'ta", "В правом тройничном нерве"], ["Sağ n. hypoglossus'ta", "В правом подъязычном нерве"], ["Sağ n. oculomotorius'ta", "В правом глазодвигательном нерве"]], 0,
    "Periferik felçte yüzün aynı taraftaki yarısının tümü tutulur. Merkezi felçte ise alın kasları her iki beyin yarım küresinden uyarı aldığı için korunur; yalnızca karşı taraf yüzün alt yarısı etkilenir.",
    "При периферическом параличе поражается вся половина лица на стороне очага. При центральном мышцы лба сохранены, так как получают двустороннюю корковую иннервацию; страдает только нижняя часть лица на противоположной стороне.");

  /* ---------- Histoloji ve Embriyoloji ---------- */
  Q("hist-17", "hist", "dis", "Mine–dentin sınırını aşarak mineye uzanan odontoblast uzantılarının uç kısımlarına ne ad verilir?", "Как называют концевые участки отростков одонтобластов, проникающие через эмалево-дентинную границу в эмаль?",
    [["Mine tutamları", "Эмалевые пучки"], ["Mine lamelleri", "Эмалевые пластинки"], ["Retzius çizgileri", "Линии Ретциуса"], ["Mine iğcikleri", "Эмалевые веретёна"], ["Perikimata", "Перикиматы"]], 3,
    "Mine iğcikleri kısa ve düz yapılardır. Mine tutamları mine–dentin sınırından başlayan, mineralizasyonu düşük, çalı görünümünde yapılardır; lameller ise minenin tüm kalınlığı boyunca uzanabilen ince çatlaklardır.",
    "Эмалевые веретёна — короткие прямые структуры. Эмалевые пучки — слабо минерализованные кустообразные образования от эмалево-дентинной границы; пластинки — тонкие трещины, иногда через всю толщу эмали.");
  Q("hist-18", "hist", "dis", "Tükürük bezlerinde asinusların çevresinde yer alan ve kasılarak salgının kanala itilmesini sağlayan hücre hangisidir?", "Какие клетки слюнных желёз расположены вокруг ацинусов и, сокращаясь, проталкивают секрет в проток?",
    [["Seröz hücre", "Серозные клетки"], ["Miyoepitel hücre", "Миоэпителиальные клетки"], ["Müköz hücre", "Слизистые клетки"], ["Kanal hücresi", "Клетки протока"], ["Plazma hücresi", "Плазматические клетки"]], 1,
    "Miyoepitel hücreler epitel kökenlidir, ancak kasılabilen lifler içerir; asinus ile bazal lamina arasında yer alır. Pleomorfik adenom gibi tükürük bezi tümörlerinin yapısına da katılırlar.",
    "Миоэпителиальные клетки имеют эпителиальное происхождение, но содержат сократительные филаменты; лежат между ацинусом и базальной пластинкой. Они участвуют и в формировании опухолей слюнных желёз, например плеоморфной аденомы.");
  Q("hist-19", "hist", "emb", "Diş gelişimini başlatan dental lamina embriyonik yaşamın yaklaşık kaçıncı haftasında ortaya çıkar?", "На какой примерно неделе эмбрионального развития появляется зубная пластинка, начинающая развитие зубов?",
    [["2. hafta", "2-я неделя"], ["4. hafta", "4-я неделя"], ["6. hafta", "6-я неделя"], ["12. hafta", "12-я неделя"], ["20. hafta", "20-я неделя"]], 2,
    "Altıncı haftada ağız epiteli alttaki ektomezenkime doğru kalınlaşarak dental laminayı oluşturur. Süt dişi tomurcukları sekizinci hafta dolayında belirir; süt dişlerinin mineralizasyonu ise yaklaşık dördüncü ayda başlar.",
    "На шестой неделе эпителий полости рта утолщается и врастает в эктомезенхиму, образуя зубную пластинку. Зачатки молочных зубов появляются около восьмой недели, а их минерализация начинается примерно на четвёртом месяце.");
  Q("hist-20", "hist", "emb", "Tiroid bezi embriyonik dönemde dilin hangi noktasından gelişmeye başlar?", "Из какой точки языка начинает развиваться щитовидная железа в эмбриональном периоде?",
    [["Dil ucu", "Кончик языка"], ["Sulcus terminalis'in yan uçları", "Боковые концы терминальной борозды"], ["Sirkumvallat papillalar", "Желобоватые сосочки"], ["Dil frenulumu", "Уздечка языка"], ["Foramen caecum", "Слепое отверстие"]], 4,
    "Tiroid taslağı foramen caecum'dan boyna doğru iner. İniş yolunun kalıntısı tiroglossal kanal kistine, bezin inememesi ise dil kökünde yerleşmiş (lingual) tiroide yol açabilir.",
    "Зачаток щитовидной железы опускается от слепого отверстия на шею. Остатки хода могут дать кисту щитоязычного протока, а нарушение опускания — язычную щитовидную железу в корне языка.");

  /* ---------- Fizyoloji ---------- */
  Q("fizy-17", "fizy", "hucre", "Ağrı uyaranlarını algılayan reseptörler (nosiseptörler) yapısal olarak hangisidir?", "Чем по строению являются рецепторы боли (ноцицепторы)?",
    [["Serbest sinir uçları", "Свободные нервные окончания"], ["Pacini cisimcikleri", "Тельца Пачини"], ["Meissner cisimcikleri", "Тельца Мейсснера"], ["Kas iğcikleri", "Мышечные веретёна"], ["Golgi tendon organları", "Сухожильные органы Гольджи"]], 0,
    "Nosiseptörler kapsülsüz serbest sinir uçlarıdır ve belirgin uyum (adaptasyon) göstermezler. Pacini cisimcikleri titreşimi ve derin basıncı, Meissner cisimcikleri ise hafif dokunmayı algılar.",
    "Ноцицепторы — некапсулированные свободные нервные окончания, практически не адаптирующиеся. Тельца Пачини воспринимают вибрацию и глубокое давление, тельца Мейсснера — лёгкое прикосновение.");
  Q("fizy-18", "fizy", "sistem", "Tiroid hormonlarının sentezi için hangi element gereklidir?", "Какой элемент необходим для синтеза гормонов щитовидной железы?",
    [["Demir", "Железо"], ["Çinko", "Цинк"], ["Kalsiyum", "Кальций"], ["İyot", "Йод"], ["Magnezyum", "Магний"]], 3,
    "Tiroksin (T₄) dört, triiyodotironin (T₃) üç iyot atomu içerir. İyot eksikliğinde hormon yapımı azalır, TSH artar ve bez büyür (guatr).",
    "Тироксин (T₄) содержит четыре атома йода, трийодтиронин (T₃) — три. При дефиците йода синтез гормонов снижается, ТТГ повышается, и железа увеличивается (зоб).");
  Q("fizy-19", "fizy", "sistem", "I. Göz bebekleri genişler.\nII. Kalp hızı artar.\nIII. Bronşlar daralır.\n\nYukarıdakilerden hangileri sempatik sinir sistemi uyarılmasının etkilerindendir?", "I. Зрачки расширяются.\nII. Частота сердечных сокращений возрастает.\nIII. Бронхи сужаются.\n\nЧто из перечисленного относится к эффектам симпатической стимуляции?",
    PA, 2,
    "Sempatik uyarı bronşları genişletir; bronşların daralması parasempatik etkidir. “Savaş ya da kaç” yanıtında ayrıca tükürük azalır ve koyulaşır, sindirim yavaşlar.",
    "Симпатическая стимуляция расширяет бронхи; их сужение — парасимпатический эффект. При реакции «бей или беги» также уменьшается и густеет слюна, замедляется пищеварение.");
  Q("fizy-20", "fizy", "sistem", "Periodontal ligamentteki mekanoreseptörlerin temel işlevi nedir?", "Какова основная функция механорецепторов периодонтальной связки?",
    [["Tat duyusunu iletmek", "Проведение вкуса"], ["Tükürük salgısını başlatmak", "Запуск слюноотделения"], ["Isırma kuvvetinin büyüklüğünü ve yönünü algılayarak çiğneme kaslarını düzenlemek", "Восприятие величины и направления силы накусывания и регуляция жевательных мышц"], ["Dişin sıcak ve soğuğu algılamasını sağlamak", "Восприятие зубом тепла и холода"], ["Pulpanın kan akımını düzenlemek", "Регуляция кровотока пульпы"]], 2,
    "Bu reseptörler sayesinde dişler arasındaki çok ince cisimler fark edilir ve beklenmedik sert bir cisim ısırıldığında çene kapatan kaslar refleks olarak baskılanır. Dişsiz hastalarda ve implantlarda bu duyarlılık belirgin biçimde azalır.",
    "Благодаря этим рецепторам ощущаются даже очень тонкие предметы между зубами, а при неожиданном накусывании твёрдого предмета мышцы, поднимающие челюсть, рефлекторно тормозятся. У беззубых пациентов и на имплантатах эта чувствительность заметно ниже.");

  /* ---------- Biyokimya ---------- */
  Q("biyo-17", "biyo", "metab", "Açlıkta kan glukoz düzeyini korumak için glikojenini glukoza çevirip kana verebilen organ hangisidir?", "Какой орган при голодании расщепляет гликоген до глюкозы и выделяет её в кровь для поддержания гликемии?",
    [["İskelet kası", "Скелетная мышца"], ["Karaciğer", "Печень"], ["Beyin", "Мозг"], ["Yağ dokusu", "Жировая ткань"], ["Kalp kası", "Сердечная мышца"]], 1,
    "Karaciğerde glukoz-6-fosfataz enzimi bulunur; bu enzim sayesinde serbest glukoz kana verilebilir. Kasta bu enzim bulunmadığından kas glikojeni yalnızca kasın kendi enerji gereksinimi için kullanılır.",
    "В печени есть глюкозо-6-фосфатаза, позволяющая выделять свободную глюкозу в кровь. В мышцах этого фермента нет, поэтому мышечный гликоген используется только для собственных нужд мышцы.");
  Q("biyo-18", "biyo", "vit", "Gece körlüğü hangi vitaminin eksikliğinde görülür?", "При дефиците какого витамина развивается «куриная слепота»?",
    [["A vitamini", "Витамин A"], ["D vitamini", "Витамин D"], ["E vitamini", "Витамин E"], ["K vitamini", "Витамин K"], ["B₁ vitamini", "Витамин B₁"]], 0,
    "A vitamininin aldehit biçimi olan retinal, ağtabakadaki çubuk hücrelerde bulunan görme pigmenti rodopsinin yapısına girer. Eksikliğinde ayrıca gözde kuruluk ve epitel dokularda aşırı keratinleşme görülür.",
    "Ретиналь — альдегидная форма витамина A — входит в состав зрительного пигмента палочек родопсина. При дефиците также развиваются сухость глаз и гиперкератоз эпителия.");
  Q("biyo-19", "biyo", "metab", "Aşağıdaki bazlardan hangisi DNA'nın yapısında bulunmaz?", "Какое из оснований не входит в состав ДНК?",
    [["Adenin", "Аденин"], ["Guanin", "Гуанин"], ["Sitozin", "Цитозин"], ["Timin", "Тимин"], ["Urasil", "Урацил"]], 4,
    "Urasil yalnızca RNA'da bulunur ve adeninle eşleşir. DNA ile RNA arasındaki diğer fark şekerdedir: DNA'da deoksiriboz, RNA'da riboz bulunur.",
    "Урацил встречается только в РНК и спаривается с аденином. Другое различие между ДНК и РНК — сахар: дезоксирибоза в ДНК, рибоза в РНК.");
  Q("biyo-20", "biyo", "vit", "Gebeliğin erken döneminde hangi vitaminin eksikliği nöral tüp kusurlarının riskini artırır?", "Дефицит какого витамина в ранние сроки беременности повышает риск дефектов нервной трубки?",
    [["C vitamini", "Витамин C"], ["B₁₂ vitamini", "Витамин B₁₂"], ["D vitamini", "Витамин D"], ["Folik asit", "Фолиевая кислота"], ["Biyotin", "Биотин"]], 3,
    "Folik asit, DNA sentezi için gereken tek karbonlu birimlerin taşınmasında görev alır; bu nedenle hızla bölünen dokular eksikliğinden en çok etkilenir. Eksikliği megaloblastik anemiye de yol açar.",
    "Фолиевая кислота участвует в переносе одноуглеродных групп, необходимых для синтеза ДНК, поэтому от её дефицита сильнее всего страдают быстро делящиеся ткани. Дефицит также вызывает мегалобластную анемию.");

  /* ---------- Mikrobiyoloji ---------- */
  Q("mikr-17", "mikr", "bakt", "Hücre duvarındaki mikolik asitler nedeniyle asit-dirençli boyama (Ziehl-Neelsen) ile boyanan bakteri hangisidir?", "Какая бактерия окрашивается по Цилю–Нильсену как кислотоустойчивая благодаря миколовым кислотам клеточной стенки?",
    ["Staphylococcus aureus", "Escherichia coli", "Mycobacterium tuberculosis", "Streptococcus mutans", "Treponema pallidum"], 2,
    "Mumsu hücre duvarı Gram boyasının girmesini engeller; bakteri asit-alkolle renksizleştirmeye direnir ve kırmızı görünür. Tüberküloz damlacık yoluyla bulaştığı için diş hekimliğinde korunma önlemleri önemlidir.",
    "Восковидная клеточная стенка не пропускает краску по Граму; бактерия устойчива к обесцвечиванию кислотным спиртом и выглядит красной. Туберкулёз передаётся воздушно-капельным путём, поэтому в стоматологии важны меры защиты.");
  Q("mikr-18", "mikr", "viro", "Suçiçeği ve zona hastalıklarının etkeni hangisidir?", "Какой возбудитель вызывает ветряную оспу и опоясывающий лишай?",
    [["Herpes simpleks virüsü tip 1", "Вирус простого герпеса 1 типа"], ["Epstein-Barr virüsü", "Вирус Эпштейна–Барр"], ["Sitomegalovirüs", "Цитомегаловирус"], ["Coxsackie virüsü", "Вирус Коксаки"], ["Varisella-zoster virüsü", "Вирус варицелла-зостер"]], 4,
    "Virüs ilk enfeksiyonda suçiçeğine yol açar ve duyu gangliyonlarında gizli kalır. Yeniden etkinleştiğinde tek bir sinir dalının yayılım alanında, orta hattı geçmeyen ağrılı veziküller oluşur; n. trigeminus tutulursa lezyonlar ağız içinde tek taraflıdır.",
    "При первичной инфекции вирус вызывает ветряную оспу и остаётся в чувствительных ганглиях. При реактивации возникают болезненные везикулы в зоне одной нервной ветви, не переходящие среднюю линию; при поражении тройничного нерва высыпания во рту односторонние.");
  Q("mikr-19", "mikr", "viro", "Çocuklarda parotis bezinin ağrılı, çoğu kez iki taraflı şişliğiyle seyreden kabakulağın etkeni hangi virüs ailesindendir?", "К какому семейству относится возбудитель эпидемического паротита, протекающего у детей с болезненным, часто двусторонним увеличением околоушных желёз?",
    [["Herpesvirüsler", "Герпесвирусы"], ["Paramiksovirüsler", "Парамиксовирусы"], ["Adenovirüsler", "Аденовирусы"], ["Retrovirüsler", "Ретровирусы"], ["Papillomavirüsler", "Папилломавирусы"]], 1,
    "Kabakulak damlacık yoluyla bulaşır ve aşıyla önlenebilir. Ergenlik sonrası erkeklerde testis iltihabı (orşit) en bilinen komplikasyonudur.",
    "Паротит передаётся воздушно-капельным путём и предотвращается вакцинацией. Самое известное осложнение у мужчин после полового созревания — орхит.");
  Q("mikr-20", "mikr", "bakt", "I. Basınçlı buhar (otoklav)\nII. Kuru sıcak hava\nIII. Yüzeyin %70'lik alkolle silinmesi\n\nYukarıdakilerden hangileri sterilizasyon yöntemidir?", "I. Пар под давлением (автоклав)\nII. Сухой горячий воздух\nIII. Протирание поверхности 70 % спиртом\n\nЧто из перечисленного является методом стерилизации?",
    PA, 2,
    "Sterilizasyon, bakteri sporları dahil tüm mikroorganizmaların yok edilmesidir. Alkol sporlara etkisizdir; bu nedenle yalnızca orta düzey dezenfektan sayılır. Kuru sıcak hava ile sterilizasyon 160–180 °C'de 1–2 saat gerektirir.",
    "Стерилизация — уничтожение всех микроорганизмов, включая споры. Спирт не действует на споры и считается дезинфектантом среднего уровня. Сухожаровая стерилизация требует 160–180 °C в течение 1–2 часов.");

  /* ---------- Patoloji ---------- */
  Q("pato-17", "pato", "genel", "Bir organın, hücre sayısının artması sonucu büyümesine ne ad verilir?", "Как называется увеличение органа за счёт увеличения числа клеток?",
    [["Hipertrofi", "Гипертрофия"], ["Atrofi", "Атрофия"], ["Metaplazi", "Метаплазия"], ["Hiperplazi", "Гиперплазия"], ["Anaplazi", "Анаплазия"]], 3,
    "Hipertrofide hücre sayısı değişmez, hücrelerin boyutu artar; kalp ve iskelet kası gibi bölünemeyen hücrelerden oluşan dokular bu yolla büyür. İlaca bağlı dişeti büyümesi ise hiperplazi örneğidir.",
    "При гипертрофии число клеток не меняется, увеличивается их размер; так растут ткани из неделящихся клеток — миокард и скелетная мышца. Лекарственное разрастание десны — пример гиперплазии.");
  Q("pato-18", "pato", "genel", "Aşağıdakilerden hangisi trombüs oluşumunu açıklayan Virchow üçlüsünün bileşenlerinden biri değildir?", "Что из перечисленного не входит в триаду Вирхова, объясняющую тромбообразование?",
    [["Endotel hasarı", "Повреждение эндотелия"], ["Kan akımının yavaşlaması ya da girdaplı akım", "Замедление или турбулентность кровотока"], ["Kanın pıhtılaşma eğiliminin artması", "Повышенная свёртываемость крови"], ["Trombosit sayısının azalması", "Снижение числа тромбоцитов"], ["Hepsi bileşenidir", "Всё перечисленное входит"]], 3,
    "Trombosit sayısının azalması trombüse değil, kanama eğilimine yol açar. Uzun süre hareketsiz kalma (akımın yavaşlaması), ameliyat (endotel hasarı) ve kalıtsal pıhtılaşma bozuklukları üçlünün tipik örnekleridir.",
    "Снижение числа тромбоцитов ведёт не к тромбозу, а к кровоточивости. Типичные примеры триады — длительная неподвижность (стаз), операция (повреждение эндотелия) и наследственные тромбофилии.");
  Q("pato-19", "pato", "agiz", "Yanak ve dudak mukozasında, çapı 1 cm'den küçük, sarı-gri tabanlı ve kırmızı haleli, 7–14 günde iz bırakmadan iyileşen ve yineleyen ağrılı ülserler hangi tabloyu düşündürür?", "О каком состоянии говорят рецидивирующие болезненные язвы на слизистой щёк и губ диаметром менее 1 см с жёлто-серым дном и красным венчиком, заживающие за 7–14 дней без рубца?",
    [["Minör tip yineleyen aftöz stomatit", "Рецидивирующий афтозный стоматит, малая форма"], ["Herpetik gingivostomatit", "Герпетический гингивостоматит"], ["Pemfigus vulgaris", "Вульгарная пузырчатка"], ["Skuamöz hücreli karsinom", "Плоскоклеточный рак"], ["Eroziv liken planus", "Эрозивный плоский лишай"]], 0,
    "Aftlar hareketli, keratinize olmayan mukozada görülür ve öncesinde vezikül bulunmaz. Yineleyen herpes lezyonları ise çoğunlukla keratinize mukozada (sert damak, yapışık dişeti) kümeler halinde veziküllerle başlar. Majör aftlar 1 cm'den büyüktür ve iz bırakarak iyileşir.",
    "Афты возникают на подвижной неороговевающей слизистой, и им не предшествуют пузырьки. Рецидивирующий герпес обычно начинается с групп везикул на ороговевающей слизистой (твёрдое нёбо, прикреплённая десна). Большие афты крупнее 1 см и заживают с рубцом.");
  Q("pato-20", "pato", "agiz", "Yanak mukozasında ısırma hattı boyunca yerleşen, mukoza renginde, düzgün yüzeyli, ağrısız ve sert kıvamlı küçük kitlenin en olası tanısı hangisidir?", "Каков наиболее вероятный диагноз при небольшом безболезненном плотном образовании цвета слизистой с гладкой поверхностью на слизистой щеки по линии смыкания зубов?",
    [["Lipom", "Липома"], ["İrritasyon fibromu", "Фиброма от раздражения"], ["Papillom", "Папиллома"], ["Hemanjiyom", "Гемангиома"], ["Mukosel", "Мукоцеле"]], 1,
    "İrritasyon fibromu, yineleyen travmaya karşı gelişen tepkisel bir bağ dokusu artışıdır ve ağızda en sık görülen yumuşak doku kitlesidir. Papillomun yüzeyi karnabahar görünümündedir; lipom sarımsı ve yumuşaktır; mukosel mavimsi ve içi sıvı doludur.",
    "Фиброма от раздражения — реактивное разрастание соединительной ткани в ответ на повторную травму, самое частое мягкотканное образование рта. У папилломы поверхность в виде цветной капусты; липома желтоватая и мягкая; мукоцеле синеватое, с жидкостью.");

  /* ---------- Farmakoloji ---------- */
  Q("farm-17", "farm", "genel", "Bir ilacın biyoyararlanımı neyi ifade eder?", "Что означает биодоступность препарата?",
    [["İlacın vücuttan atılma hızını", "Скорость выведения препарата"], ["İlacın reseptörüne bağlanma gücünü", "Силу связывания с рецептором"], ["Verilen dozun değişmeden sistemik dolaşıma ulaşan oranını", "Долю введённой дозы, достигающую системного кровотока в неизменённом виде"], ["İlacın plazma proteinlerine bağlanan oranını", "Долю препарата, связанную с белками плазмы"], ["İlacın en yüksek etkisini", "Максимальный эффект препарата"]], 2,
    "Damar yoluyla verilen ilacın biyoyararlanımı %100 kabul edilir. Ağız yoluyla alınan ilaçlarda emilimin tam olmaması ve karaciğerdeki ilk geçiş etkisi bu oranı düşürür.",
    "Биодоступность при внутривенном введении принимают за 100 %. При приёме внутрь её снижают неполное всасывание и эффект первого прохождения через печень.");
  Q("farm-18", "farm", "dis", "Varfarinin pıhtılaşmayı engelleyici etkisini tersine çevirmek için hangi madde kullanılır?", "Какое вещество применяют для устранения противосвёртывающего действия варфарина?",
    [["Protamin sülfat", "Протамина сульфат"], ["Nalokson", "Налоксон"], ["Traneksamik asit", "Транексамовая кислота"], ["Heparin", "Гепарин"], ["K vitamini", "Витамин K"]], 4,
    "Varfarin, K vitaminine bağımlı pıhtılaşma faktörlerinin yapımını engeller; K vitamini verilmesi bu faktörlerin yeniden yapılmasını sağlar, ancak etkisi saatler içinde ortaya çıkar. Protamin sülfat ise heparinin antidotudur.",
    "Варфарин нарушает синтез витамин-K-зависимых факторов свёртывания; введение витамина K восстанавливает их образование, но эффект развивается через несколько часов. Протамина сульфат — антидот гепарина.");
  Q("farm-19", "farm", "dis", "Aşağıdakilerden hangisi opioid ağrı kesicilerin beklenen yan etkilerinden biri değildir?", "Что из перечисленного не относится к ожидаемым побочным эффектам опиоидных анальгетиков?",
    [["Kabızlık", "Запор"], ["Solunumun baskılanması", "Угнетение дыхания"], ["Bulantı", "Тошнота"], ["İshal", "Диарея"], ["Göz bebeklerinde küçülme", "Сужение зрачков"]], 3,
    "Opioidler bağırsak hareketlerini yavaşlatarak kabızlığa yol açar; bu nedenle bazı opioid türevleri ishal tedavisinde kullanılır. Solunumun baskılanması en tehlikeli yan etkidir ve naloksonla geri döndürülür.",
    "Опиоиды замедляют перистальтику и вызывают запор; поэтому некоторые их производные применяют для лечения диареи. Самый опасный побочный эффект — угнетение дыхания, устраняемое налоксоном.");
  Q("farm-20", "farm", "dis", "Aspirin aldığında nefes darlığı ve hırıltı gelişen astımlı bir hastada diş çekimi sonrası ağrı için en uygun ilk seçenek hangisidir?", "Какой препарат первого выбора подходит для обезболивания после удаления зуба у больного астмой, у которого аспирин вызывает одышку и хрипы?",
    [["Parasetamol", "Парацетамол"], ["İbuprofen", "Ибупрофен"], ["Naproksen", "Напроксен"], ["Diklofenak", "Диклофенак"], ["Ketorolak", "Кеторолак"]], 0,
    "Aspirine duyarlı astımda siklooksijenazın baskılanması, araşidonik asidi lökotrien yoluna kaydırır ve bronşlar daralır. Aynı tepki diğer NSAİİ'lerle de ortaya çıkabildiği için bu ilaçlardan kaçınılır.",
    "При аспириновой астме подавление циклооксигеназы направляет арахидоновую кислоту по лейкотриеновому пути, вызывая бронхоспазм. Та же реакция возможна на другие НПВС, поэтому их избегают.");

  /* ---------- Biyoloji ve Genetik ---------- */
  Q("gene-17", "gene", "gen", "Bir amino asidi şifreleyen kodon kaç nükleotitten oluşur?", "Из скольких нуклеотидов состоит кодон, кодирующий одну аминокислоту?",
    ["1", "2", "3", "4", "6"], 2,
    "Dört farklı bazın üçlü dizilimi 64 kodon oluşturur; bunların 61'i amino asit şifreler, üçü ise sonlandırma kodonudur. Birden çok kodonun aynı amino asidi şifrelemesi genetik şifrenin “dejenere” olması olarak adlandırılır.",
    "Тройки из четырёх оснований дают 64 кодона: 61 кодирует аминокислоты, три — стоп-кодоны. То, что несколько кодонов кодируют одну аминокислоту, называют вырожденностью генетического кода.");
  Q("gene-18", "gene", "gen", "Protein sentezini başlatan AUG kodonu hangi amino asidi şifreler?", "Какую аминокислоту кодирует кодон AUG, инициирующий синтез белка?",
    [["Glisin", "Глицин"], ["Metiyonin", "Метионин"], ["Lizin", "Лизин"], ["Triptofan", "Триптофан"], ["Sistein", "Цистеин"]], 1,
    "Ökaryotlarda protein sentezi metiyoninle başlar; bu amino asit çoğu kez sonradan zincirden ayrılır. UAA, UAG ve UGA ise sonlandırma kodonlarıdır.",
    "У эукариот синтез белка начинается с метионина, который впоследствии часто отщепляется. UAA, UAG и UGA — стоп-кодоны.");
  Q("gene-19", "gene", "gen", "Dişi bireylerin hücre çekirdeğinde görülen Barr cisimciği nedir?", "Что представляет собой тельце Барра в ядрах клеток женского организма?",
    [["Etkinliğini yitirmiş (inaktif) X kromozomu", "Инактивированная X-хромосома"], ["Y kromozomunun kalıntısı", "Остаток Y-хромосомы"], ["Çekirdekçik", "Ядрышко"], ["Mitokondri DNA'sı", "Митохондриальная ДНК"], ["Sentrozom", "Центросома"]], 0,
    "Dişilerde iki X kromozomundan biri embriyonik dönemde rastgele etkinliğini yitirir ve yoğunlaşır; böylece gen dozu erkeklerle eşitlenir. Barr cisimciği sayısı, X kromozomu sayısının bir eksiğidir.",
    "У женщин одна из двух X-хромосом в эмбриональном периоде случайным образом инактивируется и конденсируется, уравнивая дозу генов с мужской. Число телец Барра на единицу меньше числа X-хромосом.");
  Q("gene-20", "gene", "gen", "Köprücük kemiklerinin gelişmemesi nedeniyle omuzlarını önde birbirine yaklaştırabilen, süt dişleri geç düşen ve çenelerinde çok sayıda gömülü artı diş bulunan hastada en olası tanı hangisidir?", "Каков наиболее вероятный диагноз у пациента, который из-за недоразвития ключиц может сводить плечи спереди, с задержкой смены молочных зубов и множественными ретенированными сверхкомплектными зубами?",
    [["Ektodermal displazi", "Эктодермальная дисплазия"], ["Gardner sendromu", "Синдром Гарднера"], ["Down sendromu", "Синдром Дауна"], ["Osteogenezis imperfekta", "Несовершенный остеогенез"], ["Kleidokraniyal displazi", "Ключично-черепная дисплазия"]], 4,
    "Otozomal baskın geçen bu hastalıkta zar içi kemikleşme bozulur; kafa kemikleri arasındaki bıngıldaklar geç kapanır. Daimi dişler süremediği için hastalar çoğu kez diş hekimine başvurduklarında tanı alır.",
    "При этом аутосомно-доминантном заболевании нарушено перепончатое окостенение; роднички закрываются поздно. Постоянные зубы не прорезываются, поэтому диагноз часто ставят при обращении к стоматологу.");
})();
