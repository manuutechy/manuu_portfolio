'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { holdIntros, releaseIntros } from '../lib/transition'

const SEEN_KEY = 'curtain-seen'

export default function Curtain() {
  const router = useRouter()
  const pathname = usePathname()
  const curtainRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const busy = useRef(false)
  const fallback = useRef<ReturnType<typeof setTimeout> | null>(null)
  const reduced = useRef(false)

  const cover = (href: string) => {
    const curtain = curtainRef.current
    const mark = markRef.current
    const count = countRef.current
    if (!curtain || !mark || !count || busy.current) return
    busy.current = true
    holdIntros()
    gsap.set(curtain, { autoAlpha: 1, yPercent: 100 })
    gsap.set(mark, { autoAlpha: 1, scale: 1, y: 0 })
    gsap.set(count, { autoAlpha: 0 })
    gsap.to(curtain, {
      yPercent: 0,
      duration: 0.6,
      ease: 'power3.inOut',
      onComplete: () => {
        router.push(href)
        fallback.current = setTimeout(uncover, 4500)
      },
    })
  }

  const uncover = () => {
    const curtain = curtainRef.current
    if (!curtain || !busy.current) return
    if (fallback.current) clearTimeout(fallback.current)
    gsap
      .timeline({
        onComplete: () => {
          gsap.set(curtain, { autoAlpha: 0, yPercent: 100 })
          busy.current = false
        },
      })
      .to(curtain, { yPercent: -100, duration: 0.85, ease: 'expo.inOut' })
      .add(releaseIntros, '-=0.5')
  }

  useEffect(() => {
    const curtain = curtainRef.current
    const mark = markRef.current
    const count = countRef.current
    if (!curtain || !mark || !count) return

    curtain.style.animation = 'none'
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let seen = false
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {
      seen = false
    }

    if (reduced.current || seen) {
      gsap.set(curtain, { autoAlpha: 0, yPercent: 100 })
      return
    }

    holdIntros()
    busy.current = true
    const counter = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        busy.current = false
        try {
          sessionStorage.setItem(SEEN_KEY, '1')
        } catch {
          /* ignore */
        }
      },
    })
    tl.from(mark, { scale: 0.7, autoAlpha: 0, duration: 0.6, ease: 'expo.out' })
      .to(
        counter,
        {
          value: 100,
          duration: 1.1,
          ease: 'power2.inOut',
          onUpdate: () => {
            count.textContent = String(Math.round(counter.value)).padStart(3, '0')
          },
        },
        0.1
      )
      .to([mark, count], { autoAlpha: 0, y: -12, duration: 0.35, ease: 'power2.in' }, '+=0.05')
      .to(curtain, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '>-0.05')
      .add(releaseIntros, '-=0.55')
      .set(curtain, { autoAlpha: 0, yPercent: 100 })

    const skip = () => tl.timeScale(5)
    curtain.addEventListener('click', skip)
    const safety = setTimeout(() => tl.progress(1), 5000)

    return () => {
      clearTimeout(safety)
      curtain.removeEventListener('click', skip)
      tl.kill()
      releaseIntros()
    }
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (reduced.current || event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element | null)?.closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin) return
      if (url.pathname === window.location.pathname && url.search === window.location.search) return
      event.preventDefault()
      event.stopPropagation()
      cover(url.pathname + url.search + url.hash)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!busy.current) return
    if (!window.location.hash) window.scrollTo(0, 0)
    uncover()
  }, [pathname])

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="curtain fixed inset-0 z-[80] items-center justify-center bg-deep"
    >
      <div className="flex flex-col items-center gap-6">
        <div ref={markRef}>
          <Image src="/images/logo-mark.png" alt="" width={503} height={512} loading="eager" className="h-16 w-auto" />
        </div>
        <span
          ref={countRef}
          className="text-[0.8125rem] tracking-[0.35em] text-dim [font-variant-numeric:tabular-nums]"
        >
          000
        </span>
      </div>
    </div>
  )
}
