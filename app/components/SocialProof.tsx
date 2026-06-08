'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="bg-[#0A0A0A] border-t border-b border-neutral-900 py-[56px] text-white"
      aria-label="Client Trust Stats"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-row flex-wrap justify-center items-center gap-[32px] lg:gap-[64px]"
          {...fadeUp}
        >
          {/* Item 1: Overall Rating */}
          <div className="flex flex-col items-center text-center">
            <span className="font-sora font-bold text-[48px] text-white leading-none mb-[4px]">
              4.9
            </span>
            <div className="text-accent text-[20px] tracking-[2px] leading-none mb-[8px] select-none">
              ★★★★★
            </div>
            <span className="font-dm font-normal text-[13px] text-neutral-400">
              Average client rating
            </span>
          </div>

          {/* Divider 1 */}
          <div className="hidden lg:block w-[1px] h-[60px] bg-neutral-800 self-center" />

          {/* Item 2: Review Count */}
          <div className="flex flex-col items-center text-center">
            <span className="font-sora font-bold text-[48px] text-white leading-none mb-[10px]">
              20+
            </span>
            <span className="font-dm font-normal text-[13px] text-neutral-400 mt-[4px]">
              Verified reviews
            </span>
          </div>

          {/* Divider 2 */}
          <div className="hidden lg:block w-[1px] h-[60px] bg-neutral-800 self-center" />

          {/* Item 3: Trustpilot Badge */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#00B67A] px-[20px] py-[10px] rounded-[8px] flex flex-col items-center mb-[6px] shadow-sm">
              <span className="text-white text-[14px] leading-none select-none mb-[4px]">
                ★★★★★
              </span>
              <span className="font-dm font-bold text-[14px] text-white leading-none">
                Trustpilot
              </span>
            </div>
            <span className="font-dm font-normal text-[12px] text-neutral-400">
              Rated Excellent
            </span>
          </div>

          {/* Divider 3 */}
          <div className="hidden lg:block w-[1px] h-[60px] bg-neutral-800 self-center" />

          {/* Item 4: Google Reviews Badge */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#4285F4] px-[20px] py-[10px] rounded-[8px] flex items-center gap-[6px] mb-[12px] shadow-sm">
              <span className="font-sora font-bold text-[18px] text-white leading-none">
                G
              </span>
              <span className="font-dm font-bold text-[13px] text-white leading-none">
                Google Reviews
              </span>
            </div>
            <span className="font-dm font-normal text-[12px] text-neutral-400">
              5.0 on Google
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
