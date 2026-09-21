import type { Metadata } from 'next'
import Hero from './components/Hero'
import Companies from './components/Companies'
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
        <Companies />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  )
}
