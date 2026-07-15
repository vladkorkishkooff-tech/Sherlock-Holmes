import type { Metadata, Viewport } from 'next'
import { Playfair_Display, PT_Serif, Special_Elite, PT_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const ptSerif = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-se',
  display: 'swap',
})

const ptMono = PT_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-ptmono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Дело №221B — Шерлок Холмс | Интерактивное расследование',
  description:
    'Интерактивный сайт-расследование о Шерлоке Холмсе: доска улик, знаменитые дела, мини-игра дедукции. Викторианский Лондон, 1895.',
  openGraph: {
    title: 'Дело №221B — Шерлок Холмс',
    description: 'Интерактивное расследование в эстетике викторианского детектива.',
  },
}

export const viewport: Viewport = {
  themeColor: '#e8e0d2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`bg-background ${playfair.variable} ${ptSerif.variable} ${specialElite.variable} ${ptMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
