'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

interface Project {
  category: string
  name: string
  description: string
  url: string | null
  image: string
  slug: string
  tags: string[]
}

const featuredProject: Project = {
  category: 'Food Delivery Platform & Logistics (Main Project)',
  name: 'Munchify',
  description: 'A complete food delivery and logistics ecosystem connecting vendors, customers, and riders. Features automated dispatch logs, real-time order tracking, and seamless mobile payments.',
  url: 'https://munchify.co.ke',
  image: '/images/project-munchify.png',
  slug: 'munchify',
  tags: ['Flutter', 'Node.js', 'PostgreSQL', 'Google Maps API', 'MPesa API'],
}

const otherProjects: Project[] = [
  {
    category: 'Education Technology',
    name: 'Edyfra',
    description: 'An AI-powered school administration and online learning platform. Auto-generates lesson notes, processes enrollment analytics, and automates teacher workloads.',
    url: null,
    image: '/images/project-edyfra.png',
    slug: 'edyfra',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Postgres'],
  },
  {
    category: 'Skincare Storefront',
    name: 'Belloria Beauty',
    description: 'Luxury e-commerce storefront for a high-end cosmetics brand. Engineered with performance optimization yielding sub-second load times and immersive product storytelling layout.',
    url: 'https://belloriabeauty.store',
    image: '/images/project-belloria.png',
    slug: 'belloria',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Shopify Storefront API'],
  },
  {
    category: 'Streetwear E-commerce',
    name: 'Plott Wear',
    description: 'Custom e-commerce application focusing on brand narrative. Complete with payment gateway, visual cart builders, and automated inventory systems.',
    url: 'https://plottwear.store',
    image: '/images/project-plottwear.png',
    slug: 'plottwear',
    tags: ['TypeScript', 'Node.js', 'MongoDB', 'React', 'Framer Motion'],
  },
  {
    category: 'Real Estate Platform',
    name: 'Avara Homes',
    description: 'A clean property listing portal engineered to drive high-intent lead generation. High-quality property photography grids, geographical filtering, and instant booking hooks.',
    url: 'https://avarahomes.site',
    image: '/images/project-avarahomes.png',
    slug: 'avarahomes',
    tags: ['Laravel', 'MySQL', 'cPanel Hosting', 'Tailwind CSS'],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg-primary pt-[120px] pb-section-y">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-[800px] mb-[72px]">
            <motion.p
              className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
              {...fadeUp}
            >
              Selected Portfolio
            </motion.p>
            <motion.h1
              className="font-display font-bold text-h1-mobile lg:text-h1 text-text-primary tracking-[-0.03em] mb-[24px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              Bespoke digital platforms.<br />
              Built for <span className="text-accent">real business results.</span>
            </motion.h1>
            <motion.p
              className="font-body text-body-large text-text-secondary max-w-[560px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              Take a look at the commercial systems, apps, and storefronts that I have designed and engineered over the years.
            </motion.p>
          </div>

          {/* MAIN FEATURED PROJECT (MUNCHIFY) */}
          <motion.div
            className="bg-bg-secondary border border-border rounded-[24px] overflow-hidden p-[24px] lg:p-[48px] mb-[64px]"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[32px] lg:gap-[64px] items-center">
              
              {/* Product Visual */}
              <div className="relative group overflow-hidden rounded-[12px] border border-border">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  width={700}
                  height={525}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col items-start">
                <span className="inline-block font-mono text-[11px] uppercase tracking-[0.08em] text-accent bg-[rgba(255,92,0,0.08)] px-[12px] py-[6px] rounded-pill mb-[16px]">
                  {featuredProject.category}
                </span>
                <h2 className="font-display font-bold text-[32px] lg:text-[40px] text-text-primary mb-[16px]">
                  {featuredProject.name}
                </h2>
                <p className="font-body text-text-secondary text-[16px] leading-[1.7] mb-[24px]">
                  {featuredProject.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-[8px] mb-[32px]">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] text-text-primary bg-bg-primary border border-border px-[12px] py-[6px] rounded-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {featuredProject.url ? (
                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[8px] font-body font-semibold text-[16px] text-accent hover:underline group/link"
                  >
                    Launch munchify.co.ke
                    <span className="inline-block group-hover/link:translate-x-[4px] transition-transform duration-200">
                      &rarr;
                    </span>
                  </a>
                ) : (
                  <span className="font-mono text-[14px] text-text-secondary">Case study ready soon</span>
                )}
              </div>

            </div>
          </motion.div>

          {/* OTHER PROJECTS GRID */}
          <div>
            <h3 className="font-display font-bold text-[24px] lg:text-[28px] text-text-primary mb-[40px]">
              Other Selected Creations
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[48px]">
              {otherProjects.map((project, i) => (
                <motion.div
                  key={project.slug}
                  className="group flex flex-col"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
                >
                  <div className="overflow-hidden rounded-[16px] border border-border mb-[24px]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={700}
                      height={525}
                      className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-accent mb-[8px]">
                      {project.category}
                    </span>
                    <h4 className="font-display font-bold text-[22px] lg:text-[26px] text-text-primary mb-[12px]">
                      {project.name}
                    </h4>
                    <p className="font-body text-text-secondary text-[15px] leading-[1.65] mb-[20px] flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-[6px] mb-[24px]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] text-text-secondary bg-bg-secondary border border-border px-[10px] py-[4px] rounded-pill"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[6px] font-body font-semibold text-[15px] text-accent hover:underline group/link"
                      >
                        Visit storefront
                        <span className="inline-block group-hover/link:translate-x-[4px] transition-transform duration-200">
                          &rarr;
                        </span>
                      </a>
                    ) : (
                      <span className="font-body text-[14px] text-text-secondary">
                        Specifications review pending
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <hr className="border-border my-[80px]" />

          {/* CTA View All */}
          <div className="bg-bg-secondary border border-border rounded-[24px] p-[32px] lg:p-[48px] text-center max-w-[800px] mx-auto">
            <h3 className="font-display font-bold text-[24px] lg:text-[28px] text-text-primary mb-[12px]">
              Have a custom specification in mind?
            </h3>
            <p className="font-body text-text-secondary text-[15px] max-w-[500px] mx-auto mb-[28px]">
              Every startup, business portal, and mobile app requires custom-crafted engineering. Let&apos;s map out your parameters together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-body font-semibold text-[16px] px-[32px] py-[16px] rounded-pill transition-colors duration-200 no-underline"
            >
              Start a Conversation
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
