'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PenTool, Eye, RefreshCw, Users } from 'lucide-react'

interface ThoughtCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
}

const thoughts: ThoughtCard[] = [
  {
    icon: PenTool,
    title: 'Design comes first',
    body: 'We never start coding until you have approved the full visual design. What you approve is what gets built.'
  },
  {
    icon: Eye,
    title: 'You see it before it exists',
    body: 'Every layout, every colour, every button placement is presented to you as a high-fidelity mockup before development begins.'
  },
  {
    icon: RefreshCw,
    title: 'Revisions on design, not on code',
    body: 'It is far faster and cheaper to change a design than to rewrite built code. We get it right at the design stage so development is clean.'
  },
  {
    icon: Users,
    title: 'Collaborative by default',
    body: 'You are involved at every design decision. No disappearing for weeks and returning with something you did not ask for.'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function DesignThoughts() {
  return (
    <section
      id="design-thoughts"
      className="bg-bg-secondary py-section-y-mobile lg:py-section-y"
      aria-label="Design Philosophy"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-[64px]">
          <motion.p
            className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px] block"
            {...fadeUp}
          >
            Design Thoughts
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[16px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            We design before we build.
          </motion.h2>
          <motion.p
            className="font-dm font-normal text-[18px] text-text-secondary max-w-[560px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Every project starts with design — not code. Before a single line is written, you see exactly what you are getting. No guesswork, no surprises.
          </motion.p>
        </div>

        {/* Thought Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] mb-[64px]">
          {thoughts.map((thought, i) => {
            const IconComponent = thought.icon
            return (
              <motion.div
                key={thought.title}
                className="bg-bg-primary border border-border rounded-[16px] p-[36px] hover:border-accent transition-colors duration-250 ease-out flex flex-col items-start"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
              >
                {/* Icon Area */}
                <div className="w-[40px] h-[40px] bg-[rgba(255,92,0,0.08)] rounded-[10px] flex items-center justify-center mb-[20px] flex-shrink-0">
                  <IconComponent className="w-[20px] h-[20px] text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-sora font-semibold text-[18px] text-text-primary mb-[10px]">
                  {thought.title}
                </h3>

                {/* Body */}
                <p className="font-dm font-normal text-[15px] text-text-secondary leading-[1.75] m-0">
                  {thought.body}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Dark Callout Strip */}
        <motion.div
          className="bg-[#0A0A0A] rounded-[16px] p-[40px] lg:px-[48px] lg:py-[40px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-[24px]">
            <span className="font-sora font-bold text-[22px] text-white leading-normal max-w-[600px]">
              Every project includes a full design review before a single line of code is written.
            </span>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-dm font-semibold text-[15px] px-[28px] py-[14px] rounded-[8px] transition-colors duration-200 no-underline whitespace-nowrap w-full lg:w-auto"
            >
              Start With a Design
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
