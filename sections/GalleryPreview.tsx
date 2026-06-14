'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function GalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const images = [
    '/images/gallery/gallery1.jpg',
    '/images/gallery/gallery2.jpg',
    '/images/gallery/gallery3.jpg',
    '/images/gallery/gallery4.jpg',
    '/images/gallery/gallery5.jpg',
    '/images/gallery/gallery6.jpg',
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary-800 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into our world-class hatchery operations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
