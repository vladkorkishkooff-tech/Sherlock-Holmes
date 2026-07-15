import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { cases, getCase } from '@/lib/cases'
import { CaseView } from '@/components/case-view'

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const caseFile = getCase(slug)
  if (!caseFile) return {}
  return {
    title: `${caseFile.title.ru} — Дело №221B`,
    description: caseFile.teaser.ru,
  }
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseFile = getCase(slug)
  if (!caseFile) notFound()

  return <CaseView caseFile={caseFile} />
}
