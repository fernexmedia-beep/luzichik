/* Özgün soru bankası — 3. paket. Tüm sorular bu site için yazılmıştır. */
(function () {
  const D = window.DUS_DATA;
  const topic = (b, id, tr, ru) => { const x = D.branches.find((y) => y.id === b); if (x && !x.topics.some((t) => t.id === id)) x.topics.push({ id, name: { tr, ru } }); };
  const o = (a) => a.map((x) => (typeof x === "string" ? x : { tr: x[0], ru: x[1] }));
  const Q = (id, branch, tp, tr, ru, opts, answer, etr, eru) => D.questions.push({ id, branch, topic: tp, q: { tr, ru }, options: o(opts), answer, exp: { tr: etr, ru: eru } });

  topic("rest", "curuk", "Çürük ve korunma", "Кариес и профилактика");
  topic("prot", "sabit", "Sabit protezler", "Несъёмные протезы");
  topic("cer", "patoloji", "Kistler ve enfeksiyonlar", "Кисты и инфекции");
  topic("rad", "yorum", "Radyografik yorum", "Интерпретация снимков");
  topic("perio", "tedavi", "Periodontal tedavi", "Лечение заболеваний пародонта");
  topic("orto", "aparey", "Apareyler", "Аппараты");
  topic("endo", "dolgu", "Kanal dolumu", "Обтурация каналов");

  /* ---------- Restoratif ---------- */
  Q("rest-9", "rest", "curuk", "Diş çürüğünün başlamasında en önemli rolü oynayan mikroorganizma hangisidir?", "Какой микроорганизм играет ведущую роль в возникновении кариеса?",
    ["Streptococcus mutans", "Porphyromonas gingivalis", "Candida albicans", "Treponema denticola", "Aggregatibacter actinomycetemcomitans"], 0,
    "S. mutans sakkarozdan yapışkan glukan üretir, asit oluşturur ve asidik ortamda yaşayabilir. Laktobasiller ise daha çok çürüğün ilerlemesiyle ilişkilidir.",
    "S. mutans синтезирует из сахарозы липкие глюканы, образует кислоту и выживает в кислой среде. Лактобациллы больше связаны с прогрессированием кариеса.");
  Q("rest-10", "rest", "curuk", "Minenin demineralize olmaya başladığı kritik pH değeri yaklaşık kaçtır?", "При каком примерно значении pH (критическом) начинается деминерализация эмали?",
    ["3,5", "4,5", "5,5", "6,5", "7,0"], 2,
    "Plak pH'ı 5,5'in altına indiğinde hidroksiapatit çözünmeye başlar. Kök yüzeyi (sement ve dentin) için kritik pH daha yüksektir, yaklaşık 6,2–6,7.",
    "При pH налёта ниже 5,5 гидроксиапатит начинает растворяться. Для поверхности корня (цемент и дентин) критический pH выше — около 6,2–6,7.");
  Q("rest-11", "rest", "curuk", "Stephan eğrisi neyi gösterir?", "Что отражает кривая Стефана?",
    [["Tükürük akış hızının yaşla değişimini", "Изменение скорости слюноотделения с возрастом"], ["Florür alımı ile çürük sıklığı ilişkisini", "Связь потребления фтора с частотой кариеса"], ["Kompozitin polimerizasyon büzülmesini", "Полимеризационную усадку композита"], ["Şeker alımından sonra plak pH'ının zamanla değişimini", "Изменение pH налёта во времени после приёма сахара"], ["Dentin geçirgenliğinin derinlikle değişimini", "Изменение проницаемости дентина с глубиной"]], 3,
    "Şeker alındıktan sonra plak pH'ı dakikalar içinde hızla düşer ve tükürüğün tamponlamasıyla 30–60 dakikada yavaşça normale döner. Sık atıştırma dişin asidik ortamda kalma süresini uzatır.",
    "После приёма сахара pH налёта за несколько минут резко падает и за 30–60 минут медленно восстанавливается благодаря буферу слюны. Частые перекусы удлиняют время пребывания зуба в кислой среде.");
  Q("rest-12", "rest", "curuk", "Başlangıç mine çürüğünde mineral kaybının en fazla olduğu tabaka hangisidir?", "В какой зоне начального кариеса эмали потеря минералов наибольшая?",
    [["Yüzey tabakası", "Поверхностная зона"], ["Lezyon gövdesi", "Тело поражения"], ["Karanlık tabaka", "Тёмная зона"], ["Translüsent tabaka", "Прозрачная зона"], ["Mine–dentin sınırı", "Эмалево-дентинная граница"]], 1,
    "Lezyon gövdesi en geniş ve en çok mineral kaybeden bölümdür. Yüzey tabakası tükürükteki minerallerle yeniden çöktüğü için görece sağlam kalır.",
    "Тело поражения — самая обширная зона с наибольшей потерей минералов. Поверхностная зона остаётся относительно сохранной за счёт осаждения минералов из слюны.");
  Q("rest-13", "rest", "curuk", "Florürün çürüğü önlemedeki başlıca etki mekanizması hangisidir?", "Каков основной механизм противокариозного действия фтора?",
    [["Tükürük akışını artırmak", "Усиление слюноотделения"], ["Plağı mekanik olarak uzaklaştırmak", "Механическое удаление налёта"], ["Diş rengini açmak", "Осветление зубов"], ["Dentin tübüllerini tıkamak", "Закупорка дентинных канальцев"], ["Remineralizasyonu artırıp minenin asitte çözünürlüğünü azaltmak", "Усиление реминерализации и снижение растворимости эмали в кислоте"]], 4,
    "Florür esas olarak topikal etki gösterir: remineralizasyonu hızlandırır ve aside daha dirençli florapatit oluşumunu sağlar. Yüksek derişimde bakteri metabolizmasını da baskılar.",
    "Фтор действует преимущественно местно: ускоряет реминерализацию и способствует образованию более кислотоустойчивого фторапатита. В высоких концентрациях он также подавляет метаболизм бактерий.");
  Q("rest-14", "rest", "materyal", "Minenin asitle pürüzlendirilmesinde en sık kullanılan ajan hangisidir?", "Какое средство чаще всего применяют для протравливания эмали?",
    [["%10 poliakrilik asit", "10 % полиакриловая кислота"], ["%17 EDTA", "17 % ЭДТА"], ["%35–37 fosforik asit", "35–37 % фосфорная кислота"], ["%5 hidroflorik asit", "5 % плавиковая кислота"], ["%10 sitrik asit", "10 % лимонная кислота"]], 2,
    "Fosforik asit mine yüzeyinde mikro gözenekler açar; rezin bu gözeneklere girerek mikromekanik tutunma sağlar. Hidroflorik asit ise porselen yüzeyini pürüzlendirmede kullanılır.",
    "Фосфорная кислота создаёт в эмали микропоры, в которые проникает смола, обеспечивая микромеханическую ретенцию. Плавиковую кислоту используют для протравливания керамики.");
  Q("rest-15", "rest", "materyal", "Kompozit restorasyonlarda C-faktörü neyi ifade eder?", "Что означает С-фактор в композитных реставрациях?",
    [["Bağlanan yüzeylerin bağlanmayan (serbest) yüzeylere oranını", "Отношение связанных поверхностей к свободным"], ["Doldurucu oranını", "Долю наполнителя"], ["Işık cihazının gücünü", "Мощность лампы"], ["Kompozitin renk geçirgenliğini", "Прозрачность композита"], ["Kavitenin derinliğini", "Глубину полости"]], 0,
    "Oran büyüdükçe materyal büzülürken serbestçe akacak yüzey azalır ve polimerizasyon stresi artar. Tabakalı yerleştirme bu stresi azaltmanın temel yoludur.",
    "Чем выше это отношение, тем меньше свободных поверхностей для компенсации усадки и тем больше полимеризационный стресс. Основной способ его снизить — послойное внесение.");
  Q("rest-16", "rest", "materyal", "Dentine bağlanmada “hibrit tabaka” nedir?", "Что такое «гибридный слой» при адгезии к дентину?",
    [["Smear tabakasının diğer adıdır", "Другое название смазанного слоя"], ["Kompozitin en üst tabakasıdır", "Самый верхний слой композита"], ["Mine prizmalarının arasındaki boşluktur", "Промежуток между эмалевыми призмами"], ["Demineralize dentindeki kollajen ağına rezinin sızmasıyla oluşan tabakadır", "Слой, образованный проникновением смолы в коллагеновую сеть деминерализованного дентина"], ["Oksijenle inhibe olmuş rezin tabakasıdır", "Слой смолы, ингибированный кислородом"]], 3,
    "Asitleme sonrası açığa çıkan kollajen liflerinin arasına primer ve adeziv rezin sızar; polimerize olunca dentin ile rezin arasında mikromekanik kilitlenme oluşur.",
    "После протравливания праймер и адгезив проникают между обнажёнными коллагеновыми волокнами; после полимеризации возникает микромеханическое сцепление дентина со смолой.");

  /* ---------- Protetik ---------- */
  Q("prot-9", "prot", "sabit", "Post-kor üzerine yapılan kronlarda “ferrule” etkisi için gereken sağlam diş dokusu yüksekliği en az ne kadardır?", "Какова минимальная высота сохранённых тканей зуба для эффекта «феррул» под коронкой на культевой вкладке?",
    [["0,5 mm", "0,5 мм"], ["1,5–2 mm", "1,5–2 мм"], ["4 mm", "4 мм"], ["5 mm", "5 мм"], ["6 mm", "6 мм"]], 1,
    "Kron kenarının çepeçevre 1,5–2 mm sağlam dentini sarması kök kırığı riskini belirgin biçimde azaltır.",
    "Охват коронкой 1,5–2 мм здорового дентина по всей окружности существенно снижает риск перелома корня.");
  Q("prot-10", "prot", "sabit", "Tam metal döküm kronlarda tercih edilen bitiş çizgisi hangisidir?", "Какой уступ предпочтителен для цельнолитых металлических коронок?",
    [["Omuz (shoulder)", "Прямой уступ (shoulder)"], ["Bıçak sırtı", "Без уступа (knife-edge)"], ["Chamfer", "Желобообразный уступ (chamfer)"], ["Bizotajlı omuz", "Уступ со скосом"], ["Derin chamfer", "Глубокий chamfer"]], 2,
    "Chamfer az diş kesimiyle yeterli metal kalınlığı ve belirgin bir bitiş sağlar. Omuz basamak ise tam seramik ve metal destekli seramik kronların vestibül yüzünde tercih edilir.",
    "Chamfer обеспечивает достаточную толщину металла и чёткую границу при минимальном препарировании. Прямой уступ применяют под цельнокерамические коронки и с вестибулярной стороны металлокерамики.");
  Q("prot-11", "prot", "sabit", "Ante yasası neyi ifade eder?", "Что гласит закон Анте?",
    [["Kron boyu kök boyundan uzun olmalıdır", "Коронка должна быть длиннее корня"], ["Her eksik diş için iki destek gerekir", "На каждый отсутствующий зуб нужны две опоры"], ["Gövde genişliği destek dişinkinden fazla olmalıdır", "Промежуточная часть должна быть шире опоры"], ["Köprü boyu arttıkça esneme azalır", "С увеличением длины моста прогиб уменьшается"], ["Destek dişlerin kök yüzey alanı, yerine konan dişlerinkine eşit ya da ondan büyük olmalıdır", "Площадь корней опорных зубов должна быть не меньше площади корней замещаемых зубов"]], 4,
    "Yasa, destek dişlerin periodontal desteğinin köprüye gelen yükü taşımaya yetip yetmeyeceğini değerlendirmek için kullanılır.",
    "Закон применяют, чтобы оценить, достаточно ли пародонтальной опоры для нагрузки, приходящейся на мостовидный протез.");
  Q("prot-12", "prot", "sabit", "Alt arka bölgede temizlenebilirlik açısından en uygun gövde (pontik) tasarımı hangisidir?", "Какая форма промежуточной части наиболее гигиенична в боковом отделе нижней челюсти?",
    [["Hijyenik (sanitary) gövde", "Промывная (гигиеническая)"], ["Eyer biçimli gövde", "Седловидная"], ["Modifiye sırt örtücü gövde", "Модифицированная гребневая"], ["Ovat gövde", "Овоидная"], ["Konik gövde", "Коническая"]], 0,
    "Hijyenik gövde kretle temas etmez; altından kolayca temizlenir. Estetik zayıf olduğu için yalnızca görünmeyen arka bölgelerde kullanılır. Eyer biçimli gövde ise temizlenemediği için önerilmez.",
    "Промывная часть не касается гребня и легко очищается. Из-за слабой эстетики её применяют только в боковых отделах. Седловидная форма не рекомендуется, так как её невозможно очистить.");
  Q("prot-13", "prot", "hareketli", "Kennedy sınıflamasında modifikasyon almayan sınıf hangisidir?", "Какой класс по Кеннеди не имеет подклассов (модификаций)?",
    [["Sınıf I", "I класс"], ["Sınıf II", "II класс"], ["Sınıf III", "III класс"], ["Sınıf IV", "IV класс"], ["Hepsi modifikasyon alır", "Все имеют подклассы"]], 3,
    "Sınıf IV orta hattı geçen tek bir ön dişsiz boşluktur. Ek bir boşluk bulunursa sınıf, en arkadaki boşluğa göre yeniden belirlenir.",
    "IV класс — единственный передний дефект, пересекающий среднюю линию. При наличии дополнительного дефекта класс определяют заново по наиболее дистальному.");
  Q("prot-14", "prot", "hareketli", "Alt çene hareketli bölümlü protezlerinde en sık kullanılan majör bağlayıcı hangisidir?", "Какой большой соединитель чаще всего применяют в частичных съёмных протезах нижней челюсти?",
    [["Lingual plak", "Лингвальная пластинка"], ["Lingual bar", "Лингвальная дуга"], ["Labial bar", "Лабиальная дуга"], ["Palatal bant", "Нёбная полоса"], ["At nalı bağlayıcı", "Подковообразный соединитель"]], 1,
    "Lingual bar için dişeti kenarı ile ağız tabanı arasında yeterli yükseklik (yaklaşık 7–8 mm) gerekir. Yeterli yer yoksa lingual plak tercih edilir.",
    "Для лингвальной дуги нужна достаточная высота между краем десны и дном полости рта (около 7–8 мм). При её нехватке выбирают лингвальную пластинку.");
  Q("prot-15", "prot", "olcu", "Çalışma modeli ve day yapımında kullanılan yüksek dayanımlı, düşük genleşmeli alçı tipi hangisidir?", "Какой тип гипса — высокопрочный с низким расширением — используют для рабочих моделей и штампиков?",
    [["Tip I", "I тип"], ["Tip II", "II тип"], ["Tip III", "III тип"], ["Tip IV", "IV тип"], ["Tip V", "V тип"]], 3,
    "Tip IV (geliştirilmiş sert alçı) aşınmaya dirençlidir ve sertleşme genleşmesi düşüktür. Tip V'in dayanımı daha da yüksektir, ancak genleşmesi fazladır.",
    "IV тип (супергипс) устойчив к истиранию и мало расширяется при твердении. У V типа прочность ещё выше, но расширение больше.");
  Q("prot-16", "prot", "olcu", "Yüz arkı (facebow) hangi amaçla kullanılır?", "Для чего используют лицевую дугу?",
    [["Dikey boyutu ölçmek için", "Для измерения высоты прикуса"], ["Diş rengini seçmek için", "Для выбора цвета зубов"], ["Üst çenenin kondil eksenine göre konumunu artikülatöre aktarmak için", "Для переноса положения верхней челюсти относительно оси суставных головок в артикулятор"], ["Ölçü kaşığını seçmek için", "Для выбора оттискной ложки"], ["Sentrik ilişkiyi kaydetmek için", "Для регистрации центрального соотношения"]], 2,
    "Yüz arkı kaydı sayesinde üst model artikülatöre, hastadaki menteşe eksenine uygun konumda bağlanır. Alt model ise çeneler arası kayıtla bağlanır.",
    "Благодаря лицевой дуге верхнюю модель устанавливают в артикулятор в соответствии с шарнирной осью пациента. Нижнюю модель фиксируют по регистрату соотношения челюстей.");

  /* ---------- Cerrahi ---------- */
  Q("cer-9", "cer", "patoloji", "Çenelerde en sık görülen odontojenik kist hangisidir?", "Какая одонтогенная киста челюстей встречается чаще всего?",
    [["Dentigeröz kist", "Фолликулярная киста"], ["Odontojenik keratokist", "Одонтогенная кератокиста"], ["Radiküler kist", "Радикулярная киста"], ["Lateral periodontal kist", "Латеральная периодонтальная киста"], ["Erüpsiyon kisti", "Киста прорезывания"]], 2,
    "Radiküler kist, nekrotik pulpalı dişin apeksinde Malassez epitel artıklarının iltihapla uyarılması sonucu gelişir.",
    "Радикулярная киста развивается у верхушки зуба с некрозом пульпы из эпителиальных островков Малассе под действием воспаления.");
  Q("cer-10", "cer", "patoloji", "Gömülü bir dişin kronunu saran ve mine–sement sınırına tutunan kist hangisidir?", "Какая киста окружает коронку ретенированного зуба и прикрепляется в области эмалево-цементной границы?",
    [["Radiküler kist", "Радикулярная киста"], ["Rezidüel kist", "Резидуальная киста"], ["Nazopalatin kanal kisti", "Киста носонёбного канала"], ["Lateral periodontal kist", "Латеральная периодонтальная киста"], ["Dentigeröz kist", "Фолликулярная киста"]], 4,
    "Dentigeröz kist en sık alt üçüncü molar ve üst kanin çevresinde görülür; radyografide gömülü dişin kronunu çevreleyen tek odacıklı radyolüsent alan olarak izlenir.",
    "Фолликулярная киста чаще всего встречается у нижних третьих моляров и верхних клыков; на снимке это однокамерное просветление вокруг коронки ретенированного зуба.");
  Q("cer-11", "cer", "patoloji", "Ludwig anjini hangi boşlukların iki taraflı tutulumu ile karakterizedir?", "Двусторонним поражением каких пространств характеризуется ангина Людвига?",
    [["Bukkal ve kanin boşlukları", "Щёчного и клыкового"], ["Submandibular, sublingual ve submental boşluklar", "Поднижнечелюстного, подъязычного и подподбородочного"], ["Pterygomandibular ve masseterik boşluklar", "Крыловидно-нижнечелюстного и жевательного"], ["İnfratemporal ve temporal boşluklar", "Подвисочного и височного"], ["Parotis ve retrofaringeal boşluklar", "Околоушного и заглоточного"]], 1,
    "Hızla yayılan bu selülit dili yukarı ve arkaya iter; hava yolu tıkanması en önemli ölüm nedenidir. Öncelik hava yolunun güvence altına alınmasıdır.",
    "Эта быстро распространяющаяся флегмона оттесняет язык вверх и назад; главная причина смерти — обструкция дыхательных путей. Первоочередная задача — обеспечить их проходимость.");
  Q("cer-12", "cer", "cekim", "Alt üçüncü molar cerrahisinde lingual flebin kaldırılması sırasında risk altında olan sinir hangisidir?", "Какой нерв подвергается риску при отслаивании язычного лоскута во время удаления нижнего третьего моляра?",
    [["N. buccalis", "Щёчный нерв"], ["N. mentalis", "Подбородочный нерв"], ["N. facialis", "Лицевой нерв"], ["N. lingualis", "Язычный нерв"], ["N. mylohyoideus", "Челюстно-подъязычный нерв"]], 3,
    "N. lingualis üçüncü molar bölgesinde lingual kortekse çok yakın, bazen kret seviyesinde seyreder. Hasarında dilin ön üçte ikisinde his ve tat kaybı görülür.",
    "Язычный нерв в области третьего моляра проходит вплотную к язычной кортикальной пластинке, иногда на уровне гребня. При повреждении теряются чувствительность и вкус на передних двух третях языка.");
  Q("cer-13", "cer", "cekim", "Varfarin kullanan bir hastada diş çekiminden önce hangi test değerlendirilir?", "Какой показатель оценивают перед удалением зуба у пациента, принимающего варфарин?",
    ["INR", ["Kanama zamanı", "Время кровотечения"], ["Trombosit sayısı", "Число тромбоцитов"], ["aPTT", "АЧТВ"], ["Fibrinojen düzeyi", "Уровень фибриногена"]], 0,
    "Varfarin K vitaminine bağımlı pıhtılaşma faktörlerini etkiler ve etkisi INR ile izlenir. Değer tedavi aralığındaysa basit çekimler çoğunlukla ilaç kesilmeden, lokal hemostatik önlemlerle yapılabilir.",
    "Варфарин влияет на витамин-K-зависимые факторы свёртывания, его действие контролируют по МНО. При значении в терапевтическом диапазоне простые удаления обычно проводят без отмены препарата с местным гемостазом.");
  Q("cer-14", "cer", "travma", "Lokal anestezik solüsyona vazokonstriktör eklenmesinin temel yararı nedir?", "В чём основная польза добавления вазоконстриктора к раствору местного анестетика?",
    [["Anesteziğin pH'ını yükseltmek", "Повышение pH анестетика"], ["Alerji riskini ortadan kaldırmak", "Устранение риска аллергии"], ["Emilimi yavaşlatıp etki süresini uzatmak", "Замедление всасывания и удлинение действия"], ["Enjeksiyon ağrısını tamamen önlemek", "Полное устранение боли при инъекции"], ["Anesteziğin karaciğerde yıkımını hızlandırmak", "Ускорение разрушения анестетика в печени"]], 2,
    "Damar daralması anesteziğin kana geçişini yavaşlatır; böylece etki süresi uzar, sistemik toksisite riski azalır ve cerrahi alanda kanama azalır.",
    "Сужение сосудов замедляет поступление анестетика в кровь: действие удлиняется, риск системной токсичности снижается, кровоточивость в операционном поле уменьшается.");
  Q("cer-15", "cer", "travma", "Zigomatik ark kırığında sık görülen bulgu hangisidir?", "Какой признак часто встречается при переломе скуловой дуги?",
    [["Alt dudakta his kaybı", "Онемение нижней губы"], ["Burundan beyin omurilik sıvısı gelmesi", "Ликворея из носа"], ["Dilde yana sapma", "Отклонение языка"], ["Ön açık kapanış", "Передний открытый прикус"], ["Ağız açmada kısıtlılık", "Ограничение открывания рта"]], 4,
    "İçe çöken ark parçası koronoid çıkıntının ve temporal kasın hareketini engeller. Yanak bölgesinde çöküklük de tipiktir.",
    "Вдавленный отломок дуги препятствует движению венечного отростка и височной мышцы. Типично также западение в скуловой области.");
  Q("cer-16", "cer", "travma", "Tek taraflı kondil kırığı olan hastada ağız açılırken alt çene ne yöne sapar?", "В какую сторону смещается нижняя челюсть при открывании рта у пациента с односторонним переломом мыщелкового отростка?",
    [["Sağlam tarafa", "В здоровую сторону"], ["Kırık tarafa", "В сторону перелома"], ["Sapma olmaz", "Не смещается"], ["Öne doğru", "Вперёд"], ["Geriye doğru", "Назад"]], 1,
    "Kırık tarafta lateral pterygoid kas kondili öne çekemez; sağlam taraf öne hareket ettiği için çene kırık tarafa döner.",
    "На стороне перелома латеральная крыловидная мышца не может сместить головку вперёд; здоровая сторона выдвигается, и челюсть поворачивается в сторону перелома.");

  /* ---------- Radyoloji ---------- */
  Q("rad-9", "rad", "yorum", "Radyografide diş kökünü çevreleyen ince radyoopak çizgiye ne ad verilir?", "Как называют тонкую рентгеноконтрастную линию, окружающую корень зуба на снимке?",
    [["Periodontal aralık", "Периодонтальная щель"], ["Alveoler kret", "Альвеолярный гребень"], ["Sement", "Цемент"], ["Lamina dura", "Lamina dura (кортикальная пластинка лунки)"], ["Besleyici kanal", "Питательный канал"]], 3,
    "Lamina dura alveol soketini döşeyen kompakt kemiktir. Onunla kök arasındaki ince radyolüsent bant periodontal ligament aralığıdır.",
    "Lamina dura — компактная кость, выстилающая лунку. Тонкая полоска просветления между ней и корнем — периодонтальная щель.");
  Q("rad-10", "rad", "yorum", "Alt premolarların apeksinde periapikal lezyonla karışabilen anatomik oluşum hangisidir?", "Какое анатомическое образование у верхушек нижних премоляров можно принять за периапикальный очаг?",
    [["Mental foramen", "Подбородочное отверстие"], ["Mandibular kanal", "Нижнечелюстной канал"], ["Lingual foramen", "Язычное отверстие"], ["Submandibular fossa", "Поднижнечелюстная ямка"], ["Genial tüberkül", "Подбородочная ость"]], 0,
    "Ayırt etmek için farklı açıdan ikinci bir film alınır: mental foramen apekse göre yer değiştirir. Ayrıca dişin periodontal aralığı ve lamina durası kesintisiz izlenir.",
    "Для дифференцировки делают второй снимок под другим углом: отверстие смещается относительно верхушки. Кроме того, периодонтальная щель и lamina dura зуба прослеживаются непрерывно.");
  Q("rad-11", "rad", "yorum", "“Servikal burnout” nedir?", "Что такое «cervical burnout»?",
    [["Kök rezorpsiyonunun bir tipi", "Разновидность резорбции корня"], ["Diş taşının radyografik görüntüsü", "Рентгенологическая картина зубного камня"], ["Dişin boyun bölgesinde çürüğe benzeyen, yapaya bağlı radyolüsent görüntü", "Артефактное просветление в области шейки зуба, имитирующее кариес"], ["Aşırı ışınlanmış filmin görüntüsü", "Вид передержанного снимка"], ["Alveoler kretin erimesi", "Убыль альвеолярного гребня"]], 2,
    "Mine ile alveoler kret arasındaki boyun bölgesinde X-ışınını tutan doku az olduğundan burası komşu alanlara göre koyu görünür. Kök çürüğünden, sınırlarının belirsiz olması ve klinik muayenede kavite bulunmamasıyla ayrılır.",
    "В области шейки между эмалью и гребнем меньше тканей, поглощающих лучи, поэтому она выглядит темнее соседних участков. От кариеса корня отличается нечёткими границами и отсутствием полости при осмотре.");
  Q("rad-12", "rad", "teknik", "Tüp kaydırma tekniğinde (SLOB kuralı) tüple aynı yöne hareket eden cisim nerede yer alır?", "Где расположен объект, который при смещении трубки (правило SLOB) сдвигается в ту же сторону?",
    [["Bukkalde", "Щёчно"], ["Lingualde", "Язычно"], ["Mezialde", "Мезиально"], ["Distalde", "Дистально"], ["Apikalde", "Апикально"]], 1,
    "SLOB: Same Lingual, Opposite Buccal. Tüple aynı yöne kayan cisim lingualde, ters yöne kayan cisim bukkaldedir.",
    "SLOB: Same Lingual, Opposite Buccal. Объект, смещающийся в сторону трубки, лежит язычно; смещающийся в противоположную сторону — щёчно.");
  Q("rad-13", "rad", "teknik", "Periapikal radyografide görüntünün olduğundan uzun çıkmasının (elongasyon) nedeni hangisidir?", "В чём причина удлинения изображения зуба на периапикальном снимке?",
    [["Aşırı dikey açı", "Чрезмерный вертикальный угол"], ["Yanlış yatay açı", "Неверный горизонтальный угол"], ["Uzun ışınlama süresi", "Длительная экспозиция"], ["Hastanın hareket etmesi", "Движение пациента"], ["Yetersiz dikey açı", "Недостаточный вертикальный угол"]], 4,
    "Dikey açı yetersizse görüntü uzar, fazlaysa kısalır. Yatay açı hataları ise ara yüzlerin üst üste binmesine yol açar.",
    "При недостаточном вертикальном угле изображение удлиняется, при избыточном — укорачивается. Ошибки горизонтального угла приводят к наложению контактных поверхностей.");
  Q("rad-14", "rad", "fizik", "Tanısal radyolojide saçılan radyasyonun başlıca kaynağı hangi etkileşimdir?", "Какое взаимодействие является основным источником рассеянного излучения в диагностической рентгенологии?",
    [["Fotoelektrik soğurma", "Фотоэлектрическое поглощение"], ["Çift oluşumu", "Образование пар"], ["Compton saçılması", "Комптоновское рассеяние"], ["Karakteristik ışıma", "Характеристическое излучение"], ["Fotodisintegrasyon", "Фотоядерная реакция"]], 2,
    "Compton saçılmasında foton dış yörünge elektronuyla çarpışır, enerjisinin bir kısmını kaybeder ve yön değiştirir. Saçılan fotonlar görüntüde sislenmeye yol açar.",
    "При комптоновском рассеянии фотон сталкивается с электроном внешней оболочки, теряет часть энергии и меняет направление. Рассеянные фотоны вызывают вуаль на изображении.");
  Q("rad-15", "rad", "fizik", "Tüp geriliminin (kVp) artırılması görüntü kontrastını nasıl etkiler?", "Как повышение напряжения на трубке (кВ) влияет на контраст изображения?",
    [["Kontrast azalır, gri tonlar artar", "Контраст снижается, оттенков серого становится больше"], ["Kontrast artar", "Контраст повышается"], ["Kontrast değişmez", "Контраст не меняется"], ["Yalnızca netlik artar", "Повышается только резкость"], ["Görüntü tamamen beyazlaşır", "Изображение становится полностью белым"]], 0,
    "Yüksek kVp daha delici bir ışın demeti oluşturur; dokular arasındaki soğurma farkı azalır ve uzun gri skalalı, düşük kontrastlı görüntü elde edilir.",
    "Высокое напряжение даёт более проникающий пучок; разница поглощения между тканями уменьшается, и получается малоконтрастное изображение с длинной серой шкалой.");
  Q("rad-16", "rad", "fizik", "Tüp akımı (mA) temel olarak neyi belirler?", "Что в первую очередь определяет ток трубки (мА)?",
    [["Fotonların enerjisini", "Энергию фотонов"], ["Odak noktasının yerini", "Положение фокусного пятна"], ["Işın demetinin şeklini", "Форму пучка"], ["Üretilen foton sayısını", "Количество образующихся фотонов"], ["Filtrasyon miktarını", "Степень фильтрации"]], 3,
    "mA filamandan salınan elektron sayısını, dolayısıyla üretilen X-ışını miktarını belirler ve görüntünün yoğunluğunu (kararmasını) etkiler. Işının enerjisini ise kVp belirler.",
    "Ток определяет число электронов, испускаемых нитью, и тем самым количество излучения и плотность (почернение) снимка. Энергию луча определяет напряжение.");

  /* ---------- Periodontoloji ---------- */
  Q("perio-9", "perio", "anatomi", "Yapışık dişeti genişliğinin en fazla olduğu bölge hangisidir?", "В какой области ширина прикреплённой десны наибольшая?",
    [["Alt premolarların vestibülü", "Вестибулярно у нижних премоляров"], ["Üst kesicilerin vestibülü", "Вестибулярно у верхних резцов"], ["Alt molarların lingualı", "Язычно у нижних моляров"], ["Üst molarların vestibülü", "Вестибулярно у верхних моляров"], ["Alt kaninlerin vestibülü", "Вестибулярно у нижних клыков"]], 1,
    "Yapışık dişeti üst kesiciler bölgesinde en geniş, alt birinci premolar bölgesinde en dardır.",
    "Прикреплённая десна шире всего в области верхних резцов и уже всего у нижних первых премоляров.");
  Q("perio-10", "perio", "anatomi", "Aşağıdaki epitellerden hangisi keratinizedir?", "Какой из перечисленных эпителиев ороговевает?",
    [["Birleşim epiteli", "Соединительный эпителий"], ["Oluk epiteli", "Эпителий борозды"], ["Kol (interdental) epiteli", "Эпителий межзубной седловины"], ["Cep epiteli", "Эпителий кармана"], ["Dış (oral) dişeti epiteli", "Наружный (оральный) эпителий десны"]], 4,
    "Ağız boşluğuna bakan dişeti epiteli keratinize ya da parakeratinizedir. Oluk epiteli ve birleşim epiteli keratinize değildir; bu nedenle bakteri ürünlerine karşı daha geçirgendir.",
    "Эпителий десны, обращённый в полость рта, ороговевает (или паракератинизирован). Эпителий борозды и соединительный эпителий не ороговевают и потому более проницаемы для продуктов бактерий.");
  Q("perio-11", "perio", "anatomi", "Periodontal ligament liflerinin sement ve alveol kemiğine gömülen uç kısımlarına ne ad verilir?", "Как называют концевые участки волокон периодонтальной связки, вплетённые в цемент и альвеолярную кость?",
    [["Sharpey lifleri", "Шарпеевские волокна"], ["Oksitalan lifler", "Окситалановые волокна"], ["Tomes lifleri", "Волокна Томса"], ["Korff lifleri", "Волокна Корфа"], ["Elastik lifler", "Эластические волокна"]], 0,
    "Sharpey lifleri kollajen demetlerinin mineralize dokuya gömülen bölümüdür ve dişin alveole tutunmasını sağlar.",
    "Шарпеевские волокна — участки коллагеновых пучков, погружённые в минерализованную ткань; они удерживают зуб в альвеоле.");
  Q("perio-12", "perio", "tedavi", "Periodontal tedavinin birinci aşaması (Faz I) neyi kapsar?", "Что включает первый этап (фаза I) пародонтологического лечения?",
    [["Rejeneratif cerrahi işlemleri", "Регенеративные операции"], ["İmplant yerleştirilmesini", "Установку имплантатов"], ["Plak kontrolü ile diş ve kök yüzeyi temizliğini", "Контроль налёта и очистку поверхностей зубов и корней"], ["Protetik restorasyonları", "Протезирование"], ["Yalnızca idame randevularını", "Только поддерживающие визиты"]], 2,
    "Nedene yönelik başlangıç tedavisi; ağız hijyeni eğitimi, diş taşı temizliği, kök yüzeyi düzleştirme ve plak tutucu etkenlerin giderilmesini içerir. Cerrahi gereksinimi bu aşamadan sonra yeniden değerlendirilir.",
    "Этиотропная начальная терапия включает обучение гигиене, снятие камня, сглаживание корней и устранение факторов ретенции налёта. Необходимость хирургии оценивают повторно после этого этапа.");
  Q("perio-13", "perio", "tedavi", "Klorheksidinli gargaranın uzun süreli kullanımında en sık görülen yan etki hangisidir?", "Какой побочный эффект чаще всего встречается при длительном применении ополаскивателя с хлоргексидином?",
    [["Dişeti çekilmesi", "Рецессия десны"], ["Mine erozyonu", "Эрозия эмали"], ["Ağız kuruluğu", "Сухость во рту"], ["Dişlerde ve dilde kahverengi renklenme", "Коричневое окрашивание зубов и языка"], ["Kalıcı tat kaybı", "Стойкая потеря вкуса"]], 3,
    "Renklenme profesyonel temizlikle giderilebilir. Geçici tat değişikliği ve diş taşı birikiminde artış da görülebilir.",
    "Окрашивание устраняется профессиональной чисткой. Возможны также временное изменение вкуса и усиленное образование камня.");
  Q("perio-14", "perio", "tedavi", "Glickman sınıflamasına göre, sondun furkasyondan bir yüzden diğerine tamamen geçtiği ancak girişin dişetiyle örtülü olduğu durum hangi sınıftır?", "К какому классу по Гликману относится поражение фуркации, при котором зонд проходит насквозь, но вход прикрыт десной?",
    [["Sınıf I", "I класс"], ["Sınıf II", "II класс"], ["Sınıf III", "III класс"], ["Sınıf IV", "IV класс"], ["Sınıflandırılamaz", "Не классифицируется"]], 2,
    "Sınıf III'te furkasyondaki kemik tamamen yıkılmıştır, ancak giriş yumuşak dokuyla örtülüdür. Dişeti çekilmesiyle furkasyon klinik olarak görünür hale gelirse Sınıf IV olarak adlandırılır.",
    "При III классе кость в фуркации разрушена полностью, но вход закрыт мягкими тканями. Если из-за рецессии фуркация видна клинически, это IV класс.");
  Q("perio-15", "perio", "mikro", "Subgingival diş taşının mineral kaynağı nedir?", "Что служит источником минералов для поддесневого зубного камня?",
    [["Tükürük", "Слюна"], ["Dişeti oluğu sıvısı", "Десневая жидкость"], ["Besinler", "Пища"], ["Diş minesi", "Эмаль зуба"], ["Kan pıhtısı", "Кровяной сгусток"]], 1,
    "Supragingival diş taşı minerallerini tükürükten, subgingival diş taşı ise dişeti oluğu sıvısından alır. Bu nedenle subgingival diş taşı daha koyu renkli ve daha serttir.",
    "Наддесневой камень получает минералы из слюны, поддесневой — из десневой жидкости. Поэтому поддесневой камень темнее и плотнее.");
  Q("perio-16", "perio", "tedavi", "Yönlendirilmiş doku rejenerasyonunda bariyer membran kullanılmasının amacı nedir?", "Какова цель применения барьерной мембраны при направленной тканевой регенерации?",
    [["Kanamayı durdurmak", "Остановка кровотечения"], ["Antibiyotik salmak", "Выделение антибиотика"], ["Flebi sabitlemek", "Фиксация лоскута"], ["Kemik greftinin yerini tutmak", "Замещение костного трансплантата"], ["Epitel ve dişeti bağ dokusu hücrelerinin kök yüzeyine göçünü engellemek", "Предотвращение миграции клеток эпителия и соединительной ткани десны к поверхности корня"]], 4,
    "Epitel hücreleri en hızlı çoğalan hücrelerdir. Membran onları dışarıda tutarak periodontal ligament ve kemik kaynaklı hücrelerin defekti doldurmasına zaman ve yer kazandırır.",
    "Эпителиальные клетки размножаются быстрее всех. Мембрана изолирует их, давая время и пространство клеткам периодонтальной связки и кости для заполнения дефекта.");

  /* ---------- Ortodonti ---------- */
  Q("orto-9", "orto", "tani", "Angle Sınıf II bölüm 2 maloklüzyonun tipik özelliği hangisidir?", "Что типично для аномалии II класса 2 подкласса по Энглю?",
    [["Üst santral kesicilerin geriye eğimli olması ve derin kapanış", "Ретрузия верхних центральных резцов и глубокий прикус"], ["Üst kesicilerin belirgin öne eğimi ve artmış overjet", "Выраженная протрузия верхних резцов и увеличенный overjet"], ["Ön açık kapanış", "Передний открытый прикус"], ["Ön çapraz kapanış", "Передний перекрёстный прикус"], ["Alt çenenin önde konumlanması", "Переднее положение нижней челюсти"]], 0,
    "Bölüm 1'de üst kesiciler öne eğimlidir ve overjet artmıştır. Bölüm 2'de ise üst santraller geriye eğimlidir, lateraller çoğu kez öne eğimli görünür ve derin kapanış eşlik eder.",
    "При 1 подклассе верхние резцы наклонены вперёд, overjet увеличен. При 2 подклассе центральные резцы наклонены назад, боковые часто выступают вперёд, прикус глубокий.");
  Q("orto-10", "orto", "tani", "Sefalometride “Nasion” noktası neresidir?", "Что такое точка Nasion в цефалометрии?",
    [["Sella turcica'nın merkezi", "Центр турецкого седла"], ["Çene ucunun en ön noktası", "Самая передняя точка подбородка"], ["Dış kulak yolunun en üst noktası", "Верхняя точка наружного слухового прохода"], ["Frontonazal sütürün en ön noktası", "Самая передняя точка лобно-носового шва"], ["Göz çukurunun en alt noktası", "Нижняя точка глазницы"]], 3,
    "Sella (S) ile Nasion (N) arasındaki çizgi ön kafa kaidesini temsil eder ve SNA, SNB gibi açıların referansıdır.",
    "Линия между Sella (S) и Nasion (N) отражает переднее основание черепа и служит ориентиром для углов SNA и SNB.");
  Q("orto-11", "orto", "tani", "Frankfurt yatay düzlemi hangi iki noktadan geçer?", "Через какие две точки проходит франкфуртская горизонталь?",
    ["Sella – Nasion", "Porion – Orbitale", "Gonion – Menton", "ANS – PNS", "Nasion – Pogonion"], 1,
    "Porion dış kulak yolunun en üst noktası, Orbitale ise göz çukurunun alt kenarının en alt noktasıdır.",
    "Porion — верхняя точка наружного слухового прохода, Orbitale — нижняя точка края глазницы.");
  Q("orto-12", "orto", "tani", "Bolton analizi neyi değerlendirir?", "Что оценивает анализ Болтона?",
    [["İskeletsel yaşı", "Скелетный возраст"], ["Yumuşak doku profilini", "Профиль мягких тканей"], ["Ark uzunluğu ile yer gereksinimini", "Длину дуги и потребность в месте"], ["Büyüme yönünü", "Направление роста"], ["Alt ve üst dişlerin mezyodistal boyutları arasındaki uyumu", "Соответствие мезиодистальных размеров верхних и нижних зубов"]], 4,
    "Diş boyutlarında uyumsuzluk varsa, ideal sıralanma sağlansa bile uygun overjet, overbite ve arka diş ilişkisi elde edilemeyebilir.",
    "При несоответствии размеров зубов даже идеальное выравнивание может не дать правильных overjet, overbite и соотношения боковых зубов.");
  Q("orto-13", "orto", "aparey", "Hızlı üst çene genişletmesi hangi sütürün açılmasını hedefler?", "На раскрытие какого шва направлено быстрое расширение верхней челюсти?",
    [["Frontonazal sütür", "Лобно-носовой шов"], ["Zigomatikomaksiller sütür", "Скуло-верхнечелюстной шов"], ["Midpalatal sütür", "Срединный нёбный шов"], ["İntermaksiller ön sütür", "Межчелюстной шов"], ["Sfenooksipital sinkondroz", "Клиновидно-затылочный синхондроз"]], 2,
    "Büyüme çağında sütür henüz kemikleşmediği için ortopedik kuvvetle açılabilir. Tedavi sırasında üst santraller arasında geçici bir diastema oluşması sütürün açıldığını gösterir.",
    "В период роста шов ещё не окостенел и раскрывается ортопедической силой. Временная диастема между центральными резцами свидетельствует о раскрытии шва.");
  Q("orto-14", "orto", "aparey", "Üst çene geriliğine bağlı iskeletsel Sınıf III ilişkisi olan büyüme çağındaki hastada hangi ağız dışı aparey kullanılır?", "Какой внеротовой аппарат применяют у растущего пациента со скелетным III классом из-за ретрузии верхней челюсти?",
    [["Yüz maskesi (ters headgear)", "Лицевая маска (обратная тяга)"], ["Servikal headgear", "Шейная тяга"], ["Yüksek çekişli headgear", "Высокая тяга"], ["Lip bumper", "Губной бампер"], ["Aktivatör", "Активатор"]], 0,
    "Yüz maskesi üst çeneye öne doğru ortopedik kuvvet uygular ve çoğu kez üst çene genişletmesiyle birlikte kullanılır. Servikal headgear ise Sınıf II olgularda üst çene büyümesini frenler.",
    "Лицевая маска создаёт ортопедическую тягу верхней челюсти вперёд и часто сочетается с её расширением. Шейная тяга сдерживает рост верхней челюсти при II классе.");
  Q("orto-15", "orto", "aparey", "Aşağıdakilerden hangisi fonksiyonel bir ortodontik apareydir?", "Какой из перечисленных аппаратов является функциональным?",
    ["Quad helix", ["Nance apareyi", "Аппарат Нанса"], ["Lingual ark", "Лингвальная дуга"], ["Aktivatör", "Активатор"], ["Transpalatal ark", "Транспалатинальная дуга"]], 3,
    "Fonksiyonel apareyler alt çenenin konumunu değiştirerek kas kuvvetlerinden yararlanır; büyüme çağındaki Sınıf II olgularda kullanılır. Aktivatör, bionatör ve twin block bu gruptadır.",
    "Функциональные аппараты изменяют положение нижней челюсти и используют силу мышц; их применяют при II классе в период роста. К ним относятся активатор, бионатор и твин-блок.");
  Q("orto-16", "orto", "biyomekanik", "Hawley apareyi çoğunlukla hangi amaçla kullanılır?", "Для чего чаще всего применяют аппарат Хоули?",
    [["Üst çeneyi genişletmek", "Расширение верхней челюсти"], ["Tedavi sonucunu korumak (pekiştirme)", "Сохранение результата лечения (ретенция)"], ["Molarları distalize etmek", "Дистализация моляров"], ["Alt çeneyi öne almak", "Выдвижение нижней челюсти"], ["Gömülü dişi sürdürmek", "Вытяжение ретенированного зуба"]], 1,
    "Aktif tedavi sonrasında dişler eski konumlarına dönme eğilimi gösterir. Pekiştirme döneminde hareketli (Hawley, şeffaf plak) ya da sabit (lingual tel) pekiştirme apareyleri kullanılır.",
    "После активного лечения зубы стремятся вернуться в прежнее положение. В ретенционном периоде используют съёмные (Хоули, каппы) или несъёмные (лингвальная проволока) ретейнеры.");

  /* ---------- Endodonti ---------- */
  Q("endo-9", "endo", "pulpa", "Pulpada sayıca en fazla bulunan hücre hangisidir?", "Какие клетки наиболее многочисленны в пульпе?",
    [["Odontoblast", "Одонтобласты"], ["Makrofaj", "Макрофаги"], ["Fibroblast", "Фибробласты"], ["Dendritik hücre", "Дендритные клетки"], ["Mast hücresi", "Тучные клетки"]], 2,
    "Fibroblastlar pulpanın kollajenini ve ara maddesini üretir. Odontoblastlar ise pulpanın çevresinde tek sıra halinde dizilir ve dentin yapımından sorumludur.",
    "Фибробласты вырабатывают коллаген и основное вещество пульпы. Одонтобласты располагаются одним слоем по периферии и отвечают за образование дентина.");
  Q("endo-10", "endo", "pulpa", "Keskin, kısa süreli ve iyi yeri belirlenen diş ağrısından sorumlu sinir lifleri hangileridir?", "Какие нервные волокна отвечают за острую, кратковременную и хорошо локализуемую зубную боль?",
    [["A-delta lifleri", "А-дельта-волокна"], ["C lifleri", "С-волокна"], ["A-beta lifleri", "А-бета-волокна"], ["Sempatik lifler", "Симпатические волокна"], ["A-alfa lifleri", "А-альфа-волокна"]], 0,
    "Miyelinli A-delta lifleri pulpa–dentin sınırında yer alır ve dentin uyarımına yanıt verir. Miyelinsiz C lifleri ise pulpanın derininde bulunur; künt, zonklayıcı ve yeri iyi belirlenemeyen ağrıyı iletir.",
    "Миелинизированные А-дельта-волокна лежат на границе пульпы и дентина и реагируют на раздражение дентина. Безмиелиновые С-волокна расположены глубже и проводят тупую, пульсирующую, плохо локализуемую боль.");
  Q("endo-11", "endo", "pulpa", "Elektrikli pulpa testi neyi değerlendirir?", "Что оценивает электроодонтодиагностика?",
    [["Pulpanın kan akımını", "Кровоток пульпы"], ["Pulpa iltihabının şiddetini", "Выраженность воспаления пульпы"], ["Periapikal lezyonun boyutunu", "Размер периапикального очага"], ["Kök kırığının varlığını", "Наличие перелома корня"], ["Pulpadaki duyusal sinir liflerinin yanıtını", "Ответ чувствительных нервных волокон пульпы"]], 4,
    "Test pulpanın canlılığını değil, duyarlılığını gösterir; yanıt alınması sağlıklı bir kan dolaşımı olduğunu kanıtlamaz. Yeni travma geçirmiş ya da kökü henüz tamamlanmamış dişlerde yanlış negatif sonuç sık görülür.",
    "Тест отражает чувствительность, а не жизнеспособность пульпы: ответ не доказывает нормального кровоснабжения. При недавней травме и несформированном корне часты ложноотрицательные результаты.");
  Q("endo-12", "endo", "morfoloji", "Üst çenede en sık iki kök ve iki kanala sahip olan premolar hangisidir?", "Какой премоляр верхней челюсти чаще всего имеет два корня и два канала?",
    [["Üst ikinci premolar", "Верхний второй премоляр"], ["Üst birinci premolar", "Верхний первый премоляр"], ["Alt birinci premolar", "Нижний первый премоляр"], ["Alt ikinci premolar", "Нижний второй премоляр"], ["Hiçbiri", "Ни один"]], 1,
    "Üst birinci premolarda çoğunlukla bukkal ve palatinal olmak üzere iki kanal bulunur. Üst ikinci premolar ise en sık tek köklüdür.",
    "У верхнего первого премоляра обычно два канала — щёчный и нёбный. Верхний второй премоляр чаще однокорневой.");
  Q("endo-13", "endo", "morfoloji", "C şekilli kanal yapısı en sık hangi dişte görülür?", "В каком зубе чаще всего встречается С-образный канал?",
    [["Üst birinci molar", "Верхний первый моляр"], ["Alt birinci molar", "Нижний первый моляр"], ["Üst ikinci premolar", "Верхний второй премоляр"], ["Alt ikinci molar", "Нижний второй моляр"], ["Alt kanin", "Нижний клык"]], 3,
    "Köklerin birleşmesi sonucu kanallar şerit biçiminde bir geçitle bağlanır. Bu yapının temizlenmesi ve doldurulması güçtür.",
    "При слиянии корней каналы соединяются лентовидным перешейком. Такую систему трудно очистить и запломбировать.");
  Q("endo-14", "endo", "dolgu", "Kök kanal dolgusunda en sık kullanılan kor materyali hangisidir?", "Какой основной материал чаще всего применяют для пломбирования корневых каналов?",
    [["Gümüş kon", "Серебряные штифты"], ["Kalsiyum hidroksit patı", "Паста гидроксида кальция"], ["Güta-perka", "Гуттаперча"], ["Çinko oksit öjenol", "Цинк-оксид-эвгенол"], ["Kompozit rezin", "Композит"]], 2,
    "Güta-perka biyouyumlu, boyutsal olarak kararlı ve gerektiğinde sökülebilir bir materyaldir. Kanal duvarına yapışmadığı için mutlaka bir kanal patıyla birlikte kullanılır.",
    "Гуттаперча биосовместима, стабильна по размерам и при необходимости легко удаляется. К стенкам канала она не прилипает, поэтому её всегда применяют с силером.");
  Q("endo-15", "endo", "dolgu", "Ana kon yerleştirildikten sonra spreader ile yer açılıp yardımcı konların eklendiği dolum tekniği hangisidir?", "Как называется метод обтурации, при котором после установки мастер-штифта спредером создают место для дополнительных штифтов?",
    [["Soğuk lateral kondensasyon", "Холодная латеральная конденсация"], ["Sıcak vertikal kondensasyon", "Тёплая вертикальная конденсация"], ["Tek kon tekniği", "Метод одного штифта"], ["Termoplastik enjeksiyon", "Термопластическая инъекция"], ["Taşıyıcılı güta-perka", "Гуттаперча на носителе"]], 0,
    "Lateral kondensasyon, kontrolü kolay ve taşma riski düşük olduğu için yaygın olarak kullanılan temel tekniktir.",
    "Латеральная конденсация — широко применяемый базовый метод: он легко контролируется и даёт низкий риск выведения материала за верхушку.");
  Q("endo-16", "endo", "irrigasyon", "Kanal yıkaması sırasında aniden başlayan şiddetli ağrı, hızla gelişen şişlik ve morarma en çok neyi düşündürür?", "О чём прежде всего говорят внезапная сильная боль, быстро нарастающий отёк и гематома во время ирригации канала?",
    [["Aletin kanalda kırılmasını", "Отлом инструмента в канале"], ["Lokal anestezinin etkisinin geçmesini", "Окончание действия анестезии"], ["Dikey kök kırığını", "Вертикальный перелом корня"], ["Alerjik olmayan basit bir hassasiyeti", "Простую чувствительность"], ["Sodyum hipokloritin periapikal dokulara taşmasını", "Выведение гипохлорита натрия в периапикальные ткани"]], 4,
    "Önlemek için yandan delikli iğne kullanılır, iğne kanalda sıkıştırılmaz ve solüsyon basınçsız verilir. Olay geliştiğinde kanal serum fizyolojikle yıkanır, ağrı kontrolü sağlanır ve soğuk uygulama yapılır.",
    "Для профилактики используют иглу с боковым отверстием, не заклинивают её в канале и вводят раствор без давления. При осложнении канал промывают физраствором, обезболивают и прикладывают холод.");

  /* ---------- Çocuk Diş Hekimliği ---------- */
  Q("pedo-9", "pedo", "surme", "Süt dişlenmede genellikle en son süren diş hangisidir?", "Какой молочный зуб обычно прорезывается последним?",
    [["Süt kanin", "Молочный клык"], ["Birinci süt azı", "Первый молочный моляр"], ["Süt lateral kesici", "Молочный боковой резец"], ["İkinci süt azı", "Второй молочный моляр"], ["Süt santral kesici", "Молочный центральный резец"]], 3,
    "Olağan sürme sırası: santral kesici, lateral kesici, birinci süt azı, kanin ve ikinci süt azıdır.",
    "Обычный порядок: центральный резец, боковой резец, первый моляр, клык, второй моляр.");
  Q("pedo-10", "pedo", "surme", "Aşağıdaki daimi dişlerden hangisi bir süt dişinin yerine sürmez?", "Какой из постоянных зубов не замещает молочный зуб?",
    [["Daimi santral kesici", "Постоянный центральный резец"], ["Daimi kanin", "Постоянный клык"], ["Birinci premolar", "Первый премоляр"], ["İkinci premolar", "Второй премоляр"], ["Birinci daimi molar", "Первый постоянный моляр"]], 4,
    "Daimi molarlar süt dişlerinin arkasında, selefleri olmadan sürer. Kesiciler, kaninler ve premolarlar ise süt dişlerinin yerini alır.",
    "Постоянные моляры прорезываются позади молочных зубов и не имеют предшественников. Резцы, клыки и премоляры замещают молочные зубы.");
  Q("pedo-11", "pedo", "surme", "Premolarlar hangi süt dişlerinin yerine sürer?", "Какие молочные зубы замещаются премолярами?",
    [["Süt azıların", "Молочные моляры"], ["Süt kaninlerin", "Молочные клыки"], ["Süt lateral kesicilerin", "Молочные боковые резцы"], ["Süt santral kesicilerin", "Молочные центральные резцы"], ["Hiçbir süt dişinin", "Никакие"]], 0,
    "Birinci premolar birinci süt azının, ikinci premolar ikinci süt azının yerini alır. Süt dişlenmede premolar bulunmaz.",
    "Первый премоляр замещает первый молочный моляр, второй — второй. В молочном прикусе премоляров нет.");
  Q("pedo-12", "pedo", "tedavi", "Erken çocukluk çağı çürüğünde (biberon çürüğü) genellikle hangi dişler etkilenmez?", "Какие зубы обычно не поражаются при раннем детском («бутылочном») кариесе?",
    [["Üst süt kesiciler", "Верхние молочные резцы"], ["Üst birinci süt azılar", "Верхние первые молочные моляры"], ["Alt süt kesiciler", "Нижние молочные резцы"], ["Alt birinci süt azılar", "Нижние первые молочные моляры"], ["Üst süt kaninler", "Верхние молочные клыки"]], 2,
    "Emme sırasında dil alt kesicileri örter; ayrıca bu dişler dil altı ve çene altı tükürük bezlerinin kanal ağızlarına yakındır. Tablo çoğunlukla üst kesicilerde başlar.",
    "При сосании язык прикрывает нижние резцы; кроме того, они расположены рядом с устьями подъязычных и поднижнечелюстных желёз. Поражение обычно начинается с верхних резцов.");
  Q("pedo-13", "pedo", "tedavi", "Süt azılarında yaygın madde kaybı olduğunda ya da pulpa tedavisinden sonra tercih edilen restorasyon hangisidir?", "Какая реставрация предпочтительна при обширном разрушении молочного моляра или после лечения пульпы?",
    [["Amalgam dolgu", "Амальгамовая пломба"], ["Paslanmaz çelik kron", "Стандартная стальная коронка"], ["Cam iyonomer dolgu", "Стеклоиономерная пломба"], ["Porselen kron", "Керамическая коронка"], ["Fissür örtücü", "Герметик"]], 1,
    "Hazır paslanmaz çelik kronlar dayanıklıdır, tek seansta uygulanır ve dişi düşme zamanına kadar korur.",
    "Стандартные стальные коронки прочны, устанавливаются за одно посещение и сохраняют зуб до физиологической смены.");
  Q("pedo-14", "pedo", "tedavi", "Pulpotomi nedir?", "Что такое пульпотомия?",
    [["Pulpanın tümüyle çıkarılması", "Полное удаление пульпы"], ["Açığa çıkan pulpanın doğrudan örtülmesi", "Прямое покрытие вскрытой пульпы"], ["Çürüğün bir kısmının bırakılarak dolgu yapılması", "Пломбирование с частичным сохранением кариозного дентина"], ["Kök ucunun cerrahi olarak kesilmesi", "Хирургическое иссечение верхушки корня"], ["Kron pulpasının çıkarılıp kök pulpasının canlı bırakılması", "Удаление коронковой пульпы с сохранением живой корневой"]], 4,
    "İltihap kron pulpasıyla sınırlıysa uygulanır. Kalan kök pulpasının üzeri kalsiyum silikat esaslı materyal (MTA gibi) ile örtülür; kanamanın kısa sürede durması kök pulpasının sağlıklı olduğunu gösterir.",
    "Применяется, когда воспаление ограничено коронковой пульпой. Культю покрывают материалом на основе силиката кальция (например, MTA); быстрая остановка кровотечения говорит о здоровой корневой пульпе.");
  Q("pedo-15", "pedo", "tedavi", "Dental florozis hangi durumda ortaya çıkar?", "В каких условиях возникает флюороз зубов?",
    [["Sürmüş dişlere sık florür jeli uygulanmasıyla", "При частом нанесении фторгеля на прорезавшиеся зубы"], ["Erişkinlikte florürlü su içilmesiyle", "При употреблении фторированной воды во взрослом возрасте"], ["Florürlü diş macununun tükürülmesiyle", "При сплёвывании фторсодержащей пасты"], ["Mine oluşumu döneminde sistemik olarak aşırı florür alınmasıyla", "При избыточном системном поступлении фтора в период формирования эмали"], ["Florür eksikliğinde", "При дефиците фтора"]], 3,
    "Aşırı florür ameloblastların işlevini bozar ve minede beyaz çizgilerden kahverengi lekelere ve çukurcuklara kadar değişen görünüme yol açar. Küçük çocuklarda macunun yutulması bu nedenle sınırlandırılır.",
    "Избыток фтора нарушает функцию амелобластов, вызывая изменения эмали от белых полосок до коричневых пятен и ямок. Поэтому у маленьких детей ограничивают проглатывание пасты.");
  Q("pedo-16", "pedo", "tedavi", "Süt kesici dişin intrüzyonunda en önemli risk hangisidir?", "В чём главный риск при вколоченном вывихе молочного резца?",
    [["Alttaki daimi diş germinin zarar görmesi", "Повреждение зачатка постоянного зуба"], ["Komşu süt dişinin düşmesi", "Выпадение соседнего молочного зуба"], ["Alt çenenin kırılması", "Перелом нижней челюсти"], ["Tükürük bezinin tıkanması", "Закупорка слюнной железы"], ["Dil frenulumunun yırtılması", "Разрыв уздечки языка"]], 0,
    "Süt kesicinin kökü daimi diş germine çok yakındır. Kök germe doğru itilmişse süt dişi çekilir; germden uzağa yönelmişse dişin kendiliğinden yeniden sürmesi beklenir.",
    "Корень молочного резца расположен вплотную к зачатку постоянного зуба. Если корень смещён к зачатку, молочный зуб удаляют; если от него — ожидают самостоятельного повторного прорезывания.");
})();
