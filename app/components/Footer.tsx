import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

const socialLinks = [
  { label: 'GitHub', icon: GithubIcon, href: 'https://github.com/manuutechy' },
  { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com/in/manuutechy' },
  { label: 'X', icon: XIcon, href: 'https://x.com/manuutechy' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/254758335592' },
]

export default function Footer() {
  return (
    <footer
      className="bg-[#0A0A0A] text-white pt-[80px] pb-[40px]"
      aria-label="Site footer"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[40px] lg:gap-[64px] items-start">
          
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start">
            <span className="font-sora font-bold text-[22px] text-white tracking-tight">
              Emmanuel Charles
            </span>
            <p className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.5)] mt-[8px] leading-[1.6]">
              Software Engineer. System Architect. Digital Product Builder.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-[16px] mt-[24px]">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgba(255,255,255,0.4)] hover:text-accent transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <span className="font-dm font-medium text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.35)] mb-[20px] block">
              Navigation
            </span>
            <div className="flex flex-col">
              <Link
                href="/projects"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Work
              </Link>
              <Link
                href="/services"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Process
              </Link>
              <Link
                href="/contact"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3 — Projects */}
          <div>
            <span className="font-dm font-medium text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.35)] mb-[20px] block">
              Projects
            </span>
            <div className="flex flex-col">
              <a
                href="https://github.com/manuutechy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Edyfra
              </a>
              <a
                href="https://belloriabeauty.store"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Belloria Beauty
              </a>
              <a
                href="https://munchify.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Munchify
              </a>
              <a
                href="https://plottwear.store"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Plott Wear
              </a>
              <a
                href="https://avarahomes.site"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] hover:text-white transition-colors duration-200 leading-[2.8] no-underline"
              >
                Avara Homes
              </a>
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <span className="font-dm font-medium text-[12px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.35)] mb-[20px] block">
              Contact
            </span>
            <div className="flex flex-col font-dm font-normal text-[15px] text-[rgba(255,255,255,0.6)] leading-[2.8]">
              <span className="truncate">hi@manuutech.com</span>
              <span>+254 758 335 592</span>
              <span>Based in Kenya</span>
              <span>Open to remote projects globally</span>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-[rgba(255,255,255,0.08)] mt-[64px] pt-[32px] flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-0">
          <p className="font-dm font-normal text-[13px] text-[rgba(255,255,255,0.3)] text-center md:text-left">
            &copy; 2025 Emmanuel Charles. All rights reserved.
          </p>
          <p className="font-dm font-normal text-[13px] text-[rgba(255,255,255,0.3)] italic text-center md:text-right">
            Built with Next.js and precision.
          </p>
        </div>

      </div>
    </footer>
  )
}
