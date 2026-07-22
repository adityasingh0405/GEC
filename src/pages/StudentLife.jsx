import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Card from '@components/common/Card'
import CTA from '@components/common/CTA'
import {
  SparklesIcon, UserGroupIcon, BookOpenIcon,
  AcademicCapIcon, CalendarIcon, HeartIcon
} from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import studentLifeData from '@content/studentLife.json'

const iconMap = {
  worship: SparklesIcon,
  'campus-life': UserGroupIcon,
  library: BookOpenIcon,
  'music-department': AcademicCapIcon,
  events: CalendarIcon,
  community: HeartIcon,
}

export default function StudentLife() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Student Life', href: '/student-life' }
  ]

  return (
    <>
      <SEOHead page="/student-life" />

      <PageHeader
        heading="Student Life &amp; Campus Community"
        subheading="Experience vibrant chapel worship, fellowship, music ensembles, library research, and practical outreach."
        badge="Life at GEC"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {studentLifeData.sections.map((sec) => (
            <motion.div key={sec.id} variants={staggerItem}>
              <Card
                title={sec.title}
                subtitle={sec.subtitle}
                description={sec.description}
                icon={iconMap[sec.id]}
                image={sec.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Campus Community Highlight */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#0B1526] text-white shadow-xl">
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block mb-2">
              Holistic Formation
            </span>
            <h3 className="font-display text-3xl font-bold mb-4">
              Worship, Study &amp; Fellowship
            </h3>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-6">
              At Glory Education Center, learning goes far beyond classroom lectures. From daily morning chapel and student-led praise nights to sports tournaments and community outreaches, every aspect of campus life is designed to foster deep fellowship and spiritual growth.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-white/10 text-center">
                <span className="block text-xl font-bold text-[#C8972B]">Daily</span>
                <span className="text-xs text-white/70">Chapel Worship</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 text-center">
                <span className="block text-xl font-bold text-[#C8972B]">1-on-1</span>
                <span className="text-xs text-white/70">Faculty Mentorship</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#1E3A5F]">
              Student Life Highlights
            </h3>
            <ul className="space-y-3 text-sm text-[#5A6A7A]">
              <li className="p-4 rounded-xl bg-[#EFF3F8] border border-[#DDE3EC] font-semibold text-[#1E3A5F]">
                🎵 Annual Worship &amp; Music Festival
              </li>
              <li className="p-4 rounded-xl bg-[#EFF3F8] border border-[#DDE3EC] font-semibold text-[#1E3A5F]">
                📚 25,000+ Volume Theological Research Library
              </li>
              <li className="p-4 rounded-xl bg-[#EFF3F8] border border-[#DDE3EC] font-semibold text-[#1E3A5F]">
                🤝 Weekend Church &amp; Community Mission Outreach
              </li>
              <li className="p-4 rounded-xl bg-[#EFF3F8] border border-[#DDE3EC] font-semibold text-[#1E3A5F]">
                🏡 Separate Hostels for Men &amp; Women with Dining
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CTA
        heading="Experience Life at Glory Education Center"
        body="Schedule a campus visit or submit your application online."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
