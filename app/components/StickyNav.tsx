import Image from 'next/image'
import Link from 'next/link'
import { person } from '../lib/site'

const linkClass =
  'inline-block py-4 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-dim no-underline hover:text-fg transition-colors'

export default function StickyNav() {
  return (
    <header
      data-sticky-nav
      className="fixed inset-x-0 top-0 z-40 border-b border-line bg-[oklch(0.08_0.003_260/0.94)]"
    >
      <nav
        aria-label="Quick navigation"
        className="max-w-content mx-auto px-6 lg:px-8 h-14 flex items-center justify-between"
      >
        <Link href="/" aria-label="Emmanuel Charles, home" className="block">
          <Image src="/images/logo-mark.png" alt="" width={503} height={512} loading="eager" className="h-7 w-auto" />
        </Link>
        <ul className="flex items-center gap-5 sm:gap-9 list-none">
          <li>
            <Link href="/#companies" className={linkClass}>
              <span data-scramble>Companies</span>
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass}>
              <span data-scramble>About</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact" className={linkClass}>
              <span data-scramble>Contact</span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <a href={person.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <span data-scramble>GitHub</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
