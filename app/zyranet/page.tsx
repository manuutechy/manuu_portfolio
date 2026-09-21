import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CompanyLogo from '../components/CompanyLogo'
import Faq from '../components/Faq'
import Facts from '../components/Facts'
import JsonLd from '../components/JsonLd'
import PageHeader from '../components/PageHeader'
import PageShell from '../components/PageShell'
import RelatedLinks from '../components/RelatedLinks'
import { getCompany } from '../lib/companies'
import { breadcrumbSchema, faqSchema, founderRef, pageMetadata } from '../lib/seo'
import { siteUrl } from '../lib/site'

const company = getCompany('zyranet')

export const metadata: Metadata = pageMetadata({
  title: 'Zyra Net: Fast WiFi Internet in Kisumu, Kenya',
  description:
    'Zyra Net is an internet service provider in Kisumu: home WiFi, business broadband, hotspot and school internet. Plans from KSh 1,500 a month, setup in 24 hours, pay via M-Pesa, no contracts.',
  path: '/zyranet',
})

const plans = [
  {
    name: 'Home Basic',
    price: 'KSh 1,500 a month',
    speed: 'Up to 10 Mbps',
    detail: 'Unlimited data, free router and email support. For light browsing, streaming and social media.',
  },
  {
    name: 'Home Plus',
    price: 'KSh 2,500 a month',
    speed: 'Up to 30 Mbps',
    detail: 'Unlimited data, free router and setup, and 24/7 WhatsApp support. The most popular plan, for families with several devices and 4K streaming.',
  },
  {
    name: 'Business Broadband',
    price: 'KSh 6,000 a month',
    speed: 'Up to 100 Mbps',
    detail: 'Unlimited data, free router and setup, 24/7 phone support and a dedicated PPPoE connection, for offices, schools and institutions.',
  },
]

const areas = [
  'Kisumu CBD', 'Milimani', 'Mamboleo', 'Nyalenda', 'Kondele', 'Kaloleni',
  'Manyatta', 'Migosi', 'Kibuye', 'Riat', 'Tom Mboya', 'Obunga',
]

const faqs = [
  {
    q: 'What is Zyra Net?',
    a: 'Zyra Net is an internet service provider in Kisumu, Kenya. It provides home WiFi, business broadband, hotspot and school internet over a fibre-backed wireless network, and you pay through M-Pesa.',
  },
  {
    q: 'How much does internet cost with Zyra Net?',
    a: 'Home Basic is KSh 1,500 a month for up to 10 Mbps, Home Plus is KSh 2,500 a month for up to 30 Mbps, and Business Broadband is KSh 6,000 a month for up to 100 Mbps. All plans have unlimited data and are month to month with no lock-in.',
  },
  {
    q: 'How long does installation take?',
    a: 'Installation can be done in as little as 24 hours. Zyra Net technicians based in Kisumu deliver, install and configure your router in one visit, often on the same day, and installation within Kisumu is free.',
  },
  {
    q: 'Which areas of Kisumu does Zyra Net cover?',
    a: 'Zyra Net covers Kisumu CBD, Milimani, Mamboleo, Nyalenda, Kondele, Kaloleni, Manyatta, Migosi, Kibuye, Riat, Tom Mboya, Obunga and more, and the network keeps expanding across Kisumu County. Contact Zyra Net to check coverage in your area.',
  },
  {
    q: 'How do I pay for Zyra Net?',
    a: 'You pay through M-Pesa. Plans are month to month with no contracts, and annual billing is available at a 20% discount.',
  },
  {
    q: 'How do I contact Zyra Net support?',
    a: 'Support is available by WhatsApp, phone and email. You can email hello@zyranet.co.ke, or visit the office on Oginga Odinga Street in Kisumu CBD, open Monday to Friday, 8am to 6pm.',
  },
]

