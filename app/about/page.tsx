'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const disciplines = [
  'Fullstack Software Engineering',
  'System Architecture & Scaling',
  'Mobile App Development (Flutter)',
  'AI Integration & Automation',
  'Responsive UI/UX Web Design',
  'DevOps & Secure Cloud Hosting',
]

const industries = [
  'E-commerce & Luxury Brands',
  'Education Technology (EdTech)',
  'Real Estate & Lead Generation',
  'Food Tech & Delivery Systems',
  'FinTech & Custom Integrations',
  'SaaS Startups & Portals',
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg-primary pt-[120px] pb-section-y">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-[800px] mb-[64px]">
            <motion.p
              className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
              {...fadeUp}
            >
              My Story
            </motion.p>
            <motion.h1
              className="font-display font-bold text-h1-mobile lg:text-h1 text-text-primary tracking-[-0.03em] mb-[24px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              Every website tells a story. <br />
              I tell it <span className="text-accent">better than anyone else.</span>
            </motion.h1>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[56px] lg:gap-[96px] items-start mb-[80px]">
            
            {/* Story text */}
            <motion.div
              className="flex flex-col gap-[24px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <h2 className="font-display font-bold text-[24px] lg:text-[28px] text-text-primary">
                A creator at heart, a builder by trade.
              </h2>
              <p className="font-body font-normal text-body-default-mobile lg:text-body-default text-text-secondary leading-[1.8]">
                I started my engineering journey by building Munchify, a complex food delivery and logistics ecosystem that connects local vendors and customers. 30 projects and 3 years later, I still love designing and building custom platforms tailored for businesses, professionals, and anyone with a dream. I believe that a website is a way of telling the world your story—and my commitment is to tell it better than anyone else.
              </p>

              <blockquote className="border-l-[3px] border-accent pl-[24px] my-[16px]">
                <p className="font-display font-semibold text-[20px] lg:text-[22px] leading-[1.5] text-text-primary italic">
                  &ldquo;I don&apos;t just write code — I partner with entrepreneurs to design and build the engines their businesses run on.&rdquo;
                </p>
              </blockquote>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              className="relative"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-[16px] border border-border">
                <Image
                  src="/images/portrait.png"
                  alt="Emmanuel Charles — Software Engineer"
                  width={500}
                  height={550}
                  className="w-full object-cover rounded-[16px]"
                />
              </div>
              <div className="bg-bg-secondary p-[24px] rounded-[12px] border border-border mt-[32px] flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-[20px] text-text-primary">Need a custom system?</h4>
                  <p className="font-body text-[14px] text-text-secondary mt-[4px]">Let&apos;s map out your specifications.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-body font-medium text-[14px] px-[20px] py-[12px] rounded-pill transition-colors duration-200 no-underline shrink-0"
                >
                  Start Now &rarr;
                </Link>
              </div>
            </motion.div>
          </div>

          <hr className="border-border my-[80px]" />

          {/* Disciplines & Industries */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[56px] lg:gap-[96px]">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
            >
              <h3 className="font-display font-bold text-[20px] uppercase tracking-[0.08em] text-text-secondary mb-[24px]">
                Disciplines
              </h3>
              <ul className="list-none p-0 flex flex-col gap-[16px]">
                {disciplines.map((item) => (
                  <li
                    key={item}
                    className="font-body font-normal text-[16px] text-text-primary flex items-center gap-[12px]"
                  >
                    <span className="w-[8px] h-[8px] rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 }}
            >
              <h3 className="font-display font-bold text-[20px] uppercase tracking-[0.08em] text-text-secondary mb-[24px]">
                Industries Served
              </h3>
              <ul className="list-none p-0 flex flex-col gap-[16px]">
                {industries.map((item) => (
                  <li
                    key={item}
                    className="font-body font-normal text-[16px] text-text-primary flex items-center gap-[12px]"
                  >
                    <span className="w-[8px] h-[8px] rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
