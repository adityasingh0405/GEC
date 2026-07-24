import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Lightbox from '@components/common/Lightbox'
import CTA from '@components/common/CTA'
import galleryData from '@content/gallery.json'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  const rawCategories = Array.from(new Set(galleryData.map(item => item.category)))
  const nonMiscCategories = rawCategories.filter(c => c.toLowerCase() !== 'misc').sort((a, b) => a.localeCompare(b))
  const miscCategory = rawCategories.find(c => c.toLowerCase() === 'misc')
  const categories = ['All', ...nonMiscCategories, ...(miscCategory ? [miscCategory] : [])]

  const filteredImages = activeCategory === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeCategory)

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' }
  ]

  return (
    <>
      <SEOHead page="/gallery" />

      <PageHeader
        heading="Photo Gallery"
        subheading="Glance into daily campus life, chapel worship, music recitals, graduation ceremonies, and student events."
        badge="Life in Pictures"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1E3A5F] text-[#C8972B] shadow-md scale-105'
                  : 'bg-white text-[#5A6A7A] hover:bg-[#DDE3EC] border border-[#DDE3EC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#DDE3EC] cursor-pointer shadow-sm"
                onClick={() => setActiveImageIndex(index)}
              >
                <div className="aspect-square relative overflow-hidden bg-[#EFF3F8]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement.innerHTML = `
                        <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#1E3A5F;font-size:0.875rem;font-weight:700;background:#EFF3F8;padding:1rem;text-align:center;">
                          ${item.title || item.category}
                        </div>
                      `
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1526]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[10px] font-bold text-[#C8972B] uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <Lightbox
          images={filteredImages.map(img => ({ src: img.src, alt: img.alt, title: img.title }))}
          currentIndex={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
        />
      )}

      <CTA
        heading="Experience Glory Education Center Firsthand"
        body="Schedule a guided campus tour or attend our open house days."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
