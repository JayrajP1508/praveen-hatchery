'use client'

import { useEffect, useRef } from 'react'

export default function WaveOverlay() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005

      const path1 = svgRef.current?.querySelector('#wave1')
      const path2 = svgRef.current?.querySelector('#wave2')

      if (path1 && path2) {
        const wave1Y = Math.sin(time) * 3
        const wave2Y = Math.sin(time + Math.PI) * 2

        path1.setAttribute('transform', `translate(0, ${wave1Y})`)
        path2.setAttribute('transform', `translate(0, ${wave2Y})`)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <svg
        ref={svgRef}
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(19, 194, 194, 0.1)" />
            <stop offset="100%" stopColor="rgba(12, 90, 138, 0.05)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(12, 90, 138, 0.08)" />
            <stop offset="100%" stopColor="rgba(19, 194, 194, 0.03)" />
          </linearGradient>
        </defs>
        
        <path
          id="wave1"
          fill="url(#waveGradient1)"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
        
        <path
          id="wave2"
          fill="url(#waveGradient2)"
          d="M0,64L48,74.7C96,85,192,107,288,112C384,117,480,107,576,90.7C672,75,768,53,864,58.7C960,64,1056,96,1152,106.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </div>
  )
}
