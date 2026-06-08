'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Monitor, Server, Smartphone, GitBranch, Cpu } from 'lucide-react'

interface Service {
  number: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const services: Service[] = [
  {
    number: '01',
    name: 'Web Design and Development',
    description: 'Modern websites built for performance, trust, and measurable conversion.',
    icon: Monitor,
  },
  {
    number: '02',
    name: 'Custom Software Systems',
    description: 'Scalable platforms engineered around how your business actually operates.',
    icon: Server,
  },
  {
    number: '03',
    name: 'Mobile Application Development',
    description: 'Cross-platform apps built with Flutter, designed to ship, perform, and scale.',
    icon: Smartphone,
  },
  {
    number: '04',
    name: 'System Architecture',
    description: 'The infrastructure and design decisions that determine whether your product survives growth.',
    icon: GitBranch,
  },
  {
    number: '05',
    name: 'AI Integration',
    description: 'Intelligent features and automation built into production products, not demos.',
    icon: Cpu,
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Services() {
  return (
    <section
      id="services"
      className="bg-bg-primary py-section-y-mobile lg:py-section-y"
      aria-label="Services offered"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-[56px]">
          <motion.p
            className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
            {...fadeUp}
          >
            Services
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            What I build.
          </motion.h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {services.map((service, i) => {
            const IconComponent = service.icon

            return (
              <motion.div
                key={service.number}
                className="bg-white border border-border rounded-[16px] p-[40px] px-[36px] shadow-card transition-all duration-[250ms] ease-out hover:border-accent hover:-translate-y-[4px] hover:shadow-[0_8px_32px_rgba(255,92,0,0.08)]"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
              >
                <div>
                  {/* Service Number */}
                  <span className="block font-mono font-normal text-[12px] text-accent uppercase tracking-[0.1em] mb-[24px]">
                    {service.number}
                  </span>

                  {/* Icon Area */}
                  <div className="w-[48px] h-[48px] bg-[rgba(255,92,0,0.08)] rounded-[12px] flex items-center justify-center">
                    <IconComponent className="w-[24px] h-[24px] text-accent" />
                  </div>

                  {/* Service Name */}
                  <h3 className="font-sora font-bold text-[20px] text-text-primary mt-[20px] mb-[12px]">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="font-dm font-normal text-[15px] text-text-secondary leading-[1.7]">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    href="/services"
                    className="font-dm font-medium text-[14px] text-accent mt-[28px] inline-block hover:underline no-underline"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Footer Teaser */}
        <motion.div
          className="text-center mt-[56px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-[8px] bg-accent hover:bg-accent-hover text-white font-body font-semibold text-[16px] px-[36px] py-[16px] rounded-pill transition-colors duration-200 no-underline"
          >
            View Services &amp; Pricing Specs
            <span>&rarr;</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
