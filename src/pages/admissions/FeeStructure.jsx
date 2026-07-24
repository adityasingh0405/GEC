import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import { CheckIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import admissionsData from '@content/admissions.json'

export default function FeeStructure() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Fee Structure', href: '/admissions/fees' }
  ]

  const { feeStructure } = admissionsData

  return (
    <>
      <SEOHead page="/admissions/fees" />

      <PageHeader
        heading="Fee Structure &amp; Financial Aid"
        subheading="Transparent tuition, hostel costs, payment schedules, and scholarship opportunities."
        badge="Tuition &amp; Fees"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-3">
            Academic Tuition Fees ({feeStructure.currency})
          </h2>
          <p className="text-[#5A6A7A] text-base">
            All fees are structured per semester and per academic year.
          </p>
        </div>

        {/* Tuition Table */}
        <div className="max-w-4xl mx-auto mb-16 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-sm overflow-hidden border border-[#DDE3EC] shadow-sm">
            <thead>
              <tr className="bg-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider">
                <th className="py-4 px-6">Program / Course</th>
                <th className="py-4 px-6">Per Semester</th>
                <th className="py-4 px-6">Per Year (2 Semesters)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE3EC] text-sm text-[#5A6A7A]">
              {feeStructure.tuition.map((row, i) => (
                <tr key={i} className="hover:bg-[#EFF3F8]/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#1E3A5F]">{row.program}</td>
                  <td className="py-4 px-6">{row.perSemester}</td>
                  <td className="py-4 px-6 font-semibold text-[#1E3A5F]">{row.perYear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Other Charges */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-6 text-center">
            Other Operational &amp; Hostel Charges
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {feeStructure.otherFees.map((fee, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="p-5 rounded-sm bg-[#F8F9FA] border border-[#DDE3EC] border-l-2 border-l-[#C8972B] flex items-center justify-between"
              >
                <span className="text-sm font-medium text-[#1E3A5F]">{fee.item}</span>
                <span className="text-sm font-bold text-[#C8972B]">{fee.amount}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Financial Assistance */}
        <div className="max-w-4xl mx-auto p-8 rounded-sm bg-gradient-to-br from-[#1E3A5F] to-[#0B1526] text-white shadow-xl border-t-4 border-t-[#C8972B]">
          <h3 className="font-display text-2xl font-bold mb-3 text-[#C8972B]">
            Financial Assistance &amp; Scholarships
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            {feeStructure.financialAid}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Merit Scholarships Available
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Church-Sponsored Ministry Grants
            </div>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Semester Installment Options
            </div>
          </div>
        </div>
      </Section>

      <CTA
        heading="Inquire About Scholarships"
        body="Contact our financial aid coordinator to learn more about funding your studies."
        primaryCta={{ label: 'Apply Online', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Contact Finance Office', href: '/contact' }}
      />
    </>
  )
}
