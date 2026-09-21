import Image from 'next/image'
import CompanyLogo, { type CompanyId } from './CompanyLogo'

interface Company {
  id: CompanyId
  name: string
  hook: string
  story: string[]
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
    hook: 'From ten orders a day to a delivery network.',
    story: [
      'Munchify brings hot meals, groceries and pharmacy runs to people in and around Maseno. One order, one rider, and it arrives at the hostel or the front door in 20 to 30 minutes.',
      'Local kitchens and stores list on the platform, riders earn on their own hours, and customers order on the web or the Android app. It started at ten orders a day. Kakamega opens in January 2027 and Kisumu Central in June 2027.',
    ],
    facts: [
      { value: '20,000+', label: 'orders a week', count: { to: 20000, suffix: '+' } },
      { value: '50+', label: 'local kitchens and stores', count: { to: 50, suffix: '+' } },
      { value: '20–30 min', label: 'average delivery' },
      { value: '4.8 / 5', label: 'rating on Google Play' },
    ],
    url: 'https://munchify.co.ke',
    host: 'munchify.co.ke',
    image: '/images/company-munchify.webp',
    alt: 'The Munchify home page: good food and daily essentials delivered to your door in Maseno',
  },
  {
    id: 'cyzora',
    name: 'Cyzora',
    hook: 'Getting paid, without the chasing.',
    story: [
      'Small Kenyan businesses lose hours chasing payments and matching them to orders. Cyzora removes both. The customer taps pay and enters their M-Pesa PIN, the money lands in the business’s account, and the payment matches its order on its own.',
      'It works from a website or app checkout, a payment link sent over WhatsApp, or a single API call, and it pays out staff and suppliers in bulk. From corner kiosks to delivery fleets, Kenyan businesses run on it.',
    ],
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
    hook: 'Internet that just works, in Kisumu.',
    story: [
      'Zyra Net is a local internet provider for Kisumu: home WiFi, business broadband, hotspot and school internet over a fibre-backed wireless network, paid for through M-Pesa with no contracts.',
      'Local technicians install in as little as 24 hours, and support answers on WhatsApp, phone and email at any hour. The network keeps expanding across Kisumu County.',
    ],
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

export default function Companies() {
  return (
    <section
      id="companies"
      aria-labelledby="companies-heading"
      className="bg-night pt-8 pb-16 lg:pb-28"
    >
      <div className="hairline" aria-hidden="true" />

      <div className="max-w-content mx-auto px-6 lg:px-8">
        <h2
          id="companies-heading"
          className="display text-center mt-14 text-[clamp(2rem,4.6vw,3.5rem)]"
        >
          What I&rsquo;ve built and still run.
        </h2>
        <p className="mt-5 text-center max-w-[44ch] mx-auto text-[1.0625rem] text-dim">
          Three companies, each live and serving customers today. This is the story of each.
        </p>

        <div className="mt-16 lg:mt-24">
          {companies.map((company, index) => {
            const flip = index % 2 === 1
            return (
              <article
                key={company.id}
                id={company.id}
                data-panel
                aria-label={company.name}
                className="grid lg:grid-cols-12 gap-x-14 gap-y-10 border-t border-line py-14 lg:py-24 items-center"
              >
                <div className={`lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex h-[92px] sm:h-[104px] items-center rounded-2xl bg-[oklch(0.97_0_0)] px-8">
                    <CompanyLogo id={company.id} size="lg" />
                  </div>

                  <h3
                    data-reveal-lines
                    className="display mt-9 text-[clamp(1.75rem,2.9vw,2.5rem)]"
                  >
                    {company.hook}
                  </h3>

                  <div className="mt-6 max-w-[48ch] space-y-4 text-[1.0625rem] leading-[1.7] text-dim">
                    {company.story.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 py-2 font-semibold text-[1rem] underline underline-offset-[7px] decoration-1 hover:decoration-2"
                  >
                    Visit {company.host}
                    <span aria-hidden="true">&#8599;</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>

                <div className={`lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-[2/1] overflow-hidden rounded-[20px] border border-line shadow-[0_50px_90px_-50px_rgb(0_0_0/0.95)]"
                  >
                    <Image
                      src={company.image}
                      alt={company.alt}
                      fill
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover"
                    />
                  </a>

                  <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6">
                    {company.facts.map((fact) => (
                      <div key={fact.label} className="flex flex-col-reverse justify-end border-l border-line pl-4">
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
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
