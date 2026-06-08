'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Send, Check, Mail, MessageCircle, ArrowRight, Phone } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', type: '', budget: '', brief: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({ name: '', email: '', company: '', type: '', budget: '', brief: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      className="bg-bg-secondary py-section-y-mobile lg:py-section-y relative overflow-hidden"
      aria-label="Contact"
    >
      {/* Accent glow details */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 lg:px-8 relative z-10">
        <motion.p
          className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px] block font-semibold"
          {...fadeUp}
        >
          Get In Touch
        </motion.p>

        <motion.h2
          className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[16px] tracking-[-0.025em]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          Let&rsquo;s build something that lasts.
        </motion.h2>

        <motion.p
          className="font-dm font-normal text-[18px] text-text-secondary leading-[1.7] max-w-[540px] mb-[56px]"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          Whether you need a high-converting website, custom business software, mobile app development, or AI automation, let&apos;s start the conversation.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[48px] lg:gap-[80px]">
          
          {/* Left column — Immersive Glass Form */}
          <motion.div
            className="bg-white/40 border border-white/60 p-6 lg:p-8 rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.02)] backdrop-blur-[12px] relative overflow-hidden"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            {/* Top light highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

            <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] relative">
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    className="absolute inset-0 bg-white/95 rounded-[16px] flex flex-col items-center justify-center text-center p-6 z-20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-accent animate-bounce" />
                    </div>
                    <h3 className="font-display font-bold text-[22px] text-text-primary mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="font-dm text-[15px] text-text-secondary max-w-[280px]">
                      Thank you. Emmanuel will review your brief and follow up within 24 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-body font-semibold text-[13px] text-text-primary mb-[8px] uppercase tracking-wide opacity-90"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-white/50 border border-border/85 rounded-[12px] font-body text-[15px] text-text-primary px-[16px] py-[12px] transition-all duration-300 placeholder:text-text-secondary placeholder:opacity-60 focus:border-accent focus:bg-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,92,0,0.08)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-body font-semibold text-[13px] text-text-primary mb-[8px] uppercase tracking-wide opacity-90"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="you@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-white/50 border border-border/85 rounded-[12px] font-body text-[15px] text-text-primary px-[16px] py-[12px] transition-all duration-300 placeholder:text-text-secondary placeholder:opacity-60 focus:border-accent focus:bg-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,92,0,0.08)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block font-body font-semibold text-[13px] text-text-primary mb-[8px] uppercase tracking-wide opacity-90"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    placeholder="Your business (optional)"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-white/50 border border-border/85 rounded-[12px] font-body text-[15px] text-text-primary px-[16px] py-[12px] transition-all duration-300 placeholder:text-text-secondary placeholder:opacity-60 focus:border-accent focus:bg-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,92,0,0.08)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-project-type"
                    className="block font-body font-semibold text-[13px] text-text-primary mb-[8px] uppercase tracking-wide opacity-90"
                  >
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="contact-project-type"
                      required
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="w-full bg-white/50 border border-border/85 rounded-[12px] font-body text-[15px] text-text-primary px-[16px] py-[12px] transition-all duration-300 focus:border-accent focus:bg-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,92,0,0.08)] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a type</option>
                      <option value="website">Website</option>
                      <option value="software">Software System</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="ai">AI Integration</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary select-none opacity-60">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="block font-body font-semibold text-[13px] text-text-primary mb-[8px] uppercase tracking-wide opacity-90"
                >
                  Estimated Budget
                </label>
                <div className="relative">
                  <select
                    id="contact-budget"
                    required
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full bg-white/50 border border-border/85 rounded-[12px] font-body text-[15px] text-text-primary px-[16px] py-[12px] transition-all duration-300 focus:border-accent focus:bg-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,92,0,0.08)] appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a budget range</option>
                    <option value="starter">KES 20,000 – 40,000</option>
                    <option value="mid">KES 40,000 – 100,000</option>
                    <option value="custom">KES 100,000 – 250,000</option>
                    <option value="enterprise">KES 250,000+</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary select-none opacity-60">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-brief"
                  className="block font-body font-semibold text-[13px] text-text-primary mb-[8px] uppercase tracking-wide opacity-90"
                >
                  Project Brief
                </label>
                <textarea
                  id="contact-brief"
                  required
                  rows={4}
                  placeholder="Describe your goals, requirements, and features..."
                  value={formState.brief}
                  onChange={(e) => setFormState({ ...formState, brief: e.target.value })}
                  className="w-full bg-white/50 border border-border/85 rounded-[12px] font-body text-[15px] text-text-primary px-[16px] py-[12px] transition-all duration-300 placeholder:text-text-secondary placeholder:opacity-60 focus:border-accent focus:bg-white focus:outline-none focus:shadow-[0_0_20px_rgba(255,92,0,0.08)] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-white font-display font-bold text-[16px] py-[16px] rounded-[12px] border-none cursor-pointer transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(255,92,0,0.18)] hover:shadow-[0_8px_24px_rgba(255,92,0,0.28)]"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Brief
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right column — Quick Contact Channels */}
          <motion.div
            className="flex flex-col gap-[36px] justify-center lg:pl-6"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.4 }}
          >
            {/* Email card */}
            <div className="bg-white/30 border border-white/50 p-5 rounded-[16px] flex flex-col shadow-sm">
              <p className="font-body font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary mb-[6px]">
                Email Address
              </p>
              <a
                href="mailto:hi@manuutech.com"
                className="font-body font-bold text-[17px] text-text-primary hover:text-accent transition-colors duration-200 no-underline flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 text-accent" />
                hi@manuutech.com
                <ArrowRight className="w-3.5 h-3.5 text-text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* WhatsApp card */}
            <div className="bg-white/30 border border-white/50 p-5 rounded-[16px] flex flex-col shadow-sm">
              <p className="font-body font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary mb-[6px]">
                WhatsApp Support
              </p>
              <a
                href="https://wa.me/254758335592"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-[17px] text-text-primary hover:text-accent transition-colors duration-200 no-underline flex items-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                +254 758 335 592
                <ArrowRight className="w-3.5 h-3.5 text-text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Phone Call card */}
            <div className="bg-white/30 border border-white/50 p-5 rounded-[16px] flex flex-col shadow-sm">
              <p className="font-body font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary mb-[6px]">
                Call Directly
              </p>
              <a
                href="tel:+254758335592"
                className="font-body font-bold text-[17px] text-text-primary hover:text-accent transition-colors duration-200 no-underline flex items-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-accent" />
                +254 758 335 592
                <ArrowRight className="w-3.5 h-3.5 text-text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Calendly Booking Card */}
            <div className="bg-white/30 border border-white/50 p-5 rounded-[16px] flex flex-col shadow-sm">
              <p className="font-body font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary mb-[6px]">
                Schedule a Call
              </p>
              <a
                href="https://calendly.com/manuutechy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-bold text-[17px] text-accent hover:underline no-underline flex items-center gap-2 group"
              >
                Book a 30-minute discovery call
                <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Location card */}
            <div className="bg-white/30 border border-white/50 p-5 rounded-[16px] flex flex-col shadow-sm">
              <p className="font-body font-semibold text-[12px] uppercase tracking-[0.08em] text-text-secondary mb-[6px]">
                Based In
              </p>
              <p className="font-body font-bold text-[17px] text-text-primary flex items-center gap-2">
                <span className="text-[20px]">📍</span>
                Nairobi & Kisumu, Kenya
              </p>
              <p className="font-dm font-normal text-[13px] text-text-secondary mt-[6px]">
                GMT+3 · Open to local, hybrid, or remote contracts globally.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
