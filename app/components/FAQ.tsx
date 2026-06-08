'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  q: string
  a: string
}

const faqs: FAQItem[] = [
  {
    q: "How much does a website cost?",
    a: "Every project is different, but our packages start from KES 20,000 for a clean, professional 5-page website. Larger systems and custom platforms are quoted based on scope. You always receive a fixed price before work begins — no hidden fees, no billing surprises."
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard 5–10 page website typically takes 2–4 weeks. Larger platforms, e-commerce systems, and custom software take longer depending on complexity. You will receive a clear timeline in your proposal before we start."
  },
  {
    q: "Do you work with businesses outside Kenya?",
    a: "Yes. While we are based in Kenya and deeply understand the local market, we work with clients across Africa and internationally. All project communication works remotely with no issues."
  },
  {
    q: "Do I need to know anything about tech to work with you?",
    a: "Not at all. We handle everything technical and explain what matters in plain language. Our job is to make this easy for you, not to overwhelm you with jargon."
  },
  {
    q: "Will I be able to update my website myself after launch?",
    a: "Yes. Every website we build on a CMS includes a full handover walkthrough so you can update content, add pages, and manage your site without needing a developer for routine changes."
  },
  {
    q: "What do I need to provide to get started?",
    a: "To start, we need your brand assets (logo, colours if you have them), any existing content (text, photos), and a clear brief on what you need the website to do. If you are starting from scratch, we can help you define all of this."
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. For larger projects we typically work on a 50% deposit before design begins and 50% on delivery. For smaller packages we can discuss a split that works for your cash flow. We are practical about this."
  },
  {
    q: "What happens after the website launches?",
    a: "Every package includes a maintenance period where we handle any bugs, small changes, and technical issues at no extra cost. After that period, ongoing maintenance and support is available as a monthly retainer."
  },
  {
    q: "Do you do SEO?",
    a: "Yes. All our websites are built with on-page SEO as standard — proper headings, meta tags, fast load speeds, and mobile optimisation. Advanced SEO retainers including content strategy and off-page work are available from KES 35,000 per month."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Redesigns follow the same process as new builds — we start with design approval so you see the new look before we touch your live site."
  },
  {
    q: "Do you build mobile apps as well as websites?",
    a: "Yes. We build cross-platform mobile applications using Flutter, which means your app runs on both Android and iOS from a single codebase. App projects are quoted separately based on the features required."
  },
  {
    q: "What is the AI chatbot integration in the Gold package?",
    a: "We integrate a custom-trained AI assistant into your website that can answer customer questions, qualify leads, and handle common enquiries automatically — 24 hours a day. It is trained on your specific business information."
  },
  {
    q: "How do I know I can trust you with my project?",
    a: "We have 20+ verified client reviews, a 4.9 star average rating, and a portfolio of real products that are live and in use. Every project includes a written proposal with clear deliverables so you always have something to hold us to."
  },
  {
    q: "Do you sign NDAs or contracts?",
    a: "Yes. We sign a project agreement before work begins that covers scope, timeline, deliverables, and intellectual property. You own everything we build for you."
  },
  {
    q: "How do I get started?",
    a: "Fill in the contact form below or send a WhatsApp message directly. We typically respond within 24 hours and will schedule a free 30-minute discovery call to understand your project before sending a proposal."
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="bg-bg-primary py-section-y-mobile lg:py-section-y"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-[64px] text-center lg:text-left">
          <motion.p
            className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px] block"
            {...fadeUp}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[16px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            Questions we hear often.
          </motion.h2>
          <motion.p
            className="font-body text-body-large text-text-secondary max-w-[560px] mx-auto lg:mx-0"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Straight answers to the things people usually ask before getting in touch.
          </motion.p>
        </div>

        {/* Accordion Layout */}
        <div className="max-w-[760px] mx-auto w-full">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const isFirst = i === 0

            return (
              <motion.div
                key={faq.q}
                className={`py-[24px] ${
                  isFirst ? 'border-t border-b' : 'border-b'
                } border-border`}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.03 * (i % 5 + 1) }}
              >
                {/* Question Row */}
                <button
                  className="w-full flex justify-between items-center cursor-pointer border-none bg-transparent text-left p-0 outline-none group"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-sora font-semibold text-[18px] transition-colors duration-200 ${
                    isOpen ? 'text-accent' : 'text-text-primary'
                  } group-hover:text-accent`}>
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 ml-[16px]">
                    {isOpen ? (
                      <Minus className="w-[20px] h-[20px] text-accent transition-colors duration-200" />
                    ) : (
                      <Plus className="w-[20px] h-[20px] text-text-secondary transition-colors duration-200" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Wrapper */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-dm font-normal text-[16px] text-text-secondary leading-[1.8] pt-[12px] pb-[8px] m-0">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}

          {/* FAQ Footer CTA */}
          <motion.div
            className="mt-[48px] block"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <span className="font-sora font-semibold text-[18px] text-text-primary mr-[6px]">
              Still have a question?
            </span>
            <Link
              href="#contact"
              className="inline-block font-dm font-medium text-[16px] text-accent hover:underline no-underline"
            >
              Send us a message &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
