import Link from 'next/link'

const links = [
  { name: 'Munchify', url: 'https://munchify.co.ke' },
  { name: 'Cyzora', url: 'https://cyzora.co.ke' },
  { name: 'Zyra Net', url: 'https://zyranet.co.ke' },
  { name: 'GitHub', url: 'https://github.com/manuutechy' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/manuutechy' },
  { name: 'X', url: 'https://x.com/manuutechy' },
]

export default function Footer() {
  return (
    <footer className="bg-deep text-fg border-t border-line" aria-label="Site footer">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-14 flex flex-col items-center text-center gap-6">
        <Link href="/" className="font-display text-[1.25rem] uppercase tracking-[0.2em] no-underline">
          Emmanuel Charles
        </Link>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1 list-none">
          {links.map((item) => (
            <li key={item.name}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 text-[0.9375rem] text-dim no-underline hover:text-fg transition-colors"
              >
                {item.name}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[0.875rem] text-dim">&copy; {new Date().getFullYear()} Emmanuel Charles</p>
      </div>
    </footer>
  )
}
