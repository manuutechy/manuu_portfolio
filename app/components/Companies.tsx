import Image from 'next/image'

interface Company {
  id: string
  name: string
  kind: string
  summary: string
  facts: { value: string; label: string; count?: { to: number; prefix?: string; suffix?: string } }[]
  url: string
  host: string
  image: string
  alt: string
}

const companies: Company[] = [
  {
    id: 'munchify',
    name: 'Munchify',
    kind: 'Food and essentials delivery',
    summary:
      'Hot meals, groceries and pharmacy runs, ordered from a phone and brought to the door by Munchify riders. It started at ten orders a day.',
    facts: [
      { value: '20,000+', label: 'orders a week', count: { to: 20000, suffix: '+' } },
      { value: '50+', label: 'local kitchens and stores', count: { to: 50, suffix: '+' } },
      { value: '20–30 min', label: 'average delivery' },
      { value: '2027', label: 'Kakamega and Kisumu Central hubs' },
    ],
    url: 'https://munchify.co.ke',
    host: 'munchify.co.ke',
    image: '/images/company-munchify.webp',
    alt: 'The Munchify home page: good food and daily essentials delivered to your door in Maseno',
  },
  {
    id: 'cyzora',
    name: 'Cyzora',
    kind: 'Payments',
    summary:
      'Businesses collect M-Pesa with a single prompt on the customer’s phone, then pay out staff and suppliers in bulk. Built for everyone from corner kiosks to delivery fleets.',
    facts: [
      { value: '500+', label: 'Kenyan businesses', count: { to: 500, suffix: '+' } },
      { value: '< 800 ms', label: 'for the payment prompt to reach the phone' },
      { value: '1.8%', label: 'fee on deposits, 1.1% on withdrawals' },
      { value: 'KES 0', label: 'setup fees' },
    ],
    url: 'https://cyzora.co.ke',
    host: 'cyzora.co.ke',
    image: '/images/company-cyzora.webp',
    alt: 'The Cyzora Pay home page: get paid instantly with M-Pesa',
  },
  {
    id: 'zyranet',
    name: 'Zyra Net',
    kind: 'Internet service provider, Kisumu',
    summary:
      'Home WiFi, business broadband and hotspot internet across Kisumu, paid for over M-Pesa, month to month with no lock-in.',
    facts: [
      { value: '2,500+', label: 'active subscribers', count: { to: 2500, suffix: '+' } },
      { value: '100 Mbps', label: 'top speed', count: { to: 100, suffix: ' Mbps' } },
      { value: '15+', label: 'areas covered in Kisumu', count: { to: 15, suffix: '+' } },
      { value: 'KSh 1,500', label: 'a month for home plans', count: { to: 1500, prefix: 'KSh ' } },
    ],
    url: 'https://zyranet.co.ke',
    host: 'zyranet.co.ke',
    image: '/images/company-zyranet.webp',
    alt: 'The Zyra Net home page: internet that just works in Kisumu',
  },
]

const logoClass = 'w-auto opacity-90 group-hover:opacity-100 transition-opacity'

export default function Companies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="bg-night pt-16 lg:pt-24 pb-24 lg:pb-36"
    >
      <div className="max-w-[1000px] mx-auto px-6">
        <p className="text-center text-[0.8125rem] uppercase tracking-[0.2em] text-dim">Companies</p>

        <ul className="mt-10 grid sm:grid-cols-3 gap-y-10 items-center justify-items-center list-none">
          <li data-logo>
            <a href="#munchify" aria-label="Munchify" className="group flex items-center">
              <Image src="/images/logo-munchify.png" alt="" width={390} height={128} className={`h-9 sm:h-10 ${logoClass}`} />
            </a>
          </li>
          <li data-logo>
            <a href="#cyzora" aria-label="Cyzora" className="group flex items-center gap-3">
              <Image src="/images/logo-cyzora.png" alt="" width={94} height={128} className={`h-9 sm:h-10 ${logoClass}`} />
              <span className="font-bold text-[1.75rem] sm:text-[2rem] leading-none tracking-[-0.02em] opacity-90 group-hover:opacity-100 transition-opacity">
                Cyzora
              </span>
            </a>
          </li>
          <li data-logo>
            <a href="#zyranet" aria-label="Zyra Net" className="group flex items-center">
              <Image src="/images/logo-zyranet.png" alt="" width={406} height={128} className={`h-9 sm:h-10 ${logoClass}`} />
            </a>
          </li>
        </ul>

        <div className="hairline mt-20 lg:mt-28" aria-hidden="true" />

        <h2
          id="companies-heading"
          className="display text-center mt-12 text-[clamp(2rem,4.6vw,3.5rem)]"
        >
          What I&rsquo;ve built and still run.
        </h2>
        <p className="mt-5 text-center max-w-[46ch] mx-auto text-[1.0625rem] text-dim">
          Three companies, each live and serving customers today. Every figure comes from the company&rsquo;s own site.
        </p>

        <div className="mt-14 flex flex-col gap-6">
          {companies.map((company) => (
            <article
              key={company.id}
              id={company.id}
              data-panel
              aria-labelledby={`${company.id}-name`}
              className="card-surface rounded-[28px] border border-line p-5 sm:p-8 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-x-10 gap-y-7 items-center"
            >
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className="block relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-2xl border border-line"
              >
                <Image
                  src={company.image}
                  alt={company.alt}
                  fill
                  sizes="(min-width: 768px) 420px, 100vw"
                  className="object-cover"
                />
              </a>

              <div>
                <h3 id={`${company.id}-name`} className="display text-[clamp(1.85rem,3.2vw,2.5rem)]">
                  {company.name}
                </h3>
                <p className="mt-1 text-[0.9375rem] text-dim">{company.kind}</p>
                <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-[1.65] text-dim">
                  {company.summary}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-5">
                  {company.facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col-reverse justify-end">
                      <dt className="mt-1 text-[0.875rem] leading-[1.4] text-dim">{fact.label}</dt>
                      <dd
                        data-count={fact.count?.to}
                        data-prefix={fact.count?.prefix}
                        data-suffix={fact.count?.suffix}
                        className="font-semibold tracking-[-0.02em] text-[1.5rem] leading-[1.2]"
                      >
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 py-2 font-semibold text-[1rem] underline underline-offset-[7px] decoration-1 hover:decoration-2"
                >
                  Visit {company.host}
                  <span aria-hidden="true">&#8599;</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
