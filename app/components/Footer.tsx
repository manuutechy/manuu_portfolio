import Image from 'next/image'
import Link from 'next/link'
import { companies } from '../lib/companies'
import { person } from '../lib/site'

const elsewhere = [
  { name: 'GitHub', url: person.github, external: true },
  { name: 'Email', url: `mailto:${person.email}`, external: false },
]

const linkClass =
  'inline-block py-2 text-[0.9375rem] text-dim no-underline hover:text-fg transition-colors'

export default function Footer() {
  return (
    <footer className="bg-deep text-fg border-t border-line" aria-label="Site footer">
      <div aria-hidden="true" className="overflow-hidden px-4 pt-16 lg:pt-24 text-center">
        <p
          data-footer-name
          className="display whitespace-nowrap text-[clamp(2.25rem,9.2vw,9rem)] leading-[1.05]"
        >
          Emmanuel Charles
        </p>
      </div>
      <div className="max-w-content mx-auto px-6 lg:px-8 py-14 flex flex-col items-center text-center gap-8">
        <Link href="/" aria-label="Emmanuel Charles, home" className="block no-underline">
          <Image src="/images/logo-mark.png" alt="" width={503} height={512} className="h-11 w-auto" />
        </Link>

        <nav aria-label="Site pages">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1 list-none">
            <li>
              <Link href="/about" className={linkClass}>
                About
              </Link>
            </li>
            {companies.map((company) => (
              <li key={company.id}>
                <Link href={company.path} className={linkClass}>
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1 list-none">
          {elsewhere.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={linkClass}
              >
                {item.name}
                {item.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-[0.875rem] text-dim">&copy; {new Date().getFullYear()} Emmanuel Charles</p>
      </div>
    </footer>
  )
}
