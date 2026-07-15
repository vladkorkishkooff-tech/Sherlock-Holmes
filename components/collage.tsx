'use client'

import Image from 'next/image'

/* ============ CollageTitle — true ransom-note: every LETTER on its own scrap ============ */

// Scrap backgrounds cycle through mustard, crimson, teal, ink, paper — like
// letters torn from different newspapers. Fonts, sizes, baselines and torn
// shapes all vary per letter so no two neighbours ever match.
const letterChips = [
  'bg-paper text-ink font-serif torn-a rotate-[-4deg]',
  'bg-crimson text-paper font-serif torn-b rotate-[3deg] translate-y-[0.1em]',
  'bg-[#b98a2e] text-ink font-mono torn-c rotate-[-2deg] -translate-y-[0.08em]',
  'bg-ink text-paper font-serif torn-b rotate-[5deg]',
  'bg-paper-dark text-crimson font-serif torn-a rotate-[-3deg] translate-y-[0.12em]',
  'bg-teal text-paper font-mono torn-c rotate-[2deg]',
  'bg-paper text-ink font-serif torn-b rotate-[4deg] -translate-y-[0.1em]',
  'bg-ink text-brass font-mono torn-a rotate-[-5deg]',
  'bg-paper-dark text-ink font-serif torn-c rotate-[2.5deg] translate-y-[0.06em]',
  'bg-crimson text-paper font-mono torn-a rotate-[-2.5deg]',
]

// Deterministic size wobble so letters sit unevenly like hand-cut scraps
const letterSizes = ['text-[1em]', 'text-[1.12em]', 'text-[0.94em]', 'text-[1.06em]', 'text-[0.98em]', 'text-[1.15em]', 'text-[0.92em]']

export function CollageTitle({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ')
  let letterIndex = 0
  return (
    <span className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-4 ${className}`}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-flex flex-wrap items-center justify-center gap-y-2">
          {word.split('').map((letter, li) => {
            const idx = letterIndex++
            return (
              <span
                key={`${letter}-${li}`}
                className={`paper-shadow inline-flex min-w-[1.32em] items-center justify-center px-[0.2em] py-[0.15em] font-black uppercase leading-none ${
                  letterChips[idx % letterChips.length]
                } ${letterSizes[idx % letterSizes.length]} ${li > 0 ? '-ml-[0.12em]' : ''}`}
              >
                {letter}
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}

/* ============ Tape — masking tape strip for corners ============ */

export function Tape({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 block h-6 w-20 bg-foreground/25 shadow-sm backdrop-blur-[1px] ${className}`}
      style={{
        clipPath:
          'polygon(2% 12%, 8% 0%, 94% 4%, 100% 16%, 97% 88%, 90% 100%, 6% 96%, 0% 82%)',
      }}
    />
  )
}

/* ============ Ephemera — scattered case-file props filling the background ============ */

interface Prop {
  src: string
  className: string
  size: string
}

const layouts: Record<'left' | 'right' | 'sparse', Prop[]> = {
  left: [
    { src: '/images/newspaper-clipping.png', className: 'left-[-4%] top-[8%] rotate-[-9deg] opacity-[0.26]', size: 'w-52 md:w-72' },
    { src: '/images/fingerprint-card.png', className: 'left-[2%] bottom-[10%] rotate-[7deg] opacity-[0.22]', size: 'w-36 md:w-48' },
    { src: '/images/old-key.png', className: 'right-[3%] top-[16%] rotate-[24deg] opacity-[0.24]', size: 'w-20 md:w-28' },
    { src: '/images/sealed-envelope.png', className: 'right-[-2%] bottom-[6%] rotate-[-12deg] opacity-[0.22]', size: 'w-40 md:w-56' },
    { src: '/images/pocket-watch.png', className: 'left-[38%] top-[4%] rotate-[16deg] opacity-[0.18]', size: 'w-16 md:w-24' },
    { src: '/images/floor-plan.png', className: 'right-[26%] bottom-[2%] rotate-[5deg] opacity-[0.16]', size: 'w-40 md:w-56' },
  ],
  right: [
    { src: '/images/floor-plan.png', className: 'right-[-5%] top-[6%] rotate-[8deg] opacity-[0.24]', size: 'w-56 md:w-80' },
    { src: '/images/pocket-watch.png', className: 'right-[4%] bottom-[14%] rotate-[-14deg] opacity-[0.24]', size: 'w-24 md:w-32' },
    { src: '/images/newspaper-clipping.png', className: 'left-[-3%] bottom-[4%] rotate-[6deg] opacity-[0.24]', size: 'w-48 md:w-64' },
    { src: '/images/fingerprint-card.png', className: 'left-[4%] top-[12%] rotate-[-8deg] opacity-[0.2]', size: 'w-32 md:w-44' },
    { src: '/images/old-key.png', className: 'left-[42%] bottom-[6%] rotate-[-40deg] opacity-[0.2]', size: 'w-14 md:w-20' },
    { src: '/images/sealed-envelope.png', className: 'right-[30%] top-[2%] rotate-[9deg] opacity-[0.16]', size: 'w-32 md:w-44' },
  ],
  sparse: [
    { src: '/images/old-key.png', className: 'left-[6%] top-[20%] rotate-[-30deg] opacity-[0.22]', size: 'w-16 md:w-24' },
    { src: '/images/sealed-envelope.png', className: 'right-[2%] top-[10%] rotate-[10deg] opacity-[0.2]', size: 'w-36 md:w-48' },
    { src: '/images/fingerprint-card.png', className: 'right-[8%] bottom-[8%] rotate-[-6deg] opacity-[0.2]', size: 'w-28 md:w-40' },
    { src: '/images/newspaper-clipping.png', className: 'left-[-2%] bottom-[14%] rotate-[8deg] opacity-[0.18]', size: 'w-40 md:w-56' },
  ],
}

