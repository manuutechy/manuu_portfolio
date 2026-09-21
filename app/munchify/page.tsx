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

const company = getCompany('munchify')

export const metadata: Metadata = pageMetadata({
  title: 'Munchify: Food, Grocery and Pharmacy Delivery in Maseno',
  description:
    'Munchify is a delivery platform in Maseno, Kenya, built by Emmanuel Charles as a first-year student. 26,000+ orders, 30+ people employed, 50+ local kitchens and stores. Read the founder’s story.',
  path: '/munchify',
})

const faqs = [
  {
    q: 'What is Munchify?',
    a: 'Munchify is a food, grocery and pharmacy delivery platform in Maseno, Kenya. Customers order hot meals, supermarket groceries, pharmacy items and cold drinks from their phone, and a Munchify rider brings the order to their hostel or door.',
  },
  {
    q: 'Who founded Munchify?',
    a: 'Munchify was founded by Emmanuel Charles, known as Manuu, while he was a first-year BSc IT student. He taught himself to build the whole platform from scratch.',
  },
  {
    q: 'How fast is Munchify delivery?',
    a: 'The average delivery time across Maseno is 20 to 30 minutes.',
  },
  {
    q: 'Where does Munchify deliver?',
    a: 'Munchify delivers across Maseno: Maseno Main Campus, Siriba Campus and hostels, College Campus halls, Mabungo and Luanda. Kakamega opens in January 2027 and Kisumu Central in June 2027.',
  },
  {
    q: 'How many orders has Munchify delivered?',
    a: 'Over 26,000 orders. Munchify is the largest platform in the university and employs more than 30 people.',
  },
  {
    q: 'Can my restaurant or shop sell on Munchify, or can I ride for Munchify?',
    a: 'Yes. Local kitchens and stores can register on munchify.co.ke, and riders on motorbikes or bicycles can apply to deliver with flexible hours and weekly payouts.',
  },
]

const offers = [
  ['Food and meals', 'Hot kitchen meals, burgers and Swahili favourites from local kitchens.'],
  ['Supermarket and groceries', 'Fresh groceries and pantry staples delivered from local supermarkets.'],
  ['Pharmacies and care', 'Pharmacy and personal-care items brought to your door.'],
  ['Breakfast and coffee', 'Breakfast, pastries and coffee to start the day.'],
  ['Chilled drinks', 'Cold drinks delivered straight to your hostel or room.'],
]

