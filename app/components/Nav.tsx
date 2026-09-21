import Link from 'next/link'

const linkClass =
  'inline-block py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-dim no-underline hover:text-fg transition-colors'

export default function Nav() {
  return (
    <header data-hero-nav data-hide className="absolute inset-x-0 top-0 z-20">
      <nav
        aria-label="Primary"
        className="max-w-content mx-auto px-6 lg:px-8 py-3 sm:py-5 flex items-center justify-between md:justify-center md:gap-16"
      >
        <ul className="hidden md:flex items-center gap-12 list-none">
          <li>
            <Link href="/#companies" className={linkClass}>
              Companies
            </Link>
          </li>
          <li>
            <Link href="/#founder" className={linkClass}>
              Founder
            </Link>
          </li>
        </ul>

        <Link
          href="/"
          className="font-display text-[0.9375rem] sm:text-[1.1875rem] uppercase tracking-[0.14em] sm:tracking-[0.2em] text-fg no-underline whitespace-nowrap"
        >
          Emmanuel Charles
        </Link>

        <ul className="flex items-center gap-6 md:gap-12 list-none">
          <li>
            <Link href="/#contact" className={linkClass}>
              Contact
            </Link>
          </li>
          <li className="hidden md:block">
            <a
              href="https://wa.me/254758335592"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
