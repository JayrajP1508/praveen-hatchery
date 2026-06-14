'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      location: 'Nellore, AP',
      text: 'Praveen Hatchery has been our trusted partner for 5 years. Their SPF seed quality is exceptional with consistent survival rates above 85%. Highly recommended!',
    },
    {
      name: 'Suresh Babu',
      location: 'Kakinada, AP',
      text: 'The technical support and quality of post larvae from Praveen Hatchery is outstanding. Our farm productivity has increased significantly since partnering with them.',
    },
    {
      name: 'Venkat Reddy',
      location: 'Ongole, AP',
      text: 'Best hatchery in Andhra Pradesh! Their commitment to quality and farmer support is unmatched. We have seen remarkable growth in our shrimp farming business.',
    },
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Trusted by farmers and aquaculture businesses across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="text-6xl text-aqua-400 mb-4">"</div>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed">
              {testimonials[current].text}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">{testimonials[current].name}</p>
                <p className="text-gray-300">{testimonials[current].location}</p>
              </div>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      current === index ? 'bg-aqua-400 w-8' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
