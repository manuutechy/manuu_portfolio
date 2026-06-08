'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Detect mobile/touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    setIsVisible(true)

    // Add class to hide default cursor
    document.body.classList.add('custom-cursor-active')

    const mouse = { x: 0, y: 0 }
    const dot = { x: 0, y: 0 }
    const circle = { x: 0, y: 0 }
    let isHovered = false
    let isClicked = false
    let scrollSpeed = 0
    let lastScrollY = window.scrollY

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseDown = () => {
      isClicked = true
    }

    const handleMouseUp = () => {
      isClicked = false
    }

    // Handle Hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      // Check if target or parent is a link, button, or input
      const interactive = target.closest('a, button, input, textarea, select, [role="button"], .hover-target')
      if (interactive) {
        isHovered = true
      } else {
        isHovered = false
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown, { passive: true })
    window.addEventListener('mouseup', handleMouseUp, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    let lastTime = performance.now()
    let frameId: number

    const updatePosition = (time: number) => {
      // Interpolate dot (fast)
      dot.x += (mouse.x - dot.x) * 0.35
      dot.y += (mouse.y - dot.y) * 0.35

      // Interpolate circle (trailing spring effect)
      circle.x += (mouse.x - circle.x) * 0.12
      circle.y += (mouse.y - circle.y) * 0.12

      // Calculate speed and angle for velocity distortion
      const dx = mouse.x - circle.x
      const dy = mouse.y - circle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx)

      // Calculate scroll speed distortion
      const currentScrollY = window.scrollY
      const scrollDiff = Math.abs(currentScrollY - lastScrollY)
      lastScrollY = currentScrollY
      scrollSpeed += (scrollDiff - scrollSpeed) * 0.1

      // Combine cursor speed and scroll speed for scaling
      const speed = distance + scrollSpeed * 0.8
      const maxScale = isHovered ? 2.2 : 1.4
      const scaleX = isHovered ? 1.8 : 1 + Math.min(speed * 0.008, 0.4)
      const scaleY = isHovered ? 1.8 : 1 - Math.min(speed * 0.005, 0.3)

      // Apply styles directly to DOM elements to bypass React renders (buttery smooth 120fps)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${isClicked ? 0.6 : 1})`
        dotRef.current.style.opacity = '1'
      }

      if (circleRef.current) {
        // Adjust style based on hover / click states
        if (isHovered) {
          circleRef.current.style.backgroundColor = 'rgba(255, 92, 0, 0.08)'
          circleRef.current.style.borderColor = 'rgba(255, 92, 0, 0.8)'
        } else {
          circleRef.current.style.backgroundColor = 'transparent'
          circleRef.current.style.borderColor = 'rgba(255, 92, 0, 0.45)'
        }

        if (isClicked) {
          circleRef.current.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0) scale(0.7)`
        } else {
          // If moving or scrolling, apply squeeze-stretch relative to vector angle
          if (distance > 1 || scrollSpeed > 1) {
            circleRef.current.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`
          } else {
            circleRef.current.style.transform = `translate3d(${circle.x}px, ${circle.y}px, 0) scale(${scaleX})`
          }
        }
        circleRef.current.style.opacity = '1'
      }

      frameId = requestAnimationFrame(updatePosition)
    }

    frameId = requestAnimationFrame(updatePosition)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(frameId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* CSS Styles to hide default cursor globally */}
      <style jsx global>{`
        @media (pointer: fine) {
          .custom-cursor-active,
          .custom-cursor-active a,
          .custom-cursor-active button,
          .custom-cursor-active input,
          .custom-cursor-active textarea,
          .custom-cursor-active select,
          .custom-cursor-active [role="button"] {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-accent rounded-full pointer-events-none z-[9999] opacity-0 -ml-[3px] -mt-[3px] transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Trailing Outer Circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-[32px] h-[32px] border border-accent/45 rounded-full pointer-events-none z-[9998] opacity-0 -ml-[16px] -mt-[16px] transition-[opacity,background-color,border-color] duration-300 ease-out"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
