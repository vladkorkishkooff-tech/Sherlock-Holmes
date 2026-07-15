'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function Preloader() {
  const { t } = useI18n()
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="paper-grain fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-mono text-[11px] uppercase tracking-[0.35em] text-charcoal"
          >
            {t.preloader.opening}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            className="font-serif text-3xl font-black uppercase tracking-tight text-foreground md:text-5xl"
          >
            {t.preloader.file}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 2.4, rotate: -18 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 0.7, duration: 0.25, ease: 'easeIn' }}
            className="stamp px-6 py-2 text-xl font-bold text-crimson md:text-2xl"
          >
            {t.preloader.stamp}
          </motion.div>

          <motion.div
            className="mt-4 h-px w-40 origin-left bg-crimson"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
