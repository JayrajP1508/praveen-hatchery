'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/about/about-hero.jpg" alt="About Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary-900/70" />
        </div>
        <div className="container-custom relative z-10 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-4"
          >
            About Praveen Hatchery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl"
          >
            Empowering Farmers With Healthy Seed And Sustainable Aquaculture Solutions
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Welcome to Praveen Hatcheries, a trusted name in advanced aquaculture and premium Vannamei post-larvae production. With decades of expertise, we have set new benchmarks in shrimp seed quality through scientific innovation, precision breeding, and strong global genetic collaborations.
              </p>
              <p>
                At Praveen Hatcheries, we believe quality seed is the foundation of every successful harvest. Our Specific Pathogen Free (SPF) post-larvae are carefully developed to ensure high survival rates, faster growth, strong adaptability, and consistent farm performance.
              </p>
              <p>
                More than a hatchery, we are a growth partner for shrimp farmers, exporters, and aquaculture businesses. Through sustainable practices, advanced technology, and unwavering farmer support, we continue to power profitable and responsible aquaculture across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image src="/images/about/founder.jpg" alt="Kambala Praveen Kumar" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-4">Founder's Message</h2>
              <p className="text-lg text-gray-700 mb-4 font-semibold">Kambala Praveen Kumar</p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Our journey began with a simple vision: to provide farmers with the highest quality shrimp seed that would ensure their success and prosperity. Today, we stand proud as a leading hatchery committed to excellence, innovation, and sustainability.
                </p>
                <p>
                  We understand the challenges farmers face, and we are dedicated to being more than just a supplier – we are your partners in growth, offering technical expertise, quality assurance, and unwavering support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To empower aquaculture farmers with premium quality SPF shrimp seed, advanced technical support, and sustainable practices that drive profitability and environmental responsibility.
              </p>
            </div>
            <div className="card p-8">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-primary-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and innovative aquaculture hatchery in India, setting industry standards for quality, sustainability, and farmer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-aqua-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '✓', title: 'Quality Excellence', desc: 'Uncompromising commitment to seed quality' },
              { icon: '🤝', title: 'Farmer Partnership', desc: 'Building lasting relationships with farmers' },
              { icon: '🔬', title: 'Scientific Innovation', desc: 'Continuous research and development' },
              { icon: '🌱', title: 'Sustainability', desc: 'Environmentally responsible practices' },
              { icon: '💡', title: 'Technical Expertise', desc: 'Expert guidance and support' },
              { icon: '🛡️', title: 'Integrity', desc: 'Transparent and ethical operations' },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="text-lg font-semibold text-primary-800 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
