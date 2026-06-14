'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      title: 'Nauplii Production',
      image: '/images/services/nauplii.jpg',
      description: 'High-quality nauplii production with strict biosecurity protocols and optimal hatchery conditions.',
      benefits: ['Disease-free production', 'High survival rates', 'Optimal nutrition', 'Quality assurance'],
      process: 'Our nauplii production follows rigorous protocols from broodstock selection to hatching, ensuring the highest quality seed for your farm.',
    },
    {
      title: 'Post Larvae Supply',
      image: '/images/services/postlarvae.jpg',
      description: 'Premium SPF post larvae with high survival rates, disease resistance, and consistent growth performance.',
      benefits: ['SPF certified', 'High growth rates', 'Disease resistance', 'Consistent quality'],
      process: 'Each batch of post larvae undergoes comprehensive testing and quality checks before delivery to ensure optimal farm performance.',
    },
    {
      title: 'Broodstock Management',
      image: '/images/services/broodstock.jpg',
      description: 'Scientific broodstock selection and management ensuring superior genetic quality and productivity.',
      benefits: ['Superior genetics', 'Disease screening', 'Optimal breeding', 'Quality offspring'],
      process: 'We maintain world-class broodstock facilities with advanced genetic selection and health monitoring systems.',
    },
    {
      title: 'Water Treatment',
      image: '/images/services/water.jpg',
      description: 'Advanced water treatment systems ensuring optimal water quality for healthy seed production.',
      benefits: ['Clean water supply', 'Pathogen removal', 'Optimal parameters', 'Continuous monitoring'],
      process: 'Our multi-stage water treatment process ensures the highest water quality standards for larvae development.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-aqua-500"></div>
        
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
                <span className="text-white/90 text-sm font-medium">Our Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Aquaculture Solutions
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive services for sustainable shrimp farming and hatchery excellence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section key={index} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-custom">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-3xl font-bold text-primary-800 mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                
                <h3 className="text-xl font-semibold text-primary-700 mb-3">Key Benefits</h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <span className="text-aqua-500 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-gray-700">{service.process}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
