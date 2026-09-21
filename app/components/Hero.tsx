import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'

const companyLinks = [
  { name: 'Munchify', href: '#munchify' },
  { name: 'Cyzora', href: '#cyzora' },
  { name: 'Zyra Net', href: '#zyranet' },
]

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative bg-flame text-ink overflow-hidden"
    >
      <Nav />
      <div className="grid lg:grid-cols-[1.35fr_1fr] min-h-[100svh] lg:min-h-[max(100svh,720px)] lg:pl-[max(2rem,calc((100%-1200px)/2+2rem))]">
        <div className="flex flex-col justify-center px-6 lg:pl-0 lg:pr-16 pt-32 pb-14 lg:pt-32 lg:pb-24">
          <h1 className="display rise text-[clamp(2.6rem,7.4vw,5.5rem)]">
            Founder of{' '}
            {companyLinks.map((company, i) => (
              <span key={company.name}>
                <a
                  href={company.href}
                  className="underline decoration-[0.08em] underline-offset-[0.12em] hover:decoration-[0.14em]"
                >
                  {company.name}
                </a>
                {i < companyLinks.length - 2 ? ', ' : i === companyLinks.length - 2 ? ' and ' : '.'}
              </span>
            ))}
          </h1>

          <p className="rise rise-2 mt-8 max-w-[34ch] text-[1.25rem] sm:text-[1.375rem] leading-[1.45] font-medium">
            Food delivery, payments and internet. I build and run the everyday systems people in Kenya depend on.
          </p>

          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <Link
              href="#companies"
              className="inline-flex items-center justify-center min-h-[52px] px-8 bg-ink text-paper font-bold text-[1rem] no-underline hover:bg-black transition-colors"
            >
              See the companies
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center min-h-[52px] px-8 border-2 border-ink font-bold text-[1rem] no-underline hover:bg-ink hover:text-paper transition-colors"
            >
              Contact me
            </Link>
          </div>
        </div>

        <div className="relative min-h-[440px] lg:min-h-0 lg:mt-24">
          <Image
            src="/images/portrait.png"
            alt="Emmanuel Charles speaking on stage with a microphone"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
        </div>
      </div>
    </section>
  )
}
