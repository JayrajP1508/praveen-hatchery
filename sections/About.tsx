'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  // Subtle parallax effect for image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [20, -20])

  const stats = [
    { label: 'Quality Seed Production', icon: '🦐' },
    { label: 'Trusted Farmer Network', icon: '🤝' },
    { label: 'Sustainable Practices', icon: '🌱' },
    { label: 'Technical Expertise', icon: '🔬' },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ y: imageY }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/about.jpg"
              alt="About Praveen Hatchery"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-primary-800 mb-6">
              Welcome to Praveen Hatcheries
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                A trusted name in advanced aquaculture and premium Vannamei post-larvae production. With decades of expertise, we have set new benchmarks in shrimp seed quality through scientific innovation, precision breeding, and strong global genetic collaborations.
              </p>
              <p>
                At Praveen Hatcheries, we believe quality seed is the foundation of every successful harvest. Our Specific Pathogen Free (SPF) post-larvae are carefully developed to ensure high survival rates, faster growth, strong adaptability, and consistent farm performance.
              </p>
              <p>
                More than a hatchery, we are a growth partner for shrimp farmers, exporters, and aquaculture businesses. Through sustainable practices, advanced technology, and unwavering farmer support, we continue to power profitable and responsible aquaculture across India and beyond.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-sm font-medium text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
