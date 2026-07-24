import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import FacultyCard from '@components/cards/FacultyCard'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem } from '@utils/animations'
import aboutData from '@content/about.json'
import facultyData from '@content/faculty.json'

export default function LeadershipFaculty() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Leadership & Faculty', href: '/about/leadership-faculty' }
  ]

  return (
    <>
      <SEOHead page="/about/leadership-faculty" />

      <PageHeader
        heading="Leadership &amp; Faculty"
        subheading="Visionary administrators and dedicated scholars equipping the next generation of ministers."
        badge="Governance &amp; Faculty"
        customCrumbs={crumbs}
      />

      {/* Executive Leadership */}
      <Section bg="white" heading="Executive Administration" subheading="Leading GEC with spiritual integrity and academic vision.">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {aboutData.leadership.members.map((member, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-[#F8F9FA] rounded-sm p-6 text-center border border-[#DDE3EC] border-t-2 border-t-[#C8972B]"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <img
                src={member.image || "/images/placeholder-faculty.jpg"}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-[#C8972B]"
              />
              <h3 className="font-bold text-[#1E3A5F] text-xl mb-1">{member.name}</h3>
              <p className="text-xs text-[#C8972B] font-bold uppercase tracking-wider mb-3">{member.title}</p>
              <p className="text-sm text-[#5A6A7A] leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Faculty Highlights */}
      <Section bg="light" heading="Our Academic Faculty" subheading="Dedicated scholars in theology, biblical studies, and worship arts.">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facultyData.map((member) => (
            <motion.div key={member.id} variants={staggerItem}>
              <FacultyCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTA
        heading="Study Under Experienced Mentors"
        body="Join our degree or diploma programs and be mentored by dedicated faculty."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'View All Courses', href: '/courses' }}
      />
    </>
  )
}
