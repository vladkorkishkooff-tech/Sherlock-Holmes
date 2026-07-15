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
  },
} as const

export type Dictionary = (typeof dictionary)['ru']
