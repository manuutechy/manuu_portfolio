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

const company = getCompany('cyzora')

export const metadata: Metadata = pageMetadata({
  title: 'Cyzora Pay: Get Paid Instantly with M-Pesa in Kenya',
  description:
    'Cyzora is an M-Pesa payments platform for Kenyan businesses: instant payment prompts, WhatsApp payment links, automatic order matching and bulk payouts. 1.8% in, 1.1% out, no setup fees.',
  path: '/cyzora',
})

const faqs = [
  {
    q: 'What is Cyzora?',
    a: 'Cyzora, or Cyzora Pay, is a payments platform for Kenyan businesses. It lets customers pay by M-Pesa with a single prompt on their phone, matches each payment to its order automatically, and pays out staff and suppliers in bulk.',
  },
  {
    q: 'How does a customer pay with Cyzora?',
    a: 'The customer taps pay and enters their M-Pesa PIN. The money goes straight to the business’s account, with no paperwork, no waiting and no chasing of payments.',
  },
  {
    q: 'How much does Cyzora cost?',
    a: 'Cyzora charges 1.8% on deposits and 1.1% on withdrawals. There are no setup fees and no minimums, and it is free to start.',
  },
  {
    q: 'Can I collect payments over WhatsApp without a website?',
    a: 'Yes. You can create a payment link, send it in a chat or on social media, and get paid when the customer opens it and pays.',
  },
  {
    q: 'Can I pay many people at once?',
    a: 'Yes. Cyzora supports bulk payouts, so you can send salaries, supplier payments and contractor fees to hundreds of people from a single upload, with a receipt for every payment.',
  },
  {
    q: 'How do I connect Cyzora to my website or app?',
    a: 'With one API call. Cyzora’s checkout sends a payment prompt to the customer’s phone in under 800 milliseconds, and you can be live in minutes.',
  },
]

export default function CyzoraPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Cyzora',
            alternateName: 'Cyzora Pay',
            url: company.url,
            logo: `${siteUrl}/images/brand-cyzora.png`,
            description:
              'M-Pesa payments platform for Kenyan businesses: instant payment prompts, payment links, automatic order matching and bulk payouts.',
            areaServed: { '@type': 'Country', name: 'Kenya' },
            founder: founderRef(),
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Cyzora', path: '/cyzora' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        trail="Cyzora"
        title="Cyzora Pay: get paid instantly with M-Pesa."
        lead="Cyzora is a payments platform for Kenyan businesses. Your customer taps pay, enters their M-Pesa PIN, and the money is already in your account, with no paperwork, no waiting and no chasing payments."
        actions={
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[56px] px-9 rounded-full bg-fg text-night font-semibold text-[1.0625rem] no-underline hover:bg-white transition-colors"
          >
            Start getting paid
            <span className="sr-only"> (opens cyzora.co.ke in a new tab)</span>
          </a>
        }
      >
        <div className="inline-flex h-[92px] items-center rounded-2xl bg-[oklch(0.97_0_0)] px-8">
          <CompanyLogo id="cyzora" size="lg" />
        </div>
      </PageHeader>

      <div className="max-w-content mx-auto px-6 lg:px-8 pb-24 lg:pb-36">
        <div className="relative aspect-[2/1] overflow-hidden rounded-[20px] border border-line shadow-[0_50px_90px_-50px_rgb(0_0_0/0.95)]">
          <Image src={company.image} alt={company.alt} fill priority sizes="(min-width: 1200px) 1136px, 100vw" className="object-cover" />
        </div>
        <Facts facts={company.facts} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6" />

        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <article className="prose-story min-w-0 lg:col-span-8" aria-label="About Cyzora">
            <h2>Why businesses lose time on payments</h2>
            <p>
              Small Kenyan businesses lose hours every week chasing payments, then matching what arrived to the orders that were placed. It is slow, it is error-prone, and it keeps owners tied to their phones. Cyzora removes both problems: money moves the moment the customer approves, and every payment finds its own order.
            </p>

            <h2>How Cyzora works</h2>
            <ul>
              <li>
                <strong>The customer taps pay.</strong> A payment prompt reaches their phone in under 800 milliseconds.
              </li>
              <li>
                <strong>They enter their M-Pesa PIN.</strong> No forms, no card details, no waiting.
              </li>
              <li>
                <strong>The money lands in your account.</strong> The payment is settled instantly and matched to its order automatically.
              </li>
            </ul>

            <h2>Every way to get paid, made simple</h2>
            <h3>Website and app checkout</h3>
            <p>
              Add M-Pesa payments to your website or app with a single API call. The customer taps pay, their phone asks for their PIN, and it is done.
            </p>
            <pre>
              <code>{`cyzora.charges.create({ amount: 2500, phone: "254712345678" })`}</code>
            </pre>
            <h3>Payment links over WhatsApp and social media</h3>
            <p>
              No website? Create a payment link, send it in a chat or post it on social media, and get paid. It is built for businesses that sell over chat.
            </p>
            <h3>Payments that match themselves</h3>
            <p>
              Every payment finds its order automatically, so bookkeeping does itself. You see who paid, how much and for which order, without checking statements by hand.
            </p>
            <h3>Bulk payouts</h3>
            <p>
              Pay everyone at once. Send staff salaries, supplier payments and contractor fees to hundreds of people from one upload, straight to their phones, with a receipt for every payment.
            </p>

            <h2>Simple, transparent pricing</h2>
            <p>
              Cyzora charges <strong>1.8% on deposits</strong> and <strong>1.1% on withdrawals</strong>. There are no setup fees, no minimums and no hidden fees, and it is free to start. Payouts are settled instantly.
            </p>

            <h2>Who Cyzora is for</h2>
            <p>
              From the corner kiosk to citywide delivery fleets, Kenyan businesses run their day on Cyzora: small shops, sellers who work over WhatsApp, businesses with a website or app, delivery operators and developers building payments into their own products.
            </p>

            <h2>Built by Emmanuel Charles</h2>
            <p>
              Cyzora is one of three companies I founded and run, alongside <Link href="/munchify">Munchify</Link> and <Link href="/zyranet">Zyra Net</Link>. I write about how I work on my <Link href="/about">about page</Link>.
            </p>
          </article>

          <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start rounded-2xl border border-line p-7" aria-label="Cyzora at a glance">
            <h2 className="font-semibold text-[1.0625rem]">Cyzora at a glance</h2>
            <dl className="mt-5 space-y-4 text-[1rem]">
              <div>
                <dt className="text-dim text-[0.875rem]">What it is</dt>
                <dd>M-Pesa payments for businesses</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Pricing</dt>
                <dd>1.8% in, 1.1% out, no setup fees</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Used by</dt>
                <dd>500+ Kenyan businesses</dd>
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
              Visit cyzora.co.ke
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </aside>
        </div>

        <Faq items={faqs} />
        <RelatedLinks current="cyzora" />
      </div>
    </PageShell>
  )
}
