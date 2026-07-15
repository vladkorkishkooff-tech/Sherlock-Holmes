'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { Ephemera, Tape } from '@/components/collage'

// Ransom-note letter scraps — mixed newspaper colors, torn shapes, mismatched
// fonts and uneven baselines, like letters cut from different magazines.
const chipVariants = [
  'bg-paper text-ink font-serif torn-a rotate-[-4deg]',
  'bg-[#b98a2e] text-ink font-mono torn-b rotate-[2.5deg] translate-y-[0.1em]',
  'bg-crimson text-paper font-serif torn-c rotate-[-2deg] -translate-y-[0.08em]',
  'bg-ink text-paper font-mono torn-a rotate-[4deg]',
  'bg-teal text-paper font-serif torn-b rotate-[-3deg] translate-y-[0.12em]',
  'bg-paper-dark text-crimson font-serif torn-c rotate-[3deg]',
  'bg-ink text-brass font-mono torn-b rotate-[-5deg] -translate-y-[0.06em]',
  'bg-paper text-ink font-serif torn-a rotate-[5deg] translate-y-[0.08em]',
]

const chipSizes = ['text-[1em]', 'text-[1.14em]', 'text-[0.93em]', 'text-[1.07em]', 'text-[0.96em]', 'text-[1.18em]', 'text-[0.9em]']

function RansomWord({ word, delayOffset }: { word: string; delayOffset: number }) {
  return (
    <span className="flex items-center justify-center">
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
          className={`paper-shadow inline-flex min-w-[1.4em] items-center justify-center px-[0.24em] py-[0.14em] font-black uppercase leading-none ${
            chipVariants[i % chipVariants.length]
          } ${chipSizes[i % chipSizes.length]} ${i > 0 ? '-ml-[0.1em]' : ''}`}
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
    <section className="paper-grain gaslight relative flex min-h-screen flex-col overflow-hidden pt-12">
      <Ephemera variant="left" eager />
      {/* Newspaper masthead */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
        className="relative z-10 mx-auto mt-4 w-full max-w-5xl px-4"
      >
        <div className="border-y-2 border-foreground/50 py-1.5">
          <div className="flex items-center justify-between border-y border-foreground/25 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-charcoal md:text-[11px]">
            <span>{t.hero.masthead}</span>
            <span className="hidden sm:inline">{t.hero.date}</span>
            <span>{t.hero.price}</span>
          </div>
        </div>
      </motion.div>

      {/* Silhouette — desktop: pinned photograph under lamplight, right of the text column */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="pointer-events-none absolute right-[7%] top-1/2 z-0 hidden -translate-y-1/2 md:block"
      >
        <div className="pin paper-shadow relative border-[10px] border-paper bg-paper">
          <Tape className="-left-7 top-8 rotate-[-42deg]" />
          <Tape className="-right-7 bottom-10 rotate-[40deg]" />
          <div className="relative h-[58vh] w-[38vw] max-w-md">
            <Image
              src="/images/holmes-silhouette.png"
              alt="Силуэт Шерлока Холмса, заполненный викторианским Лондоном"
              fill
              priority
              className="object-cover object-top"
              sizes="40vw"
            />
          </div>
          <p className="bg-paper pt-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">
            {t.hero.photoCaption}
          </p>
        </div>
      </motion.div>

      {/* Title block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-5 px-4 pb-24 pt-8 md:items-start md:pl-[8%] md:pr-[40%]">
        <motion.p
          initial={{ opacity: 0, scale: 1.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 7 }}
          transition={{ delay: 4.1, duration: 0.2, ease: 'easeIn' }}
          className="stamp absolute right-[6%] top-0 px-4 py-1.5 text-sm font-bold text-crimson md:left-[8%] md:right-auto md:top-[10%] md:text-lg"
        >
          {t.hero.confidential}
        </motion.p>

        <h1 className="flex flex-col items-center gap-3 text-[clamp(2rem,9vw,3.5rem)] md:items-start md:gap-4 md:text-[clamp(2.5rem,4.5vw,4.5rem)]">
          <RansomWord word={t.hero.name} delayOffset={2.5} />
          <RansomWord word={t.hero.surname} delayOffset={3.1} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.5 }}
          className="torn-edge paper-shadow rotate-[-1deg] bg-paper px-5 py-2.5 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink md:text-sm"
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
          className="torn-edge paper-shadow group mt-2 inline-flex rotate-[-1.5deg] items-center gap-3 bg-crimson px-7 py-3.5 font-mono text-sm uppercase tracking-[0.2em] text-paper transition-transform hover:rotate-0 hover:scale-[1.03]"
        >
          {t.hero.cta}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </motion.a>

        {/* Silhouette in flow — mobile only, below the text so nothing overlaps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
          className="paper-shadow relative mt-6 aspect-[3/4] w-full max-w-xs rotate-[-1.5deg] border-8 border-paper bg-paper md:hidden"
        >
          <Image
            src="/images/holmes-silhouette.png"
            alt="Силуэт Шерлока Холмса, заполненный викторианским Лондоном"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </motion.div>
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
