import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import CTA from '@components/common/CTA'
import { CheckIcon, PhoneIcon, MailIcon, MapPinIcon } from '@components/common/Icons'
import siteData from '@content/site.json'

export default function Donation() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Donation & Support', href: '/donation' }
  ]

  return (
    <>
      <SEOHead page="/donation" />

      <PageHeader
        heading="Donation &amp; Financial Support"
        subheading="Partner with Glory Education Center in raising the next generation of pastors, scholars, and worship leaders."
        badge="Give &amp; Partner"
        customCrumbs={crumbs}
      />

      {/* Why Donate */}
      <Section bg="white" heading="Why Donate to GEC?" subheading="Your financial partnership makes accredited theological training accessible to called students.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC]">
            <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-bold text-xl mb-4">
              🎓
            </div>
            <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">Student Scholarships</h3>
            <p className="text-sm text-[#5A6A7A] leading-relaxed">
              Help deserving students from economically underprivileged backgrounds fulfill their divine calling with full or partial tuition bursaries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC]">
            <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-bold text-xl mb-4">
              🎵
            </div>
            <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">Music &amp; Worship Arts</h3>
            <p className="text-sm text-[#5A6A7A] leading-relaxed">
              Support instrument procurement, recording audio equipment, and choir training facilities for worship leader development.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC]">
            <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-bold text-xl mb-4">
              🏛️
            </div>
            <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">Campus Infrastructure</h3>
            <p className="text-sm text-[#5A6A7A] leading-relaxed">
              Expand our 25,000-volume theological library, student hostels, digital classrooms, and chapel facilities.
            </p>
          </div>
        </div>

        {/* Bank & Payment Details */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Bank Details */}
          <div className="p-8 rounded-2xl bg-white border border-[#DDE3EC] shadow-md">
            <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-4 pb-3 border-b border-[#DDE3EC]">
              Direct Bank Transfer Details
            </h3>
            <p className="text-xs text-[#5A6A7A] mb-6">
              // TODO: Replace with client content — Official institutional bank account for NEFT / RTGS / IMPS deposits.
            </p>
            <dl className="space-y-3.5 text-sm">
              <div>
                <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Account Name</dt>
                <dd className="font-bold text-[#1E3A5F] text-base mt-0.5">Glory Education Center Trust</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Bank Name</dt>
                <dd className="font-bold text-[#1E3A5F] mt-0.5">State Bank of India (SBI)</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Account Number</dt>
                <dd className="font-mono font-bold text-[#C8972B] text-base mt-0.5">3849 2010 4920 19</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">IFSC Code</dt>
                <dd className="font-mono font-bold text-[#1E3A5F] mt-0.5">SBIN0001234</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Branch</dt>
                <dd className="font-medium text-[#5A6A7A] mt-0.5">Main Branch, City</dd>
              </div>
            </dl>
          </div>

          {/* UPI & QR Code */}
          <div className="p-8 rounded-2xl bg-[#EFF3F8] border border-[#DDE3EC] shadow-sm text-center">
            <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
              UPI &amp; QR Code Giving
            </h3>

            {/* QR Placeholder Visual */}
            <div className="w-48 h-48 mx-auto mb-4 bg-white p-3 rounded-2xl border-2 border-dashed border-[#1E3A5F]/30 flex flex-col items-center justify-center">
              <div className="w-36 h-36 bg-[#1E3A5F]/10 rounded-xl flex flex-col items-center justify-center text-center p-2">
                <span className="text-xs font-bold text-[#1E3A5F]">SCAN TO PAY</span>
                <span className="text-[10px] text-[#5A6A7A] mt-1">[QR CODE PLACEHOLDER]</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#DDE3EC] inline-block mb-4">
              <span className="text-xs font-semibold text-[#5A6A7A] block">Official UPI ID:</span>
              <span className="text-sm font-mono font-bold text-[#1E3A5F]">gectrust@sbi</span>
            </div>

            <p className="text-xs text-[#5A6A7A] leading-relaxed max-w-xs mx-auto">
              You can scan the QR code using Google Pay, PhonePe, Paytm, or any BHIM UPI enabled app.
            </p>
          </div>

        </div>

        {/* Giving Contact Info */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-[#1E3A5F] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-bold text-lg text-[#C8972B] mb-1">Need Giving Receipts or Tax Exemption Info?</h4>
            <p className="text-xs text-white/75">Contact our finance &amp; treasury desk for official donation receipts.</p>
          </div>
          <a
            href={`mailto:${siteData.contact.email}`}
            className="px-5 py-2.5 rounded-full bg-[#C8972B] text-[#0B1526] font-bold text-xs uppercase tracking-wider hover:bg-[#D4A843] transition-colors shrink-0"
          >
            Email Finance Office
          </a>
        </div>
      </Section>

      <CTA
        heading="Thank You for Your Generosity"
        body="Together, we equip servant-leaders for God's Kingdom."
        primaryCta={{ label: 'Back to Resources', href: '/resources' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
