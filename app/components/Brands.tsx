'use client'

import { motion } from 'framer-motion'

interface Brand {
  name: string
  industry: string
}

const brands: Brand[] = [
  { name: 'Munchify', industry: 'Food & Logistics' },
  { name: 'IkoProperty', industry: 'Real Estate' },
  { name: 'Belloria Beauty', industry: 'E-commerce' },
  { name: 'Plott Wear', industry: 'Fashion Retail' },
  { name: 'Avara Homes', industry: 'Real Estate' },
  { name: 'Mama\'s Kitchen', industry: 'Hospitality' },
  { name: 'FastBoda', industry: 'Mobility' },
  { name: 'Savannah Logistics', industry: 'Supply Chain' },
  { name: 'Kisumu Creatives', industry: 'Media & Arts' },
  { name: 'Accra Eats', industry: 'Marketplace' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Brands() {
  return (
    <section
      id="brands-trusted"
      className="bg-bg-secondary py-section-y-mobile lg:py-section-y border-t border-b border-border/40 relative overflow-hidden"
      aria-label="Brands trusted my work"
    >
      {/* Decorative gradient blur background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-[48px] text-center lg:text-left">
          <motion.p
            className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px] block"
            {...fadeUp}
          >
            Partnerships
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[16px] tracking-[-0.025em]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            Brands that trusted my work.
          </motion.h2>
          <motion.p
            className="font-dm font-normal text-[17px] text-text-secondary max-w-[560px] mx-auto lg:mx-0"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            A sample of active platforms, logistics dashboards, and high-performance storefronts running on custom code.
          </motion.p>
        </div>

        {/* Brand Capsules Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px]">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              className="bg-white/40 border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[12px] rounded-[16px] p-[20px] flex flex-col justify-center items-center text-center relative group hover:scale-[1.03] hover:border-accent/30 hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(255,92,0,0.04)] transition-all duration-300 ease-out cursor-default"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 * i }}
            >
              {/* Refraction edge line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              
              <div className="flex items-center gap-[6px] mb-[4px]">
                <span className="w-[6px] h-[6px] rounded-full bg-accent opacity-75 group-hover:scale-[1.3] transition-transform duration-300" />
                <span className="font-display font-bold text-[17px] text-text-primary tracking-tight">
                  {brand.name}
                </span>
              </div>
              
              <span className="font-body text-[11px] text-text-secondary uppercase tracking-[0.04em] font-medium opacity-85">
                {brand.industry}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
