'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { CollageTitle } from '@/components/collage'

// Board virtual coordinate space — cards live on a fixed-size canvas that
// scrolls horizontally on small screens so dragging keeps working everywhere.
const BOARD_W = 1060
const BOARD_H = 660

type ItemId = 'suspect' | 'key' | 'envelope' | 'fingerprint' | 'news' | 'watch' | 'plan'

interface BoardItem {
  id: ItemId
  src: string
  x: number
  y: number
  w: number
  h: number
  rotate: number
}

const ITEMS: BoardItem[] = [
  { id: 'suspect', src: '/images/suspect-photo.png', x: 700, y: 60, w: 180, h: 220, rotate: 2.5 },
  { id: 'news', src: '/images/newspaper-clipping.png', x: 80, y: 50, w: 210, h: 160, rotate: -3 },
  { id: 'key', src: '/images/old-key.png', x: 120, y: 380, w: 170, h: 130, rotate: -2 },
  { id: 'envelope', src: '/images/sealed-envelope.png', x: 810, y: 380, w: 190, h: 140, rotate: 3 },
  { id: 'fingerprint', src: '/images/fingerprint-card.png', x: 420, y: 70, w: 150, h: 170, rotate: 1.5 },
  { id: 'watch', src: '/images/pocket-watch.png', x: 620, y: 430, w: 150, h: 150, rotate: -2.5 },
  { id: 'plan', src: '/images/floor-plan.png', x: 360, y: 330, w: 220, h: 170, rotate: 1 },
]

// Which evidence pieces are tied together with red thread
const THREADS: Array<[ItemId, ItemId]> = [
  ['news', 'fingerprint'],
  ['fingerprint', 'suspect'],
  ['suspect', 'envelope'],
  ['envelope', 'watch'],
  ['watch', 'plan'],
  ['plan', 'key'],
  ['key', 'news'],
  ['fingerprint', 'plan'],
]

type Offsets = Record<ItemId, { x: number; y: number }>

const INITIAL_OFFSETS = Object.fromEntries(ITEMS.map((i) => [i.id, { x: 0, y: 0 }])) as Offsets

function center(item: BoardItem, offsets: Offsets) {
  return {
    cx: item.x + item.w / 2 + offsets[item.id].x,
    cy: item.y + item.h / 2 + offsets[item.id].y,
  }
}

function threadPath(a: { cx: number; cy: number }, b: { cx: number; cy: number }) {
  // Quadratic curve with gravity sag in the middle, like a real string
  const mx = (a.cx + b.cx) / 2
  const my = (a.cy + b.cy) / 2 + 26
  return `M ${a.cx} ${a.cy} Q ${mx} ${my} ${b.cx} ${b.cy}`
}

export function EvidenceBoard() {
  const { t } = useI18n()
  const boardRef = useRef<HTMLDivElement>(null)
  const [offsets, setOffsets] = useState<Offsets>(INITIAL_OFFSETS)
  const [flipped, setFlipped] = useState<ItemId | null>(null)
  const draggingRef = useRef(false)
  // Live offsets in a ref so rapid drag deltas never get lost between renders
  const offsetsRef = useRef<Offsets>(INITIAL_OFFSETS)

  const handleDrag = useCallback((id: ItemId, dx: number, dy: number) => {
    const cur = offsetsRef.current[id]
    const next = { x: cur.x + dx, y: cur.y + dy }
    offsetsRef.current = { ...offsetsRef.current, [id]: next }
    setOffsets(offsetsRef.current)
  }, [])

  const itemById = Object.fromEntries(ITEMS.map((i) => [i.id, i])) as Record<ItemId, BoardItem>

  return (
    <section id="board" className="gaslight relative overflow-hidden py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brass">{t.board.kicker}</p>
        <h2 className="mt-4 text-[clamp(1.4rem,5.5vw,2rem)] md:text-[clamp(1.75rem,3vw,2.75rem)]">
          <CollageTitle text={t.board.title} className="justify-start" />
        </h2>
        <p className="mt-3 max-w-xl text-pretty font-sans text-lg italic text-charcoal">{t.board.subtitle}</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal/80 md:text-[11px]">
          {t.board.hint}
        </p>

        {/* Scrollable frame on mobile, full board on desktop */}
        <div className="mt-10 overflow-x-auto pb-4" aria-label={t.board.title}>
          <div
            ref={boardRef}
            className="paper-shadow relative shrink-0 overflow-hidden rounded-sm border-[12px] border-[#241a10]"
            style={{ width: BOARD_W, height: BOARD_H }}
          >
            {/* Cork surface, darkened for the night palette */}
            <Image
              src="/images/cork-texture.png"
              alt=""
              fill
              className="object-cover brightness-[0.55] saturate-[0.85]"
              sizes="1100px"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/50" />

            {/* Red threads — redrawn live while dragging */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10"
              viewBox={`0 0 ${BOARD_W} ${BOARD_H}`}
              width={BOARD_W}
              height={BOARD_H}
            >
              {THREADS.map(([from, to]) => {
                const a = center(itemById[from], offsets)
                const b = center(itemById[to], offsets)
                return (
                  <g key={`${from}-${to}`}>
                    <path d={threadPath(a, b)} fill="none" stroke="#5e1010" strokeWidth="3" opacity="0.5" />
                    <path d={threadPath(a, b)} fill="none" stroke="var(--crimson)" strokeWidth="1.8" />
                  </g>
                )
              })}
            </svg>

            {/* Evidence cards */}
            {ITEMS.map((item) => {
              const isFlipped = flipped === item.id
              const data = t.board.items[item.id]
              return (
                <motion.div
                  key={item.id}
                  drag
                  dragConstraints={boardRef}
                  dragMomentum={false}
                  dragElastic={0.05}
                  onDragStart={() => {
                    draggingRef.current = true
                  }}
                  onDrag={(_, info) => handleDrag(item.id, info.delta.x, info.delta.y)}
                  onDragEnd={() => {
                    // Let the click handler know this gesture was a drag
                    setTimeout(() => {
                      draggingRef.current = false
                    }, 0)
                  }}
                  whileDrag={{ scale: 1.06, zIndex: 40 }}
                  whileHover={{ scale: 1.03 }}
                  data-evidence={item.id}
                  className="absolute z-20 cursor-grab active:cursor-grabbing"
                  style={{ left: item.x, top: item.y, width: item.w, rotate: item.rotate }}
                >
                  <button
                    type="button"
                    aria-expanded={isFlipped}
                    aria-label={data.label}
                    onClick={() => {
                      if (draggingRef.current) return
                      setFlipped((prev) => (prev === item.id ? null : item.id))
                    }}
                    className="pin block w-full text-left [perspective:800px]"
                  >
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      className="relative [transform-style:preserve-3d]"
                      style={{ height: item.h }}
                    >
                      {/* Front — photo + label */}
                      <div className="paper-shadow absolute inset-0 flex flex-col bg-paper p-1.5 [backface-visibility:hidden]">
                        <div className="relative flex-1 overflow-hidden">
                          <Image src={item.src} alt={data.label} fill className="object-cover" sizes="220px" />
                        </div>
                        <p className="truncate px-1 pt-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-ink">
                          {data.label}
                        </p>
                      </div>
                      {/* Back — typewritten note */}
                      <div className="paper-shadow absolute inset-0 flex rotate-y-180 flex-col justify-between bg-paper-dark p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <p className="font-mono text-[10px] leading-relaxed text-ink">{data.note}</p>
                        <p className="stamp self-start px-1.5 py-0.5 text-[8px] font-bold text-crimson">221B</p>
                      </div>
                    </motion.div>
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
