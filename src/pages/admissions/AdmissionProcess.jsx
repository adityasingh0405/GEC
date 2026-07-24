import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem } from '@utils/animations'
import admissionsData from '@content/admissions.json'

export default function AdmissionProcess() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Admission Process', href: '/admissions/process' }
  ]

  return (
    <>
      <SEOHead page="/admissions/process" />

      <PageHeader
        heading="Admission Process"
        subheading="A clear, transparent guide from initial inquiry to enrollment."
        badge="Admission Roadmap"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-4 text-center">
            How to Apply to GEC
          </h2>
          <p className="text-[#5A6A7A] text-base leading-relaxed text-center max-w-2xl mx-auto">
            Our admissions procedure is designed to evaluate both academic readiness and spiritual calling. Follow these five simple steps.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {admissionsData.process.map((step) => (
            <motion.div
              key={step.step}
              variants={staggerItem}
              className="p-8 rounded-sm bg-[#F8F9FA] border border-[#DDE3EC] border-t-2 border-t-[#C8972B] shadow-sm flex flex-col md:flex-row items-start gap-6"
            >
              <div className="w-14 h-14 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-black text-2xl shrink-0">
                0{step.step}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#5A6A7A] leading-relaxed text-sm sm:text-base mb-4">
                  {step.desc}
                </p>
                <div className="p-3 bg-white rounded-sm border border-[#DDE3EC] text-xs text-[#5A6A7A]">
                  💡 <strong>Tip:</strong> Ensure your pastor's recommendation letter and mark sheets are prepared beforehand to prevent delays.
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTA
        heading="Start Step 1 Today"
        body="Fill out our online application form in less than 10 minutes."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Required Documents', href: '/admissions/documents' }}
      />
    </>
  )
}
