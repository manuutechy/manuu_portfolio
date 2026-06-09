'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { number: '30+', label: 'Projects Completed' },
  { number: '3+', label: 'Years of Experience' },
  { number: '15+', label: 'Happy Clients' },
  { number: '10+', label: 'Systems Architected' },
]

const easeOut = [0.25, 0.1, 0.25, 1] as const

export default function Hero() {
  const [greeting, setGreeting] = useState("Good evening")

  useEffect(() => {
    const hours = new Date().getHours()
    if (hours >= 5 && hours <= 11) {
      setGreeting("Good morning")
    } else if (hours >= 12 && hours <= 16) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good evening")
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen bg-bg-primary pt-[100px] flex items-center"
      aria-label="Introduction"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 w-full py-[40px] lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-[48px] lg:gap-[80px]">
          {/* Left column */}
          <div className="flex-[1_1_55%] w-full">
            {/* Dynamic Greeting */}
            <motion.p
              className="font-dm font-normal text-[22px] lg:text-[24px] text-text-secondary mb-[16px] block leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              {greeting}, I&apos;m <span className="text-accent font-semibold">Emmanuel Charles</span>.
            </motion.p>

            <motion.p
              className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[24px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            >
              Software Engineer &amp; Digital Product Builder
            </motion.p>

            <motion.h1
              className="font-display font-bold text-[34px] lg:text-[48px] leading-[1.2] text-text-primary mb-[36px] tracking-[-0.03em] max-w-[840px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
            >
              I build websites, softwares, and apps that <span className="text-accent font-semibold">convert</span>, tell your story, and uplift your brand.
            </motion.h1>

            <motion.div
              className="flex flex-row flex-wrap gap-[16px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-body font-medium text-[16px] px-[32px] py-[16px] rounded-pill transition-colors duration-200 no-underline"
              >
                View My Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent text-text-primary font-body font-medium text-[16px] px-[32px] py-[16px] rounded-pill border-[1.5px] border-border hover:border-text-primary transition-colors duration-200 no-underline"
              >
                Let&apos;s Build Together
              </Link>
            </motion.div>

            {/* Stats row — desktop */}
            <motion.div
              className="hidden lg:flex items-start mt-[56px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: easeOut }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col"
                  style={{
                    paddingLeft: i === 0 ? 0 : '32px',
                    paddingRight: '32px',
                    borderLeft: i === 0 ? 'none' : '1px solid var(--color-border)',
                  }}
                >
                  <span className="font-display font-bold text-[28px] text-text-primary">
                    {stat.number}
                  </span>
                  <span className="font-body font-normal text-[13px] text-text-secondary mt-[4px] whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats row — mobile 2x2 grid */}
            <motion.div
              className="grid grid-cols-2 gap-[32px] mt-[56px] lg:hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: easeOut }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-bold text-[28px] text-text-primary">
                    {stat.number}
                  </span>
                  <span className="font-body font-normal text-[13px] text-text-secondary mt-[4px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            className="flex-[1_1_45%] w-full relative"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
          >
            <div className="relative">
              {/* Orange depth rectangle */}
              <div
                className="absolute rounded-[16px] w-full h-full bg-accent"
                style={{
                  top: '20px',
                  right: '-20px',
                  zIndex: -1,
                }}
              />
              <Image
                src="/images/portrait.png"
                alt="Emmanuel Charles, creator of Munchify"
                width={520}
                height={620}
                className="w-full lg:w-[520px] h-auto object-cover rounded-[16px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
