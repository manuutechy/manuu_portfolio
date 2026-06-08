'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const disciplines = [
  'Software Engineering',
  'System Architecture',
  'Mobile Development',
  'AI Integration',
  'Web Design',
  'DevOps',
]

const industries = [
  'E-commerce',
  'Education Technology',
  'Real Estate',
  'Food Technology',
  'Financial Technology',
  'Startups',
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function About() {
  return (
    <section
      id="about"
      className="bg-bg-secondary py-section-y-mobile lg:py-section-y"
      aria-label="About Emmanuel Charles"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.p
          className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
          {...fadeUp}
        >
          About
        </motion.p>

        <motion.h2
          className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[48px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Engineer by craft.<br />Builder by instinct.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[48px] lg:gap-[80px] mb-[48px]">
          {/* Body copy */}
          <motion.div
            className="max-w-[760px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            <p className="font-body font-normal text-body-default-mobile lg:text-body-default text-text-secondary leading-[1.8] mb-[24px]">
              I am a software engineer and system architect based in Kenya, specializing in building high-performance systems that drive business growth. Every technical choice I make is driven by operational outcome, ensuring your product is stable, scalable, and built to last.
            </p>
            <div className="mt-[32px]">
              <Link
                href="/about"
                className="inline-flex items-center gap-[6px] font-body font-semibold text-[15px] text-accent hover:underline no-underline group/link"
              >
                Read My Full Story
                <span className="inline-block group-hover/link:translate-x-[4px] transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Pull-quote */}
          <motion.blockquote
            className="border-l-[3px] border-accent pl-[24px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <p className="font-display font-semibold text-[22px] leading-[1.4] text-text-primary">
              &ldquo;I don&rsquo;t just write code — I design the systems businesses are built on.&rdquo;
            </p>
          </motion.blockquote>
        </div>

        {/* Disciplines and Industries */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-0 border-t border-border pt-[48px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
        >
          <div className="lg:border-r lg:border-border lg:pr-[48px]">
            <p className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-text-secondary mb-[16px]">
              Disciplines
            </p>
            <ul className="list-none p-0">
              {disciplines.map((item) => (
                <li
                  key={item}
                  className="font-body font-normal text-[16px] text-text-primary leading-[2.2]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-[48px]">
            <p className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-text-secondary mb-[16px]">
              Industries
            </p>
            <ul className="list-none p-0">
              {industries.map((item) => (
                <li
                  key={item}
                  className="font-body font-normal text-[16px] text-text-primary leading-[2.2]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
