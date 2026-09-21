import Link from 'next/link'

const companies = [
  { name: 'Munchify', url: 'https://munchify.co.ke' },
  { name: 'Cyzora', url: 'https://cyzora.co.ke' },
  { name: 'Zyra Net', url: 'https://zyranet.co.ke' },
]

const socials = [
  { name: 'GitHub', url: 'https://github.com/manuutechy' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/manuutechy' },
  { name: 'X', url: 'https://x.com/manuutechy' },
  { name: 'WhatsApp', url: 'https://wa.me/254758335592' },
]

const linkClass =
  'inline-block py-2 no-underline hover:underline underline-offset-4 decoration-2 text-[0.9375rem]'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper" aria-label="Site footer">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16 grid gap-12 sm:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-extrabold text-[1.25rem] no-underline">
            Emmanuel Charles
          </Link>
          <p className="mt-3 max-w-[34ch] text-[0.9375rem] text-[oklch(0.8_0_0)]">
            Founder of Munchify, Cyzora and Zyra Net.
          </p>
        </div>

        <nav aria-label="Companies">
          <h2 className="font-bold text-[0.9375rem] text-[oklch(0.8_0_0)]">Companies</h2>
          <ul className="mt-3 list-none">
            {companies.map((item) => (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Elsewhere">
          <h2 className="font-bold text-[0.9375rem] text-[oklch(0.8_0_0)]">Elsewhere</h2>
          <ul className="mt-3 list-none">
            {socials.map((item) => (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-[oklch(0.3_0.01_50)]">
        <p className="max-w-content mx-auto px-6 lg:px-8 py-6 text-[0.875rem] text-[oklch(0.75_0_0)]">
          &copy; {new Date().getFullYear()} Emmanuel Charles
        </p>
      </div>
    </footer>
  )
}
