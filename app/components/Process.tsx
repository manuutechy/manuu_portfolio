'use client'

import { motion } from 'framer-motion'

interface Step {
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your business, users, and the real problem to solve.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Defining scope, architecture approach, and what success looks like.',
  },
  {
    number: '03',
    title: 'Planning',
    description: 'Detailed technical specification and project roadmap.',
  },
  {
    number: '04',
    title: 'Design',
    description: 'Interface and system design aligned to the product vision.',
  },
  {
    number: '05',
    title: 'Development',
    description: 'Clean, documented, production-grade code.',
  },
  {
    number: '06',
    title: 'Testing',
    description: 'End-to-end testing before anything ships.',
  },
  {
    number: '07',
    title: 'Deployment',
    description: 'Configured, monitored, and live.',
  },
  {
    number: '08',
    title: 'Support',
    description: 'Ongoing maintenance and iteration when needed.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Process() {
  return (
    <section
      id="process"
      className="bg-bg-secondary py-section-y-mobile lg:py-section-y"
      aria-label="Development process"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.p
          className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
          {...fadeUp}
        >
          How I Work
        </motion.p>

        <motion.h2
          className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[56px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Every project. The same discipline.
        </motion.h2>

        {/* Desktop: horizontal scrollable row */}
        <motion.div
          className="hidden lg:flex items-start gap-0 overflow-x-auto"
          style={{ scrollbarWidth: 'none' }}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-start flex-shrink-0">
              <div className="flex flex-col min-w-[160px]">
                <span className="font-mono font-normal text-[13px] text-accent uppercase tracking-[0.08em]">
                  {step.number}
                </span>
                <h3 className="font-display font-semibold text-[18px] text-text-primary mt-[16px]">
                  {step.title}
                </h3>
                <p className="font-body font-normal text-[14px] text-text-secondary leading-[1.65] mt-[8px] max-w-[160px]">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center self-start mt-[6px] px-[8px]">
                  <div className="w-[40px] h-[1px] bg-border" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
            >
              <span className="font-mono font-normal text-[13px] text-accent uppercase tracking-[0.08em]">
                {step.number}
              </span>
              <h3 className="font-display font-semibold text-[18px] text-text-primary mt-[16px]">
                {step.title}
              </h3>
              <p className="font-body font-normal text-[14px] text-text-secondary leading-[1.65] mt-[8px]">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="flex justify-start py-[16px]">
                  <div className="w-[1px] h-[40px] bg-border" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
