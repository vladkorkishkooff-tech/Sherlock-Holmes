'use client'

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { dictionary, type Dictionary, type Lang } from './dictionary'

type I18nContextValue = {
  lang: Lang
  t: Dictionary
  toggleLang: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ru')

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'))
  }, [])

  return (
    <I18nContext.Provider value={{ lang, t: dictionary[lang] as Dictionary, toggleLang }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
