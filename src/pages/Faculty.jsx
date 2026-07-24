import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import FacultyCard from '@components/cards/FacultyCard'
import Modal from '@components/common/Modal'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem } from '@utils/animations'
import facultyData from '@content/faculty.json'

export default function Faculty() {
  const [selectedMember, setSelectedMember] = useState(null)

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Faculty', href: '/faculty' }
  ]

  return (
    <>
      <SEOHead page="/faculty" />

      <PageHeader
        heading="Our Dedicated Faculty"
        subheading="Scholars, theologians, and musicians committed to academic excellence and spiritual mentorship."
        badge="Faculty &amp; Instructors"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facultyData.map((member) => (
            <motion.div key={member.id} variants={staggerItem}>
              <FacultyCard
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Bio Modal */}
      {selectedMember && (
        <Modal
          isOpen={Boolean(selectedMember)}
          onClose={() => setSelectedMember(null)}
          title={selectedMember.name}
        >
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-bold text-xl">
                {selectedMember.name.split(' ').slice(-1)[0].charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-[#1E3A5F] text-lg">{selectedMember.name}</h4>
                <p className="text-xs font-bold text-[#C8972B] uppercase tracking-wider">{selectedMember.title}</p>
                <p className="text-xs text-[#5A6A7A]">{selectedMember.qualifications}</p>
              </div>
            </div>
            <hr className="border-[#DDE3EC]" />
            <p className="text-sm text-[#5A6A7A] leading-relaxed">
              {selectedMember.bio || 'Full biography coming soon.'}
            </p>
            {selectedMember.specialization && (
              <p className="text-xs text-[#1E3A5F] font-semibold">
                Specialization: {selectedMember.specialization}
              </p>
            )}
          </div>
        </Modal>
      )}

      <CTA
        heading="Learn from Passionate Educators"
        body="Our faculty is dedicated to investing in your growth as a minister and scholar."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'View Academic Programs', href: '/courses' }}
      />
    </>
  )
}
