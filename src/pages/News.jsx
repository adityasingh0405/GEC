import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Card from '@components/common/Card'
import CTA from '@components/common/CTA'
import { CalendarIcon, UserIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import newsData from '@content/news.json'

export default function News() {
  const [filter, setFilter] = useState('All')

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'News & Events', href: '/news' }
  ]

  const categories = ['All', 'Admissions', 'Events', 'Music', 'Academics']
  const filteredArticles = filter === 'All'
    ? newsData
    : newsData.filter(item => item.category === filter)

  return (
    <>
      <SEOHead page="/news" />

      <PageHeader
        heading="News &amp; Events"
        subheading="Stay informed with the latest updates, upcoming events, academic announcements, and campus stories from GEC."
        badge="Institutional News"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-[#1E3A5F] text-[#C8972B] shadow-md'
                  : 'bg-[#EFF3F8] text-[#5A6A7A] hover:bg-[#DDE3EC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card
                title={item.title}
                subtitle={`${item.category} • ${item.date}`}
                description={item.excerpt}
                badge={item.category}
                image={`/images/placeholder-news.jpg`}
                href={`/news/${item.slug}`}
                actionLabel="Read Full Article"
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTA
        heading="Stay Connected with Glory Education Center"
        body="Subscribe or check back regularly for upcoming events, concerts, and admission updates."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
