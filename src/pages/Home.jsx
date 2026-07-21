import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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

// ─── Hero Carousel Images ────────────────────────────────────────────────────
// Replace these Unsplash URLs with actual ImageKit campus photos when available.
// The first image has fetchpriority="high" for LCP; the rest are lazy-loaded.
const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80&auto=format&fit=crop',
    alt: 'Students in a college campus courtyard',
  },
  {
    src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80&auto=format&fit=crop',
    alt: 'Open theological books in a library',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80&auto=format&fit=crop',
    alt: 'University graduation ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format&fit=crop',
    alt: 'Student studying in a peaceful setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1920&q=80&auto=format&fit=crop',
    alt: 'Music students in a worship session',
  },
]

const OVERLAY =
  'linear-gradient(180deg, rgba(12,25,52,.42) 0%, rgba(15,36,68,.55) 55%, rgba(12,28,58,.68) 100%)'

// ─── Hero Component ──────────────────────────────────────────────────────────
function Hero({ data }) {
  const [current, setCurrent] = useState(0)

  // Crossfade every 7 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_IMAGES.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[1080px] flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Image Carousel (crossfade) ─────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              style={{
                // Ken Burns: scale slowly from 1 → 1.06 while visible
                transform: i === current ? 'scale(1.06)' : 'scale(1)',
                transition: i === current
                  ? 'transform 8000ms ease-in-out, opacity 1800ms ease-in-out'
                  : 'transform 0ms, opacity 1800ms ease-in-out',
              }}
              fetchpriority={i === 0 ? 'high' : undefined}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </div>
        ))}

        {/* Deep navy gradient overlay for readability */}
        <div className="absolute inset-0" style={{ background: OVERLAY }} />
      </div>

      {/* ── Main Content (vertically centred below header) ─────────── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center pt-16 sm:pt-20 px-5 text-center">
        {/* Accreditation Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 mb-7 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white/90 text-xs sm:text-sm font-medium tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843] animate-pulse shrink-0" />
          Accredited Theological &amp; Music Education
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="font-display font-bold text-white leading-[1.1] text-balance max-w-4xl"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
        >
          Equipping Leaders for{' '}
          <em className="not-italic text-[#D4A843]">God's Kingdom</em>
        </motion.h1>

        {/* Supporting paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-6 max-w-2xl text-white/80 text-base sm:text-lg leading-relaxed font-sans"
        >
          Preparing students through theological education, worship, leadership, and service.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — Apply Now */}
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold text-[#1E3A5F] bg-[#D4A843] hover:bg-[#C8972B] transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-[#C8972B]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843]"
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Secondary — Explore Courses */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white border-2 border-white/35 hover:border-white/65 hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Courses
          </Link>
        </motion.div>
      </div>

      {/* ── Carousel Dot Indicators ───────────────────────────────── */}
      <div className="relative z-10 flex items-center justify-center gap-2 pb-8" aria-hidden="true">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-6 h-1.5 bg-[#D4A843]' : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/65'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll to content"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center items-start pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#D4A843]" />
        </motion.div>
      </motion.button>

      {/* ── Bottom Wave Divider ───────────────────────────────────── */}
      <div className="absolute bottom-0 inset-x-0 z-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path d="M0 56L1440 0V56H0Z" fill="#F8F9FA" />
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
