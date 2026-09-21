import Image from 'next/image'

interface Company {
  id: string
  name: string
  kind: string
  summary: string
  facts: { label: string; value: string }[]
  url: string
  host: string
  image: string
  alt: string
  imageSide: 'left' | 'right'
}

const companies: Company[] = [
  {
    id: 'munchify',
    name: 'Munchify',
    kind: 'Food and essentials delivery',
    summary:
      'Hot meals, groceries and pharmacy runs, ordered from a phone and brought to the door by Munchify riders. It started at ten orders a day.',
    facts: [
      { label: 'Orders', value: '20,000+ a week' },
      { label: 'Local kitchens and stores', value: '50+' },
      { label: 'Average delivery', value: '20–30 minutes' },
      { label: 'Next hubs', value: 'Kakamega and Kisumu Central, 2027' },
    ],
    url: 'https://munchify.co.ke',
    host: 'munchify.co.ke',
    image: '/images/company-munchify.webp',
    alt: 'The Munchify home page: good food and daily essentials delivered to your door in Maseno',
    imageSide: 'right',
  },
  {
    id: 'cyzora',
    name: 'Cyzora',
    kind: 'Payments',
    summary:
      'Businesses collect M-Pesa with a single prompt on the customer’s phone, then pay out staff and suppliers in bulk. Built for everyone from corner kiosks to delivery fleets.',
    facts: [
      { label: 'Kenyan businesses', value: '500+' },
      { label: 'Payment prompt reaches the phone', value: 'Under 800 ms' },
      { label: 'Fees', value: '1.8% in, 1.1% out' },
      { label: 'Setup fees', value: 'None' },
    ],
    url: 'https://cyzora.co.ke',
    host: 'cyzora.co.ke',
    image: '/images/company-cyzora.webp',
    alt: 'The Cyzora Pay home page: get paid instantly with M-Pesa',
    imageSide: 'left',
  },
  {
    id: 'zyranet',
    name: 'Zyra Net',
    kind: 'Internet service provider, Kisumu',
    summary:
      'Home WiFi, business broadband and hotspot internet across Kisumu, paid for over M-Pesa, month to month with no lock-in.',
    facts: [
      { label: 'Active subscribers', value: '2,500+' },
      { label: 'Top speed', value: '100 Mbps' },
      { label: 'Areas covered in Kisumu', value: '15+' },
      { label: 'Home plans from', value: 'KSh 1,500 a month' },
    ],
    url: 'https://zyranet.co.ke',
    host: 'zyranet.co.ke',
    image: '/images/company-zyranet.webp',
    alt: 'The Zyra Net home page: internet that just works in Kisumu',
    imageSide: 'right',
  },
]

export default function Companies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="bg-paper py-24 lg:py-36"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <h2
          id="companies-heading"
          className="display text-[clamp(2.1rem,5.2vw,4rem)] max-w-[16ch]"
        >
          What I&rsquo;ve built and still run.
        </h2>
        <p className="mt-6 max-w-[52ch] text-[1.125rem] text-mute">
          Three companies, each live and serving customers today. Every figure below comes from the company&rsquo;s own site.
        </p>

        <div className="mt-16 lg:mt-24">
          {companies.map((company) => (
            <article
              key={company.id}
              id={company.id}
              aria-labelledby={`${company.id}-name`}
              className="border-t-[3px] border-ink py-14 lg:py-20 grid lg:grid-cols-2 gap-x-16 gap-y-10 items-center"
            >
              <div className={company.imageSide === 'left' ? 'lg:order-2' : ''}>
                <p className="font-bold text-[0.9375rem] text-mute">{company.kind}</p>
                <h3
                  id={`${company.id}-name`}
                  className="display mt-3 text-[clamp(2.25rem,5vw,3.75rem)]"
                >
                  {company.name}
                </h3>
                <p className="mt-6 max-w-[46ch] text-[1.125rem] leading-[1.6]">
                  {company.summary}
                </p>

                <dl className="mt-8 border-t border-rule">
                  {company.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 border-b border-rule"
                    >
                      <dt className="text-[0.9375rem] text-mute">{fact.label}</dt>
                      <dd className="font-bold text-[1.0625rem] text-right">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 min-h-[52px] px-7 bg-ink text-paper font-bold no-underline hover:bg-black transition-colors"
                >
                  Visit {company.host}
                  <span aria-hidden="true">&#8599;</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>

              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
                className={`block border border-rule shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] ${
                  company.imageSide === 'left' ? 'lg:order-1' : ''
                }`}
              >
                <Image
                  src={company.image}
                  alt={company.alt}
                  width={1400}
                  height={679}
                  sizes="(min-width: 1200px) 560px, (min-width: 1024px) 45vw, 100vw"
                  className="w-full h-auto"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
