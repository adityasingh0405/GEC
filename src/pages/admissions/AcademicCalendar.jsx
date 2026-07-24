import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import DownloadCard from '@components/cards/DownloadCard'
import { CalendarIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import admissionsData from '@content/admissions.json'

export default function AcademicCalendar() {
  const [filter, setFilter] = useState('All')

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Academic Calendar', href: '/admissions/calendar' }
  ]

  const events = admissionsData.academicCalendar || []

  const categories = useMemo(() => {
    return [
      'All',
      ...new Set(
        events
          .map(e => e.category?.trim())
          .filter(Boolean)
      )
    ]
  }, [events])

  const filteredEvents = useMemo(() => {
    if (filter === 'All') return events

    return events.filter(
      e => e.category?.trim() === filter.trim()
    )
  }, [events, filter])

  return (
    <>
      <SEOHead page="/admissions/calendar" />

      <PageHeader
        heading="Academic Calendar 2026–2027"
        subheading="Important dates for admissions, term starts, examinations, events, and holidays."
        badge="Key Dates"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === category
                ? 'bg-[#1E3A5F] text-[#C8972B] shadow-md'
                : 'bg-[#EFF3F8] text-[#5A6A7A] hover:bg-[#DDE3EC]'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          key={filter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-4 mb-16"
        >
          {filteredEvents.length > 0 ? (
            filteredEvents.map(item => (
              <motion.div
                key={`${item.date}-${item.event}`}
                variants={staggerItem}
                layout
                className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] flex items-center justify-center shrink-0">
                    <CalendarIcon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#1E3A5F] text-base">
                      {item.event}
                    </h3>

                    <p className="text-xs font-semibold text-[#5A6A7A]">
                      Category: {item.category}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1E3A5F] text-white text-xs font-bold">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-[#5A6A7A]">
              No events found.
            </div>
          )}
        </motion.div>

        <div className="max-w-md mx-auto">
          <DownloadCard
            title="Download Full Academic Calendar PDF"
            description="Get the printable calendar with all semester milestones."
            format="PDF"
            size="950 KB"
            href="https://ik.imagekit.io/xdm1pwpls0/pdfs/Academic%20Calender%202025-2026.pdf"
          />
        </div>
      </Section>

      <CTA
        heading="Never Miss a Milestone"
        body="Apply early for the upcoming intake before application deadlines."
        primaryCta={{
          label: 'Apply Now',
          href: '/admissions/apply'
        }}
        secondaryCta={{
          label: 'Contact Admissions',
          href: '/contact'
        }}
      />
    </>
  )
}