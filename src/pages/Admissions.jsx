import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import {
  BookOpenIcon,
  AcademicCapIcon,
  Globe,
  CheckIcon,
  DocumentIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@components/common/Icons'
import { staggerContainer, staggerItem, fadeInUp } from '@utils/animations'
import admissionsData from '@content/admissions.json'

const ENTRANCE_EXAMS = [
  {
    title: "Knowledge of God's Word",
    icon: BookOpenIcon,
    description: "Evaluation of basic biblical knowledge, Old & New Testament understanding, and personal scripture engagement."
  },
  {
    title: "English Language Proficiency",
    icon: AcademicCapIcon,
    description: "Assessment of comprehension, reading fluency, and written communication capabilities for theological coursework."
  },
  {
    title: "Awareness of Contemporary Events",
    icon: Globe,
    description: "Understanding of current socio-religious trends, cultural issues, and contemporary challenges facing the church."
  }
]

const APPLICATION_CHECKLIST = [
  {
    step: "01",
    title: "Application Form",
    description: "Duly completed official admission application form submitted online or via physical application."
  },
  {
    step: "02",
    title: "Academic Records",
    description: "Certified copies of High School (10th/12th) / Degree mark sheets and official transcripts."
  },
  {
    step: "03",
    title: "Salvation Testimony",
    description: "Written personal account detailing your conversion experience, spiritual journey, and Christian walk."
  },
  {
    step: "04",
    title: "Purpose Statement",
    description: "Personal statement explaining your divine calling to theological study and future ministry aspirations."
  },
  {
    step: "05",
    title: "Three Recommendations",
    description: "Official reference letters from your local Church Pastor, a Church Leader, and an Academic/Employer referee."
  },
  {
    step: "06",
    title: "Financial Statement",
    description: "Declaration or pledge of financial sponsorship/support for tuition, living, and institutional fees."
  },
  {
    step: "07",
    title: "Passport-size Photo",
    description: "Recent passport-format color photographs for official student registration and ID card generation."
  }
]

export default function Admissions() {
  return (
    <>
      <SEOHead page="/admissions" />

      {/* Hero Header */}
      <PageHeader
        heading="Admissions at Glory Education Center"
        subheading="Begin your journey toward transformative theological, church planting, and music education."
        badge="Enrollment Open"
      />

      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Admissions Content">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="max-w-5xl mx-auto space-y-20">

            {/* 1. Admission Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-900/5 border-t-4 border-t-[#C8972B] relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md">
                  <AcademicCapIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">
                    Welcome Candidates
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                    Admission Overview
                  </h2>
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans mb-6">
                Glory Education Center welcomes called men and women from diverse Christian traditions who desire to ground their lives, leadership, and worship in the uncompromised Word of God. Our admissions process is designed to discern spiritual maturity, academic readiness, and a genuine heart for gospel service.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8D4A2] text-[#1E3A5F] flex items-center gap-3 text-xs sm:text-sm font-semibold">
                <SparklesIcon className="w-5 h-5 text-[#C8972B] shrink-0" />
                <span>{admissionsData.intake}</span>
              </div>
            </motion.div>

            {/* 2. Entrance Examination */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Evaluation Standards</span>
                <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mt-1">
                  Entrance Examination &amp; Assessment
                </h2>
                <p className="text-slate-500 text-sm mt-2 font-sans">
                  All prospective candidates undergo evaluation across three foundational dimensions.
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {ENTRANCE_EXAMS.map((exam, i) => {
                  const Icon = exam.icon
                  return (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-lg shadow-slate-900/5 border-t-4 border-t-[#C8972B] hover:shadow-xl transition-all"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-5 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-3">
                        {exam.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {exam.description}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            {/* 3. Application Requirements (Numbered Checklist Cards) */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Application Dossier</span>
                <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mt-1">
                  Application Requirements
                </h2>
                <p className="text-slate-500 text-sm mt-2 font-sans">
                  Please ensure all seven required items are prepared for your application submission.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {APPLICATION_CHECKLIST.map((item) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex items-start gap-4 hover:border-[#1E3A5F] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E3A5F] text-base mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4. Fee Structure (Two Modern Responsive Tables) */}
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Financial Transparency</span>
                <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mt-1">
                  Fee Structure (2026–2027)
                </h2>
                <p className="text-slate-500 text-sm mt-2 font-sans">
                  Transparent breakdown of tuition and installment schedules for On-Campus and Day Scholar programs.
                </p>
              </div>

              {/* Table 1: On-Campus Students */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-900/5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block">Residential Scholars</span>
                    <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                      Table 1: On-Campus Students
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0B1526] text-[#C8972B] text-xs font-bold">Includes Room &amp; Board</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs font-bold text-[#1E3A5F] uppercase tracking-wider bg-[#FAF8F5]">
                        <th className="py-4 px-4">Fee Breakdown</th>
                        <th className="py-4 px-4">Dip. Music</th>
                        <th className="py-4 px-4">Dip. CP</th>
                        <th className="py-4 px-4">B.Min / B.Th</th>
                        <th className="py-4 px-4">M.Th / M.Div</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans text-slate-700">
                      <tr className="bg-[#FAF5E8]/60 font-bold text-[#1E3A5F]">
                        <td className="py-4 px-4 text-[#966E1A] font-bold">Total Fees (Annual)</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 45,000</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 40,000</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 60,000</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 75,000</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold text-[#1E3A5F]">First Installment (Admission)</td>
                        <td className="py-4 px-4">₹ 25,000</td>
                        <td className="py-4 px-4">₹ 22,000</td>
                        <td className="py-4 px-4">₹ 35,000</td>
                        <td className="py-4 px-4">₹ 42,000</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold text-[#1E3A5F]">Second Installment (Term II)</td>
                        <td className="py-4 px-4">₹ 20,000</td>
                        <td className="py-4 px-4">₹ 18,000</td>
                        <td className="py-4 px-4">₹ 25,000</td>
                        <td className="py-4 px-4">₹ 33,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: Correspondence / Day Scholars */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-900/5 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block">Non-Residential / Distance</span>
                    <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                      Table 2: Correspondence / Day Scholars
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#EFF3F8] text-[#1E3A5F] text-xs font-bold">Tuition Only</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs font-bold text-[#1E3A5F] uppercase tracking-wider bg-[#FAF8F5]">
                        <th className="py-4 px-4">Fee Breakdown</th>
                        <th className="py-4 px-4">Dip. Music</th>
                        <th className="py-4 px-4">Dip. CP</th>
                        <th className="py-4 px-4">B.Min / B.Th</th>
                        <th className="py-4 px-4">M.Th / M.Div</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-sans text-slate-700">
                      <tr className="bg-[#FAF5E8]/60 font-bold text-[#1E3A5F]">
                        <td className="py-4 px-4 text-[#966E1A] font-bold">Total Fees (Annual)</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 25,000</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 20,000</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 30,000</td>
                        <td className="py-4 px-4 text-[#966E1A]">₹ 40,000</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold text-[#1E3A5F]">First Installment (Admission)</td>
                        <td className="py-4 px-4">₹ 15,000</td>
                        <td className="py-4 px-4">₹ 12,000</td>
                        <td className="py-4 px-4">₹ 18,000</td>
                        <td className="py-4 px-4">₹ 24,000</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold text-[#1E3A5F]">Second Installment (Term II)</td>
                        <td className="py-4 px-4">₹ 10,000</td>
                        <td className="py-4 px-4">₹ 8,000</td>
                        <td className="py-4 px-4">₹ 12,000</td>
                        <td className="py-4 px-4">₹ 16,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5. Apply Now CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0B1526] to-[#152940] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8972B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#C8972B] text-[#0B1526] flex items-center justify-center mx-auto shadow-lg font-bold">
                  <AcademicCapIcon className="w-6 h-6" />
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Ready to Begin Your Theological Journey?
                </h2>

                <p className="text-white/85 text-base sm:text-lg leading-relaxed font-sans">
                  Submit your online application for the upcoming academic year. Our admissions team is standing by to guide you through every step.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/admissions/apply"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C8972B] text-[#0B1526] text-xs font-bold uppercase tracking-wider hover:bg-[#D4A843] transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Apply Online Now</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    <span>Contact Admissions</span>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  )
}