export default function MunchifyPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Munchify',
            url: company.url,
            logo: `${siteUrl}/images/brand-munchify.png`,
            description:
              'Food, grocery and pharmacy delivery platform in Maseno, Kenya, delivering in 20 to 30 minutes.',
            areaServed: { '@type': 'Place', name: 'Maseno, Kenya' },
            founder: founderRef(),
          },
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Munchify', path: '/munchify' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        trail="Munchify"
        title="Munchify: food, grocery and pharmacy delivery in Maseno."
        lead="Hot meals, supermarket groceries, pharmacy runs and cold drinks, delivered to your hostel or door in 20 to 30 minutes. I built Munchify from a hostel room in my first year at university."
        actions={
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[56px] px-9 rounded-full bg-fg text-night font-semibold text-[1.0625rem] no-underline hover:bg-white transition-colors"
          >
            Order on munchify.co.ke
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        }
      >
        <div className="inline-flex h-[92px] items-center rounded-2xl bg-[oklch(0.97_0_0)] px-8">
          <CompanyLogo id="munchify" size="lg" />
        </div>
      </PageHeader>

      <div className="max-w-content mx-auto px-6 lg:px-8 pb-24 lg:pb-36">
        <div data-clip data-shot className="relative aspect-[2/1] overflow-hidden rounded-[20px] border border-line shadow-[0_50px_90px_-50px_rgb(0_0_0/0.95)]">
          <Image data-shot-img src={company.image} alt={company.alt} fill priority sizes="(min-width: 1200px) 1136px, 100vw" className="object-cover" />
        </div>
        <Facts facts={company.facts} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6" />

        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <article className="prose-story min-w-0 lg:col-span-8" aria-label="The Munchify story">
            <h2>The Munchify story</h2>
            <p>
              There comes a point in life when you question your whole existence and feel intense pressure about what you should build and how you should build it. I can relate to that, especially coming from a household with a clear belief: go to school, work hard, get good grades and get a job. That made sense to my parents, and it was the path I was destined to follow in their eyes. But I was built differently, and so is Munchify.
            </p>

            <h3>It didn&rsquo;t start as a company</h3>
            <p>
              Munchify never had a business plan or even a vision to follow. It began when I was chatting with my friend George in his hostel room. He wanted to order some food, but when he opened Glovo he was hit with the message &ldquo;currently not available here&rdquo;. Then came the idea. What if I built a simple site that people order from, and we got a bunch of delivery personnel to do the delivery, and boom, we have our own delivery platform?
            </p>
            <p>
              What people see now is an app with products, a logo and a delivery fee. What they don&rsquo;t see is the version of me who built the whole platform from scratch. Self-taught, I might add, because I was in my first year and they don&rsquo;t teach website and app development in your first year of study. I spent so much time outside on the campus wifi, learning from YouTube tutorials and implementing them with my own twist. I didn&rsquo;t use AI for Munchify. It was simply me and my relentless willpower to do it right.
            </p>
            <p>
              We pushed through it all, and 26,000 orders later I have built the largest platform in the university, employing over 30 people. That number looks so clean in an article, but it was not clean to build.
            </p>

            <blockquote>&ldquo;Not an app. Just a &lsquo;what if&rsquo; that refused to stay a joke in a hostel room.&rdquo;</blockquote>

            <h3>The part nobody warns you about</h3>
            <p>
              Running a real company as a student is not the same as running a student project. The moment you get your first order and money begins moving through your accounts, the idea stops being just an idea and becomes something serious that needs a system to work.
            </p>
            <p>
              I have been burned and exhausted in ways I never thought possible, and it taught me something no business class could: financial discipline isn&rsquo;t a nice-to-have when you&rsquo;re running a company, it&rsquo;s the whole game. Since then, building proper systems for how money flows, who touches what and how staff get paid has become as much a part of my job as writing code ever was.
            </p>

            <h3>Choosing focus over speed</h3>
            <p>
              For a while, when Munchify was at its peak, I was tempted to chase expansion: Kisumu, Kakamega, Eldoret, the dream of Munchify beyond Maseno&rsquo;s gates. That dream hasn&rsquo;t died, but I chose to first build discipline and structure deep into the Munchify system, so that it can operate even in my absence. Growth that isn&rsquo;t built on discipline and structure is just a bigger way to fail. I&rsquo;d rather build Munchify in Maseno and be 100% sure it works before I try to build it everywhere. Kakamega opens in January 2027 and Kisumu Central in June 2027.
            </p>

            <h2>What Munchify delivers</h2>
            <ul>
              {offers.map(([name, text]) => (
                <li key={name}>
                  <strong>{name}.</strong> {text}
                </li>
              ))}
            </ul>

            <h2>How ordering works</h2>
            <p>
              Pick what you want from local kitchens, supermarkets and pharmacies in one simple menu. Pay securely from your phone, including with M-Pesa, and get instant confirmation. Your order is prepared fresh and a rider brings it to your hostel door, campus hall or residence in 20 to 30 minutes.
            </p>
            <p>
              The Munchify Android app adds live rider GPS tracking, one-tap checkout and campus deals and offers, and it is under 25 MB. You can also order over WhatsApp.
            </p>

            <h2>Where Munchify delivers</h2>
            <p>
              Munchify covers Maseno Main Campus, Siriba Campus and hostels, College Campus halls, Mabungo and Luanda. New hubs open in Kakamega on 20 January 2027 and Kisumu Central on 1 June 2027.
            </p>

            <h2>For kitchens, stores and riders</h2>
            <p>
              More than 50 local kitchens and stores sell through Munchify. If you run a kitchen or shop, you can register your store on <a href={company.url} target="_blank" rel="noopener noreferrer">munchify.co.ke</a>. If you have a motorbike or bicycle, you can apply to ride with flexible hours, high student order volume and weekly payouts.
            </p>

            <h2>Why I tell this story</h2>
            <p>
              Somewhere on a campus right now, someone is having the exact conversation I had with George in that hostel room: a small, annoying problem, and a &ldquo;what if&rdquo; nobody has taken seriously yet. I didn&rsquo;t have a business plan, capital or a mentor holding my hand. I had a broken Glovo screen, a laptop, free campus wifi and enough stubbornness to sit with YouTube tutorials until the code did what I needed it to do.
            </p>
            <p>
              Munchify is not finished. It&rsquo;s not perfect, and some weeks it still humbles me. But it exists because a &ldquo;what if&rdquo; got taken seriously instead of forgotten by the next morning. Your idea doesn&rsquo;t need permission, a plan or the right background. It just needs you to actually start, and then to keep showing up long after the excitement of day one has worn off.
            </p>
            <p>
              <strong>Emmanuel Charles</strong>, founder of Munchify. Read more <Link href="/about">about me</Link>.
            </p>
          </article>

          <aside className="relative lg:col-span-4 lg:sticky lg:top-8 self-start rounded-2xl border border-line p-7" data-spot aria-label="Munchify at a glance">
            <h2 className="font-semibold text-[1.0625rem]">Munchify at a glance</h2>
            <dl className="mt-5 space-y-4 text-[1rem]">
              <div>
                <dt className="text-dim text-[0.875rem]">What it is</dt>
                <dd>Food, grocery and pharmacy delivery</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Where</dt>
                <dd>Maseno, Kenya</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Founder</dt>
                <dd>Emmanuel Charles (Manuu)</dd>
              </div>
              <div>
                <dt className="text-dim text-[0.875rem]">Next hubs</dt>
                <dd>Kakamega (Jan 2027), Kisumu Central (Jun 2027)</dd>
              </div>
            </dl>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center min-h-[52px] rounded-full bg-fg text-night font-semibold no-underline hover:bg-white transition-colors"
            >
              Visit munchify.co.ke
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </aside>
        </div>

        <Faq items={faqs} />
        <RelatedLinks current="munchify" />
      </div>
    </PageShell>
  )
}
