import Image from 'next/image'
import Link from 'next/link'
import CompanyLogo from './CompanyLogo'
import Facts from './Facts'
import { companies } from '../lib/companies'

export default function Companies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="bg-night pt-8 pb-16 lg:pb-28"
    >
      <div className="hairline" aria-hidden="true" />

      <div className="max-w-content mx-auto px-6 lg:px-8">
        <h2
          id="companies-heading"
          className="display text-center mt-14 text-[clamp(2rem,4.6vw,3.5rem)]"
        >
          What I&rsquo;ve built and still run.
        </h2>
        <p className="mt-5 text-center max-w-[44ch] mx-auto text-[1.0625rem] text-dim">
          Three companies, each live and serving customers today. This is the story of each.
        </p>

        <div className="mt-16 lg:mt-24">
          {companies.map((company, index) => {
            const flip = index % 2 === 1
            return (
              <article
                key={company.id}
                id={company.id}
                data-panel
                aria-label={company.name}
                className="grid lg:grid-cols-12 gap-x-14 gap-y-10 border-t border-line py-14 lg:py-24 items-center"
              >
                <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex h-[92px] sm:h-[104px] items-center rounded-2xl bg-[oklch(0.97_0_0)] px-8">
                    <CompanyLogo id={company.id} size="lg" />
                  </div>

                  <h3
                    data-reveal-lines
                    className="display mt-9 text-[clamp(1.75rem,2.9vw,2.5rem)]"
                  >
                    {company.hook}
                  </h3>

                  <div className="mt-6 max-w-[48ch] space-y-4 text-[1.0625rem] leading-[1.7] text-dim">
                    {company.story.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2">
                    <Link
                      href={company.path}
                      className="inline-flex items-center gap-2 py-2 font-semibold text-[1rem] underline underline-offset-[7px] decoration-1 hover:decoration-2"
                    >
                      Read the full story
                      <span aria-hidden="true">&rarr;</span>
                      <span className="sr-only"> of {company.name}</span>
                    </Link>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2 text-[1rem] text-dim no-underline hover:text-fg transition-colors"
                    >
                      Visit {company.host}
                      <span aria-hidden="true">&#8599;</span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>

                <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
                  <Link
                    href={company.path}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-[2/1] overflow-hidden rounded-[20px] border border-line shadow-[0_50px_90px_-50px_rgb(0_0_0/0.95)]"
                  >
                    <Image
                      src={company.image}
                      alt={company.alt}
                      fill
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </Link>

                  <Facts facts={company.facts} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
