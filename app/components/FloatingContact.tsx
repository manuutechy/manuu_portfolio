'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Mail, X, Send, Check, Phone } from 'lucide-react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [formState, setFormState] = useState({ contact: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.contact || !formState.message) return

    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({ contact: '', message: '' })
        setIsOpen(false)
      }, 2000)
    }, 1500)
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center bg-white/70 border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[16px] text-text-primary cursor-pointer overflow-hidden py-3 px-4 rounded-pill select-none hover:border-accent/40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
        style={{ originY: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        layout
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-accent animate-pulse" />
          <AnimatePresence mode="popLayout">
            {(isHovered || isOpen) && (
              <motion.span
                className="font-body font-semibold text-[14px] whitespace-nowrap tracking-wide"
                initial={{ opacity: 0, width: 0, x: -10 }}
                animate={{ opacity: 1, width: 'auto', x: 0 }}
                exit={{ opacity: 0, width: 0, x: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                Talk to Manuu
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      {/* Glass Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/35 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Card */}
            <motion.div
              className="relative w-full max-w-[420px] bg-white/80 border border-white/50 rounded-[24px] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.15)] backdrop-blur-[24px] overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            >
              {/* Reflective top border highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/40 hover:bg-white/80 border border-border/20 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="mb-6">
                <span className="inline-block bg-accent/10 text-accent font-mono text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-pill mb-3">
                  Let&apos;s Connect
                </span>
                <h3 className="font-display font-bold text-[24px] text-text-primary mb-1">
                  Start a conversation
                </h3>
                <p className="font-body text-[14px] text-text-secondary leading-relaxed">
                  Emmanuel typically responds within a few hours. Choose your preferred channel.
                </p>
              </div>

              {/* Quick Options */}
              <div className="flex flex-col gap-3 mb-6">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/254758335592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-[16px] font-body font-medium no-underline transition-colors duration-200 shadow-[0_4px_16px_rgba(37,211,102,0.15)] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold leading-tight">Chat on WhatsApp</span>
                      <span className="text-[12px] opacity-85 font-normal">Fastest response</span>
                    </div>
                  </div>
                  <span className="text-[13px] bg-white/20 px-2.5 py-1 rounded-[8px] opacity-90 font-mono tracking-tight group-hover:bg-white/35 transition-colors">
                    0758335592
                  </span>
                </a>

                {/* Email Option */}
                <a
                  href="mailto:hi@manuutech.com"
                  className="flex items-center justify-between bg-white/40 hover:bg-white/80 border border-border/40 text-text-primary p-4 rounded-[16px] font-body font-medium no-underline transition-all duration-200 shadow-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-semibold leading-tight">Send an Email</span>
                      <span className="text-[12px] text-text-secondary font-normal">For detailed RFPs & projects</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-text-secondary bg-border/20 group-hover:bg-border/40 px-2.5 py-1 rounded-[8px] font-mono transition-colors">
                    hi@manuutech.com
                  </span>
                </a>
              </div>

              {/* Form Divider */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-[1px] bg-border/30" />
                <span className="text-[11px] font-mono text-text-secondary uppercase tracking-wider">or drop a quick line</span>
                <div className="flex-1 h-[1px] bg-border/30" />
              </div>

              {/* Quick message form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      className="absolute inset-0 bg-white/95 rounded-[12px] flex flex-col items-center justify-center text-center p-4 z-10"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                        <Check className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-display font-semibold text-[16px] text-text-primary mb-1">
                        Message Sent!
                      </h4>
                      <p className="font-body text-[13px] text-text-secondary">
                        Emmanuel will review this and respond shortly.
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <div>
                  <input
                    type="text"
                    placeholder="Your Email or Phone Number"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white/40 border border-border/60 rounded-[12px] px-4 py-3 font-body text-[14px] placeholder-text-secondary/70 focus:outline-none focus:border-accent focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Briefly, what are you looking to build?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full bg-white/40 border border-border/60 rounded-[12px] px-4 py-3 font-body text-[14px] placeholder-text-secondary/70 focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formState.contact || !formState.message}
                  className="w-full bg-accent hover:bg-accent-hover disabled:bg-border disabled:text-text-secondary text-white font-body font-medium text-[14px] py-3.5 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
