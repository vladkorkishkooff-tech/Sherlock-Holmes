'use client'

import Link from 'next/link'
import { useI18n } from '@/lib/i18n'

export function SiteHeader() {
  const { lang, t, toggleLang } = useI18n()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2.5 md:px-8">
        <p className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal sm:block">
          {t.header.location}
        </p>

        <Link
          href="/"
          className="font-serif text-sm font-bold uppercase tracking-[0.25em] text-foreground transition-colors hover:text-brass"
        >
          {t.header.caseNo}
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-5 lg:flex">
          <a href="#detective" className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-crimson">
            {t.header.nav.detective}
          </a>
          <a href="#board" className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-crimson">
            {t.header.nav.board}
          </a>
          <a href="#cases" className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-crimson">
            {t.header.nav.cases}
          </a>
          <a href="#game" className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-crimson">
            {t.header.nav.game}
          </a>
          <a href="#flat" className="font-mono text-[11px] uppercase tracking-[0.15em] text-charcoal transition-colors hover:text-crimson">
            {t.header.nav.flat}
          </a>
        </nav>

        <button
          type="button"
          onClick={toggleLang}
          className="flex items-center gap-1 border border-foreground/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:border-brass hover:text-brass"
          aria-label={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
        >
          <span className={lang === 'ru' ? 'text-crimson' : 'text-charcoal/60'}>ру</span>
          <span className="text-charcoal/40">/</span>
          <span className={lang === 'en' ? 'text-crimson' : 'text-charcoal/60'}>en</span>
        </button>
      </div>
    </header>
  )
}
