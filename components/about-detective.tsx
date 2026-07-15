'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'
import { CollageTitle, Ephemera, Tape } from '@/components/collage'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
}

export function AboutDetective() {
  const { t } = useLanguage()
  const facts = [t.detective.facts.cases, t.detective.facts.address, t.detective.facts.year, t.detective.facts.iq]

  return (
    <section id="detective" className="paper-grain gaslight relative overflow-hidden py-24 md:py-32">
      <Ephemera variant="left" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16 md:px-8">
        {/* Pinned engraving */}
        <motion.figure
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="pin paper-shadow relative mx-auto w-full max-w-sm rotate-[-2deg] border-8 border-paper bg-paper md:mx-0"
        >
          <Tape className="-left-6 -top-3 rotate-[-38deg]" />
          <Tape className="-right-6 bottom-6 rotate-[42deg]" />
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/holmes-watson-engraving.png"
              alt="Гравюра: Холмс с лупой и Ватсон"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <figcaption className="bg-paper px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
            {t.detective.caption}
          </figcaption>
        </motion.figure>

        {/* Dossier text */}
        <div className="flex min-w-0 flex-col gap-6">
          <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="kicker">
            {t.detective.kicker}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-[clamp(1.15rem,4.5vw,1.75rem)] md:text-[clamp(1.25rem,2.4vw,2.25rem)]"
          >
            <CollageTitle text={t.detective.title} className="justify-start" />
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-prose font-mono text-sm leading-relaxed text-charcoal md:text-base"
          >
            {t.detective.p1}
          </motion.p>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-prose font-mono text-sm leading-relaxed text-charcoal md:text-base"
          >
            {t.detective.p2}
          </motion.p>

          {/* Facts — index cards */}
          <motion.dl {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-2 grid grid-cols-2 gap-3 md:gap-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`torn-edge paper-shadow bg-paper px-4 py-3 ${i % 2 === 0 ? 'rotate-[-1.5deg]' : 'rotate-[1.5deg]'}`}
              >
                <dt className="font-mono text-[10px] uppercase leading-snug tracking-[0.15em] text-ink/60">{f.label}</dt>
                <dd className="mt-1 font-serif text-3xl font-black text-crimson md:text-4xl">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}
