'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import StickyNav from './StickyNav'
import { introsReady } from '../lib/transition'

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, ScrollToPlugin)

const FAILSAFE_MS = 4400
let mountedAt = 0
const cleanups: (() => void)[] = []

function all<T extends Element>(selector: string, root: ParentNode = document) {
  return Array.from(root.querySelectorAll<T>(selector))
}

function fontsReady() {
  const wait = new Promise<void>((resolve) => setTimeout(resolve, 1000))
  return Promise.race([document.fonts ? document.fonts.ready : wait, wait])
}

function revealAll() {
  if (document.querySelector('[data-hide]')) gsap.set('[data-hide]', { autoAlpha: 1 })
}

function padMasks(split: SplitText) {
  split.masks.forEach((mask) => {
    const el = mask as HTMLElement
    el.style.paddingBottom = '0.14em'
    el.style.marginBottom = '-0.14em'
  })
}

/* ---------- Entrances ---------- */

function charProximity(el: HTMLElement, host: Element) {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  const split = SplitText.create(el, { type: 'chars' })
  const chars = split.chars as HTMLElement[]
  const movers = chars.map((char) => gsap.quickTo(char, 'y', { duration: 0.5, ease: 'power3' }))
  const controller = new AbortController()
  const { signal } = controller

  host.addEventListener(
    'pointermove',
    (event) => {
      const pointer = event as PointerEvent
      chars.forEach((char, index) => {
        const rect = char.getBoundingClientRect()
        const dx = pointer.clientX - (rect.left + rect.width / 2)
        const dy = pointer.clientY - (rect.top + rect.height / 2)
        const falloff = Math.max(0, 1 - Math.hypot(dx, dy) / 260)
        movers[index](-falloff * falloff * 34)
      })
    },
    { signal }
  )
  host.addEventListener('pointerleave', () => movers.forEach((move) => move(0)), { signal })

  cleanups.push(() => {
    controller.abort()
    split.revert()
  })
}

function heroProximity(title: HTMLElement) {
  const hero = document.getElementById('top')
  if (hero) charProximity(title, hero)
}

function introHero() {
  const hero = document.getElementById('top')
  const title = hero?.querySelector<HTMLElement>('[data-hero-title]')
  if (!hero || !title) return false
  if (performance.now() - mountedAt > FAILSAFE_MS) {
    revealAll()
    return true
  }

  const hidden = all('[data-hide]', hero)
  const nav = hero.querySelector('[data-hero-nav]')
  const sub = hero.querySelector('[data-hero-sub]')
  const cue = hero.querySelector('[data-hero-cue]')
  const logos = all('[data-hero-logo]', hero)

  const split = SplitText.create(title, { type: 'lines,chars', mask: 'lines' })
  padMasks(split)
  gsap.set(hidden, { autoAlpha: 1 })

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out' },
    onComplete: () => {
      split.revert()
      heroProximity(title)
    },
  })
  tl.from(split.chars, { yPercent: 115, duration: 1.15, stagger: 0.035 }, 0.35)
  if (nav) tl.from(nav, { autoAlpha: 0, y: -10, duration: 0.9 }, 0.7)
  if (sub) tl.from(sub, { y: 18, autoAlpha: 0, duration: 1 }, 1.15)
  if (logos.length) tl.from(logos, { y: 28, autoAlpha: 0, duration: 1.1, stagger: 0.12 }, 1.3)
  if (cue) tl.from(cue, { autoAlpha: 0, duration: 1 }, 2)
  return true
}

function introPage() {
  const title = document.querySelector<HTMLElement>('[data-page-title]')
  if (!title) return false
  if (performance.now() - mountedAt > FAILSAFE_MS) {
    revealAll()
    return true
  }

  const hidden = all('[data-hide]')
  const items = all('[data-page-item]')
  const split = SplitText.create(title, { type: 'lines', mask: 'lines' })
  padMasks(split)
  gsap.set(hidden, { autoAlpha: 1 })

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: () => split.revert() })
  tl.from(split.lines, { yPercent: 115, duration: 1.2, stagger: 0.12 }, 0.1)
  tl.from(items, { y: 22, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, 0.25)
  return true
}

/* ---------- Ambient and scroll-linked ---------- */

function heroScroll() {
  const hero = document.getElementById('top')
  if (!hero) return

  const content = hero.querySelector('[data-hero-content]')
  if (content) {
    gsap.fromTo(
      content,
      { yPercent: 0, opacity: 1 },
      {
        yPercent: -12,
        opacity: 0.08,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom 30%', scrub: true },
      }
    )
  }

  const glow = hero.querySelector('[data-hero-glow]')
  if (glow) {
    gsap.to(glow, {
      scale: 1.14,
      transformOrigin: '50% 0%',
      duration: 7,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })
  }
}

