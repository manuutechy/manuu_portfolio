import Nav from './components/Nav'
import Hero from './components/Hero'
import MunchifySpotlight from './components/MunchifySpotlight'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Brands from './components/Brands'
import Pricing from './components/Pricing'
import HowWeWork from './components/HowWeWork'
import SocialProof from './components/SocialProof'
import ClientReviews from './components/ClientReviews'
import DesignThoughts from './components/DesignThoughts'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MunchifySpotlight />
        <About />
        <Services />
        <Projects />
        <Brands />
        <Pricing />
        <ClientReviews />
        <SocialProof />
        <HowWeWork />
        <DesignThoughts />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
