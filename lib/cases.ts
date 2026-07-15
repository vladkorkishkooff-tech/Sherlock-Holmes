export type CaseSlug = 'a-study-in-scarlet' | 'the-hound' | 'a-scandal-in-bohemia'

export interface CaseStep {
  title: { ru: string; en: string }
  text: { ru: string; en: string }
}

export interface CaseFile {
  slug: CaseSlug
  fileNo: { ru: string; en: string }
  year: string
  image: string
  title: { ru: string; en: string }
  teaser: { ru: string; en: string }
  intro: { ru: string; en: string }
  steps: CaseStep[]
  verdict: { ru: string; en: string }
}

export const cases: CaseFile[] = [
  {
    slug: 'a-study-in-scarlet',
    fileNo: { ru: 'Дело № 1881-03', en: 'Case No. 1881-03' },
    year: '1881',
    image: '/images/case-scarlet.png',
    title: { ru: 'Этюд в багровых тонах', en: 'A Study in Scarlet' },
    teaser: {
      ru: 'Тело в пустом доме на Лористон-Гарденс. На стене — слово «RACHE», написанное кровью.',
      en: 'A body in an empty house at Lauriston Gardens. On the wall — the word "RACHE", written in blood.',
    },
    intro: {
      ru: 'Пустой дом, тело без единой раны — и кровь на стене, которая не принадлежит жертве. Скотленд-Ярд уверен: «RACHE» — это недописанное имя «Rachel». Холмс уверен в обратном.',
      en: 'An empty house, a body without a single wound — and blood on the wall that does not belong to the victim. Scotland Yard is certain "RACHE" is an unfinished "Rachel". Holmes is certain of the opposite.',
    },
    steps: [
      {
        title: { ru: 'Осмотр дороги', en: 'The road' },
        text: {
          ru: 'Следы кэба у обочины: колея узкая — двуколка. Лошадь стояла долго — земля истоптана. Кэбмен ждал.',
          en: 'Cab tracks by the kerb: a narrow gauge — a hansom. The horse stood long — the ground is trampled. The cabman waited.',
        },
      },
      {
        title: { ru: 'Следы в комнате', en: 'The footprints' },
        text: {
          ru: 'Двое мужчин: один — щёголь в лакированных ботинках, второй — высокий, в квадратных носах. Высокий ходил по комнате, щёголь стоял.',
          en: 'Two men: one a dandy in patent leather, the other tall, in square-toed boots. The tall one paced the room; the dandy stood still.',
        },
      },
      {
        title: { ru: 'Слово на стене', en: 'The word on the wall' },
        text: {
          ru: '«RACHE» — по-немецки «месть». Но написано с нажимом, несвойственным немцу. Ложный след, оставленный намеренно.',
          en: '"RACHE" is German for "revenge". Yet written with a pressure no German would use. A false trail, laid deliberately.',
        },
      },
      {
        title: { ru: 'Запах губ', en: 'The scent' },
        text: {
          ru: 'Кисловатый запах у рта жертвы. Яд. Жертву заставили выбрать одну из двух пилюль — дуэль, где судьёй было провидение.',
          en: 'A sourish odour at the victim\u2019s lips. Poison. The victim was made to choose one of two pills — a duel judged by providence.',
        },
      },
    ],
    verdict: {
      ru: 'Убийца — кэбмен Джефферсон Хоуп, мстивший за смерть невесты двадцать лет спустя. Арестован в гостиной 221B при попытке забрать «забытое» кольцо.',
      en: 'The murderer is cabman Jefferson Hope, avenging his bride twenty years on. Arrested in the sitting room of 221B while collecting a "forgotten" ring.',
    },
  },
  {
    slug: 'the-hound',
    fileNo: { ru: 'Дело № 1889-10', en: 'Case No. 1889-10' },
    year: '1889',
    image: '/images/case-hound.png',
    title: { ru: 'Собака Баскервилей', en: 'The Hound of the Baskervilles' },
    teaser: {
      ru: 'Сэр Чарльз мёртв на тисовой аллее. Рядом — следы гигантской собаки. Родовое проклятие или расчёт?',
      en: 'Sir Charles lies dead in the yew alley. Beside him — the prints of a gigantic hound. A family curse, or calculation?',
    },
    intro: {
      ru: 'Древняя легенда гласит: род Баскервилей преследует адская собака. Наследник напуган, доктор Мортимер верит в проклятие. Холмс верит в следы, пепел и мотив.',
      en: 'The old legend says a hellhound stalks the Baskervilles. The heir is terrified; Dr Mortimer believes the curse. Holmes believes in footprints, ash, and motive.',
    },
    steps: [
      {
        title: { ru: 'Трость доктора', en: 'The doctor\u2019s cane' },
        text: {
          ru: 'По следам зубов на трости — у владельца спаниель. По потёртости — сельский врач, ходит пешком. Наблюдение до знакомства.',
          en: 'Tooth marks on the cane — the owner keeps a spaniel. The wear — a country doctor who walks. Observation before acquaintance.',
        },
      },
      {
        title: { ru: 'Следы на аллее', en: 'The prints in the alley' },
        text: {
          ru: 'Сэр Чарльз бежал — расстояние между отпечатками каблуков. Бежал не к дому, а от калитки. Он видел то, что шло с болота.',
          en: 'Sir Charles ran — the heel prints say so. Not towards the house, but away from the gate. He saw what came from the moor.',
        },
      },
      {
        title: { ru: 'Вырезанное письмо', en: 'The pasted letter' },
        text: {
          ru: 'Предупреждение наследнику склеено из слов «Таймс». Шрифт узнан мгновенно. Автор — человек образованный, но скрывающий почерк.',
          en: 'The warning to the heir is pasted from Times clippings. The typeface is unmistakable. An educated author, hiding a hand.',
        },
      },
      {
        title: { ru: 'Портрет на стене', en: 'The portrait' },
        text: {
          ru: 'Лицо Хьюго Баскервиля на портрете 1647 года — лицо натуралиста Стэплтона. Наследник по крови, стёртый из родословной.',
          en: 'The face of Hugo Baskerville, 1647 — the face of Stapleton the naturalist. An heir by blood, erased from the family tree.',
        },
      },
    ],
    verdict: {
      ru: 'Собака существовала: пёс, вымазанный фосфором, натасканный Стэплтоном — тайным Баскервилем. Погиб в Гримпенской трясине, спасаясь бегством.',
      en: 'The hound was real: a dog painted with phosphorus, trained by Stapleton — a secret Baskerville. He perished fleeing into the Grimpen Mire.',
    },
  },
  {
    slug: 'a-scandal-in-bohemia',
    fileNo: { ru: 'Дело № 1888-05', en: 'Case No. 1888-05' },
    year: '1888',
    image: '/images/case-bohemia.png',
    title: { ru: 'Скандал в Богемии', en: 'A Scandal in Bohemia' },
    teaser: {
      ru: 'Король Богемии шантажирован фотографией. Противник — Ирэн Адлер. Единственная, кто переиграл Холмса.',
      en: 'The King of Bohemia is blackmailed with a photograph. The adversary — Irene Adler. The only one who ever beat Holmes.',
    },
    intro: {
      ru: 'Наследный король, компрометирующая фотография и женщина, которую Холмс с тех пор называл только одним словом: Эта Женщина. Дело, в котором дедукция встретила равного.',
      en: 'A hereditary king, a compromising photograph, and the woman Holmes ever after called by a single name: The Woman. The case where deduction met its equal.',
    },
    steps: [
      {
        title: { ru: 'Маскировка', en: 'The disguise' },
        text: {
          ru: 'Холмс — безработный конюх: в конюшнях Серпентайн-Мьюз узнаёт весь распорядок дома Адлер за час.',
          en: 'Holmes as an out-of-work groom: an hour in the Serpentine Mews stables yields the entire routine of the Adler household.',
        },
      },
      {
        title: { ru: 'Инсценировка', en: 'The staging' },
        text: {
          ru: 'Уличная потасовка, «раненый» священник, дымовая шашка в гостиной. Женщина при пожаре бросается к самому ценному.',
          en: 'A street scuffle, a "wounded" clergyman, a smoke rocket in the sitting room. In a fire, a woman rushes to what she values most.',
        },
      },
      {
        title: { ru: 'Взгляд к тайнику', en: 'The glance' },
        text: {
          ru: 'Ирэн метнулась к панели у звонка — фотография там. Холмсу остаётся вернуться утром с королём.',
          en: 'Irene darted to the panel by the bell-pull — the photograph is there. Holmes need only return with the King at morning.',
        },
      },
      {
        title: { ru: 'Голос в ночи', en: 'The voice in the night' },
        text: {
          ru: '«Доброй ночи, мистер Шерлок Холмс» — юноша в пальто у дверей 221B. Ирэн раскрыла маскировку раньше, чем он — её тайник.',
          en: '"Good night, Mister Sherlock Holmes" — a youth in an ulster at the door of 221B. Irene saw through him before he reached her cache.',
        },
      },
    ],
    verdict: {
      ru: 'Утром дом пуст. Вместо фотографии — письмо и её портрет. Ирэн Адлер покинула Англию, сохранив снимок как защиту. Холмс попросил в награду лишь портрет.',
      en: 'By morning the house stands empty. In place of the photograph — a letter and her portrait. Irene Adler left England, keeping the picture as her shield. Holmes asked only for the portrait as his fee.',
    },
  },
]

export function getCase(slug: string): CaseFile | undefined {
  return cases.find((c) => c.slug === slug)
}
