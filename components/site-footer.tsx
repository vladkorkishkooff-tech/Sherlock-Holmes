'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n'

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="paper-grain gaslight relative overflow-hidden border-t border-border py-20 md:py-28">
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center md:px-8">
        <p className="stamp px-5 py-1.5 text-lg font-bold text-crimson">{t.footer.colophon}</p>

        {/* Visiting card with wax seal → author site */}
        <motion.a
          href="https://vlad-korkishko-engineer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
          viewport={{ once: true, margin: '-40px' }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="paper-shadow group relative block w-full max-w-md border border-ink/20 bg-paper px-8 py-8 md:px-10"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">{t.footer.credit}</p>
          <p className="mt-3 font-serif text-3xl font-black tracking-tight text-ink md:text-4xl">Vlad Korkishko</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-ink/70">{t.footer.role}</p>
          <p className="mt-4 font-mono text-[11px] tracking-wide text-crimson underline underline-offset-4">
            {t.footer.link}
          </p>

          {/* Wax seal */}
          <span className="absolute -right-6 -top-6 block h-16 w-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 md:h-20 md:w-20">
            <Image src="/images/wax-seal.png" alt="" fill className="object-contain drop-shadow-md" sizes="80px" />
          </span>

          <span className="sr-only">Открыть сайт Влада Коркишко в новой вкладке</span>
        </motion.a>

        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-charcoal/60">
          {t.footer.cardHint}
        </p>

        <div className="w-full border-t border-dashed border-border pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/50">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
