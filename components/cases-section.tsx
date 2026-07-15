'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import { cases } from '@/lib/cases'

const tilts = ['rotate-[-1.5deg]', 'rotate-[1deg]', 'rotate-[-0.5deg]']

export function CasesSection() {
  const { t, lang } = useLanguage()

  return (
    <section id="cases" className="paper-grain gaslight relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-16">
          <p className="kicker">{t.cases.kicker}</p>
          <h2 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground text-balance md:text-6xl">
            {t.cases.title}
          </h2>
          <p className="max-w-md font-mono text-sm leading-relaxed text-charcoal">{t.cases.subtitle}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group relative ${tilts[i]}`}
            >
              <Link
                href={`/case/${c.slug}`}
                className="paper-shadow block border border-ink/15 bg-paper transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]"
              >
                {/* Folder tab */}
                <div className="flex items-center justify-between border-b border-dashed border-ink/25 px-4 py-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">{c.fileNo}</span>
                  <span className="stamp px-2 py-0.5 text-[10px] font-bold text-crimson">{t.cases.status}</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden border-b border-ink/15">
                  <Image
                    src={c.image || '/placeholder.svg'}
                    alt={c.title[lang]}
                    fill
                    className="object-cover sepia-[0.3] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-col gap-3 px-5 py-5">
                  <h3 className="font-serif text-2xl font-black leading-tight text-ink text-balance">{c.title[lang]}</h3>
                  <p className="font-mono text-xs leading-relaxed text-ink/70">{c.teaser[lang]}</p>
                  <span className="mt-1 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-crimson">
                    {t.cases.open}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
