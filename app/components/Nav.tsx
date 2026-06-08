'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Work', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About Me', href: '/about' },
  { label: 'Contact Me', href: '/contact' },
]

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverDark, setIsOverDark] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect when the nav overlaps dark-background sections
  useEffect(() => {
    const darkSections = Array.from(
      document.querySelectorAll<HTMLElement>(
        '#munchify-spotlight, #social-proof, [class*="bg-[#0A0A0A]"]'
      )
    )
    if (darkSections.length === 0) return

    const visibleSet = new Set<Element>()

    const updateObserver = () => {
      const navHeight = 72
      const bottomMargin = -(window.innerHeight - navHeight)
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSet.add(entry.target)
            } else {
              visibleSet.delete(entry.target)
            }
          })
          setIsOverDark(visibleSet.size > 0)
        },
        {
          rootMargin: `0px 0px ${bottomMargin}px 0px`,
          threshold: 0,
        }
      )
      darkSections.forEach((section) => obs.observe(section))
      return obs
    }

    let obs = updateObserver()

    const handleResize = () => {
      obs?.disconnect()
      visibleSet.clear()
      obs = updateObserver()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      obs?.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  // When nav is transparent (not scrolled) and over a dark section, use light text
  const lightText = isOverDark && !isScrolled

  return (
    <>
      <nav
        className="fixed z-50 left-1/2 -translate-x-1/2"
        style={{
          width: isScrolled ? 'calc(100% - 32px)' : '100%',
          maxWidth: isScrolled ? '1200px' : '100%',
          top: isScrolled ? '16px' : '0px',
          borderRadius: isScrolled ? '20px' : '0px',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.45)' : 'transparent',
          border: isScrolled ? '1px solid rgba(255, 255, 255, 0.55)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 16px 36px -12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.01), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)' : 'none',
          backdropFilter: isScrolled ? 'blur(28px) saturate(210%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(28px) saturate(210%)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-label="Main navigation"
      >
        <div 
          className="max-w-content mx-auto px-6 lg:px-8 flex items-center justify-between"
          style={{
            height: isScrolled ? '60px' : '72px',
            transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <Link
            href="/"
            className="font-display font-semibold text-[17px] no-underline flex items-center gap-[8px] transition-colors duration-300"
            style={{ color: lightText ? '#FFFFFF' : undefined }}
          >
            Emmanuel Charles
            <span className="w-[6px] h-[6px] rounded-full bg-accent" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative font-body font-medium text-[15px] tracking-[0.01em] transition-colors duration-200 no-underline py-[4px]"
                    style={{
                      color: isActive
                        ? 'var(--color-accent)'
                        : lightText
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'var(--color-text-secondary)',
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white font-body font-medium text-[14px] px-[22px] py-[10px] rounded-pill transition-colors duration-200 no-underline"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-[22px] gap-[8px] bg-transparent border-none cursor-pointer p-0"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
          >
            <span className={`block w-full h-[2px] transition-colors duration-300 ${lightText ? 'bg-white' : 'bg-text-primary'}`} />
            <span className={`block w-full h-[2px] transition-colors duration-300 ${lightText ? 'bg-white' : 'bg-text-primary'}`} />
            <span className={`block w-full h-[2px] transition-colors duration-300 ${lightText ? 'bg-white' : 'bg-text-primary'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-bg-primary flex flex-col lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex justify-between items-center p-6 pt-[24px]">
              <Link
                href="/"
                onClick={() => setIsDrawerOpen(false)}
                className="font-display font-semibold text-[17px] text-text-primary no-underline"
              >
                Emmanuel Charles
              </Link>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="bg-transparent border-none cursor-pointer p-0 text-text-primary"
                aria-label="Close navigation menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-start px-[24px] pt-[32px] flex-1">
              <div className="flex flex-col gap-[32px] w-full">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsDrawerOpen(false)}
                      className="font-display font-semibold text-[28px] no-underline transition-colors duration-200"
                      style={{
                        color: isActive ? 'var(--color-accent)' : 'var(--color-text-primary)',
                      }}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
              <div className="mt-auto w-full pb-[40px] pt-[40px]">
                <Link
                  href="/contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white font-body font-medium text-[16px] py-[16px] rounded-pill transition-colors duration-200 no-underline"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
