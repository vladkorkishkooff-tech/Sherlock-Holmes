import { LanguageProvider } from '@/lib/i18n'
import { MagnifierCursor } from '@/components/magnifier-cursor'
import { SiteHeader } from '@/components/site-header'
import { Preloader } from '@/components/preloader'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <LanguageProvider>
      <MagnifierCursor />
      <Preloader />
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </LanguageProvider>
  )
}
