import Image from 'next/image'
import Nav from './Nav'

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate overflow-hidden bg-night text-fg min-h-[100svh] flex flex-col"
    >
      <div data-portrait-frame data-hide className="absolute inset-0 -z-20 flex justify-center">
        <div data-portrait className="hero-photo relative h-full aspect-square max-w-full">
          <Image
            src="/images/portrait.png"
            alt="Emmanuel Charles speaking on stage with a microphone"
            fill
            priority
            sizes="(min-width: 1100px) 1100px, 100vw"
            className="object-cover object-[50%_30%] grayscale contrast-[1.08] brightness-[0.9]"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--color-base)_1%,transparent_46%),linear-gradient(to_bottom,rgb(0_0_0/0.55),transparent_24%)]"
      />

      <Nav />

      <div className="relative flex-1 flex flex-col items-center justify-end text-center px-6 pt-32 pb-[15svh]">
        <h1
          data-hero-title
          data-hide
          className="display uppercase text-[clamp(2.75rem,9vw,7.25rem)] tracking-[0.01em] text-fg [text-shadow:0_2px_48px_rgb(0_0_0/0.6)]"
        >
          Emmanuel <br className="sm:hidden" />
          Charles
        </h1>
        <p
          data-hero-sub
          data-hide
          className="mt-6 text-[0.9375rem] sm:text-[1.0625rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-dim"
        >
          Founder of Munchify, Cyzora and Zyra Net
        </p>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <a
          data-hero-cue
          data-hide
          href="#companies"
          aria-label="Scroll to the companies"
          className="p-3 text-dim hover:text-fg transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}
