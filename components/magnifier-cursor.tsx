'use client'

import { useEffect, useRef, useState } from 'react'

export function MagnifierCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Media queries are unreliable inside preview iframes — detect a real
    // mouse by its first mousemove instead, and bail out on touch devices.
    let touched = false
    let active = false
    let raf = 0
    let x = -100
    let y = -100
    let hovering = false

    const render = () => {
      const el = cursorRef.current
      if (el) {
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`
      }
      raf = 0
    }

    const onTouch = () => {
      touched = true
      if (active) {
        active = false
        setEnabled(false)
        document.documentElement.classList.remove('cursor-magnifier')
      }
    }

    const onMove = (e: MouseEvent) => {
      if (touched) return
      if (!active) {
        active = true
        setEnabled(true)
        document.documentElement.classList.add('cursor-magnifier')
      }
      x = e.clientX
      y = e.clientY
      const target = e.target as HTMLElement | null
      hovering = !!target?.closest('a, button, [data-magnify], [role="button"]')
      if (!raf) raf = requestAnimationFrame(render)
    }

    window.addEventListener('touchstart', onTouch, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouch)
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
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(201,164,92,0.5))' }}>
        {/* lens glass */}
        <circle cx="20" cy="20" r="12" fill="rgba(226,214,188,0.12)" />
        {/* brass rim — light, visible on the dark background */}
        <circle cx="20" cy="20" r="12" stroke="#c9a45c" strokeWidth="3" />
        <circle cx="20" cy="20" r="12" stroke="#f0e4c8" strokeWidth="1" opacity="0.8" />
        {/* handle */}
        <line x1="29.5" y1="29.5" x2="41" y2="41" stroke="#c9a45c" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="29.5" y1="29.5" x2="41" y2="41" stroke="#3b2f1c" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        {/* glass highlight */}
        <circle cx="15.5" cy="15.5" r="3.5" fill="rgba(255,250,235,0.5)" />
      </svg>
    </div>
  )
}