function marquee() {
  const track = document.querySelector('[data-marquee-track]')
  if (!track) return

  const loop = gsap.to(track, { xPercent: -50, duration: 42, ease: 'none', repeat: -1 })
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const boost = Math.min(Math.abs(self.getVelocity()) / 300, 8)
      const dir = self.direction || 1
      const skew = gsap.utils.clamp(-10, 10, -self.getVelocity() / 140)
      gsap.to(track, {
        skewX: skew,
        duration: 0.25,
        overwrite: 'auto',
        onComplete: () => {
          gsap.to(track, { skewX: 0, duration: 0.9, ease: 'power3.out' })
        },
      })
      gsap.to(loop, {
        timeScale: dir * (1 + boost),
        duration: 0.3,
        overwrite: true,
        onComplete: () => {
          gsap.to(loop, { timeScale: dir, duration: 1.2 })
        },
      })
    },
  })
}

function hairlines() {
  all('.hairline').forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: '50% 0%' },
      {
        scaleY: 1,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: line, start: 'top 95%', once: true },
      }
    )
  })
}

function chapters() {
  all<HTMLElement>('[data-depth]').forEach((column) => {
    const depth = Number(column.dataset.depth) || 0
    const panel = column.closest('[data-panel]') ?? column
    gsap.fromTo(
      column,
      { yPercent: -3 * depth },
      {
        yPercent: 3 * depth,
        ease: 'none',
        scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    )
  })

  all('[data-rule]').forEach((rule) => {
    gsap.fromTo(
      rule,
      { scaleX: 0, transformOrigin: '0% 50%' },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'expo.out',
        scrollTrigger: { trigger: rule, start: 'top 90%', once: true },
      }
    )
  })

  all('[data-tile]').forEach((tile) => {
    gsap.from(tile, {
      clipPath: 'inset(0% 100% 0% 0% round 16px)',
      duration: 1.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: tile, start: 'top 88%', once: true },
    })
  })

  all('[data-clip]').forEach((frame) => {
    const img = frame.querySelector('[data-shot-img]')
    const tl = gsap.timeline({ scrollTrigger: { trigger: frame, start: 'top 86%', once: true } })
    tl.from(frame, { clipPath: 'inset(0% 0% 100% 0% round 20px)', duration: 1.3, ease: 'expo.inOut' })
    if (img) tl.fromTo(img, { scale: 1.22 }, { scale: 1.07, duration: 1.6, ease: 'expo.out' }, 0.1)
  })

  all('[data-shot-img]').forEach((img) => {
    const panel = img.closest('[data-panel], [data-clip]') ?? img
    gsap.fromTo(
      img,
      { yPercent: -3 },
      {
        yPercent: 3,
        ease: 'none',
        scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    )
  })

  all('dl').forEach((list) => {
    const facts = all('[data-fact]', list)
    if (!facts.length) return
    gsap.from(facts, {
      y: 26,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'expo.out',
      stagger: 0.09,
      scrollTrigger: { trigger: list, start: 'top 90%', once: true },
    })
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

function revealLines() {
  const targets = new Set<HTMLElement>(
    all<HTMLElement>('[data-reveal-lines], .prose-story h2, .prose-story blockquote')
  )
  targets.forEach((heading) => {
    const split = SplitText.create(heading, { type: 'lines', mask: 'lines' })
    padMasks(split)

    gsap.from(split.lines, {
      yPercent: 115,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: heading, start: 'top 90%', once: true },
      onComplete: () => {
        if (heading.hasAttribute('data-proximity')) {
          split.revert()
          charProximity(heading, heading.closest('section') ?? heading)
        }
      },
    })
  })
}

function footerName() {
  const name = document.querySelector<HTMLElement>('[data-footer-name]')
  if (!name) return

  const split = SplitText.create(name, { type: 'lines,chars', mask: 'lines' })
  padMasks(split)
  gsap.from(split.chars, {
    yPercent: 115,
    duration: 1.1,
    ease: 'expo.out',
    stagger: 0.03,
    scrollTrigger: { trigger: name, start: 'top 96%', once: true },
  })
}

function founderMark() {
  const mark = document.querySelector('[data-spin]')
  if (!mark) return
  gsap.fromTo(
    mark,
    { rotation: -20, yPercent: 8 },
    {
      rotation: 100,
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: mark.closest('section') ?? mark, start: 'top bottom', end: 'bottom top', scrub: true },
    }
  )
}

function journey() {
  const section = document.querySelector<HTMLElement>('[data-journey]')
  const track = document.querySelector<HTMLElement>('[data-journey-track]')
  if (!section || !track) return

  const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)
  const end = () => `+=${distance()}`

  const slide = gsap.to(track, {
    x: () => -distance(),
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })

  const progress = document.querySelector('[data-journey-progress]')
  if (progress) {
    gsap.to(progress, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end, scrub: true, invalidateOnRefresh: true },
    })
  }

  all('[data-journey-num]').forEach((num) => {
    const card = num.closest('[data-journey-card]') ?? num
    gsap.fromTo(
      num,
      { x: 70 },
      {
        x: -70,
        ease: 'none',
        scrollTrigger: { trigger: card, containerAnimation: slide, start: 'left 100%', end: 'right 0%', scrub: true },
      }
    )
  })

  all('[data-journey-card]').forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0.35, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        ease: 'none',
        scrollTrigger: { trigger: card, containerAnimation: slide, start: 'left 92%', end: 'left 60%', scrub: true },
      }
    )
  })
}

