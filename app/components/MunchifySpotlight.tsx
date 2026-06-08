'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function MunchifySpotlight() {
  return (
    <section
      id="munchify-spotlight"
      className="bg-[#0A0A0A] text-white py-section-y-mobile lg:py-section-y border-t border-b border-neutral-900 relative overflow-hidden"
      aria-label="Founder Experience Spotlight"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[48px] items-center">
          
          {/* Left Column: Story & Metrics */}
          <motion.div
            className="flex flex-col items-start"
            {...fadeUp}
          >
            <span className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px] block">
              Project 01 — Founder Experience
            </span>
            <h2 className="font-display font-bold text-[32px] lg:text-[40px] text-white mb-[20px] tracking-[-0.02em] leading-tight">
              Creator &amp; Founder of Munchify
            </h2>
            <p className="font-dm font-normal text-[16px] text-neutral-300 leading-[1.8] mb-[32px]">
              I am the founder of Munchify — a platform that grew from 10 orders a day to over 20,000 orders and thousands of customers every single week. I deeply understand the importance of an online presence, and I have the skill to ensure you get a system that is better and tailored to your exact needs.
            </p>

            {/* Metrics cards row */}
            <div className="grid grid-cols-2 gap-[16px] w-full">
              <div className="bg-neutral-950 border border-neutral-800 p-[20px] rounded-[12px] flex flex-col justify-center">
                <span className="font-sora font-bold text-[28px] lg:text-[32px] text-accent leading-none">
                  20,000+
                </span>
                <span className="font-dm font-normal text-[13px] text-neutral-400 mt-[8px]">
                  Weekly scale orders
                </span>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 p-[20px] rounded-[12px] flex flex-col justify-center">
                <span className="font-sora font-bold text-[28px] lg:text-[32px] text-white leading-none">
                  10 &rarr; 20k
                </span>
                <span className="font-dm font-normal text-[13px] text-neutral-400 mt-[8px]">
                  Order volume growth
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Mockup Graphic */}
          <motion.div
            className="w-full relative"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            {/* Browser frame card mockup */}
            <div className="relative border border-neutral-800 rounded-[12px] overflow-hidden bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Browser window top bar */}
              <div className="bg-neutral-900 border-b border-neutral-800 px-[16px] py-[10px] flex items-center gap-[6px]">
                <span className="w-[8px] h-[8px] rounded-full bg-neutral-700" />
                <span className="w-[8px] h-[8px] rounded-full bg-neutral-700" />
                <span className="w-[8px] h-[8px] rounded-full bg-neutral-700" />
              </div>
              {/* Image body */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/project-munchify.png"
                  alt="Munchify E-commerce & Delivery platform screenshot"
                  width={600}
                  height={375}
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500 ease-out"
                  priority
                />
              </div>
            </div>

            {/* Glowing background aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[rgba(255,92,0,0.03)] blur-[80px] rounded-full -z-10 select-none pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
