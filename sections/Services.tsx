'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '🏭',
      title: 'NRC (Nauplii Rearing Center)',
      description: 'State-of-the-art Nauplii Rearing Center with controlled environment and advanced monitoring systems for optimal larvae development.',
    },
    {
      icon: '🦐',
      title: 'Post Larvae Supply',
      description: 'Premium SPF post larvae with high survival rates, disease resistance, and consistent growth performance.',
    },
    {
      icon: '🧬',
      title: 'Broodstock Management',
      description: 'Scientific broodstock selection and management ensuring superior genetic quality and productivity.',
    },
    {
      icon: '💧',
      title: 'Water Treatment',
      description: 'Advanced water treatment systems ensuring optimal water quality for healthy seed production.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive aquaculture solutions for sustainable shrimp farming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/services" className="text-aqua-600 font-medium hover:text-aqua-700 inline-flex items-center">
                Learn More
                <span className="ml-2">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
