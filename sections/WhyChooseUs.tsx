'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: '✓',
      title: 'SPF Quality Seed',
      description: 'Specific Pathogen Free post larvae ensuring disease-free, healthy seed for optimal farm performance.',
    },
    {
      icon: '🔬',
      title: 'Scientific Hatchery Systems',
      description: 'State-of-the-art hatchery infrastructure with precision-controlled breeding environments.',
    },
    {
      icon: '🛡️',
      title: 'Strong Biosecurity',
      description: 'Rigorous biosecurity protocols protecting seed quality from contamination and disease.',
    },
    {
      icon: '💧',
      title: 'Water Quality Management',
      description: 'Advanced water treatment and monitoring systems maintaining optimal conditions.',
    },
    {
      icon: '👨‍🔬',
      title: 'Technical Support',
      description: 'Expert guidance and continuous support throughout your aquaculture journey.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Aquaculture',
      description: 'Environmentally responsible practices ensuring long-term industry sustainability.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-50 to-aqua-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">Why Choose Praveen Hatchery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in premium aquaculture solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-aqua-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
