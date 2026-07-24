import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import CourseCard from '@components/cards/CourseCard'
import Breadcrumb from '@components/common/Breadcrumb'
import { staggerContainer, staggerItem } from '@utils/animations'
import coursesData from '@content/courses.json'

export default function Courses() {
  return (
    <>
      <SEOHead page="/courses" />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
        aria-labelledby="courses-page-heading"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%"><defs><pattern id="dotsC" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotsC)"/></svg>
        </div>
        <Container>
          <div className="relative z-10">
            <Breadcrumb />
            <h1 id="courses-page-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
              Our Academic Programs
            </h1>
            <p className="text-white/70 mt-3 text-lg max-w-xl">
              Transformative programs in theology and music designed to equip you for lifelong ministry and service.
            </p>
          </div>
        </Container>
      </section>

      {/* Course Grid */}
      <section className="section-padding bg-[#F8F9FA]" aria-label="All programs">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {coursesData.map(course => (
              <motion.div key={course.id} variants={staggerItem}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          {/* Info note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 p-8 bg-white rounded-sm border border-[#DDE3EC] border-t-4 border-t-[#C8972B] text-center"
            style={{ boxShadow: 'var(--shadow-sm)' }}
          >
            <h2 className="font-display text-2xl font-bold text-[#1E3A5F] mb-3">
              Not Sure Which Program is Right for You?
            </h2>
            <p className="text-[#5A6A7A] mb-6 max-w-xl mx-auto">
              Our admissions team is happy to help you find the right program for your calling and academic background.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="inline-flex items-center justify-center px-6 py-3 rounded-sm bg-[#1E3A5F] border border-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#2A5284] hover:border-[#2A5284] hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
              >
                Explore Admissions
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-sm border-2 border-[#1E3A5F] text-[#1E3A5F] text-xs font-bold uppercase tracking-wider hover:bg-[#1E3A5F] hover:text-white hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
