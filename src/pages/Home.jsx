import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import JsonLD from '@seo/JsonLD'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import SectionHeading from '@components/common/SectionHeading'
import CourseCard from '@components/cards/CourseCard'
import FacultyCard from '@components/cards/FacultyCard'
import NewsCard from '@components/cards/NewsCard'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem, fadeInUp, slideInLeft, slideInRight } from '@utils/animations'
import homeData from '@content/home.json'
import coursesData from '@content/courses.json'
import facultyData from '@content/faculty.json'
import newsData from '@content/news.json'
import { CheckIcon, ArrowRightIcon } from '@components/common/Icons'

// Hero section
function Hero({ data }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 50%, #2A5284 100%)',
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cross" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M20 0v40M0 20h40" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cross)"/>
        </svg>
      </div>

      {/* Decorative glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8972B, transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 rounded-full opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2A5284, transparent)' }} aria-hidden="true" />

      <Container>
        <div className="relative z-10 py-24 lg:py-32 max-w-4xl">
          {/* Tagline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8972B] animate-pulse" aria-hidden="true" />
            Accredited Theological & Music Education
          </motion.div>

          {/* Main headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-balance"
          >
            {data.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl"
          >
            {data.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href={data.cta1.href} variant="accent" size="lg">
              {data.cta1.label}
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button href={data.cta2.href} variant="ghost" size="lg">
              {data.cta2.label}
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L1440 0V80H0Z" fill="#F8F9FA"/>
        </svg>
      </div>
    </section>
  )
}

// Stats bar
function StatsBar({ stats }) {
  return (
    <section className="bg-white py-10 border-b border-[#DDE3EC]" aria-label="Key statistics">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold font-display text-[#1E3A5F] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#5A6A7A]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

// About preview section
function AboutPreview({ data }) {
  return (
    <section className="section-padding bg-[#F8F9FA]" aria-labelledby="about-preview-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              About Us
            </span>
            <h2
              id="about-preview-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-5 leading-tight text-balance"
            >
              {data.heading}
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed mb-6">{data.body}</p>

            {/* Values list */}
            <ul className="space-y-2.5 mb-8">
              {[
                'Biblical Fidelity & Academic Excellence',
                'Holistic Spiritual Formation',
                'Practical Ministry Training',
                'A Vibrant Community of Scholars',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#5A6A7A]">
                  <span className="w-5 h-5 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 text-[#1E3A5F]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button href={data.cta.href} variant="primary" size="md">
              {data.cta.label}
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div
              className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#1E3A5F] to-[#2A5284] flex items-center justify-center"
              style={{ boxShadow: 'var(--shadow-xl)' }}
            >
              {/* Placeholder visual — decorative cross/book pattern */}
              <div className="text-center text-white/20 p-12">
                <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <p className="text-lg font-semibold text-white/40">Campus Photo</p>
                <p className="text-xs text-white/20 mt-1">Replace with ImageKit image</p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 bg-[#C8972B] text-white px-5 py-4 rounded-xl shadow-lg"
              style={{ boxShadow: '0 10px 30px rgba(200,151,43,0.3)' }}
            >
              <p className="text-2xl font-bold">20+</p>
              <p className="text-xs font-medium text-white/80">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  const featuredCourses = coursesData.filter(c =>
    homeData.featuredCourses.includes(c.id)
  )
  const recentNews = newsData.slice(0, 3)
  const featuredFaculty = facultyData.slice(0, 4)

  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Glory Education Center — Home',
    url: 'https://www.gloryeducationcenter.org/',
    description: 'Glory Education Center offers B.Th, M.Dv, M.Th, and Diploma in Music programs.',
  }

  return (
    <>
      <SEOHead page="/" />
      <JsonLD schema={homepageSchema} />

      {/* Hero */}
      <Hero data={homeData.hero} />

      {/* Stats */}
      <StatsBar stats={homeData.stats} />

      {/* About Preview */}
      <AboutPreview data={homeData.aboutPreview} />

      {/* Courses Section */}
      <section className="section-padding bg-white" aria-labelledby="courses-section-heading">
        <Container>
          <SectionHeading
            heading="Our Academic Programs"
            subheading="Four transformative programs designed to equip you for ministry, scholarship, and worship"
            headingAs="h2"
            className="mb-12"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredCourses.map(course => (
              <motion.div key={course.id} variants={staggerItem}>
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button href="/courses" variant="secondary" size="md">
              View All Programs
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Faculty Section */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="faculty-section-heading">
        <Container>
          <SectionHeading
            heading={homeData.facultyHeading}
            subheading={homeData.facultySubheading}
            className="mb-12"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredFaculty.map(member => (
              <motion.div key={member.id} variants={staggerItem}>
                <FacultyCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button href="/about#faculty" variant="secondary" size="md">
              Meet All Faculty
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Strip */}
      <section className="section-padding bg-white" aria-labelledby="gallery-section-heading">
        <Container>
          <SectionHeading
            heading={homeData.galleryHeading}
            subheading={homeData.gallerySubheading}
            className="mb-12"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {[1,2,3,4,5,6].map(i => (
              <motion.div
                key={i}
                variants={staggerItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="aspect-square bg-gradient-to-br from-[#EFF3F8] to-[#DDE3EC] rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-[#2A5284]/20 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button href="/gallery" variant="secondary" size="md">
              View Full Gallery
            </Button>
          </div>
        </Container>
      </section>

      {/* News Section */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="news-section-heading">
        <Container>
          <SectionHeading
            heading={homeData.newsHeading}
            subheading={homeData.newsSubheading}
            className="mb-12"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {recentNews.map(article => (
              <motion.div key={article.id} variants={staggerItem}>
                <NewsCard article={article} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Button href="/news" variant="secondary" size="md">
              All News & Updates
            </Button>
          </div>
        </Container>
      </section>

      {/* Admissions CTA */}
      <CTA
        heading={homeData.admissionsCTA.heading}
        body={homeData.admissionsCTA.body}
        primaryCta={homeData.admissionsCTA.cta}
        secondaryCta={{ label: 'Learn About Us', href: '/about' }}
      />
    </>
  )
}
