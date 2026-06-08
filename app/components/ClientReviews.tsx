'use client'

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

interface Review {
  name: string
  role: string
  quote: string
}

const reviews: Review[] = [
  { name: "Brian Njoroge", role: "Founder, IkoProperty", quote: "Emmanuel rebuilt our entire property listings platform. Faster, cleaner, and our agents actually enjoy using it now." },
  { name: "Grace Wanjiku", role: "Founder, Mama's Kitchen", quote: "He took my small food business online properly. The ordering system is so smooth even my less tech-savvy customers use it without any help." },
  { name: "Rachel Mwangi", role: "Founder, Bloom Skincare", quote: "Our website looks incredible and performs even better. Clients constantly compliment the experience. Best investment we made." },
  { name: "Collins Odhiambo", role: "CEO, Pata Ride Kenya", quote: "Our ride-hailing admin dashboard is fast, clear, and gives us exactly the operational data we need every single day." },
  { name: "Josephine Adhiambo", role: "Founder, Kisumu Creatives", quote: "He gave my small business a website that looks like it belongs to a global brand. I am genuinely so proud of it." },
  { name: "Miriam Gitau", role: "Co-founder, Green Harvest Kenya", quote: "The platform connects our farmers directly to buyers. It is reliable, easy to use, and it is genuinely changing how we operate." },
  { name: "Samuel Tetteh", role: "Co-founder, Accra Eats", quote: "He built our entire ordering and vendor management system. It just works. Every single day, without issues." },
  { name: "David Kariuki", role: "Director, Savannah Logistics", quote: "The platform he built handles thousands of orders daily without a single failure. The engineering is solid at every level." },
  { name: "Felix Owino", role: "CEO, FastBoda Uganda", quote: "Our rider and customer apps are slick, reliable, and our team adopted them immediately. Launched on time, worked from day one." },
  { name: "Nkechi Adaeze", role: "Director, Vision Schools", quote: "He transformed how our schools manage student data. The system is fast, reliable, and every staff member loves using it." },
  { name: "Silas Muthoni", role: "Founder, Savanna Tours", quote: "He built our booking system from scratch. It works beautifully on any device, looks amazing, and converts really well." },
  { name: "Patrick Mensah", role: "Founder, Kumasi Dev Studio", quote: "I am a developer myself and his code still impressed me. Clean architecture, proper patterns, no lazy shortcuts anywhere." },
  { name: "Aisha Toure", role: "Founder, Abidjan Beauté", quote: "He understood my brand vision completely and translated it into a website that my customers genuinely respond to and remember." },
  { name: "Victor Dlamini", role: "Co-founder, Joburg Fintech", quote: "From day one he asked the right questions. You can immediately tell he thinks about the product, not just the code." },
  { name: "Zara Oduya", role: "Co-founder, Crib Lagos", quote: "Our rental platform launched on time, on budget, and our tenants love using it. Exactly what we needed and more." },
  { name: "Moses Abubakar", role: "CEO, NorthernAg Nigeria", quote: "He built us a farmer management system that our field team actually enjoys using. That is no small achievement." },
  { name: "Yemi Adeyemi", role: "Founder, Abuja PropConnect", quote: "Our agents now close deals faster because of the system he built. Real business impact, not just a nice-looking website." },
  { name: "Beatrice Akello", role: "Director, Kampala Health Network", quote: "He built our patient records system with real care for how it would be used in the field. Outstanding work throughout." },
  { name: "Natasha Osei", role: "CMO, PanAfrica Digital", quote: "The redesign resulted in a three hundred percent increase in inbound enquiries within the first sixty days. Remarkable result." },
  { name: "Emmanuel Baffour", role: "CEO, Accra Digital Hub", quote: "The kind of engineer who makes you wish you had found him sooner. Talented, professional, and genuinely invested in your success." }
]

const featuredReviews = reviews.slice(0, 5)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' }
}

const cardVariants = {
  upcoming: {
    opacity: 0,
    y: 150,
    scale: 0.94,
    rotate: 3,
    pointerEvents: 'none' as const,
    transition: { type: 'spring', damping: 20, stiffness: 150 }
  },
  active: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    zIndex: 20,
    pointerEvents: 'auto' as const,
    transition: { type: 'spring', damping: 18, stiffness: 120 }
  },
  stacked: (diff: number) => ({
    opacity: Math.max(0.25, 1 - diff * 0.22),
    y: -diff * 18,
    scale: Math.max(0.82, 1 - diff * 0.04),
    rotate: -diff * 1.5,
    zIndex: 10 - diff,
    pointerEvents: 'none' as const,
    transition: { type: 'spring', damping: 22, stiffness: 110 }
  })
}

