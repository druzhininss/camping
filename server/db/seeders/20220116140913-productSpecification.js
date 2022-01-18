module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('ProductSpecifications', [
      // Палатка 1
      {
        spec_id: 2, // Количество мест
        product_id: 1,
        specValue: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 3, // Вес
        product_id: 1,
        specValue: '14 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 1,
        specValue: 'Кемпинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 1,
        specValue: '460x240x180 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 1,
        specValue: '68х26 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 6, // Материал тента
        product_id: 1,
        specValue: 'Полиэстер. мин. 4000, макс. 10000 мм H2O',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 7, // Материал дна
        product_id: 1,
        specValue: 'Полиэстер. мин. 6000, макс. 10000 мм Н2О',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 8, // Внутренняя палатка
        product_id: 1,
        specValue: 'Polyester RipStop Light',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 9, // Материал дуг
        product_id: 1,
        specValue: 'Фибергласс 11 мм',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 10, // Количество входов
        product_id: 1,
        specValue: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 11, // Цвет
        product_id: 1,
        specValue: 'зеленый',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 12, // Ветроустойчивость
        product_id: 1,
        specValue: 'средняя',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 1,
        specValue: `Туристическая палатка Alexika Scout 2 - лучший вариант для пешего туризма.
        Соотношение веса палатки к размеру в чехле близко к идеальному. Палатка
        рассчитана на двух туристов, но возможно размещение третьего при укладке
        «валетом». Палатка гарантировано выдерживает любые дожди и сильные порывы
        ветра, что было доказано многочисленными экспедициями и тестами. Внешний тент
        надежно защитит вас от сильного ветра, дождя и снега. Палатку можно использовать
        круглогодично, но следует избегать больших снеговых нагрузок. Палатка легко
        собирается за 3-5 минут и очень устойчива при растягивании всех ветровых оттяжек.
        Двухслойная конструкция палатки гарантирует комфорт проживания. Поток воздуха,
        проходя под нижним краем внешнего тента и нагреваясь, поднимается в пространство
        между внутренней и внешней палаткой, испаряя конденсат и забирая продукты
        дыхания, выводит их через вентиляционную систему в верхней точке купола палатки.
        Также прослойка воздуха между внешним тентом и внутренней палаткой работает как
        термобарьер и спасает от резкого перепада температур.
        Тент палатки выполнен из прочной, устойчивой к истиранию и разрушению
        ультрафиолетом ткани Polyester 190T PU с многослойным полиуретановым
        покрытием c внутренней стороны. Данное покрытие гарантирует водонепроницаемость
        более 10 000 мм водяного столба для новой палатки (давление воды при обычном
        дожде не превышает 1500-2000 мм) и не менее 4000 мм для палатки, используемой в
        течение нескольких лет. Для увеличения водоотталкивающих свойств внешняя сторона
        тента обработана специальной пропиткой Water Repellent. Ткань пропитывается
        составом, задерживающим распространения огня (в месте падения искры ткань
        оплавится, но вся палатка не загорится, что очень важно с точки зрения безопасности).
        Дно палатки выполнено из высокопрочной и устойчивой к истиранию ткани Oxford
        Polyester 150D PU с многослойным покрытием полиуретаном. Максимальная
        водонепроницаемость составляет более 11 000 мм водяного столба, минимальная -
        6000 мм водяного столба. Дно палатки сшито в виде короба, это спасет вас от
        затопления даже в очень сильный дождь.
        Тент внутренней палатки произведен из ткани с усилением Polyester RipStop
        Light. Для усиления ткани без большого увеличения веса вплетена более толстая и
        прочная нить с равномерным шагом по вертикали и горизонтали - это технология
        RipStop. Ткань паропроницаема и почти не конденсирует на себе влагу,
        водоотталкивающая пропитка не позволяет каплям конденсата проникать во
        внутреннюю палатку, что гарантирует сухость и комфорт. Тент внутренней палатки
        выполняется в желтом цвете для психологического комфорта проживающих (жить в
        темных палатках неприятно, а просыпаясь в палатке Alexika, вы видите солнышко
        вокруг себя).`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 1,
        specValue: 'Scout 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 1,
        specValue: '18999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Палатка 2
      {
        spec_id: 2, // Количество мест
        product_id: 2,
        specValue: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 3, // Вес
        product_id: 2,
        specValue: '4 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 2,
        specValue: 'Трекинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 2,
        specValue: '240x210x100 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 2,
        specValue: '54х19 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 6, // Материал тента
        product_id: 2,
        specValue: 'Полиэстер. мин. 4000, макс. 10000 мм H2O',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 7, // Материал дна
        product_id: 2,
        specValue: 'Полиэстер. мин. 6000, макс. 10000 мм Н2О',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 8, // Внутренняя палатка
        product_id: 2,
        specValue: 'Polyester RipStop Light',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 9, // Материал дуг
        product_id: 2,
        specValue: 'Фибергласс 9.5 мм',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 10, // Количество входов
        product_id: 2,
        specValue: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 11, // Цвет
        product_id: 2,
        specValue: 'зеленый',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 12, // Ветроустойчивость
        product_id: 2,
        specValue: 'средняя',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 2,
        specValue: `Туристическая палатка Alexika Scout 2 Fib - лучший вариант для пешего туризма.
        Соотношение веса палатки к размеру в чехле близко к идеальному. Палатка
        рассчитана на двух туристов, но возможно размещение третьего при укладке
        «валетом». Палатка гарантировано выдерживает любые дожди и сильные порывы
        ветра, что было доказано многочисленными экспедициями и тестами. Внешний тент
        надежно защитит вас от сильного ветра, дождя и снега. Палатку можно использовать
        круглогодично, но следует избегать больших снеговых нагрузок. Палатка легко
        собирается за 3-5 минут и очень устойчива при растягивании всех ветровых оттяжек.
        Двухслойная конструкция палатки гарантирует комфорт проживания. Поток воздуха,
        проходя под нижним краем внешнего тента и нагреваясь, поднимается в пространство
        между внутренней и внешней палаткой, испаряя конденсат и забирая продукты
        дыхания, выводит их через вентиляционную систему в верхней точке купола палатки.
        Также прослойка воздуха между внешним тентом и внутренней палаткой работает как
        термобарьер и спасает от резкого перепада температур.
        Тент палатки выполнен из прочной, устойчивой к истиранию и разрушению
        ультрафиолетом ткани Polyester 190T PU с многослойным полиуретановым
        покрытием c внутренней стороны. Данное покрытие гарантирует водонепроницаемость
        более 10 000 мм водяного столба для новой палатки (давление воды при обычном
        дожде не превышает 1500-2000 мм) и не менее 4000 мм для палатки, используемой в
        течение нескольких лет. Для увеличения водоотталкивающих свойств внешняя сторона
        тента обработана специальной пропиткой Water Repellent. Ткань пропитывается
        составом, задерживающим распространения огня (в месте падения искры ткань
        оплавится, но вся палатка не загорится, что очень важно с точки зрения безопасности).
        Дно палатки выполнено из высокопрочной и устойчивой к истиранию ткани Oxford
        Polyester 150D PU с многослойным покрытием полиуретаном. Максимальная
        водонепроницаемость составляет более 11 000 мм водяного столба, минимальная -
        6000 мм водяного столба. Дно палатки сшито в виде короба, это спасет вас от
        затопления даже в очень сильный дождь.
        Тент внутренней палатки произведен из ткани с усилением Polyester RipStop
        Light. Для усиления ткани без большого увеличения веса вплетена более толстая и
        прочная нить с равномерным шагом по вертикали и горизонтали - это технология
        RipStop. Ткань паропроницаема и почти не конденсирует на себе влагу,
        водоотталкивающая пропитка не позволяет каплям конденсата проникать во
        внутреннюю палатку, что гарантирует сухость и комфорт. Тент внутренней палатки
        выполняется в желтом цвете для психологического комфорта проживающих (жить в
        темных палатках неприятно, а просыпаясь в палатке Alexika, вы видите солнышко
        вокруг себя)`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 2,
        specValue: 'Scout 2 Fib',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 2,
        specValue: '13299',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Палатка 3
      {
        spec_id: 2, // Количество мест
        product_id: 3,
        specValue: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 3, // Вес
        product_id: 3,
        specValue: '6 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 3,
        specValue: 'Экстрим',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 3,
        specValue: '395x210x120 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 3,
        specValue: '20x52 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 6, // Материал тента
        product_id: 3,
        specValue: 'Нейлон 3000 мм',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 7, // Материал дна
        product_id: 3,
        specValue: 'Полиэстер. мин. 6000, макс. 10000 мм Н2О',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 8, // Внутренняя палатка
        product_id: 3,
        specValue: 'Polyester RipStop Light',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 9, // Материал дуг
        product_id: 3,
        specValue: 'Алюминий 8.5 мм',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 10, // Количество входов
        product_id: 3,
        specValue: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 11, // Цвет
        product_id: 3,
        specValue: 'красный',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 12, // Ветроустойчивость
        product_id: 3,
        specValue: 'высокая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 3,
        specValue: `Легендарная экспедиционная палатка, прошедшая испытание ураганным ветром,
        сильнейшими снегопадами и сверхнизкими температурами. Высокопрочные материалы
        и продуманная до мелочей конструкция позволяют заявить, что Mirage 4 - одна из
        лучших палаток для базовых лагерей и восхождений в гималайском стиле.
        Палатка Mirage 4 разрабатывалась для базовых лагерей, создаваемых при
        восхождении в гималайском стиле. Требовалась просторная палатка, с высокой
        ветроустойчивостью к ураганным ветрам, большой снеговой нагрузке и низким (до - 45
        С) температурам. Обязательное требование - наличие ветровой юбки и просторного
        тамбура. Была выбрана схема с четырьмя дугами с семью точками пересечения для
        внутренней палатки и одной дугой для формирования тамбура. Данная конструкция
        отличается невероятной ветроустойчивостью и используется многими производителями
        палаток.
        Есть несколько способов предварительных испытаний: аэротруба, морозильная
        камера, год под солнцем, дождем и снегом. Это дает результаты, но не заменяет
        испытания горами. Порой цена таких испытаний - человеческая жизнь. Первые палатки
        этой серии тестировали в начале 2000-х гг., и они показали себя очень достойно. С
        появлением тканей с силиконовым покрытием Mirage 4 стал прочнее и легче. В
        процессе испытаний палатка постоянно совершенствовалась. Она стала просторнее,
        внутри появилось множество удобных карманов, была полностью переработана
        система вентиляции.
        Мы всегда уверены в классе наших экстремальных палаток, но земной поклон друзьям-альпинистам, кто оказал нам доверие и испытывал снаряжение в чрезвычайно
        тяжелых погодных условиях. Ураганный ветер, снегопады, полностью накрывшие
        палатки снегом, падение температур до -45 С - эти напасти сплетались в
        многонедельные испытания на выживание. Если не было угрозы жизни альпинистов, то
        испытания продолжались до полного разрушения снаряжения. Прошло более 10 лет с
        начала этой работы. Нам есть, чем гордиться, потому что испытания доказали - мы
        делаем по-настоящему надежные палатки и, в отличие от других производителей,
        можем предъявить документальные свидетельства этого.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 3,
        specValue: 'Mirage 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 3,
        specValue: '62899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Палатка 4
      {
        spec_id: 3, // Вес
        product_id: 4,
        specValue: '1.15 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 4,
        specValue: 'Тенты',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 4,
        specValue: '300x320 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 4,
        specValue: '5x12x40 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 6, // Материал тента
        product_id: 4,
        specValue: 'Polyester 190T PU 4000 mm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 7, // Материал дна
        product_id: 4,
        specValue: 'нет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 8, // Внутренняя палатка
        product_id: 4,
        specValue: 'Polyester RipStop Light',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 9, // Материал дуг
        product_id: 4,
        specValue: 'нет',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 11, // Цвет
        product_id: 4,
        specValue: 'зеленый',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 12, // Ветроустойчивость
        product_id: 4,
        specValue: 'низкая',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 4,
        specValue: 'Универсальный тент защищает вас от дождя и солнца.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 4,
        specValue: 'TARP 3х3,2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 4,
        specValue: '5399',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальник 1
      {
        spec_id: 3, // Вес
        product_id: 5,
        specValue: '2.8 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 13, // Т предела комфорта
        product_id: 5,
        specValue: '0 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 14, // Т комфорта
        product_id: 5,
        specValue: '5 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 15, // T экстрима
        product_id: 5,
        specValue: '-16 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 5,
        specValue: '(195+35)x100 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 5,
        specValue: '46/36x28 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 16, // Сезонность
        product_id: 5,
        specValue: 'весна-осень',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 17, // Внешняя ткань верх
        product_id: 5,
        specValue: 'Полиэстер 190T',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 18, // Внешняя ткань низ
        product_id: 5,
        specValue: 'Полиэстер 190Т Diamond RipStop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 19, // Внутренняя ткань
        product_id: 5,
        specValue: 'Фланель',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 20, // Утеплитель
        product_id: 5,
        specValue: 'APF-Isoterm 3D 300 (2x150) g/m2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 5,
        specValue: 'Кемпинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 5,
        specValue: `Много лет спальник Siberia Wide Plus является мировым хитом продаж для любителей
        комфорта и безмятежного сна. Сочетание технологий Protective Shell (защитная
        оболочка) и Soft Space (мягкое пространство) позволит вам провести ночь на природе
        с весны по осень как в собственной домашней кровати.
        Чем же спальный мешок Siberia Wide Plus так хорош, что его ежегодно покупают
        тысячи людей и так лестно о нем отзываются?
        Прежде всего, он просторный. Ширина в один метр позволяет забыть о приступах
        клаустрофобии в спальниках «стандартной» ширины (75-80 см). Вы сможете сгибать и
        поджимать руки и ноги или сворачиваться клубочком, не упираясь в боковую молнию.
        Вся внутренняя часть спальника, отвороты и валики, касающиеся лица, выполнены из
        высококачественной мягкой, шелковистой и теплой 100% хлопковой фланели.
        Достаточно коснуться ее рукой и вы не захотите променять ее на дешевую синтетику.
        Для создания подушки в капюшоне есть специальное отделение, куда вы уберете
        мягкую кофту и поспите с удовольствием.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 5,
        specValue: 'Siberia Wide Plus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 5,
        specValue: '10999',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальник 2
      {
        spec_id: 3, // Вес
        product_id: 6,
        specValue: '1.7 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 13, // Т предела комфорта
        product_id: 6,
        specValue: '-3 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 14, // Т комфорта
        product_id: 6,
        specValue: '2 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 15, // T экстрима
        product_id: 6,
        specValue: '-19 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 6,
        specValue: '210x80x55 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 6,
        specValue: '44/32х23 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 16, // Сезонность
        product_id: 6,
        specValue: 'весна-осень',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 17, // Внешняя ткань верх
        product_id: 6,
        specValue: 'Полиэстер 190T',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 18, // Внешняя ткань низ
        product_id: 6,
        specValue: 'Polyester 190T Diamond RipStop PU 250 mm H2O',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 19, // Внутренняя ткань
        product_id: 6,
        specValue: 'Polyester 190T',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 20, // Утеплитель
        product_id: 6,
        specValue: 'APF-Isoterm 3D 350 (2x175) г/м2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 6,
        specValue: 'Трекинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 6,
        specValue: `Все совершенство модели Mountain для людей ростом до 175 см. Нет нужды
        нести лишний вес, а уменьшенный объем спального мешка освободит
        дополнительное место в рюкзаке. Спальник предназначен для пеших походов с
        ранней весны до первых осенних заморозков. Элементы двух
        концепций Protective Shell (защитная оболочка) и Soft Space (мягкое внутреннее
        пространство) защитят вас от холода и влаги, сделают сон максимально комфортным.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 6,
        specValue: 'Mountain Compact',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 6,
        specValue: '8599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Спальник 3
      {
        spec_id: 3, // Вес
        product_id: 7,
        specValue: '1.6 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 13, // Т предела комфорта
        product_id: 7,
        specValue: '-1 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 14, // Т комфорта
        product_id: 7,
        specValue: '5 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 15, // T экстрима
        product_id: 7,
        specValue: '-16 C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 7,
        specValue: '210x80x55 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 7,
        specValue: '37/27x21 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 16, // Сезонность
        product_id: 7,
        specValue: 'весна-осень',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 17, // Внешняя ткань верх
        product_id: 7,
        specValue: 'Nylon 210T RipStop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 18, // Внешняя ткань низ
        product_id: 7,
        specValue: 'Nylon 210T RipStop PU 250 mm H2O',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 19, // Внутренняя ткань
        product_id: 7,
        specValue: 'Soft Micro Polyester 300T Diamond RipStop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 20, // Утеплитель
        product_id: 7,
        specValue: '240 (2x120) г/м2 Hi-Isoterm Technofiber 1.5D',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 7,
        specValue: 'Экстрим',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 7,
        specValue: `Хороший спальный мешок для летних восхождений и путешествий по русскому
        северу, где температуры могут падать до 0⁰ С. Соотношение температурных
        характеристик к весу и объему почти идеально. Tibet Compact рассчитан на
        человека ростом до 178 см, благодаря этому спальник легче и компактней.
        Элементы двух концепций Protective Shell (защитная оболочка) и Soft Space (мягкое
        внутреннее пространство) защитят вас от холода и влаги, сделают сон максимально
        комфортным.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 7,
        specValue: 'Tibet Compact',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 7,
        specValue: '8899',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврик 1
      {
        spec_id: 3, // Вес
        product_id: 8,
        specValue: '2.1 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 8,
        specValue: '198x76x7.5 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 8,
        specValue: '80x18 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 21, // Наполнитель коврика
        product_id: 8,
        specValue: 'Вспененный полиуретан 16 кг/м3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 22, // Материал верха
        product_id: 8,
        specValue: 'Polyester 50D Stretch Laminated TPU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 23, // Материал низа
        product_id: 8,
        specValue: 'Polyester 75D Non-Slip Laminated TPU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 8,
        specValue: 'Кемпинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 24, // R-value
        product_id: 8,
        specValue: '6.4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 11, // Цвет
        product_id: 8,
        specValue: 'коричневый',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 8,
        specValue: `Alpine Plus 80 - один из самых популярных ковриков кемпинговой серии. Легко
        заменяет ортопедический матрас, полностью защищает от холодной земли и
        дискомфорта от шишек и корней под вами. Верхняя часть коврика создана на
        основе разработок ортопедических матрасов и имеет волнообразную структуру,
        которая прекрасно принимает и распределяет вес, делая сон на природе не менее
        комфортным, чем в родной кровати. Толщина коврика 7.5 см, что гарантирует высокую
        теплоизоляцию. Коврик достаточно широкий (76 см) и длинный (198 см), чтобы быть
        удобным для крупных людей. Кроме того, с каждой из сторон коврика вшита лента
        Velcro, которая позволяет соединять несколько ковриков в одну широкую кровать.
        Верхняя ткань коврика приятна на ощупь, шелковиста и не вызывает
        дискомфорта при соприкосновении с кожей лица. Нижняя часть коврика выполнена
        из высокопрочной не скользящей полиэстеровой ткани, специально разработанной для
        этого вида продукции. Ткань ламинирована прочной и эластичной TPU пленкой. Она
        прекрасно удерживает воздух и не дает проникать влаге внутрь коврика.
        Два вентиля по углам коврика, изготовленные из прочного морозостойкого пластика,
        позволяют быстро наполнять коврик воздухом и быстро сдувать коврик. Клапан не
        имеет резьбы, закрывается путем нажатия на головку клапана и поворота по часовой
        стрелке.
        Для уменьшения массы и быстрого набора воздуха, а также для облегчения
        сдувания, коврик имеет горизонтальные цилиндрические воздушные
        каналы. При открытых клапанах за счет расправления вспененного полиуретана
        коврик наполняется воздухом и его почти не надо поддувать. Обратите внимание, что
        когда вы покупаете новый коврик, необходимо открыть клапана и дать ему
        восстановиться в течение 3-4 часов. В последующие разы он будет расправляться за
        10-15 минут. Упругость коврика можно регулировать степенью надувания или
        стравливания воздуха из коврика. Советуем не надувать коврик слишком сильно.
        Коврик станет слишком жестким, а срок службы коврика может сократиться. Коврик
        можно поддувать ртом, но лучше использовать ручную помпу, так как при надувании
        ртом в коврик поступает влага.
        Вспененный наполненный воздухом полиуретан плотностью 16 кг/м3 - отличный
        теплоизолятор с прекрасной упругостью, который комфортно поддерживает тело во
        время сна.
        В комплекте к коврику идет ремонтный набор и чехол. Коврик производится в трех
        цветах. Alpine Plus 80 производится на одной из самых современных фабрик в
        Тайване. На этой фабрике производятся до 90% ковриков для самых известных
        мировых марок.
        Хранить коврик желательно в развернутом состоянии на горизонтальной поверхности с
        открытыми клапанами. Обязательно высушивайте коврик после поездок, не храните его
        сырым в свернутом состоянии более суток.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 8,
        specValue: 'Alpine Plus 80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 8,
        specValue: '12499',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Коврик 2
      {
        spec_id: 3, // Вес
        product_id: 9,
        specValue: '0.7 кг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 4, // Размер
        product_id: 9,
        specValue: '183x51x3,1 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 5, // Размер в чехле
        product_id: 9,
        specValue: '27x14 см',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 21, // Наполнитель коврика
        product_id: 9,
        specValue: 'Вспененный полиуретан 16 кг/м3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 22, // Материал верха
        product_id: 9,
        specValue: 'Polyester 75D Laminated TPU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 23, // Материал низа
        product_id: 9,
        specValue: 'Polyester 75D Laminated TPU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 1, // Область применения
        product_id: 9,
        specValue: 'Трекинг',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 24, // R-value
        product_id: 9,
        specValue: '3.5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 11, // Цвет
        product_id: 9,
        specValue: 'синий',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 25, // Описание
        product_id: 9,
        specValue: `Alexika Travel - самый легкий и компактный коврик в трекинговой серии. Длина в
        183 см и ширина 51 см достаточны для комфортного сна. Он позволяет
        путешествовать с апреля по октябрь, не боясь прохладной земли и дискомфорта от
        шишек и корней деревьев под палаткой. Для уменьшения массы и быстрого набора
        воздуха коврик имеет сквозную перфорацию. При открытом клапане, за счет
        расправления вспененного полиуретана, коврик наполняется воздухом и его почти не
        надо поддувать.
        Обратите внимание, что когда вы покупаете новый коврик, необходимо открыть клапан
        и дать ему восстановится в течение 2-3 часов. Далее он будет расправляться за 5-7
        минут.
        Упругость коврика можно регулировать степенью надувания или стравливания воздуха
        из коврика. Советуем не надувать коврик слишком сильно. Коврик станет слишком
        жестким, а срок службы коврика может сократиться.
        Наполненный воздухом вспененный полиуретан плотностью 16 кг/м3 - отличный
        теплоизолятор с прекрасной упругостью, который комфортно поддерживает тело во
        время сна.
        Внешняя ткань полиэстер 75D, используемая на коврике, достаточно прочна на
        истирание, но мы рекомендуем вам использовать коврик внутри палатки. Ткань
        ламинирована прочной и эластичной TPU пленкой. Она прекрасно удерживает воздух и
        не дает проникать влаге нутрь коврика.
        Клапан на коврике сделан из ударопрочного и морозостойкого пластика, но в
        любом случае следует аккуратно открывать и закрывать воздушный клапан согласно
        инструкции, размещенной на клапане коврика.
        В комплекте с ковриком идет ремонтный набор и чехол. Коврик производится в
        трех цветах. Travel производится на одной из самых крупных фабрик в Тайване. На
        этой фабрике производятся до 90% ковриков для самых известных мировых марок.`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 26, // Бренд
        product_id: 9,
        specValue: 'Travel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        spec_id: 27, // Цена
        product_id: 9,
        specValue: '5599',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ProductSpecifications', null, {});
  },
};
