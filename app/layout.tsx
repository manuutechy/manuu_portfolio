import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const title = 'Emmanuel Charles — Founder of Munchify, Cyzora and Zyra Net'
const description =
  'Emmanuel Charles founds and runs Munchify (food delivery), Cyzora (M-Pesa payments) and Zyra Net (internet in Kisumu): everyday infrastructure for Kenya.'

export const metadata: Metadata = {
  metadataBase: new URL('https://emmanuelcharles.dev'),
  title,
  description,
  keywords: ['Emmanuel Charles', 'Munchify', 'Cyzora', 'Zyra Net', 'Kenyan founder', 'Kenya startups'],
  authors: [{ name: 'Emmanuel Charles' }],
  creator: 'Emmanuel Charles',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://emmanuelcharles.dev',
    siteName: 'Emmanuel Charles',
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://emmanuelcharles.dev' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Emmanuel Charles',
  alternateName: 'Manuu',
  jobTitle: 'Founder',
  url: 'https://emmanuelcharles.dev',
  sameAs: [
    'https://github.com/manuutechy',
    'https://linkedin.com/in/manuutechy',
    'https://x.com/manuutechy',
  ],
  worksFor: [
    { '@type': 'Organization', name: 'Munchify', url: 'https://munchify.co.ke' },
    { '@type': 'Organization', name: 'Cyzora', url: 'https://cyzora.co.ke' },
    { '@type': 'Organization', name: 'Zyra Net', url: 'https://zyranet.co.ke' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
