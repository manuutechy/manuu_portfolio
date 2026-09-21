import Nav from './Nav'
import CompanyLogo from './CompanyLogo'
import { companies } from '../lib/companies'

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-night text-fg min-h-[100svh] flex flex-col"
    >
      <div
        aria-hidden="true"
        data-hero-glow
        className="absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_50%_0%,rgb(255_255_255/0.08),transparent_72%)]"
      />
      <div
        aria-hidden="true"
        data-hero-light
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[720px] w-[720px] rounded-full opacity-0 bg-[radial-gradient(closest-side,rgb(255_255_255/0.07),transparent)]"
      />

      <Nav animate />

      <div data-hero-content className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-20">
        <h1
          data-hero-title
          data-hide
          className="display text-[clamp(2.75rem,8.6vw,6.75rem)] [text-wrap:balance] [font-kerning:none]"
        >
          <span className="block sm:inline">Emmanuel</span>{' '}
          <span className="block sm:inline">Charles</span>
        </h1>
        <p
          data-hero-sub
          data-hide
          className="mt-5 text-[0.9375rem] sm:text-[1.0625rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-dim"
        >
          Founder of Munchify, Cyzora and Zyra Net
        </p>

        <ul className="mt-14 sm:mt-16 w-full max-w-[920px] grid sm:grid-cols-3 gap-x-4 gap-y-6 list-none">
          {companies.map((company) => (
            <li key={company.id} data-hero-logo data-hide>
              <a
                href={`#${company.id}`}
                aria-label={`${company.name}: ${company.caption}`}
                data-tilt
                data-cursor="Explore"
                className="group block no-underline"
              >
                <span className="flex h-[84px] sm:h-[112px] items-center justify-center rounded-2xl bg-[oklch(0.97_0_0)] transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                  <CompanyLogo id={company.id} decorative />
                </span>
                <span className="mt-3 block text-[0.875rem] text-dim group-hover:text-fg transition-colors">
                  {company.caption}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-4 inset-x-0 flex justify-center">
        <a
          data-hero-cue
          data-hide
          href="#companies"
          aria-label="Scroll to the companies"
          className="p-3 text-dim hover:text-fg transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
