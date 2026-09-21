import Nav from './Nav'
import Footer from './Footer'
import Motion from './Motion'

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main" className="bg-night">
        {children}
      </main>
      <Footer />
      <Motion />
    </>
  )
}
