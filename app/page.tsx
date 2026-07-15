import { LanguageProvider } from '@/lib/i18n'
import { MagnifierCursor } from '@/components/magnifier-cursor'
import { SiteHeader } from '@/components/site-header'
import { Preloader } from '@/components/preloader'
import { Hero } from '@/components/hero'
import { EvidenceBoard } from '@/components/evidence-board'
import { DeductionGame } from '@/components/deduction-game'

export default function Home() {
  return (
    <LanguageProvider>
      <MagnifierCursor />
      <Preloader />
      <SiteHeader />
      <main>
        <Hero />
        <EvidenceBoard />
        <DeductionGame />
      </main>
    </LanguageProvider>
  )
}
