'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InfrastructurePage() {
  const facilities = [
    {
      title: 'Hatchery Systems',
      image: '/images/infrastructure/hatchery.jpg',
      description: 'State-of-the-art hatchery tanks with climate control and automated monitoring systems for optimal larvae production.',
      features: ['Climate-controlled environment', 'Automated monitoring', 'High-capacity tanks', 'Advanced filtration'],
    },
    {
      title: 'Water Treatment Facilities',
      image: '/images/infrastructure/water-treatment.jpg',
      description: 'Multi-stage water treatment systems ensuring the highest water quality standards for seed production.',
      features: ['Multi-stage filtration', 'UV sterilization', 'Ozonation systems', 'Continuous quality monitoring'],
    },
    {
      title: 'Laboratory Facilities',
      image: '/images/infrastructure/laboratory.jpg',
      description: 'Advanced laboratory equipped with modern testing equipment for quality assurance and disease screening.',
      features: ['PCR testing', 'Microscopy analysis', 'Water quality testing', 'Disease screening'],
    },
    {
      title: 'Nursery Systems',
      image: '/images/infrastructure/nursery-systems.jpg',
      description: 'Specialized nursery tanks designed for optimal post larvae development and acclimatization.',
      features: ['Controlled environment', 'Optimal stocking density', 'Regular monitoring', 'Gradual acclimatization'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-600 to-primary-700"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white/90 text-sm font-medium">Our Infrastructure</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                World-Class Facilities
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                State-of-the-art infrastructure for superior seed production and quality assurance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-80">
                    <Image src={facility.image} alt={facility.title} fill className="object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary-800 mb-4">{facility.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{facility.description}</p>
                    <h4 className="font-semibold text-primary-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {facility.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <span className="text-aqua-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
