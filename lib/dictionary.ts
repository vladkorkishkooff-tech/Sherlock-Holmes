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
    },
  },
} as const

export type Dictionary = (typeof dictionary)['ru']
