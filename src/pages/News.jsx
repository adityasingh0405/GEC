import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Card from '@components/common/Card'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem } from '@utils/animations'
import newsData from '@content/news.json'

export default function News() {
  const [filter, setFilter] = useState('All')

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'News & Events', href: '/news' }
  ]

  const categories = useMemo(
    () => ['All', 'Events', 'Programs', 'Sports', 'Campus Life'],
    []
  )

  const filteredArticles = useMemo(() => {
    if (filter === 'All') return newsData

    return newsData.filter(
      item =>
        item.category?.trim().toLowerCase() ===
        filter.trim().toLowerCase()
    )
  }, [filter])

  return (
    <>
      <SEOHead page="/news" />

      <PageHeader
        heading="News & Events"
        subheading="Explore the latest events, student activities, campus programs, and highlights from Glory Education Center."
        badge="Campus Updates"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                  ? 'bg-[#1E3A5F] text-[#C8972B] shadow-md'
                  : 'bg-[#EFF3F8] text-[#5A6A7A] hover:bg-[#DDE3EC] hover:text-[#1E3A5F]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.length > 0 ? (
            filteredArticles.map(item => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                layout
              >
                <Card
                  title={item.title}
                  subtitle={`${item.category} • ${new Date(
                    item.date
                  ).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}`}
                  description={item.excerpt}
                  badge={item.category}
                  image={item.image?.startsWith('http') ? item.image : `/images/${item.image}`}
                  href={`/news/${item.slug}`}
                  actionLabel="Read Full Article"
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">
                No News Found
              </h3>
              <p className="text-[#5A6A7A]">
                There are currently no articles available in the{' '}
                <strong>{filter}</strong> category.
              </p>
            </div>
          )}
        </motion.div>
      </Section>

      <CTA
        heading="Be Part of Campus Life"
        body="Stay connected with the latest events, student activities, and important updates from Glory Education Center."
        primaryCta={{
          label: 'Explore Programs',
          href: '/programs'
        }}
        secondaryCta={{
          label: 'Contact Us',
          href: '/contact'
        }}
      />
    </>
  )
}