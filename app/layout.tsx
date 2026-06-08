import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Sora, DM_Sans } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import FloatingContact from './components/FloatingContact'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://emmanuelcharles.dev'),
  title: 'Emmanuel Charles — Software Engineer & Digital Product Builder',
  description: 'Emmanuel Charles designs and engineers websites, systems, mobile apps, and AI-powered products that help businesses operate smarter and scale faster.',
  keywords: ['software engineer Kenya', 'web developer Nairobi', 'system architect', 'mobile app developer', 'Next.js developer', 'Flutter developer', 'Emmanuel Charles'],
  authors: [{ name: 'Emmanuel Charles' }],
  creator: 'Emmanuel Charles',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emmanuelcharles.dev',
    siteName: 'Emmanuel Charles',
    title: 'Emmanuel Charles — Software Engineer & Digital Product Builder',
    description: 'Software engineer and system architect based in Kenya. Building websites, systems, apps, and AI solutions.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Emmanuel Charles — Software Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emmanuel Charles — Software Engineer & Digital Product Builder',
    description: 'Software engineer and system architect based in Kenya.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://emmanuelcharles.dev' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Emmanuel Charles',
  alternateName: 'Manuu',
  jobTitle: 'Software Engineer',
  url: 'https://emmanuelcharles.dev',
  sameAs: [
    'https://github.com/manuutechy',
    'https://linkedin.com/in/manuutechy',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${sora.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
          <FloatingContact />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
