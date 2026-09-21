'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const FAILSAFE_MS = 3400

function all<T extends Element>(selector: string, root: ParentNode = document) {
  return Array.from(root.querySelectorAll<T>(selector))
}

function fontsReady() {
  const wait = new Promise<void>((resolve) => setTimeout(resolve, 1000))
  return Promise.race([document.fonts ? document.fonts.ready : wait, wait])
}

function revealAll() {
  gsap.set('[data-hide]', { autoAlpha: 1 })
}

function padMasks(split: SplitText) {
  split.masks.forEach((mask) => {
    const el = mask as HTMLElement
    el.style.paddingBottom = '0.14em'
    el.style.marginBottom = '-0.14em'
  })
}

function introHero() {
  const hero = document.getElementById('top')
  const title = hero?.querySelector<HTMLElement>('[data-hero-title]')
  if (!hero || !title) return revealAll()
  if (performance.now() > FAILSAFE_MS) return revealAll()

  const hidden = all('[data-hide]', hero)
  const frame = hero.querySelector('[data-portrait-frame]')
  const photo = hero.querySelector('[data-portrait]')
  const nav = hero.querySelector('[data-hero-nav]')
  const sub = hero.querySelector('[data-hero-sub]')
  const cue = hero.querySelector('[data-hero-cue]')

  const split = SplitText.create(title, { type: 'lines,chars', mask: 'lines' })
  padMasks(split)

  gsap.set(hidden, { autoAlpha: 1 })

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out' },
    onComplete: () => split.revert(),
  })

  if (frame) tl.from(frame, { autoAlpha: 0, duration: 2.2, ease: 'power2.out' }, 0)
  if (photo) tl.from(photo, { scale: 1.14, duration: 3, ease: 'power3.out' }, 0)
  tl.from(split.chars, { yPercent: 115, duration: 1.15, stagger: 0.035 }, 0.35)
  if (nav) tl.from(nav, { autoAlpha: 0, y: -10, duration: 0.9 }, 0.7)
  if (sub) tl.from(sub, { y: 18, autoAlpha: 0, duration: 1 }, 1.15)
  if (cue) tl.from(cue, { autoAlpha: 0, duration: 1 }, 1.7)
}

function heroScroll() {
  const hero = document.getElementById('top')
  const photo = hero?.querySelector('[data-portrait]')
  if (!hero || !photo) return

  gsap.to(photo, {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  })
}

function logoWall() {
  const logos = all('[data-logo]')
  if (!logos.length) return

  gsap.from(logos, {
    y: 22,
    autoAlpha: 0,
    duration: 1,
    ease: 'expo.out',
    stagger: 0.12,
    scrollTrigger: { trigger: '#companies', start: 'top 82%', once: true },
  })
}

function counters() {
  all<HTMLElement>('[data-count]').forEach((el) => {
    const to = Number(el.dataset.count)
    if (!Number.isFinite(to)) return
    const prefix = el.dataset.prefix ?? ''
    const suffix = el.dataset.suffix ?? ''
    const final = el.textContent ?? ''
    const state = { value: 0 }

    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.to(state, {
          value: to,
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => {
            el.textContent = prefix + Math.round(state.value).toLocaleString('en-US') + suffix
          },
          onComplete: () => {
            el.textContent = final
          },
        })
      },
    })
  })
}

function founderFill() {
  const heading = document.querySelector<HTMLElement>('[data-fill]')
  if (!heading) return

  const split = SplitText.create(heading, { type: 'words' })
  gsap.fromTo(
    split.words,
    { opacity: 0.28 },
    {
      opacity: 1,
      ease: 'none',
      stagger: 0.12,
      scrollTrigger: { trigger: heading, start: 'top 82%', end: 'bottom 48%', scrub: true },
    }
  )
}

function contactReveal() {
  const heading = document.querySelector<HTMLElement>('[data-reveal-lines]')
  if (!heading) return

  const split = SplitText.create(heading, { type: 'lines', mask: 'lines' })
  padMasks(split)

  gsap.from(split.lines, {
    yPercent: 115,
    duration: 1.1,
    ease: 'expo.out',
    stagger: 0.1,
    scrollTrigger: { trigger: heading, start: 'top 88%', once: true },
  })
}

function magnetic() {
  const controller = new AbortController()
  const { signal } = controller

  all<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * 0.22)
        yTo((e.clientY - (r.top + r.height / 2)) * 0.3)
      },
      { signal }
    )
    el.addEventListener(
      'pointerleave',
      () => {
        xTo(0)
        yTo(0)
      },
      { signal }
    )
  })

  return () => controller.abort()
}

export default function Motion() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    const bar = barRef.current

    mm.add('(prefers-reduced-motion: reduce)', () => {
      revealAll()
    })

    mm.add('(prefers-reduced-motion: no-preference)', (ctx) => {
      let alive = true

      if (bar) {
        gsap.set(bar, { scaleX: 0, transformOrigin: '0% 50%' })
        gsap.to(bar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.25,
          },
        })
      }

      fontsReady().then(() => {
        if (!alive) return
        ctx.add(() => {
          introHero()
          founderFill()
          contactReveal()
          ScrollTrigger.refresh()
        })
      })

      heroScroll()
      logoWall()
      counters()

      return () => {
        alive = false
      }
    })

    mm.add(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
      () => magnetic()
    )

    return () => mm.revert()
  }, [])

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full bg-fg"
      style={{ transform: 'scaleX(0)', transformOrigin: '0% 50%' }}
    />
  )
}
