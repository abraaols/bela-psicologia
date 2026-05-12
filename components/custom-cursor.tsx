'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('a, button, [role="button"], input, label, [tabindex]')) {
        setIsHovering(true)
      }
    }

    const onLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isVisible])

  if (isMobile) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-primary/40"
        animate={{
          x: position.x - (isHovering ? 20 : 16),
          y: position.y - (isHovering ? 20 : 16),
          width: isHovering ? 40 : 32,
          height: isHovering ? 40 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.5 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: isVisible ? (isHovering ? 0 : 0.7) : 0,
        }}
        style={{ width: 6, height: 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.2 }}
      />
    </>
  )
}