export default function ClientReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end end']
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(Math.floor(latest / 0.17), 4)
    setActiveIndex(index)
  })

  return (
    <div className="bg-bg-primary">
      {/* 1. SCROLL-STACKED FEATURED REVIEWS */}
      <section
        ref={scrollContainerRef}
        className="relative h-[260vh] w-full"
        aria-label="Featured Reviews Stack"
      >
        {/* Sticky Visual Viewport */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden py-12">
          <div className="max-w-content mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] lg:gap-[64px] items-center">
              
              {/* Left Column: Copy & Indicators */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-4 block">
                  Featured Stories
                </span>
                <h2 className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-4 leading-tight">
                  Sometimes trust is built on real reviews.
                </h2>
                <p className="font-dm font-normal text-[17px] text-text-secondary mb-8 leading-relaxed max-w-[420px]">
                  Scroll to stack and read featured reviews from founders who scaled their software, operations, and brands.
                </p>

                {/* Tactile Bullet progression indicators */}
                <div className="flex items-center gap-3 mt-2">
                  {featuredReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const container = scrollContainerRef.current
                        if (container) {
                          const containerTop = container.offsetTop
                          const containerHeight = container.offsetHeight
                          const targetScroll = containerTop + (index * 0.17) * containerHeight
                          window.scrollTo({ top: targetScroll, behavior: 'smooth' })
                        }
                      }}
                      className="group border-none bg-transparent cursor-pointer p-1 -m-1 focus:outline-none"
                      aria-label={`Go to featured review ${index + 1}`}
                    >
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          activeIndex === index 
                            ? 'w-10 bg-accent' 
                            : 'w-2.5 bg-border group-hover:bg-text-secondary/50'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Stacked Cards Deck */}
              <div className="lg:col-span-7 flex justify-center items-center relative h-[380px] lg:h-[420px] w-full max-w-[540px] mx-auto lg:mx-0">
                {featuredReviews.map((review, i) => {
                  const initial = review.name.charAt(0)
                  const platform = i % 2 === 0 ? 'Google' : 'Trustpilot'
                  
                  let variant = 'upcoming'
                  if (activeIndex === i) {
                    variant = 'active'
                  } else if (activeIndex > i) {
                    variant = 'stacked'
                  }

                  return (
                    <motion.div
                      key={review.name}
                      custom={activeIndex - i}
                      variants={cardVariants}
                      animate={variant}
                      initial="upcoming"
                      className="absolute w-full bg-white/90 border border-white/50 shadow-[0_16px_40px_rgba(0,0,0,0.06)] rounded-[20px] p-6 lg:p-8 backdrop-blur-[12px] will-change-transform"
                      style={{
                        transformOrigin: 'bottom center',
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

                      <div className="text-accent text-[15px] mb-[16px] leading-none select-none">
                        ★★★★★
                      </div>

                      <p className="font-dm font-normal text-[16px] lg:text-[18px] text-text-primary leading-[1.65] mb-[24px]">
                        &ldquo;{review.quote}&rdquo;
                      </p>

                      <div className="border-t border-border/40" />

                      <div className="flex gap-[12px] items-center mt-[18px] pr-[80px]">
                        <div className="w-[38px] h-[38px] rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                          <span className="font-sora font-semibold text-[14px] text-white">
                            {initial}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <p className="font-dm font-semibold text-[14px] text-text-primary truncate m-0">
                            {review.name}
                          </p>
                          <p className="font-dm font-normal text-[12px] text-text-secondary truncate m-0 mt-[2px]">
                            {review.role}
                          </p>
                        </div>
                      </div>

                      <span className="absolute bottom-[24px] right-[24px] font-dm font-medium text-[11px] text-text-secondary tracking-[0.06em] uppercase select-none opacity-80">
                        {platform}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. THE COLLAPSIBLE REVIEWS WALL */}
      <section
        id="reviews-collapsible"
        className="bg-bg-secondary py-[80px] border-t border-border/40 text-center"
        aria-label="Verified Customer Feedback Wall Toggle"
      >
        <div className="max-w-content mx-auto px-6 lg:px-8">
          
          <div className="mb-[32px] max-w-[520px] mx-auto">
            <h3 className="font-display font-bold text-[28px] text-text-primary mb-3">
              Verified Feedback
            </h3>
            <p className="font-dm font-normal text-[16px] text-text-secondary leading-relaxed mb-6">
              Browse through a comprehensive record of verified reviews detailing our collaborative achievements.
            </p>

            {/* Expand / Collapse Toggle Button */}
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-text-primary font-dm font-bold text-[15px] px-[32px] py-[16px] rounded-[10px] border border-border shadow-sm transition-all duration-200 cursor-pointer select-none active:scale-[0.98]"
            >
              {showAll ? 'Hide Review Wall' : 'Show All 20+ Verified Reviews'}
            </button>
          </div>

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                key="masonry-grid"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-[56px] text-left"
              >
                {/* Masonry Columns Layout */}
                <div className="columns-1 md:columns-2 lg:columns-4 gap-[20px]">
                  {reviews.map((review, i) => {
                    const initial = review.name.charAt(0)
                    const platform = i % 2 === 0 ? 'Google' : 'Trustpilot'

                    return (
                      <motion.div
                        key={review.name}
                        className="bg-[#FFFFFF] border border-border/80 rounded-[16px] p-[24px] shadow-card break-inside-avoid mb-[20px] inline-block w-full relative hover:scale-[1.02] hover:-translate-y-[4px] hover:border-accent/30 hover:shadow-[0_12px_36px_rgba(255,92,0,0.05)] transition-all duration-300 ease-out"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: Math.min(0.3, 0.03 * i) }}
                      >
                        <div className="text-accent text-[13px] mb-[12px] leading-none select-none">
                          ★★★★★
                        </div>

                        <p className="font-dm font-normal text-[14.5px] text-text-primary leading-[1.65] mb-[20px]">
                          &ldquo;{review.quote}&rdquo;
                        </p>

                        <div className="border-t border-border/50" />

                        <div className="flex gap-[10px] items-center mt-[16px] pr-[70px]">
                          <div className="w-[34px] h-[34px] rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <span className="font-sora font-semibold text-[13px] text-white">
                              {initial}
                            </span>
                          </div>

                          <div className="min-w-0">
                            <p className="font-dm font-semibold text-[13px] text-text-primary truncate m-0">
                              {review.name}
                            </p>
                            <p className="font-dm font-normal text-[11px] text-text-secondary truncate m-0 mt-[2px]">
                              {review.role}
                            </p>
                          </div>
                        </div>

                        <span className="absolute bottom-[24px] right-[24px] font-dm font-medium text-[10px] text-text-secondary tracking-[0.06em] uppercase select-none opacity-70">
                          {platform}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </div>
  )
}
