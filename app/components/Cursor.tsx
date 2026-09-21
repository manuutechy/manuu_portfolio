'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const ring = ringRef.current
      const label = labelRef.current
      if (!ring || !label) return

      gsap.set(label, { xPercent: -50, yPercent: -50 })
      const xTo = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3' })
      const yTo = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3' })
      const lx = gsap.quickTo(label, 'x', { duration: 0.4, ease: 'power3' })
      const ly = gsap.quickTo(label, 'y', { duration: 0.4, ease: 'power3' })
      const controller = new AbortController()
      const { signal } = controller

      document.addEventListener(
        'pointermove',
        (event) => {
          xTo(event.clientX)
          yTo(event.clientY)
          lx(event.clientX)
          ly(event.clientY)
          gsap.to(ring, { autoAlpha: 1, duration: 0.25, overwrite: 'auto' })
        },
        { signal, passive: true }
      )

      document.addEventListener(
        'pointerover',
        (event) => {
          const element = event.target as Element | null
          const labelled = element?.closest<HTMLElement>('[data-cursor]')
          const interactive = element?.closest('a, button, summary, [data-tilt]')

          if (labelled) label.textContent = labelled.dataset.cursor ?? ''
          gsap.to(label, { autoAlpha: labelled ? 1 : 0, duration: 0.25, overwrite: 'auto' })
          gsap.set(ring, { mixBlendMode: labelled ? 'normal' : 'difference' })
          gsap.to(ring, {
            scale: labelled ? 3.6 : interactive ? 2.4 : 1,
            backgroundColor: labelled ? 'rgba(255,255,255,0.9)' : interactive ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0)',
            duration: 0.35,
            ease: 'power3.out',
          })
        },
        { signal }
      )

      document.documentElement.addEventListener(
        'pointerleave',
        () => {
          gsap.to(ring, { autoAlpha: 0, duration: 0.25 })
          gsap.to(label, { autoAlpha: 0, duration: 0.25 })
        },
        { signal }
      )

      return () => controller.abort()
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] -ml-[18px] -mt-[18px] h-9 w-9 rounded-full border border-white opacity-0 mix-blend-difference"
        style={{ visibility: 'hidden' }}
      />
      <span
        ref={labelRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[91] whitespace-nowrap text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-black opacity-0"
        style={{ visibility: 'hidden' }}
      />
    </>
  )
}
