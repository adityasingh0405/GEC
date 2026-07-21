import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import Breadcrumb from '@components/common/Breadcrumb'
import NewsCard from '@components/cards/NewsCard'
import { staggerContainer, staggerItem } from '@utils/animations'
import newsData from '@content/news.json'

const categories = ['All', 'Admissions', 'Events', 'Music', 'Academics']

export default function News() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredNews = activeTab === 'All'
    ? newsData
    : newsData.filter(item => item.category === activeTab)

  return (
    <>
      <SEOHead page="/news" />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
        aria-labelledby="news-hero-heading"
      >
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Breadcrumb />
            <h1 id="news-hero-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
              News & Updates
            </h1>
            <p className="text-white/75 mt-3 text-lg">
              Stay connected with the latest stories, academic announcements, and events at GEC.
            </p>
          </div>
        </Container>
      </section>

      {/* News Listing */}
      <section className="section-padding bg-[#F8F9FA]" aria-label="News articles">
        <Container>
          {/* Category Filter */}
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredNews.map((article) => (
              <motion.div key={article.id} variants={staggerItem}>
                <NewsCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
