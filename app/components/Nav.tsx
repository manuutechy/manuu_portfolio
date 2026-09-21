import Image from 'next/image'
import Link from 'next/link'
import { person } from '../lib/site'

const linkClass =
  'inline-block py-3 text-[0.8125rem] font-semibold uppercase tracking-[0.16em] text-dim no-underline hover:text-fg transition-colors'

export default function Nav({ animate = false }: { animate?: boolean }) {
  return (
    <header
      {...(animate ? { 'data-hero-nav': '', 'data-hide': '' } : {})}
      className="absolute inset-x-0 top-0 z-20"
    >
      <nav
        aria-label="Primary"
        className="max-w-content mx-auto px-6 lg:px-8 py-3 sm:py-5 flex items-center justify-between md:justify-center md:gap-16"
      >
        <ul className="hidden md:flex items-center gap-12 list-none">
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
        </ul>

        <Link href="/" aria-label="Emmanuel Charles, home" className="block p-2 -m-2">
          <Image src="/images/logo-mark.png" alt="" width={503} height={512} loading="eager" className="h-9 w-auto sm:h-10" />
        </Link>

        <ul className="flex items-center gap-6 md:gap-12 list-none">
          <li>
            <Link href="/#contact" className={linkClass}>
              <span data-scramble>Contact</span>
            </Link>
          </li>
          <li className="hidden md:block">
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <span data-scramble>GitHub</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
