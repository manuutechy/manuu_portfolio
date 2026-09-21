import Link from 'next/link'
import { companies, type CompanyId } from '../lib/companies'
import CompanyLogo from './CompanyLogo'

export default function RelatedLinks({ current }: { current?: CompanyId }) {
  const others = companies.filter((company) => company.id !== current)
  return (
    <section aria-labelledby="related-heading" className="mt-20 lg:mt-28">
      <h2 id="related-heading" className="display text-[clamp(1.75rem,3vw,2.375rem)]">
        {current ? 'More from Emmanuel Charles' : 'The companies'}
      </h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 list-none">
        {others.map((company) => (
          <li key={company.id}>
            <Link
              href={company.path}
              className="group flex h-full flex-col justify-between rounded-2xl border border-line p-6 no-underline transition-colors hover:border-[rgb(255_255_255/0.28)]"
            >
              <span className="inline-flex h-[72px] items-center self-start rounded-xl bg-[oklch(0.97_0_0)] px-6">
                <CompanyLogo id={company.id} decorative />
              </span>
              <span className="mt-6 block text-[1.0625rem] leading-[1.6] text-dim">{company.hook}</span>
              <span className="mt-4 font-semibold underline underline-offset-[6px] decoration-1 group-hover:decoration-2">
                Read about {company.name}
              </span>
            </Link>
          </li>
        ))}
        {current ? (
          <li>
            <Link
              href="/about"
              className="group flex h-full flex-col justify-between rounded-2xl border border-line p-6 no-underline transition-colors hover:border-[rgb(255_255_255/0.28)]"
            >
              <span className="display text-[1.75rem]">Emmanuel Charles</span>
              <span className="mt-6 block text-[1.0625rem] leading-[1.6] text-dim">
                The founder behind Munchify, Cyzora and Zyra Net, and how it started.
              </span>
              <span className="mt-4 font-semibold underline underline-offset-[6px] decoration-1 group-hover:decoration-2">
                About the founder
              </span>
            </Link>
          </li>
        ) : null}
      </ul>
    </section>
  )
}
