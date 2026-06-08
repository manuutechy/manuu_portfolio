'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const services = [
  {
    num: '01',
    name: 'Web Design & Development',
    description: 'High-performance marketing sites, luxury portfolio storefronts, and landing pages optimized for trust, speed, and conversion.',
    specs: ['Next.js / React', 'SEO Optimization', 'Custom CMS Integration', 'Analytics & Tracking'],
  },
  {
    num: '02',
    name: 'Custom Software Systems',
    description: 'Fullstack operational applications, dashboards, and internal databases designed to streamline how your business actually works.',
    specs: ['Node.js / Laravel', 'Database Design (Postgres/MySQL)', 'User Roles & Permissions', 'Bespoke Workflows'],
  },
  {
    num: '03',
    name: 'Mobile Application Development',
    description: 'Cross-platform mobile apps engineered using Flutter to deliver native performance and seamless user experiences on iOS and Android.',
    specs: ['Flutter & Dart', 'App Store Publishing', 'Offline Support', 'Real-time sync'],
  },
  {
    num: '04',
    name: 'System Architecture & Scaling',
    description: 'Designing infrastructure capable of handling high concurrent traffic. Scaling APIs, load balancing, and database optimization.',
    specs: ['Docker & Linux VPS', 'API Performance Tuning', 'DevOps Automations', 'Cloud Monitors'],
  },
  {
    num: '05',
    name: 'AI Integration & Automation',
    description: 'Integrating intelligent features (LLM APIs, custom agents, vector search, RAG) directly into your production products to automate labor.',
    specs: ['OpenAI / Gemini APIs', 'Custom AI Agents', 'Workflow Automations', 'Semantic Search Systems'],
  },
]

const pricingTiers = [
  {
    tier: 'Starter & Business Sites',
    desc: 'Perfect for businesses, startups, and professionals looking to launch a high-end web presence.',
    focus: 'Speed, storytelling, and high conversions.',
    deliverables: ['Custom UI/UX layout', 'SEO & Analytics built-in', 'Contact & Lead Capture Form', 'Fully responsive code'],
    price: 'Custom Spec'
  },
  {
    tier: 'SaaS & Custom Applications',
    desc: 'For product founders and businesses looking to build platforms with user logins, custom workflows, or complex logic.',
    focus: 'Scale, database architecture, and security.',
    deliverables: ['User authentication systems', 'Interactive dashboard interfaces', 'Stripe/MPesa checkout setups', 'Custom database configurations'],
    price: 'Custom Spec'
  },
  {
    tier: 'Enterprise Systems & AI Solutions',
    desc: 'For organizations seeking robust backend logistics, high-volume APIs, or custom AI agent automations.',
    focus: 'High performance, data automation, and custom tooling.',
    deliverables: ['LLM agent integration', 'Bespoke CRM/ERP panels', 'Microservices setup', 'Dedicated deployment configurations'],
    price: 'Custom Spec'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg-primary pt-[120px] pb-section-y">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-[800px] mb-[72px]">
            <motion.p
              className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
              {...fadeUp}
            >
              My Services
            </motion.p>
            <motion.h1
              className="font-display font-bold text-h1-mobile lg:text-h1 text-text-primary tracking-[-0.03em] mb-[24px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              Engineered solutions.<br />
              Tailored for <span className="text-accent">growth.</span>
            </motion.h1>
            <motion.p
              className="font-body text-body-large text-text-secondary max-w-[560px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              Whether you are launching a startup, scaling a brand, or automating manual labor, I construct systems that solve business problems.
            </motion.p>
          </div>

          {/* Services Rows */}
          <div className="border-t border-border mb-[120px]">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                className="group border-b border-border py-[40px]"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
              >
                <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[48px]">
                  
                  {/* Number & Name */}
                  <div className="lg:w-[320px] flex-shrink-0">
                    <span className="block font-mono text-accent text-mono-size mb-[12px]">{service.num}</span>
                    <h3 className="font-display font-bold text-[22px] lg:text-[26px] text-text-primary">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-grow">
                    <p className="font-body text-text-secondary text-[16px] leading-[1.7] mb-[20px] max-w-[620px]">
                      {service.description}
                    </p>
                    {/* Spec tags */}
                    <div className="flex flex-wrap gap-[8px]">
                      {service.specs.map((spec) => (
                        <span
                          key={spec}
                          className="font-mono text-[12px] text-text-secondary bg-bg-secondary px-[10px] py-[4px] rounded-pill border border-border"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="bg-bg-secondary border border-border rounded-[24px] p-[32px] lg:p-[64px] mb-[40px]">
            <div className="max-w-[700px] mb-[48px]">
              <span className="font-mono text-[12px] uppercase text-accent tracking-[0.08em] block mb-[16px]">
                Pricing Philosophy
              </span>
              <h2 className="font-display font-bold text-[32px] lg:text-[40px] text-text-primary tracking-[-0.02em] mb-[16px]">
                Every website is built differently. <br />
                Pay only for <span className="text-accent">what you need.</span>
              </h2>
              <p className="font-body text-[16px] text-text-secondary leading-[1.7]">
                I do not sell flat-rate packages or generic templates. Every business has unique requirements, integration targets, and performance goals. I quote every project based on a comprehensive technical specification so that you pay strictly for the value delivered.
              </p>
            </div>

            {/* Custom pricing tiers display */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[48px]">
              {pricingTiers.map((tier) => (
                <div key={tier.tier} className="bg-bg-primary border border-border rounded-[16px] p-[32px] flex flex-col">
                  <h4 className="font-display font-bold text-[20px] text-text-primary mb-[12px]">
                    {tier.tier}
                  </h4>
                  <p className="font-body text-[14px] text-text-secondary leading-[1.6] mb-[20px] flex-grow">
                    {tier.desc}
                  </p>
                  
                  <div className="border-t border-border pt-[20px] mb-[20px]">
                    <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent mb-[12px]">What is custom-scoped:</p>
                    <ul className="list-none p-0 flex flex-col gap-[8px]">
                      {tier.deliverables.map((item) => (
                        <li key={item} className="font-body text-[13px] text-text-secondary flex items-start gap-[8px]">
                          <span className="text-accent text-[12px]">&bull;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-bg-secondary p-[16px] rounded-[8px] border border-border text-center">
                    <span className="block font-mono text-[11px] text-text-secondary uppercase tracking-[0.08em]">PRICING STRUCTURE</span>
                    <span className="font-display font-bold text-[20px] text-text-primary mt-[4px] block">{tier.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Action */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[24px] border-t border-border pt-[40px]">
              <div>
                <h3 className="font-display font-bold text-[22px] text-text-primary">Ready to map out your specifications?</h3>
                <p className="font-body text-[15px] text-text-secondary mt-[4px]">
                  Let&apos;s schedule a call to translate your business ideas into scoping parameters.
                </p>
              </div>
              <div className="flex items-center gap-[16px] w-full lg:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-body font-medium text-[16px] px-[28px] py-[14px] rounded-pill transition-colors duration-200 no-underline text-center w-full lg:w-auto"
                >
                  Request a Custom Quote
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
