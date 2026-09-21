import type { Metadata } from 'next'
import { person, siteUrl } from './site'
import { companies } from './companies'

interface PageMeta {
  title: string
  description: string
  path: string
}

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, title, description, siteName: person.name, locale: 'en_KE' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

const personId = `${siteUrl}/#person`

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: person.name,
    alternateName: [person.alternateName, person.handle],
    url: siteUrl,
    jobTitle: 'Founder and software engineer',
    description:
      'Emmanuel Charles, known as Manuu, is a Kenyan founder and software engineer. He founded Munchify, Cyzora and Zyra Net, and chairs GDG on Campus Maseno.',
    email: person.email,
    address: { '@type': 'PostalAddress', addressCountry: 'KE' },
    sameAs: [person.github],
    worksFor: companies.map((company) => ({
      '@type': 'Organization',
      name: company.name,
      url: company.url,
    })),
    memberOf: { '@type': 'Organization', name: 'GDG on Campus Maseno' },
    knowsAbout: ['Software engineering', 'Food delivery platforms', 'M-Pesa payments', 'Internet service provision', 'Student tech communities'],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: person.name,
    inLanguage: 'en-KE',
    publisher: { '@id': personId },
  }
}

export function founderRef() {
  return { '@type': 'Person', '@id': personId, name: person.name, url: `${siteUrl}/about` }
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
