import Link from 'next/link'

const links = [
  { label: 'Companies', href: '/#companies', hideOnMobile: false },
  { label: 'Founder', href: '/#founder', hideOnMobile: true },
  { label: 'Contact', href: '/#contact', hideOnMobile: false },
]

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav
        aria-label="Primary"
        className="max-w-content mx-auto px-6 lg:px-8 py-6 flex items-center justify-between gap-6"
      >
        <Link href="/" className="font-extrabold text-[0.9375rem] sm:text-[1.0625rem] tracking-[-0.01em] no-underline whitespace-nowrap">
          Emmanuel Charles
        </Link>
        <ul className="flex items-center gap-5 sm:gap-8 list-none text-[0.875rem] sm:text-[0.9375rem] font-semibold">
          {links.map((link) => (
            <li key={link.href} className={link.hideOnMobile ? 'hidden sm:block' : ''}>
              <Link
                href={link.href}
                className="inline-block py-3 no-underline hover:underline underline-offset-4 decoration-2"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
