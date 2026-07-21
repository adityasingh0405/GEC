import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import JsonLD from '@seo/JsonLD'
import { courseSchema } from '@seo/schemas'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import Accordion from '@components/common/Accordion'
import Breadcrumb from '@components/common/Breadcrumb'
import CTA from '@components/common/CTA'
import { CheckIcon, ClockIcon, AcademicCapIcon, BookOpenIcon } from '@components/common/Icons'
import { fadeInUp } from '@utils/animations'
import coursesData from '@content/courses.json'

export default function CoursePage({ slug }) {
  const course = coursesData.find(c => c.slug === slug)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#5A6A7A]">Course not found.</p>
      </div>
    )
  }

  const seoPage = `/courses/${slug}`
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: `${course.title} (${course.abbreviation})`, href: seoPage },
  ]

  return (
    <>
      <SEOHead page={seoPage} />
      <JsonLD schema={courseSchema(course)} />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: `linear-gradient(135deg, #152940 0%, ${course.color || '#1E3A5F'} 100%)` }}
        aria-labelledby="course-title"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%"><defs><pattern id="dotsCPG" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotsCPG)"/></svg>
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Breadcrumb customCrumbs={breadcrumbs} />
            <div className="flex items-center gap-3 mt-3 mb-4">
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{course.category}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" aria-hidden="true" />
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest">{course.level}</span>
            </div>
            <h1 id="course-title" className="font-display text-4xl sm:text-5xl font-bold text-white mb-2 leading-tight">
              {course.title}
            </h1>
            <p className="text-[#C8972B] font-bold text-xl mb-4">{course.abbreviation}</p>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">{course.tagline}</p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-white/80">
                <ClockIcon className="w-4 h-4 text-[#C8972B]" />
                {course.duration}
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm text-white/80">
                <AcademicCapIcon className="w-4 h-4 text-[#C8972B]" />
                {course.level}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="section-padding bg-[#F8F9FA]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">

              {/* Overview */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-labelledby="overview-heading"
              >
                <h2 id="overview-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
                  Program Overview
                </h2>
                <p className="text-[#5A6A7A] leading-relaxed text-base">{course.description}</p>
              </motion.section>

              {/* Eligibility */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-labelledby="eligibility-heading"
              >
                <h2 id="eligibility-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
                  Eligibility Requirements
                </h2>
                <ul className="space-y-3">
                  {course.eligibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-[#1E3A5F]" />
                      </span>
                      <span className="text-sm text-[#5A6A7A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Curriculum */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-labelledby="curriculum-heading"
              >
                <h2 id="curriculum-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-6">
                  Curriculum
                </h2>
                <div className="space-y-5">
                  {course.curriculum.map((yr, i) => (
                    <details
                      key={i}
                      className="bg-white rounded-xl border border-[#DDE3EC] overflow-hidden"
                      open={i === 0}
                    >
                      <summary className="px-5 py-4 font-semibold text-[#1E3A5F] cursor-pointer select-none hover:bg-[#EFF3F8] transition-colors">
                        {yr.year}
                      </summary>
                      <ul className="px-5 pb-4 space-y-1.5">
                        {yr.subjects.map((subj, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-[#5A6A7A]">
                            <BookOpenIcon className="w-3.5 h-3.5 text-[#C8972B] shrink-0" />
                            {subj}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>

                {/* Specializations (M.Th only) */}
                {course.specializations && (
                  <div className="mt-6">
                    <h3 className="font-bold text-[#1E3A5F] mb-3">Areas of Specialization</h3>
                    <div className="flex flex-wrap gap-2">
                      {course.specializations.map((spec, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-semibold">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.section>

              {/* Career Opportunities */}
              <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                aria-labelledby="careers-heading"
              >
                <h2 id="careers-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
                  Career Opportunities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careers.map((career, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#DDE3EC]">
                      <span className="w-2 h-2 rounded-full bg-[#C8972B] shrink-0" aria-hidden="true" />
                      <span className="text-sm text-[#5A6A7A]">{career}</span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* FAQ */}
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
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Apply CTA */}
                <div
                  className="p-6 rounded-2xl border-2 text-center"
                  style={{ borderColor: course.color || '#1E3A5F' }}
                >
                  <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-2">
                    Ready to Apply?
                  </h3>
                  <p className="text-sm text-[#5A6A7A] mb-5">
                    Applications are open for the upcoming academic year.
                  </p>
                  <Button href="/admissions" variant="primary" size="md" className="w-full justify-center">
                    Apply Now
                  </Button>
                  <Button href="/contact" variant="secondary" size="sm" className="w-full justify-center mt-3">
                    Contact Admissions
                  </Button>
                </div>

                {/* Admission Requirements */}
                <div className="p-6 rounded-2xl bg-white border border-[#DDE3EC]" style={{ boxShadow: 'var(--shadow-sm)' }}>
                  <h3 className="font-bold text-[#1E3A5F] mb-4">Admission Requirements</h3>
                  <ul className="space-y-2.5">
                    {course.admissionRequirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#5A6A7A]">
                        <CheckIcon className="w-4 h-4 text-[#1E3A5F] shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Facts */}
                <div className="p-6 rounded-2xl bg-[#EFF3F8] border border-[#DDE3EC]">
                  <h3 className="font-bold text-[#1E3A5F] mb-4">Quick Facts</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Duration</dt>
                      <dd className="text-sm font-bold text-[#1E3A5F] mt-0.5">{course.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Level</dt>
                      <dd className="text-sm font-bold text-[#1E3A5F] mt-0.5">{course.level}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold text-[#5A6A7A] uppercase tracking-wider">Category</dt>
                      <dd className="text-sm font-bold text-[#1E3A5F] mt-0.5">{course.category}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </div>

      <CTA
        heading={`Start Your ${course.abbreviation} Journey`}
        body="Take the next step in your calling. Our admissions team is ready to guide you."
        primaryCta={{ label: 'Apply Now', href: '/admissions' }}
        secondaryCta={{ label: 'View All Programs', href: '/courses' }}
      />
    </>
  )
}
