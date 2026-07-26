import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import {
  BookOpenIcon,
  UserGroupIcon,
  HeartIcon,
  Globe,
  SparklesIcon,
  MapPinIcon,
  AcademicCapIcon,
  CheckIcon,
  CalendarIcon,
} from '@components/common/Icons'
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '@utils/animations'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Story', href: '/about/our-story' },
]

/* ─── Highlights Cards ── */
const beginningCards = [
  {
    icon: CalendarIcon,
    label: 'Established',
    value: '13 June 2022',
    desc: 'Founding date of Glory Education Centre.',
  },
  {
    icon: UserGroupIcon,
    label: 'First Batch',
    value: '47 Students',
    desc: 'Inaugural cohort pursuing Theology and Music.',
  },
  {
    icon: AcademicCapIcon,
    label: 'Graduations',
    value: '2025 & 2026',
    desc: 'Historic ceremonies held on 19 Feb 2025 and 19 Feb 2026.',
  },
]

/* ─── Future Vision Items ── */
const futureVisionItems = [
  { title: 'Permanent Campus', desc: 'Acquiring one acre of land to build purpose-built academic and residential infrastructure.' },
  { title: 'School of Music & Music Academy', desc: 'State-of-the-art worship arts facilities to nurture musicians and song leaders.' },
  { title: 'Theological College', desc: 'Advanced biblically rooted degree programs for ministry and pastoral leaders.' },
  { title: 'Student Hostels & Library', desc: 'Dedicated residential accommodation and comprehensive theological library resources.' },
  { title: 'Regional Branches', desc: 'Expanding GEC educational access with regional centers, including Mizoram.' },
  { title: 'Vocational Education', desc: 'Skill-development programs such as tailoring and practical trade training for community empowerment.' },
]

export default function OurStory() {
  return (
    <>
      <SEOHead page="/about/our-story" />

      <PageHeader
        heading="Our Story"
        subheading="A divine calling, a commitment to Christ's harvest field, and the journey of Glory Education Centre."
        badge="About GEC"
        customCrumbs={crumbs}
      />

      {/* ══════════════════════════════════════════════
          1 · MY CALLING
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-white" aria-labelledby="calling-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-5"
            >
              <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">
                Foundational Testimony
              </span>
              <h2
                id="calling-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] leading-tight"
              >
                My Calling
              </h2>
              <div className="space-y-4 text-[#5A6A7A] leading-relaxed text-base">
                <p>
                  The journey of Glory Education Centre began with a divine calling received through a dream — a vivid encounter that set a lifelong direction for ministry, education, and kingdom service.
                </p>
                <p>
                  Following this divine mandate, five years were spent in dedicated missionary service, laboring in mission fields, serving unreached communities, and witnessing firsthand the urgent need for biblically grounded, humble, and well-trained Christian leaders.
                </p>
                <p>
                  Today, serving as the Chief Point Person for the Gospel Initiative and Director of Glory Education Centre (GEC), the mission remains steadfast: to equip men and women with solid biblical truth, vibrant worship arts, and practical ministry skills to transform lives and communities across India and beyond.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="bg-[#FAF8F5] border border-[#DDE3EC] rounded-sm p-8 shadow-md border-l-4 border-l-[#C8972B] space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center font-bold text-xl shrink-0">
                    GEC
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#1E3A5F]">Leadership &amp; Direction</h3>
                    <p className="text-xs text-[#C8972B] font-bold uppercase tracking-wider">Chief Point Person &amp; Director</p>
                  </div>
                </div>

                <blockquote className="text-sm italic text-slate-700 leading-relaxed border-t border-slate-200 pt-4">
                  "Called by God to build up servant-leaders who hold fast to Scripture, sing with conviction, and preach Christ with unreserved passion."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          2 · ABOUT GLORY EDUCATION CENTRE (GEC)
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="gec-heading">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              Established on 13 June 2022
            </span>
            <h2
              id="gec-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-5 leading-tight"
            >
              About Glory Education Centre (GEC)
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed text-lg">
              Glory Education Centre (GEC) was officially established on 13 June 2022. Beginning with an inaugural batch of 47 passionate students, GEC was birthed to offer holistic theological scholarship, pastoral formation, and worship music education.
            </p>
          </motion.div>

          {/* Key Milestones Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          >
            {beginningCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-white border border-[#DDE3EC] border-t-4 border-t-[#1E3A5F] rounded-sm p-8 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-1">{card.label}</p>
                  <p className="text-xl font-bold text-[#1E3A5F] mb-2">{card.value}</p>
                  <p className="text-xs text-[#5A6A7A] leading-relaxed">{card.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Graduation & Impact Section */}
          <div className="bg-white rounded-sm border border-[#DDE3EC] p-8 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFF3F8] text-[#1E3A5F] text-xs font-bold uppercase tracking-wider rounded-sm">
                  <AcademicCapIcon className="w-4 h-4 text-[#C8972B]" />
                  Graduation Ceremonies
                </span>
                <h3 className="font-display text-2xl font-bold text-[#1E3A5F]">
                  Graduates Serving Local Churches &amp; Ministries
                </h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">
                  GEC celebrated historic graduation ceremonies on <strong>19 February 2025</strong> and <strong>19 February 2026</strong>. Our equipped graduates are actively serving local congregations, planting churches, leading worship ensembles, and advancing mission initiatives across diverse regions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          3 · OUR VISION FOR THE FUTURE
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-white" aria-labelledby="future-heading">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              Expansion &amp; Infrastructure
            </span>
            <h2
              id="future-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] leading-tight"
            >
              Our Vision for the Future
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed text-base mt-3">
              Pressing forward in faith to secure dedicated campus grounds and expand practical vocational, music, and theological training.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {futureVisionItems.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-[#F8FAFC] border border-[#DDE3EC] border-l-4 border-l-[#C8972B] rounded-sm p-6 space-y-2"
              >
                <div className="flex items-center gap-2 text-[#1E3A5F] font-bold text-base">
                  <CheckIcon className="w-4 h-4 text-[#C8972B] shrink-0" />
                  <h3>{item.title}</h3>
                </div>
                <p className="text-xs text-[#5A6A7A] leading-relaxed pl-6">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          4 · GEC OFFICIAL BIBLE VERSE / MOTTO
      ══════════════════════════════════════════════ */}
      <section
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #0B1526 0%, #1E3A5F 100%)' }}
        aria-labelledby="motto-heading"
      >
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-4 block">
                Official GEC Motto
              </span>
              <h2
                id="motto-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight"
              >
                Scriptural Foundation
              </h2>
            </motion.div>

            {/* Official Verse Quote */}
            <motion.blockquote
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-sm p-8 sm:p-12 backdrop-blur-sm"
            >
              <p className="font-display text-xl sm:text-3xl font-bold text-white leading-relaxed italic">
                "For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea."
              </p>
              <footer className="mt-6 text-[#C8972B] font-bold uppercase tracking-widest text-sm">
                — Habakkuk 2:14
              </footer>
            </motion.blockquote>
          </div>
        </Container>
      </section>

      <CTA
        heading="Be Part of Our Next Chapter"
        body="Join our student body and write your own story of ministry formation, worship, and service."
        primaryCta={{ label: 'Apply Now', href: '/admissions' }}
        secondaryCta={{ label: 'Explore Courses', href: '/courses' }}
      />
    </>
  )
}
