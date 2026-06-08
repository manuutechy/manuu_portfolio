'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  category: string
  name: string
  description: string
  url: string | null
  image: string
  slug: string
  resultTag: string
}

const projects: Project[] = [
  {
    category: 'Education Technology',
    name: 'Edyfra',
    description: 'AI-powered learning platform. Personalised education, automated administration, built for scale.',
    url: null,
    image: '/images/project-edyfra.png',
    slug: 'edyfra',
    resultTag: 'AI-Powered Platform',
  },
  {
    category: 'E-commerce',
    name: 'Belloria Beauty',
    description: 'Luxury skincare storefront. Product storytelling meets seamless shopping.',
    url: 'https://belloriabeauty.store',
    image: '/images/project-belloria.png',
    slug: 'belloria',
    resultTag: 'E-commerce Build',
  },
  {
    category: 'Food Delivery Platform',
    name: 'Munchify',
    description: 'End-to-end food delivery ecosystem. Ordering, vendor management, and logistics — unified.',
    url: 'https://munchify.co.ke',
    image: '/images/project-munchify.png',
    slug: 'munchify',
    resultTag: 'Full-Stack Marketplace',
  },
  {
    category: 'Fashion E-commerce',
    name: 'Plott Wear',
    description: 'Fashion commerce built around brand identity. Every design decision serves the customer journey.',
    url: 'https://plottwear.store',
    image: '/images/project-plottwear.png',
    slug: 'plottwear',
    resultTag: 'Fashion Commerce',
  },
  {
    category: 'Real Estate',
    name: 'Avara Homes',
    description: 'Lead-generation-first property platform. Premium presentation for high-value transactions.',
    url: 'https://avarahomes.site',
    image: '/images/project-avarahomes.png',
    slug: 'avarahomes',
    resultTag: 'Real Estate Platform',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-bg-secondary py-section-y-mobile lg:py-section-y"
      aria-label="Selected work"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.p
          className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
          {...fadeUp}
        >
          Selected Work
        </motion.p>

        <motion.h2
          className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[16px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Helping brands claim their space online.
        </motion.h2>

        <motion.p
          className="font-dm font-normal text-[18px] text-text-secondary max-w-[600px] mb-[64px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          A curated preview of 300+ live systems and storefronts engineered across e-commerce, real estate, education, legal practices, and enterprise logistics.
        </motion.p>

        {/* Featured project — full-width hero image */}
        <motion.div
          className="mb-[48px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
        >
          {/* Image container with orange hover bottom bar */}
          <div className="relative group/image overflow-hidden rounded-[16px] mb-[24px]">
            <Image
              src={projects[0].image}
              alt={`${projects[0].name} — ${projects[0].category} project by Emmanuel Charles`}
              width={1200}
              height={675}
              className="w-full object-cover group-hover/image:scale-[1.02] transition-transform duration-500 ease-out"
              style={{ aspectRatio: '16/9' }}
            />
            <div className="absolute bottom-0 left-0 h-[4px] bg-accent w-0 group-hover/image:w-full transition-all duration-400 ease-out" />
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[16px]">
            <div>
              {/* Project Counter Badge */}
              <span className="font-mono text-[12px] text-text-secondary tracking-[0.08em] mb-[12px] block">
                Project 01
              </span>
              <span className="inline-block font-body font-medium text-[12px] uppercase tracking-[0.08em] text-accent bg-[rgba(255,92,0,0.08)] px-[12px] py-[6px] rounded-pill mb-[12px]">
                {projects[0].category}
              </span>
              <h3 className="font-display font-bold text-[28px] lg:text-[36px] text-text-primary">
                {projects[0].name}
              </h3>
              <p className="font-body font-normal text-[16px] text-text-secondary mt-[8px] max-w-[500px]">
                {projects[0].description}
              </p>
              
              {/* Results Tag */}
              <div className="mt-[16px] mb-[8px]">
                <span className="inline-block bg-[rgba(255,92,0,0.08)] border border-[rgba(255,92,0,0.2)] rounded-[100px] px-[14px] py-[6px] font-dm font-medium text-[13px] text-accent">
                  {projects[0].resultTag}
                </span>
              </div>
            </div>
            {projects[0].url ? (
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[6px] font-body font-medium text-[15px] text-accent hover:underline no-underline group/link shrink-0"
              >
                View Project
                <span className="inline-block group-hover/link:translate-x-[4px] transition-transform duration-200">
                  &rarr;
                </span>
              </a>
            ) : (
              <span className="font-body font-medium text-[15px] text-text-secondary shrink-0">
                Case Study Coming Soon
              </span>
            )}
          </div>
        </motion.div>

        {/* Grid of remaining projects — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] lg:gap-[40px]">
          {projects.slice(1).map((project, idx) => (
            <motion.div
              key={project.slug}
              className="group"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              {/* Image container with orange hover bottom bar */}
              <div className="relative group/image overflow-hidden rounded-[12px] mb-[20px]">
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.category} project by Emmanuel Charles`}
                  width={600}
                  height={375}
                  className="w-full object-cover group-hover/image:scale-[1.02] transition-transform duration-500 ease-out"
                  style={{ aspectRatio: '16/10' }}
                />
                <div className="absolute bottom-0 left-0 h-[4px] bg-accent w-0 group-hover/image:w-full transition-all duration-400 ease-out" />
              </div>

              {/* Project Counter Badge */}
              <span className="font-mono text-[12px] text-text-secondary tracking-[0.08em] mb-[12px] block">
                {`Project 0${idx + 2}`}
              </span>

              <span className="inline-block font-body font-medium text-[12px] uppercase tracking-[0.08em] text-accent bg-[rgba(255,92,0,0.08)] px-[12px] py-[6px] rounded-pill mb-[12px]">
                {project.category}
              </span>
              <h3 className="font-display font-bold text-[22px] lg:text-[26px] text-text-primary mb-[8px]">
                {project.name}
              </h3>
              <p className="font-body font-normal text-[15px] text-text-secondary mb-[16px] leading-[1.6]">
                {project.description}
              </p>

              {/* Results Tag */}
              <div className="mb-[24px]">
                <span className="inline-block bg-[rgba(255,92,0,0.08)] border border-[rgba(255,92,0,0.2)] rounded-[100px] px-[14px] py-[6px] font-dm font-medium text-[13px] text-accent">
                  {project.resultTag}
                </span>
              </div>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[6px] font-body font-medium text-[15px] text-accent hover:underline no-underline group/link"
                >
                  View Project
                  <span className="inline-block group-hover/link:translate-x-[4px] transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              ) : (
                <span className="font-body font-medium text-[15px] text-text-secondary">
                  Case Study Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-[56px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-[8px] bg-accent hover:bg-accent-hover text-white font-body font-semibold text-[16px] px-[36px] py-[16px] rounded-pill transition-colors duration-200 no-underline"
          >
            View All 30+ Projects
            <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
