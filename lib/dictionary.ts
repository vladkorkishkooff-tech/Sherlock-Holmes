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
  },
} as const

export type Dictionary = (typeof dictionary)['ru']
