import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import { ikIcon } from '@utils/imagekit'
import {
  CheckIcon,
  MailIcon,
  SparklesIcon,
  HeartIcon
} from '@components/common/Icons'
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

      {/* 1. HERO SECTION */}
      <PageHeader
        heading="Donation &amp; Financial Support"
        subheading="Partner with Glory Education Center in raising the next generation of pastors, scholars, and worship leaders."
        badge="Give &amp; Partner"
        customCrumbs={crumbs}
      />

      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Donation Details Body">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="max-w-6xl mx-auto space-y-20">

            {/* 2. WHY DONATE SECTION */}
            <div className="space-y-10">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Your Impact</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mt-2 mb-4">
                  Why Donate to GEC?
                </h2>
                <p className="text-slate-600 font-sans text-base sm:text-lg">
                  Your financial partnership makes accredited theological training accessible to called students.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

                {/* Scholarship Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#C8972B] shadow-xl hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold text-2xl shadow-md mb-6">
                    🎓
                  </div>
                  <h3 className="font-bold text-[#1E3A5F] text-xl mb-3">Student Scholarships</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Help deserving students from economically underprivileged backgrounds fulfill their divine calling with full or partial tuition bursaries.
                  </p>
                </motion.div>

                {/* Music Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#C8972B] shadow-xl hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold text-2xl shadow-md mb-6">
                    🎵
                  </div>
                  <h3 className="font-bold text-[#1E3A5F] text-xl mb-3">Music &amp; Worship Arts</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Support instrument procurement, recording audio equipment, and choir training facilities for worship leader development.
                  </p>
                </motion.div>

                {/* Infrastructure Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#C8972B] shadow-xl hover:-translate-y-1 transition-transform"
                >
                  <div className="w-14 h-14 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold text-2xl shadow-md mb-6">
                    🏛️
                  </div>
                  <h3 className="font-bold text-[#1E3A5F] text-xl mb-3">Campus Infrastructure</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    Expand our theological infrastructure, student hostels, digital classrooms, and chapel facilities.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* 3. PAYMENT DETAILS GRID */}
            <div className="space-y-10">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Ways to Give</span>
                <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mt-1">
                  Donation Channels
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">

                {/* Bank Details */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-slate-200 shadow-xl border-t-4 border-t-[#1E3A5F]"
                >
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md">
                      <HeartIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-[#1E3A5F]">
                        Direct Bank Transfer
                      </h3>
                      <p className="text-xs text-slate-500 font-sans mt-1">
                        Official institutional bank account for NEFT / RTGS / IMPS deposits.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 text-sm font-sans">
                    <div className="sm:col-span-2 p-4 bg-slate-50 rounded-sm border border-slate-100">
                      <dt className="text-[11px] font-bold text-[#C8972B] uppercase tracking-wider mb-1">Account Name</dt>
                      <dd className="font-bold text-[#1E3A5F] text-lg">HENRY SUITHANHRANG</dd>
                    </div>

                    <div>
                      <dt className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Bank Name</dt>
                      <dd className="font-bold text-slate-800">State Bank of India (SBI)</dd>
                    </div>

                    <div>
                      <dt className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Account Number</dt>
                      <dd className="font-mono font-bold text-[#1E3A5F] text-lg bg-slate-50 inline-block px-2 py-0.5 rounded-sm border border-slate-200">
                        20275376118
                      </dd>
                    </div>

                    <div>
                      <dt className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">IFSC Code</dt>
                      <dd className="font-mono font-bold text-slate-800">SBIN0017734</dd>
                    </div>

                    <div>
                      <dt className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Branch</dt>
                      <dd className="font-medium text-slate-600">Kothanur, Bangalore -5600-77</dd>
                    </div>
                  </dl>
                </motion.div>

                {/* UPI & QR Code */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-sm border border-slate-200 shadow-xl border-t-4 border-t-[#C8972B] text-center flex flex-col h-full"
                >
                  <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-6">
                    UPI &amp; QR Code
                  </h3>

                  <div className="w-48 h-48 mx-auto mb-6 bg-white p-3 rounded-sm shadow-sm">
                    <img
                      src={ikIcon("https://ik.imagekit.io/xdm1pwpls0/f_downlods/Faculty/image_yKzou6uJS.png")}
                      alt="Scan to donate via QR Code"
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-slate-50 p-4 rounded-sm border border-slate-200 inline-block mx-auto mb-6 w-full">
                    <span className="text-[10px] font-bold text-[#C8972B] uppercase tracking-wider block mb-1">Official UPI ID</span>
                    <span className="text-base font-mono font-bold text-[#1E3A5F] select-all">7618739605@ptsbi</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed mt-auto font-sans">
                    Compatible with Google Pay, PhonePe, Paytm, and all BHIM UPI apps.
                  </p>
                </motion.div>

              </div>
            </div>

            {/* 4. CONTACT / TAX RECEIPTS BANNER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto bg-gradient-to-br from-[#0B1526] to-[#152940] rounded-sm p-8 sm:p-10 text-white shadow-xl border border-white/10 border-t-4 border-t-[#C8972B] relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#C8972B]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#C8972B] text-[#0B1526] flex items-center justify-center shadow-md font-bold shrink-0 hidden sm:flex">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-white mb-2">Need Tax Receipts?</h4>
                  <p className="text-white/80 text-sm font-sans max-w-md">
                    Contact our finance & treasury desk for official donation receipts or questions regarding 80G tax exemptions.
                  </p>
                </div>
              </div>

              <a
                href={`mailto:gec1322@gmail.com`}
                className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C8972B] border border-[#C8972B] text-[#0B1526] text-xs font-bold uppercase tracking-wider hover:bg-[#D4A843] hover:border-[#D4A843] transition-all shadow-md shrink-0 w-full sm:w-auto justify-center"
              >
                <span>Email Finance Office</span>
              </a>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 5. FOOTER CTA */}
      <CTA
        heading="Thank You for Your Generosity"
        body="Together, we equip servant-leaders for God's Kingdom."
        primaryCta={{ label: 'Back to Resources', href: '/resources' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}