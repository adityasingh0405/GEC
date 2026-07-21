import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import Breadcrumb from '@components/common/Breadcrumb'
import Container from '@components/common/Container'
import SectionHeading from '@components/common/SectionHeading'
import FacultyCard from '@components/cards/FacultyCard'
import Timeline from '@components/common/Timeline'
import CTA from '@components/common/CTA'
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from '@utils/animations'
import aboutData from '@content/about.json'
import facultyData from '@content/faculty.json'

// Page hero banner
function PageHero({ heading, subheading }) {
  return (
    <section
      className="relative py-20 flex items-center"
      style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
      aria-labelledby="page-hero-heading"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"/></svg>
      </div>
      <Container>
        <div className="relative z-10">
          <Breadcrumb />
          <h1 id="page-hero-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 text-balance">
            {heading}
          </h1>
          {subheading && <p className="text-white/70 mt-3 text-lg max-w-xl">{subheading}</p>}
        </div>
      </Container>
    </section>
  )
}

export default function About() {
  return (
    <>
      <SEOHead page="/about" />

      <PageHero heading="About Glory Education Center" />

      {/* Mission & Vision */}
      <section className="section-padding bg-white" aria-labelledby="mission-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-[#DDE3EC]"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                </svg>
              </div>
              <h2 id="mission-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-3">
                {aboutData.mission.heading}
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed">{aboutData.mission.body}</p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-[#DDE3EC]"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#C8972B]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C8972B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#1E3A5F] mb-3">
                {aboutData.vision.heading}
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed">{aboutData.vision.body}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="values-heading">
        <Container>
          <SectionHeading heading="Our Core Values" className="mb-12" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {aboutData.values.map((value, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-white p-6 rounded-2xl border border-[#DDE3EC] text-center"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="w-12 h-12 rounded-full bg-[#1E3A5F] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#1E3A5F] mb-2">{value.title}</h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* History + Timeline */}
      <section className="section-padding bg-white" aria-labelledby="history-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">Our Story</span>
              <h2 id="history-heading" className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-5">
                {aboutData.history.heading}
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed">{aboutData.history.body}</p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Timeline items={aboutData.history.timeline} />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="leadership-heading">
        <Container>
          <SectionHeading
            heading={aboutData.leadership.heading}
            subheading="The visionary leaders guiding our academic and spiritual community"
            className="mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {aboutData.leadership.members.map((member, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 text-center border border-[#DDE3EC]"
                style={{ boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#2A5284] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').slice(-1)[0].charAt(0)}
                </div>
                <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-[#C8972B] font-semibold mb-3">{member.title}</p>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Faculty */}
      <section id="faculty" className="section-padding bg-white" aria-labelledby="faculty-heading">
        <Container>
          <SectionHeading
            heading="Our Faculty"
            subheading="Dedicated scholars and practitioners committed to your formation"
            className="mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {facultyData.map(member => (
              <motion.div key={member.id} variants={staggerItem}>
                <FacultyCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA
        heading="Join Our Community"
        body="Take the next step in your calling. Apply to Glory Education Center today."
        primaryCta={{ label: 'Apply for Admission', href: '/admissions' }}
        secondaryCta={{ label: 'Explore Programs', href: '/courses' }}
      />
    </>
  )
}
