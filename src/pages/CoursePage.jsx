import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import JsonLD from '@seo/JsonLD'
import { courseSchema } from '@seo/schemas'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import Accordion from '@components/common/Accordion'
import Breadcrumb from '@components/common/Breadcrumb'
import CTA from '@components/common/CTA'
import {
  CheckIcon,
  ClockIcon,
  AcademicCapIcon,
  BookOpenIcon,
  DownloadIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  Globe,
  HeartIcon
} from '@components/common/Icons'
import { fadeInUp } from '@utils/animations'
import coursesData from '@content/courses.json'
import { documents } from '@content/documents.js'

/** Map each course slug to its entry in the documents registry */
const slugToDocument = {
  'bth': documents.bth,
  'mdv': documents.mdiv,
  'mth': documents.mth,
  'diploma-music': documents.diplomaMusic,
  'diploma-church-planting': documents.diplomaChurchPlanting,
}

const mdvIcons = [BookOpenIcon, AcademicCapIcon, ShieldCheckIcon, Globe, HeartIcon, SparklesIcon]

export default function CoursePage({ slug }) {
  const doc = slugToDocument[slug] ?? null
  const course = coursesData.find(c => c.slug === slug)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <div className="text-center p-8 bg-white rounded-sm border border-slate-200 shadow-md border-t-4 border-t-[#C8972B]">
          <h1 className="text-2xl font-bold text-[#1E3A5F] mb-2">Program Not Found</h1>
          <p className="text-slate-500 mb-6">The requested academic course could not be located.</p>
          <Button href="/courses" variant="primary" size="md">View All Programs</Button>
        </div>
      </div>
    )
  }

  // Prospectus URL is sourced from src/content/documents.js
  const prospectusUrl = doc?.url ?? null

  const seoPage = `/courses/${slug}`
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: `${course.title} (${course.abbreviation})`, href: seoPage },
  ]

  const isMdiv = slug === 'mdv'

  return (
    <>
      <SEOHead page={seoPage} />
      <JsonLD schema={courseSchema(course)} />

      {/* Hero Banner */}
      <section
        className="relative py-20"
        style={{ background: `linear-gradient(135deg, #0B1526 0%, ${course.color || '#1E3A5F'} 100%)` }}
        aria-labelledby="course-title"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%"><defs><pattern id="dotsCPG" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotsCPG)"/></svg>
        </div>
        <Container>
          <div className="relative z-10 max-w-4xl">
            <Breadcrumb customCrumbs={breadcrumbs} />
            <div className="flex items-center gap-3 mt-4 mb-4">
              <span className="text-xs font-bold text-white/70 uppercase tracking-widest bg-white/10 px-3 py-1 rounded-sm border border-white/20">{course.category}</span>
              <span className="w-1 h-1 bg-white/30" aria-hidden="true" />
              <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-sm border border-[#C8972B]/30">{course.level}</span>
            </div>
            <h1 id="course-title" className="font-display text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight">
              {course.title}
            </h1>
            <p className="text-[#C8972B] font-bold text-xl sm:text-2xl mb-4">{course.abbreviation}</p>
            <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-3xl font-sans">{course.tagline}</p>

            {/* Quick facts & Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90">
                <ClockIcon className="w-4 h-4 text-[#C8972B]" />
                Duration: {course.duration}
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-sm px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90">
                <AcademicCapIcon className="w-4 h-4 text-[#C8972B]" />
                Level: {course.level}
              </div>
              {slug === 'diploma-music' && (
                <a
                  href="https://www.zahaumusic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#C8972B] hover:bg-[#D4A843] border border-[#C8972B] text-[#0B1526] font-bold uppercase tracking-wider rounded-sm px-6 py-2.5 text-xs transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Globe className="w-4 h-4" />
                  Visit Official Music Academy Website ↗
                </a>
              )}
              {prospectusUrl && (
                <a
                  href={prospectusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold uppercase tracking-wider rounded-sm px-6 py-2.5 text-xs transition-all shadow-md hover:-translate-y-0.5"
                >
                  <DownloadIcon className="w-4 h-4 text-[#C8972B]" />
                  Download Prospectus
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Layout */}
      <div className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Main Article Section */}
            <div className="lg:col-span-2 space-y-12">

              {/* Special Official Academy Callout Banner */}
              {slug === 'diploma-music' && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-[#0B1526] to-[#152940] rounded-sm p-6 sm:p-8 text-white border border-[#C8972B]/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">Official Music Academy</span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display">Zahau Music Academy</h3>
                    <p className="text-sm text-white/80 max-w-lg font-sans">
                      Explore comprehensive course modules, faculty performances, recitals, and admissions directly on our official website.
                    </p>
                  </div>
                  <a
                    href="https://www.zahaumusic.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C8972B] hover:bg-[#D4A843] text-[#0B1526] text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-md shrink-0 hover:-translate-y-0.5"
                  >
                    <span>Explore the Music Academy</span>
                    <span aria-hidden="true" className="text-sm">↗</span>
                  </a>
                </motion.div>
              )}

              {/* 1. Program Overview */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-labelledby="overview-heading"
                className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-md border-t-4 border-t-[#1E3A5F]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-sm">
                    <BookOpenIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">Summary</span>
                    <h2 id="overview-heading" className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                      Program Overview
                    </h2>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-sans">{course.description}</p>
              </motion.section>

              {/* 2. Who This Program Is For */}
              {course.whoFor && (
                <motion.section
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-labelledby="whofor-heading"
                  className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-md border-l-4 border-l-[#C8972B]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-[#EFF3F8] text-[#1E3A5F] flex items-center justify-center font-bold">
                      <UserGroupIcon className="w-5 h-5 text-[#C8972B]" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">Target Audience</span>
                      <h2 id="whofor-heading" className="font-display text-2xl font-bold text-[#1E3A5F]">
                        Who This Program Is For
                      </h2>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-base font-sans">{course.whoFor}</p>
                </motion.section>
              )}

              {/* 3. Learning Outcomes (M.Div Feature Grid vs General Cards) */}
              {course.learningOutcomes && (
                <motion.section
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-labelledby="outcomes-heading"
                >
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">Competencies Gained</span>
                    <h2 id="outcomes-heading" className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                      Learning Outcomes
                    </h2>
                  </div>

                  {isMdiv ? (
                    /* M.Div Special Responsive Feature Grid with Icons */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {course.learningOutcomes.map((outcome, idx) => {
                        const Icon = mdvIcons[idx % mdvIcons.length]
                        const [title, ...descParts] = outcome.split(': ')
                        return (
                          <div
                            key={idx}
                            className="p-6 rounded-sm bg-white border border-slate-200 border-t-2 border-t-[#C8972B] shadow-sm hover:border-[#1E3A5F] hover:shadow-md transition-all"
                          >
                            <div className="w-10 h-10 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-4 shadow-sm">
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-bold text-[#1E3A5F] text-base mb-2">{title}</h3>
                            <p className="text-xs text-slate-600 leading-relaxed font-sans">
                              {descParts.join(': ')}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    /* General Learning Outcomes Cards */
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {course.learningOutcomes.map((outcome, idx) => (
                        <div key={idx} className="p-5 rounded-sm bg-white border border-slate-200 shadow-xs flex items-start gap-3.5">
                          <div className="w-8 h-8 rounded-sm bg-[#C8972B]/15 text-[#C8972B] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                            <SparklesIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.section>
              )}

              {/* 4. Course Objectives */}
              {course.objectives && (
                <motion.section
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-labelledby="objectives-heading"
                >
                  <h2 id="objectives-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
                    Course Objectives
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.objectives.map((obj, i) => (
                      <div key={i} className="p-4 rounded-sm bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                        <CheckIcon className="w-4 h-4 text-[#C8972B] shrink-0 mt-1" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{obj}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* 5. Subjects Offered (Curriculum — Semester Cards) */}
              {course.curriculum && (
                <motion.section
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-labelledby="curriculum-heading"
                  className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-md border-t-4 border-t-[#1E3A5F]"
                >
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">Syllabus Breakdown</span>
                    <h2 id="curriculum-heading" className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                      Subjects Offered (Curriculum)
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {course.curriculum.map((yr, i) => (
                      <div key={i} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-sm bg-[#0B1526] text-[#C8972B] font-bold text-xs flex items-center justify-center shadow-sm">
                            Y{i + 1}
                          </span>
                          <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                            {yr.year}
                          </h3>
                        </div>

                        {/* Semester Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {yr.semesters ? (
                            yr.semesters.map((sem, j) => (
                              <div
                                key={j}
                                className="p-6 rounded-sm bg-[#FAF8F5] border border-[#E8D4A2]/70 border-t-2 border-t-[#C8972B] shadow-sm hover:shadow-md hover:border-[#C8972B] transition-all flex flex-col justify-between"
                              >
                                <div>
                                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                                    <span className="font-bold text-[#1E3A5F] text-sm uppercase tracking-wider">
                                      {sem.term}
                                    </span>
                                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-sm bg-[#C8972B]/20 text-[#966E1A] uppercase tracking-wider">
                                      {sem.subjects.length} Subjects
                                    </span>
                                  </div>
                                  <ul className="space-y-2">
                                    {sem.subjects.map((subj, k) => (
                                      <li key={k} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                                        <BookOpenIcon className="w-4 h-4 text-[#C8972B] shrink-0" />
                                        <span>{subj}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="col-span-2 p-6 rounded-sm bg-[#FAF8F5] border border-slate-200">
                              <ul className="space-y-2">
                                {yr.subjects.map((subj, k) => (
                                  <li key={k} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                                    <BookOpenIcon className="w-4 h-4 text-[#C8972B] shrink-0" />
                                    <span>{subj}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* 6. Career & Ministry Opportunities */}
              {course.careers && (
                <motion.section
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-labelledby="careers-heading"
                >
                  <h2 id="careers-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
                    Career &amp; Ministry Opportunities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.careers.map((career, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-sm border border-slate-200 shadow-xs border-l-2 border-l-[#C8972B]">
                        <span className="w-2 h-2 bg-[#C8972B] shrink-0" aria-hidden="true" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-700">{career}</span>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* FAQ */}
              {course.faq && (
                <motion.section
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  aria-labelledby="faq-heading"
                >
                  <h2 id="faq-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion items={course.faq} />
                </motion.section>
              )}
            </div>

            {/* Sidebar Column */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">

                {/* Apply CTA Card */}
                <div
                  className="p-8 rounded-sm border-2 text-center bg-white shadow-md border-t-4 border-t-[#1E3A5F]"
                  style={{ borderColor: course.color || '#1E3A5F' }}
                >
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block mb-1">Enroll Today</span>
                  <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-2">
                    Ready to Apply?
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 font-sans">
                    Applications are open for the upcoming academic intake.
                  </p>
                  <Button href="/admissions/apply" variant="primary" size="md" className="w-full justify-center shadow-md">
                    Apply Online
                  </Button>
                  {slug === 'diploma-music' && (
                    <a
                      href="https://www.zahaumusic.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-3 py-2.5 px-4 rounded-sm bg-[#C8972B] hover:bg-[#D4A843] text-[#0B1526] text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                    >
                      <Globe className="w-4 h-4" /> Visit Official Website ↗
                    </a>
                  )}
                  {prospectusUrl && (
                    <a
                      href={prospectusUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-3 py-2.5 px-4 rounded-sm border border-slate-200 text-[#1E3A5F] text-xs font-bold uppercase tracking-wider hover:bg-[#EFF3F8] transition-colors flex items-center justify-center gap-2"
                    >
                      <DownloadIcon className="w-4 h-4" /> Download Prospectus
                    </a>
                  )}
                </div>

                {/* Required Credentials */}
                {course.admissionRequirements && (
                  <div className="p-6 rounded-sm bg-white border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-[#1E3A5F] text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                      <ShieldCheckIcon className="w-4 h-4 text-[#C8972B]" />
                      Admission Requirements
                    </h3>
                    <ul className="space-y-2.5">
                      {course.admissionRequirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                          <CheckIcon className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </aside>

          </div>
        </Container>
      </div>

      <CTA
        heading={`Start Your ${course.abbreviation} Journey`}
        body="Take the next step in your calling. Our admissions team is ready to guide you."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'View All Programs', href: '/courses' }}
      />
    </>
  )
}
