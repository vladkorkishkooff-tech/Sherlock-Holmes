'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

// Deterministic per-index letter chip styles — ransom-note collage effect
const chipVariants = [
  'bg-ink text-background rotate-[-3deg]',
  'bg-paper text-ink rotate-[2deg] border border-ink/25',
  'bg-crimson text-background rotate-[-1.5deg]',
  'bg-paper-dark text-ink rotate-[3deg]',
  'bg-background text-ink rotate-[-2deg] border border-ink/30',
  'bg-ink text-paper rotate-[1.5deg]',
  'bg-paper text-crimson rotate-[-2.5deg] border border-ink/20',
]

function RansomWord({ word, delayOffset }: { word: string; delayOffset: number }) {
  return (
    <span className="flex flex-wrap justify-center gap-x-1 gap-y-2 md:gap-x-2">
      {word.split('').map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          initial={{ opacity: 0, y: -40, rotate: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delayOffset + i * 0.07,
            duration: 0.45,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className={`paper-shadow inline-block px-1.5 py-0.5 font-serif font-black uppercase leading-none md:px-3 md:py-1 ${chipVariants[i % chipVariants.length]}`}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="paper-grain relative flex min-h-screen flex-col overflow-hidden pt-12">
      {/* Newspaper masthead */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="relative z-10 mx-auto mt-4 w-full max-w-5xl px-4"
      >
        <div className="border-y-2 border-ink/70 py-1.5">
          <div className="flex items-center justify-between border-y border-ink/40 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-charcoal md:text-[11px]">
            <span>{t.hero.masthead}</span>
            <span className="hidden sm:inline">{t.hero.date}</span>
            <span>{t.hero.price}</span>
          </div>
        </div>
      </motion.div>

      {/* Silhouette backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-0 top-24 z-0 flex items-end justify-center md:justify-end md:pr-[6%]"
      >
        <div className="relative h-[62vh] w-full max-w-md md:h-[80vh] md:max-w-xl">
          <Image
            src="/images/holmes-silhouette.png"
            alt="Силуэт Шерлока Холмса, заполненный викторианским Лондоном"
            fill
            priority
            className="object-contain object-bottom opacity-90 mix-blend-multiply"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </motion.div>

      {/* Title block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 px-4 pb-24 pt-8 md:items-start md:pl-[8%] md:pr-[40%]">
        <motion.p
          initial={{ opacity: 0, scale: 1.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 7 }}
          transition={{ delay: 4.1, duration: 0.2, ease: 'easeIn' }}
          className="stamp absolute right-[6%] top-[8%] px-4 py-1.5 text-sm font-bold text-crimson md:right-[38%] md:top-[12%] md:text-lg"
        >
          {t.hero.confidential}
        </motion.p>

        <h1 className="flex flex-col items-center gap-3 text-[clamp(3rem,13vw,9rem)] md:items-start md:gap-4">
          <RansomWord word={t.hero.name} delayOffset={2.5} />
          <RansomWord word={t.hero.surname} delayOffset={3.1} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.5 }}
          className="paper-shadow rotate-[-1deg] bg-paper px-4 py-2 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink md:text-sm"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0, duration: 0.5 }}
          className="rotate-[0.5deg] text-pretty text-center font-sans text-lg italic text-charcoal md:text-left md:text-xl"
        >
          «{t.hero.quote}»
        </motion.blockquote>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.3, duration: 0.5 }}
          href="#board"
          className="paper-shadow group mt-2 inline-flex rotate-[-1.5deg] items-center gap-3 bg-crimson px-6 py-3 font-mono text-sm uppercase tracking-[0.2em] text-background transition-transform hover:rotate-0 hover:scale-[1.03]"
        >
          {t.hero.cta}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </motion.a>
      </div>

      {/* Scroll hint — typewriter note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.8, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-charcoal md:text-xs"
      >
        ↓ {t.hero.hint}
      </motion.p>
    </section>
  )
}
