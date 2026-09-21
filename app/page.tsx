import type { Metadata } from 'next'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import SectionRail from './components/SectionRail'
import Companies from './components/Companies'
import Journey from './components/Journey'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Motion from './components/Motion'
import JsonLd from './components/JsonLd'
import { personSchema, websiteSchema } from './lib/seo'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default function Home() {
  return (
    <>
      <JsonLd data={[personSchema(), websiteSchema()]} />
      <main id="main">
        <Hero />
        <Marquee />
        <Companies />
        <Journey />
        <Founder />
        <Contact />
      </main>
      <SectionRail />
      <Footer />
      <Motion />
    </>
  )
}
