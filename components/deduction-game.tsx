'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

type ClueId = 'window' | 'glass' | 'watch' | 'boot' | 'letter'

interface Hotspot {
  id: ClueId
  // Percent coordinates on the scene image
  x: number
  y: number
}

// Positions are tuned to the generated crime-scene.png
const HOTSPOTS: Hotspot[] = [
  { id: 'window', x: 87, y: 38 },
  { id: 'glass', x: 44, y: 55 },
  { id: 'watch', x: 60, y: 82 },
  { id: 'boot', x: 78, y: 78 },
  { id: 'letter', x: 33, y: 62 },
]

const LENS_R = 110

type OptionId = 'butler' | 'visitor' | 'stranger'
const OPTION_IDS: OptionId[] = ['butler', 'visitor', 'stranger']

export function DeductionGame() {
  const { t } = useI18n()
  const sceneRef = useRef<HTMLDivElement>(null)
  const [lens, setLens] = useState<{ x: number; y: number } | null>(null)
  const [found, setFound] = useState<ClueId[]>([])
  const [verdict, setVerdict] = useState<'idle' | 'choosing' | 'success' | 'fail'>('idle')

  const allFound = found.length === HOTSPOTS.length

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setLens({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const collect = (id: ClueId) => {
    setFound((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }

  const reset = () => {
    setFound([])
    setVerdict('idle')
  }

  return (
    <section id="game" className="gaslight relative overflow-hidden py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">{t.game.kicker}</p>
        <h2 className="mt-3 font-serif text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">
          {t.game.title}
        </h2>
        <p className="mt-3 max-w-xl text-pretty font-sans text-lg italic text-charcoal">{t.game.subtitle}</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal/80 md:text-[11px]">
          {t.game.instruction}
        </p>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row">
          {/* Scene with spyglass reveal */}
          <div
            ref={sceneRef}
            role="img"
            aria-label={t.game.subtitle}
            onMouseMove={handleMove}
            onMouseLeave={() => setLens(null)}
            className="paper-shadow relative aspect-[16/10] w-full cursor-none overflow-hidden rounded-sm border-[10px] border-[#241a10] lg:w-2/3"
          >
            <Image
              src="/images/crime-scene.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Darkness with a lamplight hole following the cursor */}
            <div
              aria-hidden="true"
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                background: lens
                  ? `radial-gradient(circle ${LENS_R}px at ${lens.x}px ${lens.y}px, transparent 0%, transparent 60%, rgba(10,7,2,0.93) 100%)`
                  : 'rgba(10,7,2,0.93)',
              }}
            />

            {/* Lens ring */}
            {lens ? (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute rounded-full border-2 border-brass/80 shadow-[0_0_40px_rgba(201,164,92,0.25)]"
                style={{
                  width: LENS_R * 2,
                  height: LENS_R * 2,
                  left: lens.x - LENS_R,
                  top: lens.y - LENS_R,
                }}
              />
            ) : (
              <p className="absolute inset-0 flex items-center justify-center px-6 text-center font-mono text-xs uppercase tracking-[0.25em] text-paper/70">
                {t.game.instruction}
              </p>
            )}

            {/* Hotspots */}
            {HOTSPOTS.map((h) => {
              const isFound = found.includes(h.id)
              return (
                <button
                  key={h.id}
                  type="button"
                  aria-label={t.game.clues[h.id].label}
                  aria-pressed={isFound}
                  onClick={() => collect(h.id)}
                  className="absolute z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-none items-center justify-center rounded-full"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  {isFound ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="stamp px-1.5 py-0.5 text-[9px] font-bold text-crimson"
                    >
                      {found.indexOf(h.id) + 1}
                    </motion.span>
                  ) : (
                    <span className="sr-only">{t.game.clues[h.id].label}</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Notebook */}
          <div className="paper-shadow flex flex-col bg-paper p-6 lg:w-1/3">
            <div className="flex items-baseline justify-between border-b-2 border-ink/20 pb-3">
              <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-ink">{t.game.cluesTitle}</h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">
                {t.game.found}: {found.length}/{HOTSPOTS.length}
              </p>
            </div>

            <ul className="flex flex-1 flex-col gap-3 py-4">
              {found.length === 0 && (
                <li className="font-mono text-xs italic leading-relaxed text-ink/50">{t.game.emptyNotebook}</li>
              )}
              <AnimatePresence>
                {found.map((id, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-b border-ink/10 pb-3"
                  >
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-crimson">
                      {i + 1}. {t.game.clues[id].label}
                    </p>
                    <p className="mt-1 font-mono text-[11px] leading-relaxed text-ink/80">{t.game.clues[id].note}</p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <button
              type="button"
              disabled={!allFound}
              onClick={() => setVerdict('choosing')}
              className="paper-shadow mt-2 bg-crimson px-5 py-3 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-all enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {allFound ? t.game.deduce : t.game.needMore}
            </button>
          </div>
        </div>
      </div>

      {/* Verdict dialog */}
      <AnimatePresence>
        {verdict !== 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={t.game.question}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="paper-shadow w-full max-w-lg bg-paper p-8"
            >
              {verdict === 'choosing' && (
                <>
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-crimson">{t.game.kicker}</p>
                  <h3 className="mt-2 font-serif text-3xl font-black uppercase text-ink">{t.game.question}</h3>
                  <div className="mt-6 flex flex-col gap-3">
                    {OPTION_IDS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setVerdict(opt === t.game.correct ? 'success' : 'fail')}
                        className="border border-ink/30 bg-background/0 px-4 py-3 text-left font-mono text-sm leading-relaxed text-ink transition-colors hover:border-crimson hover:bg-crimson/10"
                      >
                        {t.game.options[opt]}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {(verdict === 'success' || verdict === 'fail') && (
                <>
                  <p
                    className={`stamp inline-block px-3 py-1 font-serif text-2xl font-black uppercase ${
                      verdict === 'success' ? 'text-crimson' : 'text-ink/70'
                    }`}
                  >
                    {verdict === 'success' ? t.game.successTitle : t.game.failTitle}
                  </p>
                  <p className="mt-4 font-mono text-sm leading-relaxed text-ink/90">
                    {verdict === 'success' ? t.game.successText : t.game.failText}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <button
                      type="button"
                      onClick={verdict === 'success' ? () => setVerdict('idle') : reset}
                      className="bg-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-transform hover:scale-[1.02]"
                    >
                      {verdict === 'success' ? '221B' : t.game.retry}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
