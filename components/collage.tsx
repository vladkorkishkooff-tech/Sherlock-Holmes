'use client'

import Image from 'next/image'

/* ============ CollageTitle — ransom-note words on torn paper chips ============ */

const wordChips = [
  'bg-paper text-ink rotate-[-1.5deg]',
  'bg-crimson text-paper rotate-[1.2deg]',
  'bg-paper-dark text-ink rotate-[-0.8deg]',
  'bg-ink text-paper rotate-[1.8deg] border border-brass/40',
]

export function CollageTitle({ text, className = '' }: { text: string; className?: string }) {
  const words = text.split(' ')
  return (
    <span className={`flex flex-wrap items-baseline justify-center gap-x-2 gap-y-2 md:gap-x-3 ${className}`}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`torn-edge paper-shadow inline-block px-3 py-1 font-serif font-black uppercase leading-none md:px-4 md:py-1.5 ${wordChips[i % wordChips.length]}`}
        >
          {word}
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
    { src: '/images/newspaper-clipping.png', className: 'left-[-4%] top-[8%] rotate-[-9deg] opacity-[0.13]', size: 'w-52 md:w-72' },
    { src: '/images/fingerprint-card.png', className: 'left-[2%] bottom-[10%] rotate-[7deg] opacity-[0.11]', size: 'w-36 md:w-48' },
    { src: '/images/old-key.png', className: 'right-[3%] top-[16%] rotate-[24deg] opacity-[0.12]', size: 'w-20 md:w-28' },
    { src: '/images/sealed-envelope.png', className: 'right-[-2%] bottom-[6%] rotate-[-12deg] opacity-[0.11]', size: 'w-40 md:w-56' },
  ],
  right: [
    { src: '/images/floor-plan.png', className: 'right-[-5%] top-[6%] rotate-[8deg] opacity-[0.12]', size: 'w-56 md:w-80' },
    { src: '/images/pocket-watch.png', className: 'right-[4%] bottom-[14%] rotate-[-14deg] opacity-[0.12]', size: 'w-24 md:w-32' },
    { src: '/images/newspaper-clipping.png', className: 'left-[-3%] bottom-[4%] rotate-[6deg] opacity-[0.12]', size: 'w-48 md:w-64' },
    { src: '/images/fingerprint-card.png', className: 'left-[4%] top-[12%] rotate-[-8deg] opacity-[0.1]', size: 'w-32 md:w-44' },
  ],
  sparse: [
    { src: '/images/old-key.png', className: 'left-[6%] top-[20%] rotate-[-30deg] opacity-[0.1]', size: 'w-16 md:w-24' },
    { src: '/images/sealed-envelope.png', className: 'right-[2%] top-[10%] rotate-[10deg] opacity-[0.1]', size: 'w-36 md:w-48' },
    { src: '/images/fingerprint-card.png', className: 'right-[8%] bottom-[8%] rotate-[-6deg] opacity-[0.1]', size: 'w-28 md:w-40' },
  ],
}

export function Ephemera({ variant = 'left' }: { variant?: 'left' | 'right' | 'sparse' }) {
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
          <Image src={p.src || "/placeholder.svg"} alt="" width={320} height={320} className="h-auto w-full sepia-[0.4]" />
        </div>
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
