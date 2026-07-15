'use client'

import { useEffect, useRef, useState } from 'react'

export function MagnifierCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mq.matches) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-magnifier')

    const el = cursorRef.current
    let raf = 0
    let x = -100
    let y = -100
    let hovering = false

    const render = () => {
      if (el) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`
      }
      raf = 0
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target as HTMLElement | null
      hovering = !!target?.closest('a, button, [data-magnify], [role="button"]')
      if (!raf) raf = requestAnimationFrame(render)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
      document.documentElement.classList.remove('cursor-magnifier')
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] transition-[scale] duration-150"
      style={{ transform: 'translate3d(-100px, -100px, 0)' }}
    >
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="18" cy="18" r="11" stroke="#1d1a16" strokeWidth="2.5" fill="rgba(232,224,210,0.15)" />
        <circle cx="18" cy="18" r="11" stroke="#8a6d3b" strokeWidth="1" opacity="0.6" />
        <line x1="26.5" y1="26.5" x2="37" y2="37" stroke="#1d1a16" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="14.5" cy="14.5" r="3" fill="rgba(255,255,255,0.35)" />
      </svg>
    </div>
  )
}
