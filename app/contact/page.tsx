'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Calendar, MapPin } from 'lucide-react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg-primary pt-[120px] pb-section-y animate-fade-in">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-[800px] mb-[64px]">
            <motion.p
              className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]"
              {...fadeUp}
            >
              Get In Touch
            </motion.p>
            <motion.h1
              className="font-display font-bold text-h1-mobile lg:text-h1 text-text-primary tracking-[-0.03em] mb-[24px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              Let&apos;s build something <span className="text-accent">extraordinary.</span>
            </motion.h1>
            <motion.p
              className="font-body text-body-large text-text-secondary max-w-[560px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              Whether you need a custom business platform, a mobile app, or a luxury brand storefront, start with a specification blueprint.
            </motion.p>
          </div>

          {/* Grid columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[56px] lg:gap-[96px] items-start">
            
            {/* Left Column — Form */}
            <motion.div
              className="bg-bg-secondary border border-border rounded-[20px] p-[24px] lg:p-[48px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.3 }}
            >
              <h3 className="font-display font-bold text-[22px] lg:text-[26px] text-text-primary mb-[32px]">
                Tell me about your project
              </h3>
              
              <div role="form" aria-label="Project inquiry form" className="flex flex-col gap-[24px]">
                
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-[14px] text-text-primary mb-[8px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-white border-[1.5px] border-border rounded-input font-body font-normal text-[16px] text-text-primary px-[16px] py-[14px] transition-all duration-200 placeholder:text-text-secondary placeholder:opacity-50 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,92,0,0.12)]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body font-medium text-[14px] text-text-primary mb-[8px]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full bg-white border-[1.5px] border-border rounded-input font-body font-normal text-[16px] text-text-primary px-[16px] py-[14px] transition-all duration-200 placeholder:text-text-secondary placeholder:opacity-50 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,92,0,0.12)]"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-body font-medium text-[14px] text-text-primary mb-[8px]">
                    Company or Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company name"
                    className="w-full bg-white border-[1.5px] border-border rounded-input font-body font-normal text-[16px] text-text-primary px-[16px] py-[14px] transition-all duration-200 placeholder:text-text-secondary placeholder:opacity-50 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,92,0,0.12)]"
                  />
                </div>

                <div>
                  <label htmlFor="project-type" className="block font-body font-medium text-[14px] text-text-primary mb-[8px]">
                    Project Type
                  </label>
                  <select
                    id="project-type"
                    defaultValue=""
                    className="w-full bg-white border-[1.5px] border-border rounded-input font-body font-normal text-[16px] text-text-primary px-[16px] py-[14px] transition-all duration-200 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,92,0,0.12)] appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B6B6B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="website">Marketing Website</option>
                    <option value="ecommerce">E-commerce / Storefront</option>
                    <option value="software">Custom System / Portal</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="ai">AI Integration / Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block font-body font-medium text-[14px] text-text-primary mb-[8px]">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    defaultValue=""
                    className="w-full bg-white border-[1.5px] border-border rounded-input font-body font-normal text-[16px] text-text-primary px-[16px] py-[14px] transition-all duration-200 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,92,0,0.12)] appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236B6B6B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 16px center',
                    }}
                  >
                    <option value="" disabled>Select budget scale</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 – $5,000</option>
                    <option value="5k-15k">$5,000 – $15,000</option>
                    <option value="15k-50k">$15,000 – $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="brief" className="block font-body font-medium text-[14px] text-text-primary mb-[8px]">
                    Project Specifications &amp; Story
                  </label>
                  <textarea
                    id="brief"
                    rows={6}
                    placeholder="Tell me about what you are building, who it is for, and your specifications."
                    className="w-full bg-white border-[1.5px] border-border rounded-input font-body font-normal text-[16px] text-text-primary px-[16px] py-[14px] transition-all duration-200 placeholder:text-text-secondary placeholder:opacity-50 focus:border-accent focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,92,0,0.12)] resize-vertical"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-display font-semibold text-[16px] py-[18px] rounded-input border-none cursor-pointer transition-colors duration-200"
                >
                  Submit Inquiry Specification
                </button>

              </div>
            </motion.div>

            {/* Right Column — Info */}
            <motion.div
              className="flex flex-col gap-[48px] lg:pl-[24px]"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
            >
              
              {/* WhatsApp direct */}
              <div className="bg-bg-secondary border border-border rounded-[16px] p-[24px] flex items-start gap-[16px]">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(255,92,0,0.08)] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[18px] text-text-primary">WhatsApp Direct</h4>
                  <p className="font-body text-[14px] text-text-secondary mt-[4px] mb-[16px]">
                    Discuss specifications instantly with a direct message.
                  </p>
                  <a
                    href="https://wa.me/254758335592"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[6px] font-body font-semibold text-[15px] text-accent hover:underline no-underline"
                  >
                    +254 758 335 592 &rarr;
                  </a>
                </div>
              </div>

              {/* Email direct */}
              <div className="bg-bg-secondary border border-border rounded-[16px] p-[24px] flex items-start gap-[16px]">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(255,92,0,0.08)] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[18px] text-text-primary">Direct Email</h4>
                  <p className="font-body text-[14px] text-text-secondary mt-[4px] mb-[16px]">
                    Send formal project specification documents and RFCs.
                  </p>
                  <a
                    href="mailto:hi@manuutech.com"
                    className="inline-flex items-center gap-[6px] font-body font-semibold text-[15px] text-accent hover:underline no-underline"
                  >
                    hi@manuutech.com &rarr;
                  </a>
                </div>
              </div>

              {/* Calendly booking */}
              <div className="bg-bg-secondary border border-border rounded-[16px] p-[24px] flex items-start gap-[16px]">
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(255,92,0,0.08)] flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-[18px] text-text-primary">Book a Scoping Call</h4>
                  <p className="font-body text-[14px] text-text-secondary mt-[4px] mb-[16px]">
                    Schedule a 30-minute interactive technical call.
                  </p>
                  <a
                    href="https://calendly.com/manuutechy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[6px] font-body font-semibold text-[15px] text-accent hover:underline no-underline"
                  >
                    calendly.com/manuutechy &rarr;
                  </a>
                </div>
              </div>

              {/* Location indicator */}
              <div className="flex items-center gap-[12px] text-text-secondary text-[14px] px-[24px]">
                <MapPin size={16} className="text-accent" />
                <span>Nairobi, Kenya &bull; East Africa (UTC+3)</span>
              </div>

            </motion.div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
