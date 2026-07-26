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
import Modal from '@components/common/Modal'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem, fadeInUp, slideInLeft, slideInRight } from '@utils/animations'
import homeData from '@content/home.json'
import coursesData from '@content/courses.json'
import facultyData from '@content/faculty.json'
import { CheckIcon, ArrowRightIcon, BookOpen, FileText, GraduationCap, Globe } from '@components/common/Icons'

// ─── Hero Video URL ──────────────────────────────────────────────────────────
const HERO_VIDEO_URL =
  'https://ik.imagekit.io/xdm1pwpls0/pdfs/WhatsApp%20Video%202026-07-26%20at%201.45.02%20AM%20-%20Trim%20-%20Trim.mp4?updatedAt=1785082564527'

const OVERLAY =
  'linear-gradient(180deg, rgba(12,25,52,.42) 0%, rgba(15,36,68,.55) 55%, rgba(12,28,58,.68) 100%)'

// ─── Hero Component ──────────────────────────────────────────────────────────
function Hero({ data }) {
  return (
    <section
      className="relative h-screen min-h-[600px] max-h-[1080px] flex flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Background Video ───────────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

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
          className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-sm border border-white/25 bg-white/10 backdrop-blur-md text-white/90 text-xs sm:text-sm font-semibold uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-none bg-[#D4A843] animate-pulse shrink-0" />
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-[15px] font-bold uppercase tracking-wider text-[#1E3A5F] bg-[#D4A843] border border-[#D4A843] hover:bg-[#C8972B] hover:border-[#C8972B] transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#C8972B]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843]"
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Secondary — Explore Courses */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-[15px] font-bold uppercase tracking-wider text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Courses
          </Link>
        </motion.div>
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
          className="w-5 h-8 rounded-sm border-2 border-white/30 flex justify-center items-start pt-1.5"
        >
          <div className="w-1 h-2 bg-[#D4A843]" />
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
                  <span className="w-5 h-5 rounded-sm bg-[#1E3A5F]/10 border border-[#1E3A5F]/20 flex items-center justify-center shrink-0">
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
              className="relative rounded-sm overflow-hidden aspect-[4/3] border border-[#DDE3EC] border-t-2 border-t-[#C8972B] group"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Image */}
              <img
                src="https://ik.imagekit.io/xdm1pwpls0/f_downlods/Farewell/719532886_970724695788944_6267178681070198581_n.jpg?updatedAt=1784888654464"
                alt="Students of Glory Education Center"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/55 via-[#1E3A5F]/10 to-transparent" />


            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -left-5 bg-[#C8972B] text-white px-5 py-4 rounded-sm border border-[#A87820] shadow-lg"
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
  const [selectedFaculty, setSelectedFaculty] = useState(null)

  const featuredCourses = coursesData.filter(c =>
    homeData.featuredCourses.includes(c.id)
  )
  const marqueeFaculty = [...facultyData, ...facultyData, ...facultyData]

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

      {/* Faculty Section — Infinite Horizontal Marquee Carousel */}
      <section className="py-16 sm:py-20 bg-[#EFF3F8] overflow-hidden" aria-labelledby="faculty-section-heading">
        <style>{`
          @keyframes facultyMarqueeScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-33.33333%, 0, 0); }
          }
        `}</style>

        <Container>
          <SectionHeading
            heading="Our Distinguished Faculty & Leadership"
            subheading="Scholars, theologians, and educators committed to academic excellence and spiritual formation"
            className="mb-10 text-center"
          />
        </Container>

        {/* Marquee Track Container with Gradient Edge Fades */}
        <div className="relative w-full overflow-hidden group py-4">
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#EFF3F8] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#EFF3F8] to-transparent z-10 pointer-events-none" />

          <div
            className="flex gap-6 w-max group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
            style={{
              animation: 'facultyMarqueeScroll 45s linear infinite',
            }}
          >
            {marqueeFaculty.map((member, idx) => (
              <div key={`${member.id}-${idx}`} className="w-[260px] sm:w-[280px] shrink-0 h-full">
                <FacultyCard
                  member={member}
                  onClick={() => setSelectedFaculty(member)}
                />
              </div>
            ))}
          </div>
        </div>

        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button href="/about/leadership-faculty" variant="secondary" size="md">
              Meet All Faculty &amp; Leadership
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Strip */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-[#2A5284] to-[#1E3A5F]">
        <Container>

          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Your Journey at Glory Education Center
            </h2>

            <p className="mt-3 text-lg text-white/80">
              Growing in Faith • Knowledge • Service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-sm overflow-hidden border border-white/20 shadow-xl">

            {/* Discover */}
            <div className="group bg-white h-40 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:z-10">
              <BookOpen className="w-9 h-9 text-[#2A5284] mb-3" />
              <p className="uppercase text-xs tracking-[0.2em] text-gray-500">
                Discover
              </p>
              <h3 className="text-2xl font-bold text-[#1E3A5F]">
                Explore Your Calling
              </h3>
            </div>

            {/* Apply */}
            <div className="group bg-[#A6C4E8] h-40 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2">
              <FileText className="w-9 h-9 text-[#1E3A5F] mb-3" />
              <p className="uppercase text-xs tracking-[0.2em] text-gray-600">
                Apply
              </p>
              <h3 className="text-2xl font-bold text-[#1E3A5F]">
                Begin Your Journey
              </h3>
            </div>

            {/* Learn */}
            <div className="group bg-[#6D97C4] h-40 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2">
              <GraduationCap className="w-9 h-9 text-white mb-3" />
              <p className="uppercase text-xs tracking-[0.2em] text-white/80">
                Learn
              </p>
              <h3 className="text-2xl font-bold text-white">
                Grow in Excellence
              </h3>
            </div>

            {/* Serve */}
            <div className="group bg-[#1E3A5F] h-40 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2">
              <Globe className="w-9 h-9 text-[#D4A017] mb-3" />
              <p className="uppercase text-xs tracking-[0.2em] text-white/70">
                Serve
              </p>
              <h3 className="text-2xl font-bold text-white">
                Make an Impact
              </h3>
            </div>

          </div>

        </Container>
      </section>

      {/* video Section */}
      <section className="section-padding bg-[#EFF3F8]">
        <Container>
          <SectionHeading
            heading="Welcome to Glory Education Center"
            subheading="Equipping Leaders for God's Kingdom"
            className="mb-14"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 items-stretch"
          >
            {/* Video */}
            <div className="lg:col-span-3">
              <div className="h-full overflow-hidden border border-[#DDE3EC] shadow-xl bg-white">
                <div className="aspect-video lg:aspect-auto lg:h-full">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/oQi5CmZJH2A?si=NXNpFtZpaSg6CmUo"
                    title="Welcome to Glory Education Center"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Welcome Card */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="lg:col-span-2 bg-white border border-[#DDE3EC] lg:border-l-0 border-t-4 lg:border-t-4 border-t-[#1E3A5F] shadow-xl p-10 flex flex-col justify-center"
            >
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-[#D4A017] mb-3">
                Welcome
              </span>

              <h3 className="text-4xl font-bold text-[#1E3A5F] leading-tight mb-6">
                Preparing Faithful Christian Leaders
              </h3>

              <p className="text-gray-600 leading-8 text-lg">
                Glory Education Center is committed to preparing students through
                theological education, worship, leadership, and service. We strive
                to develop faithful Christian leaders equipped with biblical
                knowledge, spiritual maturity, and practical ministry skills to
                impact churches and communities around the world.
              </p>



              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-[#D4A017] font-semibold hover:gap-3 transition-all duration-300"
              >
                About
                Read More
                <span>→</span>
              </Link>




              <div className="border-t border-[#DDE3EC] mt-10 pt-6">
                <h4 className="text-2xl font-bold text-[#1E3A5F]">
                  Dr. Henry Sui
                </h4>

                <p className="text-gray-500 mt-2 text-lg">
                  Principal, Glory Education Center
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section >

      {/* Admissions CTA */}
      <CTA
        heading={homeData.admissionsCTA.heading}
        body={homeData.admissionsCTA.body}
        primaryCta={homeData.admissionsCTA.cta}
        secondaryCta={{ label: 'Learn About Us', href: '/about' }}
      />

      {/* Faculty Bio Modal */}
      {selectedFaculty && (
        <Modal
          isOpen={Boolean(selectedFaculty)}
          onClose={() => setSelectedFaculty(null)}
          title={selectedFaculty.name}
        >
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              {selectedFaculty.image ? (
                <img
                  src={selectedFaculty.image}
                  alt={selectedFaculty.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C8972B] shrink-0"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-bold text-xl shrink-0">
                  {selectedFaculty.name.split(' ').slice(-1)[0].charAt(0)}
                </div>
              )}
              <div>
                <h4 className="font-bold text-[#1E3A5F] text-lg leading-snug">{selectedFaculty.name}</h4>
                <p className="text-xs font-bold text-[#C8972B] uppercase tracking-wider">{selectedFaculty.title}</p>
                <p className="text-xs text-[#5A6A7A] mt-0.5">{selectedFaculty.qualifications}</p>
              </div>
            </div>
            <hr className="border-[#DDE3EC]" />
            <p className="text-sm text-[#5A6A7A] leading-relaxed font-sans">
              {selectedFaculty.bio || 'Full biography coming soon.'}
            </p>
            {selectedFaculty.specialization && (
              <div className="bg-[#EFF3F8] p-3 rounded-sm border border-[#DDE3EC]">
                <p className="text-xs text-[#1E3A5F] font-semibold">
                  <span className="text-[#C8972B] uppercase font-bold tracking-wider mr-1">Specialization:</span>
                  {selectedFaculty.specialization}
                </p>
              </div>
            )}
          </div>
        </Modal>
      )}
    </>
  )
}
