import { LanguageProvider } from '@/lib/i18n'
import { MagnifierCursor } from '@/components/magnifier-cursor'
import { SiteHeader } from '@/components/site-header'
import { Preloader } from '@/components/preloader'
import { Hero } from '@/components/hero'
import { EvidenceBoard } from '@/components/evidence-board'
import { DeductionGame } from '@/components/deduction-game'
import { AboutDetective } from '@/components/about-detective'
import { CasesSection } from '@/components/cases-section'
import { QuotesSection } from '@/components/quotes-section'
import { Flat221B } from '@/components/flat-221b'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <LanguageProvider>
      <MagnifierCursor />
      <Preloader />
      <SiteHeader />
      <main>
        <Hero />
        <AboutDetective />
        <EvidenceBoard />
        <CasesSection />
        <DeductionGame />
        <QuotesSection />
        <Flat221B />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