/* Stray ransom letters drifting in the background — deterministic per variant */
const strayLetters: Record<'left' | 'right' | 'sparse', { ch: string; className: string }[]> = {
  left: [
    { ch: 'Ш', className: 'left-[16%] top-[30%] rotate-[-14deg] bg-crimson/50 text-paper/70' },
    { ch: 'X', className: 'right-[10%] bottom-[26%] rotate-[10deg] bg-paper/40 text-ink/70' },
    { ch: '?', className: 'right-[22%] top-[8%] rotate-[18deg] bg-teal/50 text-paper/70' },
  ],
  right: [
    { ch: '221', className: 'left-[12%] bottom-[22%] rotate-[-8deg] bg-paper/40 text-ink/70' },
    { ch: 'B', className: 'right-[16%] top-[24%] rotate-[12deg] bg-crimson/50 text-paper/70' },
    { ch: '!', className: 'left-[30%] top-[10%] rotate-[-20deg] bg-[#b98a2e]/50 text-ink/70' },
  ],
  sparse: [
    { ch: 'S', className: 'left-[10%] bottom-[34%] rotate-[14deg] bg-teal/50 text-paper/70' },
    { ch: 'H', className: 'right-[26%] top-[26%] rotate-[-10deg] bg-paper/40 text-ink/70' },
  ],
}

export function Ephemera({ variant = 'left', eager = false }: { variant?: 'left' | 'right' | 'sparse'; eager?: boolean }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Red thread crossing the section */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.16]" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path
          d={variant === 'right' ? 'M -2 78 Q 30 60 55 72 T 102 30' : 'M -2 24 Q 35 44 60 30 T 102 66'}
          fill="none"
          stroke="var(--crimson)"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {layouts[variant].map((p) => (
        <div key={p.src + p.className} className={`absolute ${p.className} ${p.size}`}>
          <Image
            src={p.src || "/placeholder.svg"}
            alt=""
            width={320}
            height={320}
            loading={eager ? 'eager' : undefined}
            className="h-auto w-full sepia-[0.4]"
          />
        </div>
      ))}
      {/* Stray cut-out letters scattered like dropped ransom-note scraps */}
      {strayLetters[variant].map((s, i) => (
        <span
          key={s.ch + i}
          className={`absolute inline-block px-[0.3em] py-[0.15em] font-serif text-2xl font-black uppercase leading-none md:text-4xl ${
            i % 2 === 0 ? 'torn-a' : 'torn-c'
          } ${s.className}`}
        >
          {s.ch}
        </span>
      ))}
      {/* Chalk scribbles — handwritten case notes */}
      <svg
        className={`absolute h-24 w-40 text-foreground opacity-[0.14] md:h-32 md:w-56 ${
          variant === 'right' ? 'left-[10%] top-[42%] rotate-[-4deg]' : 'right-[12%] bottom-[30%] rotate-[3deg]'
        }`}
        viewBox="0 0 200 100"
        fill="none"
      >
        <path d="M10 30 Q 40 10 70 28 T 130 26 T 190 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 55 Q 50 38 90 52 T 170 50" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 80 Q 36 64 66 78 T 120 76" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="178" cy="72" r="9" stroke="var(--crimson)" strokeWidth="1.4" />
      </svg>
    </div>
  )
}
