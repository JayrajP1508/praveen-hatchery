'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-aqua-500 to-primary-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With Praveen Hatchery
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Join hundreds of successful farmers who trust us for premium quality shrimp seed
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
              Get In Touch
            </Link>
            <a
              href="https://wa.me/919533533253"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-lg flex items-center"
            >
              <span className="mr-2">💬</span>
              WhatsApp Us
            </a>
            <a
              href="tel:+919533533253"
              className="bg-primary-900/50 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 transition-colors text-lg"
            >
              📞 Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
