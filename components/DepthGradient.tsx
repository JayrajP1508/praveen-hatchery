'use client'

import { useEffect, useState } from 'react'

export default function DepthGradient() {
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const scrolled = window.scrollY
      const depth = Math.min(scrolled / documentHeight, 1)
      setScrollDepth(depth)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate color based on depth (lighter at top, deeper blue as you scroll)
  const getGradientColor = () => {
    const startColor = { r: 230, g: 247, b: 255 } // Very light blue
    const endColor = { r: 6, g: 53, b: 88 } // Deep ocean blue

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollDepth * 0.3)
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollDepth * 0.3)
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollDepth * 0.3)

    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-colors duration-300"
      style={{
        background: `linear-gradient(to bottom, ${getGradientColor()}, transparent 60%)`,
        opacity: 0.15,
      }}
    />
  )
}
