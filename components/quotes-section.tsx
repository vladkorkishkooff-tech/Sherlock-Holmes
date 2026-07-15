'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'

const variants = [
  'bg-paper text-ink rotate-[-2deg]',
  'bg-crimson text-paper rotate-[1.5deg]',
  'bg-ink text-paper rotate-[-1deg] border border-brass/40',
]

export function QuotesSection() {
  const { t } = useLanguage()

  return (
    <section className="paper-grain gaslight relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
          <p className="kicker">{t.quotes.kicker}</p>
          <h2 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground text-balance md:text-6xl">
            {t.quotes.title}
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {t.quotes.items.map((q, i) => (
            <motion.blockquote
              key={q.source}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`paper-shadow mx-auto w-full max-w-2xl px-8 py-7 md:px-10 md:py-8 ${variants[i % variants.length]} ${
                i % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
              }`}
            >
              <p className="font-serif text-xl font-bold leading-snug text-pretty md:text-2xl">
                {'\u00AB'}{q.text}{'\u00BB'}
              </p>
              <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] opacity-70">— {q.source}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
