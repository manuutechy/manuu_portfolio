'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

interface Step {
  num: string
  title: string
  description: string
  time: string
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Discovery Call',
    description: 'We get on a call, understand your goals, your users, and what success looks like for your project.',
    time: '1–2 days'
  },
  {
    num: '02',
    title: 'Proposal and Quote',
    description: 'You receive a clear written proposal — scope, timeline, deliverables, and a fixed price. No surprises.',
    time: '1–2 days'
  },
  {
    num: '03',
    title: 'Kick-off and Planning',
    description: 'Once agreed, we map out the full project plan, define milestones, and align on tools and communication.',
    time: '2–3 days'
  },
  {
    num: '04',
    title: 'Design First',
    description: 'Before writing code we present the full visual design for your approval. You see exactly what you are getting.',
    time: '3–7 days'
  },
  {
    num: '05',
    title: 'Development',
    description: 'We build. You get regular progress updates. Nothing is a black box.',
    time: 'Varies by scope'
  },
  {
    num: '06',
    title: 'Review and Revisions',
    description: 'You review the build, request changes within the agreed revision rounds, and we refine until it is right.',
    time: '3–5 days'
  },
  {
    num: '07',
    title: 'Testing and QA',
    description: 'Every page, every form, every flow tested across devices and browsers before launch.',
    time: '2–3 days'
  },
  {
    num: '08',
    title: 'Launch and Handover',
    description: 'We deploy, hand over all credentials, and walk you through how to manage your new site.',
    time: '1 day'
  }
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export default function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Track scroll position within this section to draw the timeline path
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  })

  const lineScaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  })

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="bg-[#0A0A0A] text-white py-section-y-mobile lg:py-section-y relative overflow-hidden"
      aria-label="Development Process"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-[64px] text-center lg:text-left">
          <motion.p
            className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px] block"
            {...fadeUp}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="font-display font-bold text-h2-mobile lg:text-h2 text-white mb-[16px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            From first message to final launch.
          </motion.h2>
          <motion.p
            className="font-body text-body-large text-neutral-400 max-w-[560px] mx-auto lg:mx-0"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
          >
            A clear, collaborative process so you always know where your project stands.
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative mt-[56px] lg:mt-[80px]">
          
          {/* Background trace line */}
          <div className="absolute top-[20px] bottom-[20px] left-[20px] lg:left-1/2 w-[2px] bg-neutral-900 -translate-x-1/2" />
          
          {/* Animated active path line */}
          <motion.div
            className="absolute top-[20px] bottom-[20px] left-[20px] lg:left-1/2 w-[2px] bg-accent -translate-x-1/2 origin-top"
            style={{ scaleY: lineScaleY }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-[48px] lg:gap-[64px]">
            {steps.map((step, i) => {
              const isEven = i % 2 === 1

              return (
                <div
                  key={step.num}
                  className="grid grid-cols-[40px_1fr] lg:grid-cols-[1fr_80px_1fr] items-start relative"
                >
                  {/* Left Column (Desktop Step Info or Desktop Time Tag depending on alternating pattern) */}
                  <div className={`hidden lg:flex flex-col ${
                    isEven ? 'order-3 justify-start' : 'order-1 justify-end text-right'
                  }`}>
                    {!isEven && (
                      <motion.div
                        className="flex flex-col items-end"
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                      >
                        {/* Overlaid Step Label */}
                        <div className="relative h-[60px] flex items-center mb-[12px] justify-end w-full">
                          <span className="absolute right-0 font-mono font-bold text-[56px] text-neutral-900 select-none leading-none top-[-8px]">
                            {step.num}
                          </span>
                          <span className="relative z-10 font-mono font-semibold text-[13px] text-accent uppercase tracking-[0.1em]">
                            Step {step.num}
                          </span>
                        </div>
                        <h3 className="font-sora font-bold text-[24px] text-white mb-[10px]">
                          {step.title}
                        </h3>
                        <p className="font-dm font-normal text-[16px] text-neutral-400 leading-[1.75] max-w-[440px] ml-auto">
                          {step.description}
                        </p>
                      </motion.div>
                    )}

                    {isEven && (
                      <motion.div
                        className="flex justify-end w-full pt-[16px]"
                        {...fadeUp}
                        transition={{ ...fadeUp.transition, delay: 0.1 }}
                      >
                        <span className="inline-block bg-neutral-900 border border-neutral-800 font-dm font-medium text-[13px] text-neutral-400 px-[16px] py-[6px] rounded-pill">
                          {step.time}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Column: Node Dot circle on the line */}
                  <div className="flex items-center justify-center order-1 lg:order-2 h-[60px] w-full relative">
                    <motion.div
                      className="w-[16px] h-[16px] rounded-full bg-neutral-900 border-[3px] border-[#0A0A0A] z-10 flex-shrink-0"
                      whileInView={{
                        backgroundColor: 'var(--color-accent)',
                        borderColor: 'var(--color-accent)',
                        scale: 1.25,
                        boxShadow: '0 0 12px rgba(255, 92, 0, 0.4)'
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Right Column (Desktop Step Info for Even, Desktop Time Tag for Odd, or Mobile Full Block) */}
                  <div className="order-2 lg:order-3 flex flex-col pl-[16px] lg:pl-0">
                    
                    {/* Desktop Odd Row: Time Tag / Desktop Even Row: Step Info */}
                    <div className="hidden lg:flex flex-col">
                      {isEven && (
                        <motion.div
                          className="flex flex-col items-start"
                          {...fadeUp}
                          transition={{ ...fadeUp.transition, delay: 0.1 }}
                        >
                          {/* Overlaid Step Label */}
                          <div className="relative h-[60px] flex items-center mb-[12px] justify-start w-full">
                            <span className="absolute left-0 font-mono font-bold text-[56px] text-neutral-900 select-none leading-none top-[-8px]">
                              {step.num}
                            </span>
                            <span className="relative z-10 font-mono font-semibold text-[13px] text-accent uppercase tracking-[0.1em]">
                              Step {step.num}
                            </span>
                          </div>
                          <h3 className="font-sora font-bold text-[24px] text-white mb-[10px]">
                            {step.title}
                          </h3>
                          <p className="font-dm font-normal text-[16px] text-neutral-400 leading-[1.75] max-w-[440px]">
                            {step.description}
                          </p>
                        </motion.div>
                      )}

                      {!isEven && (
                        <motion.div
                          className="flex justify-start w-full pt-[16px]"
                          {...fadeUp}
                          transition={{ ...fadeUp.transition, delay: 0.1 }}
                        >
                          <span className="inline-block bg-neutral-900 border border-neutral-800 font-dm font-medium text-[13px] text-neutral-400 px-[16px] py-[6px] rounded-pill">
                            {step.time}
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Mobile/Tablet Stack (Visible only on mobile/tablet) */}
                    <div className="lg:hidden flex flex-col">
                      <motion.div
                        className="flex flex-col items-start"
                        {...fadeUp}
                      >
                        {/* Overlaid Step Label */}
                        <div className="relative h-[60px] flex items-center mb-[4px] justify-start w-full">
                          <span className="absolute left-0 font-mono font-bold text-[56px] text-neutral-900 select-none leading-none top-[-8px]">
                            {step.num}
                          </span>
                          <span className="relative z-10 font-mono font-semibold text-[13px] text-accent uppercase tracking-[0.1em]">
                            Step {step.num}
                          </span>
                        </div>
                        <h3 className="font-sora font-bold text-[20px] text-white mb-[8px]">
                          {step.title}
                        </h3>
                        <p className="font-dm font-normal text-[15px] text-neutral-400 leading-[1.7]">
                          {step.description}
                        </p>
                        {/* Mobile Time Tag badge */}
                        <span className="inline-block bg-neutral-900 border border-neutral-800 font-dm font-medium text-[12px] text-neutral-400 px-[12px] py-[4px] rounded-pill mt-[12px]">
                          {step.time}
                        </span>
                      </motion.div>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
