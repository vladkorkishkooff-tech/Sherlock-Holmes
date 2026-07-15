'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'

type SpotId = 'chair' | 'desk' | 'violin' | 'wall'

const SPOTS: Array<{ id: SpotId; x: number; y: number }> = [
  { id: 'chair', x: 26, y: 38 },
  { id: 'desk', x: 74, y: 30 },
  { id: 'violin', x: 62, y: 68 },
  { id: 'wall', x: 38, y: 72 },
]

export function Flat221B() {
  const { t } = useLanguage()
  const [active, setActive] = useState<SpotId | null>(null)

  return (
    <section id="flat" className="paper-grain gaslight relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-center gap-4 text-center md:mb-14">
          <p className="kicker">{t.flat.kicker}</p>
          <h2 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground text-balance md:text-6xl">
            {t.flat.title}
          </h2>
          <p className="max-w-md font-mono text-sm leading-relaxed text-charcoal">{t.flat.subtitle}</p>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="paper-shadow relative mx-auto w-full max-w-3xl rotate-[0.5deg] border-8 border-paper bg-paper"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/images/baker-street-plan.png"
              alt="Рукописный план гостиной на Бейкер-стрит, 221B"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />

            {/* Hotspots */}
            {SPOTS.map((s) => {
              const spot = t.flat.spots[s.id]
              const isActive = active === s.id
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-label={spot.label}
                  aria-expanded={isActive}
                  onClick={() => setActive(isActive ? null : s.id)}
                  className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{ left: `${s.x}%`, top: `${s.y}%` }}
                >
                  <span
                    className={`relative flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors ${
                      isActive ? 'border-crimson bg-crimson' : 'border-crimson bg-paper'
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-paper' : 'bg-crimson'}`} />
                    {!isActive && (
                      <span className="absolute inset-0 animate-ping rounded-full border-2 border-crimson opacity-40" />
                    )}
                  </span>
                </button>
              )
            })}

            {/* Note card */}
            <AnimatePresence>
              {active && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: -1 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.25 }}
                  className="paper-shadow absolute bottom-3 left-1/2 z-20 w-[min(90%,340px)] -translate-x-1/2 border border-ink/20 bg-paper px-4 py-3"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-crimson">
                    {t.flat.spots[active].label}
                  </p>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-ink/80">{t.flat.spots[active].note}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <figcaption className="bg-paper px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
            {t.flat.caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
