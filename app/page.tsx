import Hero from './components/Hero'
import Companies from './components/Companies'
import Founder from './components/Founder'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Companies />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