export default function ZyraNetPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Zyra Net',
            url: company.url,
            logo: `${siteUrl}/images/brand-zyranet.png`,
            description:
              'Internet service provider in Kisumu, Kenya: home WiFi, business broadband, hotspot and school internet, paid via M-Pesa.',
            email: 'hello@zyranet.co.ke',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Oginga Odinga Street',
              addressLocality: 'Kisumu',
              addressRegion: 'Kisumu County',
              addressCountry: 'KE',
            },
            openingHours: 'Mo-Fr 08:00-18:00',
            areaServed: { '@type': 'City', name: 'Kisumu' },
            founder: founderRef(),
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Zyra Net', path: '/zyranet' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        trail="Zyra Net"
        title="Zyra Net: fast, reliable WiFi internet in Kisumu."
        lead="Blazing-fast WiFi for homes and businesses across Kisumu. Home WiFi, business broadband, hotspot and school internet, paid through M-Pesa, with setup in as little as 24 hours and no contracts."
        actions={
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[56px] px-9 rounded-full bg-fg text-night font-semibold text-[1.0625rem] no-underline hover:bg-white transition-colors"
          >
            Get connected
            <span className="sr-only"> (opens zyranet.co.ke in a new tab)</span>
          </a>
        }
      >
        <div className="inline-flex h-[92px] items-center rounded-2xl bg-[oklch(0.97_0_0)] px-8">
          <CompanyLogo id="zyranet" size="lg" />
        </div>
      </PageHeader>

      <div className="max-w-content mx-auto px-6 lg:px-8 pb-24 lg:pb-36">
        <div data-clip data-shot className="relative aspect-[2/1] overflow-hidden rounded-[20px] border border-line shadow-[0_50px_90px_-50px_rgb(0_0_0/0.95)]">
          <Image data-shot-img src={company.image} alt={company.alt} fill priority sizes="(min-width: 1200px) 1136px, 100vw" className="object-cover" />
        </div>
        <Facts facts={company.facts} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6" />

        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <article className="prose-story min-w-0 lg:col-span-8" aria-label="About Zyra Net">
            <h2>Internet that just works, in Kisumu</h2>
            <p>
              Zyra Net is a local internet provider for Kisumu. It runs a fibre-backed wireless network across the city, so homes, shops, offices and schools get fast, reliable internet without contracts, hidden fees or the frustration of buffering.
            </p>

            <h2>Internet plans in Kisumu</h2>
            <ul>
              {plans.map((plan) => (
                <li key={plan.name}>
                  <strong>
                    {plan.name}: {plan.price}, {plan.speed}.
                  </strong>{' '}
                  {plan.detail}
                </li>
              ))}
            </ul>
            <p>All plans include free installation within Kisumu and are month to month. Annual billing is available at a 20% discount.</p>

            <h2>Where Zyra Net covers</h2>
            <p>
              The network spans more than 15 areas of Kisumu, and it keeps expanding across Kisumu County. Current coverage includes {areas.join(', ')}. If you are not in a coverage zone yet, Zyra Net wants to hear from you.
            </p>

            <h2>Why choose Zyra Net</h2>
            <ul>
              <li>
                <strong>Fast, professional installation.</strong> Local technicians deliver, install and configure your router in one visit, often the same day.
              </li>
              <li>
                <strong>Local support in Kisumu.</strong> Reach a real person by WhatsApp, phone or email at any hour.
              </li>
              <li>
                <strong>No throttling.</strong> Your speed is your speed, all day, with no hidden fair-use policy slowing you down.
              </li>
              <li>
                <strong>Pay with M-Pesa.</strong> Month to month, no lock-in.
              </li>
            </ul>

            <h2>Visit or contact Zyra Net</h2>
            <p>
              Zyra Net is on Oginga Odinga Street in Kisumu CBD, open Monday to Friday, 8am to 6pm. You can email <a href="mailto:hello@zyranet.co.ke">hello@zyranet.co.ke</a> or use the contact form on <a href={company.url} target="_blank" rel="noopener noreferrer">zyranet.co.ke</a>.
            </p>

            <h2>Built by Emmanuel Charles</h2>
            <p>
              Zyra Net is one of three companies I founded and run, alongside <Link href="/munchify">Munchify</Link> and <Link href="/cyzora">Cyzora</Link>. Read more <Link href="/about">about me</Link>.
            </p>
          </article>

          <aside className="relative lg:col-span-4 lg:sticky lg:top-8 self-start rounded-2xl border border-line p-7" data-spot aria-label="Zyra Net at a glance">
            <h2 className="font-semibold text-[1.0625rem]">Zyra Net at a glance</h2>
            <dl className="mt-5 space-y-4 text-[1rem]">
              <div>
                <dt className="text-dim text-[0.875rem]">What it is</dt>
                <dd>Internet service provider</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Where</dt>
                <dd>Kisumu, Kenya</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Plans from</dt>
                <dd>KSh 1,500 a month</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Founder</dt>
                <dd>Emmanuel Charles (Manuu)</dd>
              </div>
            </dl>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center min-h-[52px] rounded-full bg-fg text-night font-semibold no-underline hover:bg-white transition-colors"
            >
              Visit zyranet.co.ke
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </aside>
        </div>

        <Faq items={faqs} />
        <RelatedLinks current="zyranet" />
      </div>
    </PageShell>
  )
}
