import type { Metadata } from 'next'
import Link from 'next/link'
import CompanyLogo from '../components/CompanyLogo'
import Faq from '../components/Faq'
import JsonLd from '../components/JsonLd'
import PageHeader from '../components/PageHeader'
import PageShell from '../components/PageShell'
import { companies } from '../lib/companies'
import { breadcrumbSchema, faqSchema, pageMetadata, personSchema } from '../lib/seo'
import { person } from '../lib/site'

export const metadata: Metadata = pageMetadata({
  title: 'About Emmanuel Charles (Manuu) | Kenyan Founder and Engineer',
  description:
    'Emmanuel Charles, known as Manuu, is a Kenyan founder and software engineer. He built Munchify from a hostel room, runs Cyzora and Zyra Net, and chairs GDG on Campus Maseno.',
  path: '/about',
})

const faqs = [
  {
    q: 'Who is Emmanuel Charles?',
    a: 'Emmanuel Charles is a Kenyan founder and software engineer and a BSc IT student. He founded Munchify, Cyzora and Zyra Net, and he chairs GDG on Campus Maseno.',
  },
  {
    q: 'What does “Manuu” mean?',
    a: 'Manuu is the name Emmanuel Charles goes by online. His handle is @manuutech, and his code is on GitHub as manuutechy.',
  },
  {
    q: 'Which companies has Emmanuel Charles founded?',
    a: 'He founded Munchify, a delivery platform in Maseno with more than 26,000 orders and over 30 people employed; Cyzora, an M-Pesa payments platform used by more than 500 Kenyan businesses; and Zyra Net, an internet service provider in Kisumu with more than 2,500 subscribers.',
  },
  {
    q: 'Where is Emmanuel Charles based?',
    a: 'He is based in Kenya. Munchify operates in Maseno and Zyra Net in Kisumu.',
  },
  {
    q: 'What does Emmanuel Charles lead on campus?',
    a: 'He chairs GDG on Campus Maseno, the student developer community at Maseno University, where he recruits students into tech and builds the community.',
  },
  {
    q: 'How can I contact Emmanuel Charles?',
    a: 'Email him at hi@manuutech.com, or find him on GitHub as manuutechy. He reads every message himself.',
  },
]

const glance = [
  ['Known as', 'Manuu'],
  ['Based in', 'Kenya'],
  ['Studying', 'BSc IT'],
  ['Chair', 'GDG on Campus Maseno'],
  ['Founder of', 'Munchify, Cyzora, Zyra Net'],
]

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHeader
        trail="About"
        title="Emmanuel Charles, known as Manuu."
        lead="I am a Kenyan founder and software engineer, and a BSc IT student. I run Munchify, Cyzora and Zyra Net, and I chair GDG on Campus Maseno."
      />

      <div className="max-w-content mx-auto px-6 lg:px-8 pb-24 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-x-16 gap-y-12">
          <article className="prose-story min-w-0 lg:col-span-8" aria-label="My story">
            <h2>Built differently</h2>
            <p>
              I grew up in a home with a clear plan for me: go to school, work hard, get good grades, get a job. It made sense to my parents, and for a long time it felt like the only road. But I wanted to build things, and that gap between the plan I was handed and the thing I felt pulled toward is where everything I have made comes from.
            </p>

            <h2>Self-taught, in a hostel</h2>
            <p>
              Nobody teaches website and app development in the first year of a degree, so I taught myself. I learned from YouTube tutorials on free campus wifi, made every idea my own, and wrote <Link href="/munchify">Munchify</Link> without AI. It began with one small, annoying problem: a friend could not order food. I have told that story in full on the Munchify page, and it is the honest start of everything else.
            </p>

            <h2>What I run</h2>
            <p>Three companies, each live and serving real customers.</p>
            <ul>
              <li>
                <strong>
                  <Link href="/munchify">Munchify</Link>
                </strong>{' '}
                is a food, grocery and pharmacy delivery platform in Maseno. It has delivered more than 26,000 orders and employs over 30 people.
              </li>
              <li>
                <strong>
                  <Link href="/cyzora">Cyzora</Link>
                </strong>{' '}
                is an M-Pesa payments platform. More than 500 Kenyan businesses use it to get paid instantly.
              </li>
              <li>
                <strong>
                  <Link href="/zyranet">Zyra Net</Link>
                </strong>{' '}
                is an internet service provider in Kisumu, with more than 2,500 active subscribers.
              </li>
            </ul>

            <h2>What running them has taught me</h2>
            <p>
              A company is not a bigger version of a project. The moment real money moves, you need systems: who touches what, how it is tracked, how people get paid. Financial discipline is not optional, it is the whole game, and building those systems has become as much of my job as writing code.
            </p>
            <p>
              I have also learned to choose focus over speed. I could have chased expansion sooner. I would rather make a company work deeply in one place, so that it runs without me, before I try to build it everywhere.
            </p>

            <h2>Beyond my own companies</h2>
            <p>
              I chair GDG on Campus Maseno. By night I might be fixing a payment bug; by day I am recruiting students into tech, building the community and planning events. I do it because I want other students to see, in a real example, that the distance between a student with an idea and a founder with a company is shorter than it looks.
            </p>

            <h2>Why I share this</h2>
            <p>
              I did not start with a plan, capital or a mentor. I started with a laptop, free wifi and enough stubbornness to keep going until the code worked. If you have an idea nobody has taken seriously yet, it does not need permission or the right background. It needs you to start, and to keep showing up after the excitement wears off.
            </p>

            <h2>Get in touch</h2>
            <p>
              If you want to invest, partner, write about this work or hire me, email <a href={`mailto:${person.email}`}>{person.email}</a> or find me on <a href={person.github} target="_blank" rel="noopener noreferrer">GitHub</a>. I read every message myself.
            </p>
          </article>

          <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start rounded-2xl border border-line p-7" aria-label="Emmanuel Charles at a glance">
            <h2 className="font-semibold text-[1.0625rem]">At a glance</h2>
            <dl className="mt-5 space-y-4 text-[1rem]">
              {glance.map(([term, value]) => (
                <div key={term}>
                  <dt className="text-dim text-[0.875rem]">{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-7 space-y-3 list-none">
              {companies.map((company) => (
                <li key={company.id}>
                  <Link
                    href={company.path}
                    className="flex h-[64px] items-center justify-center rounded-xl bg-[oklch(0.97_0_0)] no-underline"
                    aria-label={`${company.name}: ${company.caption}`}
                  >
                    <CompanyLogo id={company.id} decorative />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <Faq items={faqs} heading="Questions about Emmanuel Charles" />
      </div>
    </PageShell>
  )
}
