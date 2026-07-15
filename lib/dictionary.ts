export type Lang = 'ru' | 'en'

export const dictionary = {
  ru: {
    header: {
      location: 'Лондон, 1895',
      caseNo: 'Дело №221B',
      nav: {
        detective: 'Детектив',
        board: 'Доска улик',
        cases: 'Дела',
        game: 'Дедукция',
        flat: '221B',
      },
    },
    preloader: {
      stamp: 'Секретно',
      file: 'Дело №221B',
      opening: 'Скотленд-Ярд · Архив',
    },
    hero: {
      masthead: 'The Strand · Выпуск CCXXI',
      date: 'Лондон · 1895',
      price: 'Цена 6 пенсов',
      surname: 'Холмс',
      name: 'Шерлок',
      subtitle: 'Единственный в мире консультирующий детектив',
      quote: 'Вы смотрите, но не наблюдаете.',
      cta: 'Начать расследование',
      hint: 'Листайте вниз, Ватсон',
      confidential: 'Секретно',
      photoCaption: 'Вещественное доказательство · №1',
    },
    board: {
      kicker: 'Материалы следствия',
      title: 'Доска улик',
      subtitle: 'Всё связано. Осмотрите каждую улику.',
      hint: 'Перетаскивайте карточки · нажмите, чтобы перевернуть',
      items: {
        suspect: {
          label: 'Подозреваемый',
          note: 'Профессор М. — «Наполеон преступного мира». Организатор половины всех злодеяний Лондона.',
        },
        key: {
          label: 'Улика №4 · 3D98',
          note: 'Ключ от банковского хранилища. Свежие следы смазки — им пользовались этой ночью.',
        },
        envelope: {
          label: 'Письмо · 2D79',
          note: 'Сургучная печать с монограммой. Бумага богемского производства. Без обратного адреса.',
        },
        fingerprint: {
          label: 'Отпечаток · C7',
          note: 'Совпадает со следом на бокале из кабинета. Оставлен левой рукой.',
        },
        news: {
          label: 'The Strand',
          note: '«Загадочное происшествие в Лористон-Гарденс» — утренний выпуск, страница 3.',
        },
        watch: {
          label: 'Часы · J.W.',
          note: 'Остановились в 23:47 — момент падения. Гравировка на крышке: «J.W.».',
        },
        plan: {
          label: 'План этажа',
          note: 'Окно кабинета не заперто изнутри. Следы грязи на подоконнике — размер 10.',
        },
      },
    },
    game: {
      kicker: 'Испытание',
      title: 'Метод дедукции',
      subtitle: 'Осмотрите кабинет. Найдите все улики. Сделайте вывод.',
      instruction: 'Ведите лупой по сцене и нажимайте на подозрительные детали',
      found: 'Улики',
      cluesTitle: 'Записная книжка',
      emptyNotebook: 'Пока пусто. Наблюдайте, Ватсон.',
      clues: {
        window: {
          label: 'Открытое окно',
          note: 'Окно распахнуто изнутри — засов не повреждён. Преступника впустили или у него был ключ.',
        },
        glass: {
          label: 'Бокал вина',
          note: 'Бокал наполовину полон, но без следов губ. Вино налили для отвода глаз.',
        },
        watch: {
          label: 'Карманные часы',
          note: 'Часы остановились в 23:47. Стекло треснуло при падении — время борьбы установлено.',
        },
        boot: {
          label: 'След ботинка',
          note: 'Грязь с набережной Темзы. Размер 10, каблук стоптан внутрь — хромота на левую ногу.',
        },
        letter: {
          label: 'Письмо на столе',
          note: 'Бумага дорогая, богемская. Чернила ещё свежие — письмо написано этим вечером.',
        },
      },
      deduce: 'Сделать вывод',
      question: 'Кто преступник?',
      options: {
        butler: 'Дворецкий — у него ключи от всех дверей',
        visitor: 'Ночной гость — хромой человек с набережной, которого впустили сами',
        stranger: 'Случайный грабитель — влез через окно',
      },
      correct: 'visitor',
      successTitle: 'Элементарно!',
      successText: 'Хозяин сам впустил гостя — хромого человека с Темзы, которого знал. Открытое окно и бокал — инсценировка ограбления. Часы зафиксировали момент борьбы: 23:47.',
      failTitle: 'Не спешите, Ватсон',
      failText: 'Вы смотрите, но не наблюдаете. Взгляните на улики ещё раз: окно открыто изнутри, а след ведёт не к окну, а от двери.',
      retry: 'Попробовать снова',
      needMore: 'Сначала найдите все улики',
    },
    detective: {
      kicker: 'Досье',
      title: 'Консультирующий детектив',
      p1: 'Шерлок Холмс — единственный в мире консультирующий детектив. Когда Скотленд-Ярд заходит в тупик, инспекторы поднимаются по семнадцати ступеням дома 221B по Бейкер-стрит.',
      p2: 'Его метод — наблюдение и дедукция. По пеплу сигары он назовёт её сорт, по царапинам на часах — привычки владельца, по пятну на манжете — профессию и маршрут.',
      caption: 'Гравюра из журнала The Strand',
      facts: {
        cases: { value: '60', label: 'раскрытых дел в хрониках Ватсона' },
        address: { value: '221B', label: 'Бейкер-стрит, Лондон' },
        year: { value: '1854', label: 'предполагаемый год рождения' },
        iq: { value: '243', label: 'сорта табачного пепла различает' },
      },
    },
    cases: {
      kicker: 'Архив Скотленд-Ярда',
      title: 'Знаменитые дела',
      subtitle: 'Три папки из архива. Откройте любую — материалы прилагаются.',
      open: 'Открыть дело',
      status: 'Раскрыто',
    },
    quotes: {
      kicker: 'Из записных книжек',
      title: 'Слова детектива',
      items: [
        {
          text: 'Отбросьте всё невозможное; то, что останется, и будет ответом, каким бы невероятным он ни казался.',
          source: '«Знак четырёх»',
        },
        {
          text: 'Мир полон очевидных вещей, которых никто не замечает.',
          source: '«Собака Баскервилей»',
        },
        {
          text: 'Игра началась.',
          source: '«Убийство в Эбби-Грейндж»',
        },
      ],
    },
    flat: {
      kicker: 'Адрес',
      title: 'Бейкер-стрит, 221B',
      subtitle: 'Осмотрите гостиную. Наведите лупу на детали плана.',
      caption: 'План гостиной · рука миссис Хадсон',
      spots: {
        chair: { label: 'Кресло у камина', note: 'Здесь Холмс проводит ночи с трубкой, размышляя над делом о трёх трубках.' },
        desk: { label: 'Химический стол', note: 'Кислоты, реторты и картотека преступников на 40 лет вперёд.' },
        violin: { label: 'Скрипка Страдивари', note: 'Куплена за 55 шиллингов у старьёвщика на Тоттенхэм-Корт-роуд.' },
        wall: { label: 'Вензель V.R.', note: 'Выбит пулями на стене — патриотизм в исполнении Холмса.' },
      },
    },
    footer: {
      colophon: 'Дело закрыто',
      credit: 'Расследование вёл',
      role: 'консультирующий инженер',
      cardHint: 'Визитная карточка · нажмите на печать',
      link: 'vlad-korkishko-engineer.vercel.app',
      rights: 'Лондон · 1895 · Все улики вымышлены',
    },
  },
  en: {
    header: {
      location: 'London, 1895',
      caseNo: 'Case No. 221B',
      nav: {
        detective: 'The Detective',
        board: 'Evidence Board',
        cases: 'Cases',
        game: 'Deduction',
        flat: '221B',
      },
    },
    preloader: {
      stamp: 'Confidential',
      file: 'Case File 221B',
      opening: 'Scotland Yard · Archive',
    },
    hero: {
      masthead: 'The Strand · Issue CCXXI',
      date: 'London · 1895',
      price: 'Price 6d',
      surname: 'Holmes',
      name: 'Sherlock',
      subtitle: "The world's only consulting detective",
      quote: 'You see, but you do not observe.',
      cta: 'Begin the investigation',
      hint: 'Scroll down, Watson',
      confidential: 'Confidential',
      photoCaption: 'Exhibit No. 1',
    },
    board: {
      kicker: 'Investigation materials',
      title: 'Evidence Board',
      subtitle: 'Everything is connected. Examine each piece.',
      hint: 'Drag the cards · click to flip',
      items: {
        suspect: {
          label: 'The Suspect',
          note: 'Professor M. — "the Napoleon of crime". Behind half the evil in London.',
        },
        key: {
          label: 'Exhibit 4 · 3D98',
          note: 'A bank vault key. Fresh traces of oil — it was used this very night.',
        },
        envelope: {
          label: 'Letter · 2D79',
          note: 'Wax seal with a monogram. Bohemian paper stock. No return address.',
        },
        fingerprint: {
          label: 'Print · C7',
          note: 'Matches the mark on the glass from the study. Left by a left hand.',
        },
        news: {
          label: 'The Strand',
          note: '"A curious affair at Lauriston Gardens" — morning edition, page 3.',
        },
        watch: {
          label: 'Watch · J.W.',
          note: 'Stopped at 11:47 pm — the moment of the fall. Engraved on the case: "J.W.".',
        },
        plan: {
          label: 'Floor Plan',
          note: 'The study window was not locked from inside. Mud traces on the sill — size 10.',
        },
      },
    },
    game: {
      kicker: 'The Trial',
      title: 'The Art of Deduction',
      subtitle: 'Examine the study. Find every clue. Draw your conclusion.',
      instruction: 'Sweep the lens across the scene and click on suspicious details',
      found: 'Clues',
      cluesTitle: 'Notebook',
      emptyNotebook: 'Nothing yet. Observe, Watson.',
      clues: {
        window: {
          label: 'The open window',
          note: 'Opened from the inside — the latch is intact. The intruder was let in, or had a key.',
        },
        glass: {
          label: 'The wine glass',
          note: 'Half full, yet no trace of lips. The wine was poured for show.',
        },
        watch: {
          label: 'The pocket watch',
          note: 'Stopped at 11:47 pm. The glass cracked in the fall — the moment of struggle is fixed.',
        },
        boot: {
          label: 'The boot print',
          note: 'Mud from the Thames embankment. Size 10, heel worn inward — a limp on the left leg.',
        },
        letter: {
          label: 'The letter on the desk',
          note: 'Expensive Bohemian paper. The ink is still fresh — written this very evening.',
        },
      },
      deduce: 'Draw the conclusion',
      question: 'Who is the culprit?',
      options: {
        butler: 'The butler — he holds keys to every door',
        visitor: 'The night visitor — a limping man from the embankment, let in willingly',
        stranger: 'A random burglar — climbed in through the window',
      },
      correct: 'visitor',
      successTitle: 'Elementary!',
      successText: 'The master let his visitor in himself — a limping man from the Thames he knew well. The open window and the glass are a staged burglary. The watch fixed the struggle: 11:47 pm.',
      failTitle: 'Not so fast, Watson',
      failText: 'You see, but you do not observe. Look again: the window was opened from inside, and the print leads from the door — not the window.',
      retry: 'Try again',
      needMore: 'Find all the clues first',
    },
    detective: {
      kicker: 'The Dossier',
      title: 'The Consulting Detective',
      p1: "Sherlock Holmes is the world's only consulting detective. When Scotland Yard reaches a dead end, its inspectors climb the seventeen steps of 221B Baker Street.",
      p2: 'His method is observation and deduction. From cigar ash he names the brand; from scratches on a watch — the habits of its owner; from a stain on a cuff — a profession and a route.',
      caption: 'An engraving from The Strand Magazine',
      facts: {
        cases: { value: '60', label: 'cases solved in Watson\u2019s chronicles' },
        address: { value: '221B', label: 'Baker Street, London' },
        year: { value: '1854', label: 'presumed year of birth' },
        iq: { value: '243', label: 'varieties of tobacco ash distinguished' },
      },
    },
    cases: {
      kicker: 'Scotland Yard Archive',
      title: 'The Famous Cases',
      subtitle: 'Three folders from the archive. Open any — materials enclosed.',
      open: 'Open the case',
      status: 'Solved',
    },
    quotes: {
      kicker: 'From the notebooks',
      title: 'Words of the Detective',
      items: [
        {
          text: 'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
          source: 'The Sign of Four',
        },
        {
          text: 'The world is full of obvious things which nobody by any chance ever observes.',
          source: 'The Hound of the Baskervilles',
        },
        {
          text: 'The game is afoot.',
          source: 'The Abbey Grange',
        },
      ],
    },
    flat: {
      kicker: 'The Address',
      title: '221B Baker Street',
      subtitle: 'Survey the sitting room. Bring the lens to the details of the plan.',
      caption: 'Plan of the sitting room · by Mrs Hudson',
      spots: {
        chair: { label: 'The fireside chair', note: 'Here Holmes spends his nights with a pipe, pondering a three-pipe problem.' },
        desk: { label: 'The chemical table', note: 'Acids, retorts, and a criminal index forty years ahead of its time.' },
        violin: { label: 'The Stradivarius', note: 'Bought for 55 shillings from a broker on Tottenham Court Road.' },
        wall: { label: 'The V.R. monogram', note: 'Shot into the wall in bullet pocks — patriotism, as performed by Holmes.' },
      },
    },
    footer: {
      colophon: 'Case closed',
      credit: 'Investigation led by',
      role: 'consulting engineer',
      cardHint: 'Visiting card · press the seal',
      link: 'vlad-korkishko-engineer.vercel.app',
      rights: 'London · 1895 · All evidence is fictional',
    },
  },
} as const

export type Dictionary = (typeof dictionary)['ru']
