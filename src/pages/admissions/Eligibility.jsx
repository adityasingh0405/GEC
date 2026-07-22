import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import { CheckIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import admissionsData from '@content/admissions.json'

export default function Eligibility() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Eligibility Requirements', href: '/admissions/eligibility' }
  ]

  const { eligibilityMatrix } = admissionsData

  return (
    <>
      <SEOHead page="/admissions/eligibility" />

      <PageHeader
        heading="Eligibility Requirements"
        subheading="Academic, spiritual, and language prerequisites for all GEC degree &amp; diploma programs."
        badge="Prerequisites"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-3">
            Program Eligibility Criteria
          </h2>
          <p className="text-[#5A6A7A]">
            Select your desired course below to review qualification guidelines.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {eligibilityMatrix.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC] shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#DDE3EC] mb-6 gap-2">
                <h3 className="font-display text-2xl font-bold text-[#1E3A5F]">
                  {item.course}
                </h3>
                <span className="inline-block px-3 py-1 bg-[#1E3A5F] text-[#C8972B] text-xs font-bold rounded-full w-max">
                  {item.duration}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-bold text-[#1E3A5F] uppercase tracking-wider text-xs mb-2 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Academic Eligibility
                  </h4>
                  <p className="text-[#5A6A7A] leading-relaxed">{item.academic}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E3A5F] uppercase tracking-wider text-xs mb-2 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Spiritual Standing
                  </h4>
                  <p className="text-[#5A6A7A] leading-relaxed">{item.spiritual}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E3A5F] uppercase tracking-wider text-xs mb-2 flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Language Proficiency
                  </h4>
                  <p className="text-[#5A6A7A] leading-relaxed">{item.language}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTA
        heading="Meet the Eligibility Criteria?"
        body="Submit your online application for the upcoming June intake."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Check Required Documents', href: '/admissions/documents' }}
      />
    </>
  )
}
