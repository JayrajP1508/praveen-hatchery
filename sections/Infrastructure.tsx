'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Infrastructure() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const infrastructure = [
    { title: 'Hatchery Tanks', image: '/images/infrastructure/tanks.jpg' },
    { title: 'Nursery Systems', image: '/images/infrastructure/nursery.jpg' },
    { title: 'Laboratory Facilities', image: '/images/infrastructure/lab.jpg' },
    { title: 'Water Treatment', image: '/images/infrastructure/water.jpg' },
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">Our Infrastructure</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Modern facilities equipped with advanced technology for superior seed production
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {infrastructure.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end">
                <h3 className="text-white text-2xl font-semibold p-6">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
