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
            Annual Tuition Fees
          </h2>
          <p className="text-[#5A6A7A] text-base">
            Structured annual tuition rates for Residential Students and Day Scholars.
          </p>
        </div>

        {/* Residential Students */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-sm border border-[#DDE3EC] overflow-hidden shadow-sm">
            <div className="bg-[#1E3A5F] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">Residential Students</h3>
              <span className="text-xs bg-[#C8972B] text-[#0B1526] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Annual Tuition</span>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] text-xs font-bold text-[#1E3A5F] uppercase tracking-wider border-b border-[#DDE3EC]">
                  <th className="py-4 px-6">Program / Course</th>
                  <th className="py-4 px-6 text-right">Annual Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDE3EC] text-sm text-[#5A6A7A]">
                {feeStructure.residential?.map((row, i) => (
                  <tr key={i} className="hover:bg-[#EFF3F8]/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#1E3A5F]">{row.program}</td>
                    <td className="py-4 px-6 text-right font-bold text-[#966E1A]">{row.perYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Day Scholars */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-sm border border-[#DDE3EC] overflow-hidden shadow-sm">
            <div className="bg-[#1E3A5F] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">Day Scholars</h3>
              <span className="text-xs bg-[#EFF3F8] text-[#1E3A5F] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Annual Tuition</span>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] text-xs font-bold text-[#1E3A5F] uppercase tracking-wider border-b border-[#DDE3EC]">
                  <th className="py-4 px-6">Program / Course</th>
                  <th className="py-4 px-6 text-right">Annual Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDE3EC] text-sm text-[#5A6A7A]">
                {feeStructure.dayScholars?.map((row, i) => (
                  <tr key={i} className="hover:bg-[#EFF3F8]/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#1E3A5F]">{row.program}</td>
                    <td className="py-4 px-6 text-right font-bold text-[#966E1A]">{row.perYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
