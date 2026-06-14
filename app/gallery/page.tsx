'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'hatchery', 'infrastructure', 'operations', 'team']

  const images = [
    { src: '/images/gallery/img1.jpg', category: 'hatchery', title: 'Hatchery Tanks' },
    { src: '/images/gallery/img2.jpg', category: 'hatchery', title: 'Post Larvae Production' },
    { src: '/images/gallery/img3.jpg', category: 'infrastructure', title: 'Water Treatment System' },
    { src: '/images/gallery/img4.jpg', category: 'infrastructure', title: 'Laboratory Facility' },
    { src: '/images/gallery/img5.jpg', category: 'operations', title: 'Quality Testing' },
    { src: '/images/gallery/img6.jpg', category: 'operations', title: 'Seed Packaging' },
    { src: '/images/gallery/img7.jpg', category: 'team', title: 'Technical Team' },
    { src: '/images/gallery/img8.jpg', category: 'team', title: 'Farm Visit' },
    { src: '/images/gallery/img9.jpg', category: 'hatchery', title: 'Nursery Systems' },
    { src: '/images/gallery/img10.jpg', category: 'infrastructure', title: 'Biosecurity Zone' },
    { src: '/images/gallery/img11.jpg', category: 'operations', title: 'Broodstock Management' },
    { src: '/images/gallery/img12.jpg', category: 'operations', title: 'Feed Management' },
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        {/* Clean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-aqua-600"></div>
        
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
                <span className="text-white/90 text-sm font-medium">Gallery</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Our Hatchery Operations
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                A glimpse into our world-class facilities and quality production processes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-medium p-4">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
