import type { Metadata } from 'next'
import { Gloock, Schibsted_Grotesk } from 'next/font/google'
import './globals.css'
import { siteUrl } from './lib/site'

const gloock = Gloock({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gloock',
  display: 'swap',
})

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
})

const title = 'Emmanuel Charles — Founder of Munchify, Cyzora and Zyra Net'
const description =
  'Emmanuel Charles founds and runs Munchify (food delivery), Cyzora (M-Pesa payments) and Zyra Net (internet in Kisumu): everyday infrastructure for Kenya.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | Emmanuel Charles' },
  description,
  keywords: ['Emmanuel Charles', 'Manuu', 'Munchify', 'Cyzora', 'Zyra Net', 'Kenyan founder', 'Maseno University', 'Kenya startups'],
  authors: [{ name: 'Emmanuel Charles' }],
  creator: 'Emmanuel Charles',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteUrl,
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${gloock.variable} ${schibsted.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  )
}
