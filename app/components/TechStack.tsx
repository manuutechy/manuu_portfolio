'use client'

import { motion } from 'framer-motion'

interface TechCategory {
  category: string
  tags: string[]
}

const categories: TechCategory[] = [
  {
    category: 'Frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    tags: ['Node.js', 'Laravel', 'PHP', 'REST APIs', 'Authentication Systems'],
  },
  {
    category: 'Mobile',
    tags: ['Flutter', 'Dart', 'Cross-platform'],
  },
  {
    category: 'Database',
    tags: ['PostgreSQL', 'MySQL', 'Firebase', 'MongoDB', 'Redis'],
  },
  {
    category: 'Infrastructure',
    tags: ['Linux', 'Docker', 'Cloud Hosting', 'cPanel', 'DevOps'],
  },
  {
    category: 'AI',
    tags: ['OpenAI API', 'AI Agents', 'RAG Systems', 'Automation'],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="bg-bg-primary py-section-y-mobile lg:py-section-y"
      aria-label="Technology stack"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.p
          className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
          {...fadeUp}
        >
          Tools of the Trade
        </motion.p>

        <motion.h2
          className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[56px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Built with precision. Engineered to scale.
        </motion.h2>

        <div className="flex flex-col gap-[32px]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="flex flex-col lg:flex-row lg:items-start gap-[16px] lg:gap-[48px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 * (i + 1) }}
            >
              <span className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-text-secondary lg:w-[180px] flex-shrink-0 pt-[8px]">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-[10px]">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block font-body font-medium text-[14px] text-text-primary bg-bg-secondary border border-border px-[18px] py-[8px] rounded-pill hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
