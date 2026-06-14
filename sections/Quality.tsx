'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Quality() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const qualityFeatures = [
    {
      icon: '🦠',
      title: 'Disease Prevention',
      description: 'Comprehensive disease screening and prevention protocols ensuring pathogen-free seed production.',
    },
    {
      icon: '🔬',
      title: 'Scientific Testing',
      description: 'Regular laboratory testing and quality checks at every stage of the production cycle.',
    },
    {
      icon: '💧',
      title: 'Water Quality Monitoring',
      description: 'Continuous monitoring of water parameters to maintain optimal conditions for larvae development.',
    },
    {
      icon: '🏭',
      title: 'Controlled Systems',
      description: 'Climate-controlled hatchery environments with automated monitoring and management systems.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">Quality & Biosecurity</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uncompromising standards in seed quality and biosecurity management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-primary-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
