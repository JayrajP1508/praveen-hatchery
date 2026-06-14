'use client'

import { useEffect, useState } from 'react'

export function useScrollDepth() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const depth = Math.min(currentScrollY / documentHeight, 1)

      setScrollY(currentScrollY)
      setScrollDepth(depth)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, scrollDepth }
}

export function useParallax(speed: number = 0.5) {
  const { scrollY } = useScrollDepth()
  return scrollY * speed
}
