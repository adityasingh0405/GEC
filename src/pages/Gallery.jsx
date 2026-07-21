import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import Breadcrumb from '@components/common/Breadcrumb'
import Lightbox from '@components/common/Lightbox'
import { staggerContainer, staggerItem } from '@utils/animations'
import galleryData from '@content/gallery.json'

const categories = ['All', 'Campus Life', 'Campus', 'Events', 'Music', 'Academics']

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filteredImages = activeTab === 'All'
    ? galleryData
    : galleryData.filter(img => img.category === activeTab)

  return (
    <>
      <SEOHead page="/gallery" />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
        aria-labelledby="gallery-hero-heading"
      >
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Breadcrumb />
            <h1 id="gallery-hero-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
              Campus Gallery
            </h1>
            <p className="text-white/75 mt-3 text-lg">
              Moments of worship, learning, fellowship, and celebration at Glory Education Center.
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-[#F8F9FA]" aria-label="Campus photo gallery">
        <Container>
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeTab === cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? 'bg-[#1E3A5F] text-white shadow-md'
                    : 'bg-white text-[#5A6A7A] hover:bg-[#EFF3F8] hover:text-[#1E3A5F] border border-[#DDE3EC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  variants={staggerItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-[#DDE3EC] shadow-sm cursor-pointer group"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#EFF3F8] to-[#DDE3EC] overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-[#2A5284]/30 group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1E3A5F]/90 text-white">
                      {img.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-[#1E3A5F] line-clamp-1">{img.alt}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages.map(img => ({ src: img.src, alt: img.alt }))}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex(prev => (prev > 0 ? prev - 1 : filteredImages.length - 1))}
        onNext={() => setLightboxIndex(prev => (prev < filteredImages.length - 1 ? prev + 1 : 0))}
      />
    </>
  )
}
