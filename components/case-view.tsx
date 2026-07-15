'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { LanguageProvider, useLanguage } from '@/lib/i18n'
import { MagnifierCursor } from '@/components/magnifier-cursor'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import type { CaseFile } from '@/lib/cases'

function CaseContent({ caseFile }: { caseFile: CaseFile }) {
  const { lang, t } = useLanguage()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const backLabel = lang === 'ru' ? 'К архиву' : 'Back to archive'
  const deductionLabel = lang === 'ru' ? 'Цепочка дедукции' : 'The chain of deduction'
  const verdictLabel = lang === 'ru' ? 'Вердикт Холмса' : 'The verdict of Holmes'
  const stepLabel = lang === 'ru' ? 'Наблюдение' : 'Observation'

  return (
    <>
      {/* Red thread scroll progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-crimson"
      />

      <SiteHeader />

      <main className="paper-grain gaslight relative overflow-hidden pt-12">
        {/* Case hero */}
        <section className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
          <div>
            <Link
              href="/#cases"
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-brass transition-colors hover:text-crimson"
            >
              ← {backLabel}
            </Link>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-[1.1fr_1fr]">
            <div className="flex min-w-0 flex-col gap-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-charcoal">
                {caseFile.fileNo} · {caseFile.year}
              </p>
              <h1 className="font-serif text-[clamp(2rem,8vw,3rem)] font-black uppercase leading-[0.95] tracking-tight text-foreground text-balance md:text-[clamp(2.5rem,4.5vw,4rem)]">
                {caseFile.title[lang]}
              </h1>
              <p className="max-w-xl font-mono text-sm leading-relaxed text-charcoal md:text-base">
                {caseFile.intro[lang]}
              </p>
              <p className="stamp inline-flex w-fit px-4 py-1 text-sm font-bold text-crimson">
                {t.cases.status}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 1.5 }}
              transition={{ duration: 0.7 }}
              className="pin paper-shadow relative mx-auto w-full max-w-sm border-8 border-paper bg-paper"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={caseFile.image || '/placeholder.svg'}
                  alt={caseFile.title[lang]}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="bg-paper pt-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">
                {caseFile.fileNo}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Deduction chain */}
        <section className="relative z-10 mx-auto max-w-3xl px-4 pb-16 md:px-8 md:pb-24">
          <p className="kicker">{deductionLabel}</p>

          <div className="relative mt-10 flex flex-col gap-10 border-l-2 border-dashed border-crimson/50 pl-8 md:pl-12">
            {caseFile.steps.map((step, i) => (
              <motion.article
                key={step.title.en}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Thread knot */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-background bg-crimson shadow-md md:-left-[57px]"
                />
                <div
                  className={`paper-shadow border border-ink/15 bg-paper px-6 py-5 ${i % 2 === 0 ? 'rotate-[-0.6deg]' : 'rotate-[0.6deg]'}`}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson">
                    {stepLabel} {i + 1}
                  </p>
                  <h2 className="mt-2 font-serif text-xl font-bold text-ink md:text-2xl">{step.title[lang]}</h2>
                  <p className="mt-3 font-mono text-sm leading-relaxed text-ink/80">{step.text[lang]}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Verdict */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="paper-shadow relative mt-16 rotate-[-0.8deg] border-2 border-crimson/70 bg-paper px-8 py-8 md:px-10"
          >
            <p className="stamp absolute -top-4 left-6 bg-paper px-4 py-1 text-sm font-bold text-crimson">
              {verdictLabel}
            </p>
            <p className="mt-2 font-serif text-lg font-bold leading-relaxed text-ink md:text-xl">
              {caseFile.verdict[lang]}
            </p>
          </motion.div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

export function CaseView({ caseFile }: { caseFile: CaseFile }) {
  return (
    <LanguageProvider>
      <MagnifierCursor />
      <CaseContent caseFile={caseFile} />
    </LanguageProvider>
  )
}