/* ---------- Scrolling helpers ---------- */

function scrollToTarget(target: string | number) {
  const root = document.documentElement
  root.style.scrollBehavior = 'auto'
  const restore = () => root.style.removeProperty('scroll-behavior')
  gsap.to(window, {
    scrollTo: { y: target, offsetY: 24, autoKill: true },
    duration: 1.4,
    ease: 'power4.inOut',
    onComplete: restore,
    onInterrupt: restore,
  })
}

function anchorLinks() {
  const controller = new AbortController()

  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element | null)?.closest('a')
      if (!anchor || !anchor.hash) return
      const url = new URL(anchor.href, window.location.href)
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) return
      if (!document.querySelector(url.hash)) return
      event.preventDefault()
      event.stopPropagation()
      scrollToTarget(url.hash)
      window.history.replaceState(null, '', url.hash)
    },
    { signal: controller.signal, capture: true }
  )

  return () => controller.abort()
}

function sectionRail() {
  const links = all<HTMLElement>('[data-rail-link]')
  if (!links.length) return

  const setActive = (id: string) => {
    links.forEach((link) => {
      const dot = link.querySelector('[data-rail-dot]')
      const active = link.dataset.railLink === id
      if (dot) gsap.to(dot, { opacity: active ? 1 : 0.4, scale: active ? 1.9 : 1, duration: 0.4, overwrite: true })
    })
  }

  links.forEach((link) => {
    const id = link.dataset.railLink ?? ''
    const section = document.getElementById(id)
    if (!section) return
    ScrollTrigger.create({
      trigger: section,
      start: 'top 55%',
      end: 'bottom 55%',
      onToggle: (self) => {
        if (self.isActive) setActive(id)
      },
    })
  })
}

function backToTop(button: HTMLElement | null, ring: SVGCircleElement | null, instant: boolean) {
  if (!button) return

  gsap.set(button, { autoAlpha: 0, scale: 0.8 })
  let shown = false

  const trigger = ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const show = self.scroll() > window.innerHeight * 1.1
      if (show === shown) return
      shown = show
      const vars = { autoAlpha: show ? 1 : 0, scale: show ? 1 : 0.8 }
      if (instant) gsap.set(button, vars)
      else gsap.to(button, { ...vars, duration: 0.4, ease: 'power3.out', overwrite: true })
    },
  })

  if (ring && !instant) {
    gsap.fromTo(
      ring,
      { strokeDashoffset: 138.23 },
      {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: true },
      }
    )
  }

  const onClick = () => {
    if (instant) window.scrollTo({ top: 0, behavior: 'auto' })
    else scrollToTarget(0)
  }
  button.addEventListener('click', onClick)

  return () => {
    trigger.kill()
    button.removeEventListener('click', onClick)
    gsap.set(button, { clearProps: 'all' })
  }
}

/* ---------- Navigation ---------- */

function stickyNav(instant: boolean) {
  const bar = document.querySelector<HTMLElement>('[data-sticky-nav]')
  if (!bar) return

  gsap.set(bar, { yPercent: -100, autoAlpha: 0 })
  let shown = false

  const setShown = (show: boolean) => {
    if (show === shown) return
    shown = show
    const vars = { yPercent: show ? 0 : -100, autoAlpha: show ? 1 : 0 }
    if (instant) {
      gsap.set(bar, vars)
    } else {
      gsap.to(bar, { ...vars, duration: show ? 0.55 : 0.35, ease: show ? 'expo.out' : 'power2.in', overwrite: true })
    }
  }

  const trigger = ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const threshold = document.getElementById('top') ? window.innerHeight * 0.85 : 360
      if (self.scroll() < threshold) return setShown(false)
      setShown(self.direction === -1)
    },
  })

  return () => {
    trigger.kill()
    gsap.set(bar, { clearProps: 'all' })
  }
}

/* ---------- Interaction ---------- */

