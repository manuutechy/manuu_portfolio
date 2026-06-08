'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface PricingPlan {
  name: string
  descriptor: string
  price: string
  features: string[]
  buttonText: string
  isPopular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Bronze',
    descriptor: 'For new businesses going online',
    price: '20,000',
    features: [
      '5-page responsive website',
      'Basic on-page SEO',
      'Contact form integration',
      'Mobile-friendly design',
      '1 round of revisions',
      '1 month of maintenance',
      'Basic analytics setup',
      'Social media integration'
    ],
    buttonText: 'Choose Bronze'
  },
  {
    name: 'Silver',
    descriptor: 'For growing brands ready to scale',
    price: '55,000',
    features: [
      '10-page responsive website',
      'Advanced on-page SEO',
      'Custom contact forms',
      'Mobile-first design',
      '3 rounds of revisions',
      '2 months of maintenance',
      'Advanced analytics and reporting',
      'Basic e-commerce functionality',
      'Content management system',
      'Performance optimisation'
    ],
    buttonText: 'Choose Silver',
    isPopular: true
  },
  {
    name: 'Gold',
    descriptor: 'For established brands going all in',
    price: '99,000',
    features: [
      'Up to 20-page website',
      'On-page and off-page SEO',
      'Google Maps integration',
      '5 rounds of revisions',
      '3 months of maintenance',
      'Complete analytics suite',
      'Full social media integration',
      'Custom CMS development',
      'AI chatbot integration',
      'Priority support'
    ],
    buttonText: 'Choose Gold'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#050505] text-white py-section-y-mobile lg:py-section-y relative overflow-hidden"
      aria-label="Pricing Packages"
    >
      {/* Decorative gold ambient blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-[64px] text-center lg:text-left">
          <motion.p
            className="font-mono text-small-label text-[#D4AF37] uppercase tracking-[0.08em] mb-[16px] block font-semibold"
            {...fadeUp}
          >
            2026 Pricing
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2-mobile lg:text-h2 text-white mb-[16px] tracking-[-0.025em]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            Transparent pricing. No surprises.
          </motion.h2>
          <motion.p
            className="font-dm font-normal text-[18px] text-neutral-400 max-w-[620px] mx-auto lg:mx-0"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            Three website packages built for Kenyan businesses — from a focused starter site to a fully custom platform with AI integration. All prices in Kenyan Shillings. Every project starts from KES 20,000.
          </motion.p>
        </div>

        {/* Pricing Note Bar */}
        <motion.div
          className="bg-[rgba(214,175,55,0.06)] border border-[rgba(214,175,55,0.22)] rounded-[12px] px-[24px] py-[16px] mb-[48px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.25 }}
        >
          <p className="font-dm font-semibold text-[15px] text-[#E6C657] m-0 text-center lg:text-left">
            Starting from KES 20,000 — every business deserves a professional, high-performance online presence.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] mb-[48px]">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`bg-[#0D0D0D] border rounded-[20px] p-[40px] px-[36px] flex flex-col relative transition-all duration-300 hover:-translate-y-2 will-change-transform ${
                plan.isPopular
                  ? 'border-[#D4AF37] shadow-[0_12px_48px_rgba(214,175,55,0.06)] z-10'
                  : 'border-neutral-800 hover:border-neutral-700 shadow-[0_12px_40px_rgba(0,0,0,0.2)]'
              }`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
            >
              {/* Gold Top Light-Reflection Edge */}
              <div className={`absolute top-0 left-0 right-0 h-[1.5px] rounded-t-[20px] bg-gradient-to-r from-transparent ${
                plan.isPopular ? 'via-[#D4AF37]/50' : 'via-white/10'
              } to-transparent`} />

              {plan.isPopular && (
                <span className="absolute top-[-14px] left-1/2 translate-x-[-50%] bg-[#D4AF37] text-[#050505] font-dm font-bold text-[11px] uppercase tracking-[0.1em] px-[18px] py-[6px] rounded-pill whitespace-nowrap shadow-sm">
                  Most Popular
                </span>
              )}

              {/* Plan Name */}
              <h3 className="font-sora font-bold text-[24px] text-white mb-[8px]">
                {plan.name}
              </h3>

              {/* Descriptor */}
              <p className="font-dm font-normal text-[14px] text-neutral-400 mb-[28px]">
                {plan.descriptor}
              </p>

              {/* Price Block */}
              <div className="mb-[32px]">
                <div className="flex items-baseline gap-[6px]">
                  <span className="font-dm font-medium text-[16px] text-neutral-500 align-top self-start mt-[8px]">
                    KES
                  </span>
                  <span className={`font-sora font-bold text-[54px] leading-none ${
                    plan.isPopular ? 'text-[#E6C657]' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                </div>
                <p className="font-dm font-normal text-[13px] text-neutral-500 mt-[8px] mb-0">
                  one-time project fee
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-neutral-800 mb-[28px]" />

              {/* Features List */}
              <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-[12px] items-start">
                    <span className="font-dm font-bold text-[14px] text-[#D4AF37] flex-shrink-0 mt-[2px]">
                      ✓
                    </span>
                    <span className="font-dm font-normal text-[14.5px] text-neutral-300 leading-[1.6]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="#contact"
                className={`w-full text-center py-[16px] rounded-[10px] font-dm font-bold text-[15px] transition-all duration-200 mt-auto pt-[16px] block no-underline ${
                  plan.isPopular
                    ? 'bg-[#D4AF37] hover:bg-[#C5A028] text-[#050505] shadow-[0_4px_20px_rgba(214,175,55,0.15)]'
                    : 'bg-transparent text-white border-[1.5px] border-neutral-800 hover:border-[#D4AF37] hover:text-[#050505] hover:bg-[#D4AF37]'
                }`}
                style={{ marginTop: '40px' }}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote Bar */}
        <motion.div
          className="bg-[#0D0D0D] border border-neutral-800 hover:border-neutral-700 rounded-[16px] p-[28px] lg:px-[40px] lg:py-[32px] transition-colors duration-300"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.4 }}
        >
          {/* Inner edge shine */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-[24px]">
            <div>
              <h4 className="font-sora font-semibold text-[18px] text-white mb-[4px] m-0">
                Need something different?
              </h4>
              <p className="font-dm font-normal text-[15px] text-neutral-400 m-0">
                Ask for a custom quote — or browse SEO retainers from KES 35,000/month.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-transparent text-white font-dm font-bold text-[15px] px-[28px] py-[14px] rounded-[10px] border-[1.5px] border-neutral-800 hover:bg-[#D4AF37] hover:text-[#050505] hover:border-[#D4AF37] transition-all duration-200 no-underline whitespace-nowrap w-full lg:w-auto"
            >
              Request Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
