import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import DownloadCard from '@components/cards/DownloadCard'
import { CheckIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import admissionsData from '@content/admissions.json'

export default function RequiredDocuments() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Required Documents', href: '/admissions/documents' }
  ]

  const { documentsList } = admissionsData

  return (
    <>
      <SEOHead page="/admissions/documents" />

      <PageHeader
        heading="Required Documents"
        subheading="Complete verification checklist of certificates, transcripts, and references for admission."
        badge="Application Checklist"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-3">
            Document Submission Checklist
          </h2>
          <p className="text-[#5A6A7A] text-base">
            Please prepare clear scanned PDF or JPG copies of the following documents before completing your application.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 mb-16"
        >
          {documentsList.map((sec, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="p-8 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC] shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-4 pb-3 border-b border-[#DDE3EC]">
                {sec.category}
              </h3>
              <ul className="space-y-3">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#5A6A7A]">
                    <span className="w-5 h-5 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-[#1E3A5F]" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Downloadable Reference Form */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-6 text-center">
            Downloadable Forms &amp; Prospectus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DownloadCard
              title="Pastoral Recommendation Form"
              description="Printable reference form to be filled and sealed by your local church pastor."
              format="PDF"
              size="450 KB"
              href="https://ik.imagekit.io/xdm1pwpls0/pdfs/Pastor_s%20Reference%20Form.pdf"
            />

            <DownloadCard
              title="Official GEC Prospectus 2026–2027"
              description="Comprehensive institutional guide with course structures and campus policies."
              format="PDF"
              size="4.2 MB"
              href="https://ik.imagekit.io/xdm1pwpls0/pdfs/GCI%20Prospectus.pdf"
            />
          </div>
        </div>
      </Section>

      <CTA
        heading="Documents Ready?"
        body="Proceed to the online application form and attach your documents."
        primaryCta={{ label: 'Apply Online', href: '/admissions/apply' }}
        secondaryCta={{ label: 'View Fee Structure', href: '/admissions/fees' }}
      />
    </>
  )
}