function faqMotion() {
  const controller = new AbortController()
  const { signal } = controller

  all<HTMLDetailsElement>('details').forEach((item) => {
    const summary = item.querySelector('summary')
    const panel = item.querySelector<HTMLElement>('p')
    if (!summary || !panel) return

    summary.addEventListener(
      'click',
      (event) => {
        event.preventDefault()
        gsap.killTweensOf(panel)
        panel.style.overflow = 'hidden'
        const clear = () => gsap.set(panel, { clearProps: 'height,opacity,overflow' })

        if (item.open) {
          gsap.to(panel, {
            height: 0,
            opacity: 0,
            duration: 0.35,
            ease: 'power3.inOut',
            onComplete: () => {
              item.open = false
              clear()
            },
          })
        } else {
          item.open = true
          gsap.fromTo(
            panel,
            { height: 0, opacity: 0 },
            { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out', onComplete: clear }
          )
        }
      },
      { signal }
    )
  })

  return () => controller.abort()
}

function pointerEffects() {
  const controller = new AbortController()
  const { signal } = controller

  const hero = document.getElementById('top')
  const light = hero?.querySelector('[data-hero-light]')
  if (hero && light) {
    gsap.set(light, { xPercent: -50, yPercent: -50 })
    const xTo = gsap.quickTo(light, 'x', { duration: 0.9, ease: 'power3' })
    const yTo = gsap.quickTo(light, 'y', { duration: 0.9, ease: 'power3' })
    hero.addEventListener(
      'pointermove',
      (e) => {
        const r = hero.getBoundingClientRect()
        xTo(e.clientX - r.left)
        yTo(e.clientY - r.top)
      },
      { signal }
    )
    hero.addEventListener('pointerenter', () => gsap.to(light, { autoAlpha: 1, duration: 0.6 }), { signal })
    hero.addEventListener('pointerleave', () => gsap.to(light, { autoAlpha: 0, duration: 0.6 }), { signal })
  }

  all<HTMLElement>('[data-tilt], [data-shot]').forEach((el) => {
    gsap.set(el, { transformPerspective: 1000 })
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.7, ease: 'power3' })
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.7, ease: 'power3' })
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect()
        ry(((e.clientX - r.left) / r.width - 0.5) * 7)
        rx(-((e.clientY - r.top) / r.height - 0.5) * 7)
      },
      { signal }
    )
    el.addEventListener(
      'pointerleave',
      () => {
        rx(0)
        ry(0)
      },
      { signal }
    )
  })

  all<HTMLElement>('[data-spot]').forEach((el) => {
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      },
      { signal }
    )
  })

  all<HTMLElement>('[data-scramble]').forEach((el) => {
    const original = el.textContent ?? ''
    const host = el.closest('a') ?? el
    host.addEventListener(
      'pointerenter',
      () => {
        gsap.to(el, {
          duration: 0.7,
          ease: 'none',
          scrambleText: { text: original, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', speed: 0.8, revealDelay: 0.15 },
        })
      },
      { signal }
    )
  })

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

/* ---------- Component ---------- */

export default function Motion() {
  const barRef = useRef<HTMLDivElement>(null)
  const topRef = useRef<HTMLButtonElement>(null)
  const ringRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    mountedAt = performance.now()
    const mm = gsap.matchMedia()
    const bar = barRef.current

    mm.add('(prefers-reduced-motion: reduce)', () => {
      revealAll()
      const cleanNav = stickyNav(true)
      const cleanTop = backToTop(topRef.current, null, true)
      return () => {
        cleanNav?.()
        cleanTop?.()
      }
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

      Promise.all([fontsReady(), introsReady()]).then(() => {
        if (!alive) return
        ctx.add(() => {
          if (!introHero()) introPage()
          founderFill()
          founderMark()
          revealLines()
          footerName()
          ScrollTrigger.refresh()
          sectionRail()
        })
      })

      heroScroll()
      marquee()
      hairlines()
      chapters()
      counters()
      const cleanNav = stickyNav(false)
      const cleanTop = backToTop(topRef.current, ringRef.current, false)
      const cleanAnchors = anchorLinks()

      return () => {
        alive = false
        cleanNav?.()
        cleanTop?.()
        cleanAnchors()
        cleanups.splice(0).forEach((fn) => fn())
      }
    })

    mm.add('(prefers-reduced-motion: no-preference)', () => faqMotion())

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => journey())

    mm.add(
      '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
      () => pointerEffects()
    )

    return () => mm.revert()
  }, [])

  return (
    <>
      <StickyNav />
      <button
        ref={topRef}
        data-top
        type="button"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[oklch(0.08_0.003_260/0.92)] text-fg"
      >
        <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
          <circle cx="24" cy="24" r="22" fill="none" stroke="rgb(255 255 255 / 0.16)" strokeWidth="1.5" />
          <circle
            ref={ringRef}
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="138.23"
            strokeDashoffset="138.23"
          />
        </svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        ref={barRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[2px] w-full bg-fg"
        style={{ transform: 'scaleX(0)', transformOrigin: '0% 50%' }}
      />
    </>
  )
}
