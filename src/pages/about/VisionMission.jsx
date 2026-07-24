import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import {
  SparklesIcon,
  Globe,
  UserGroupIcon,
  BookOpenIcon,
  HeartIcon,
  ShieldCheckIcon
} from '@components/common/Icons'
import { staggerContainer, staggerItem, slideInLeft, slideInRight } from '@utils/animations'
import aboutData from '@content/about.json'

const OBJECTIVES = [
  {
    title: "Evangelism",
    subtitle: "Gospel Proclamation",
    icon: HeartIcon,
    description: "Proclaiming the unsearchable riches of Jesus Christ with passion, biblical clarity, and compassionate engagement across diverse cultural contexts."
  },
  {
    title: "Church Planting",
    subtitle: "A Church in Every Village",
    icon: Globe,
    description: "Pioneering self-governing, self-supporting, and self-propagating local worshipping communities in unreached rural and urban regions."
  },
  {
    title: "Leadership Development",
    subtitle: "Servant Leadership",
    icon: UserGroupIcon,
    description: "Mentoring men and women of God in pastoral care, spiritual formation, ethical integrity, and executive church administration."
  },
  {
    title: "Biblical Education",
    subtitle: "Theological Rigor",
    icon: BookOpenIcon,
    description: "Providing high-rigor, biblically rooted degree and diploma programs that integrate sound hermeneutics with practical ministry skill."
  },
  {
    title: "Missions & Outreach",
    subtitle: "Global Harvest",
    icon: SparklesIcon,
    description: "Mobilizing cross-cultural workers, fostering missionary heartbeats, and partnering with regional local church networks."
  }
]

export default function VisionMission() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Vision & Mission', href: '/about/vision-mission' }
  ]

  return (
    <>
      <SEOHead page="/about/vision-mission" />

      <PageHeader
        heading="Vision &amp; Mission"
        subheading="Our core purpose, guiding vision, foundational institutional objectives, and strategic aims."
        badge="About GEC"
        customCrumbs={crumbs}
      />

      {/* Mission & Vision Cards */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-sm border border-slate-200 bg-[#FAF8F5] shadow-md border-t-4 border-t-[#C8972B] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-6 shadow-sm border border-[#0B1526]">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block mb-1">
              Core Purpose
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F] mb-4">
              {aboutData.mission.heading}
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-sans">
              {aboutData.mission.body}
            </p>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-sm border border-slate-700 bg-[#0B1526] text-white shadow-md border-t-4 border-t-[#C8972B] relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-sm bg-[#C8972B] text-[#0B1526] flex items-center justify-center mb-6 shadow-sm">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block mb-1">
              Future Mandate
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
              {aboutData.vision.heading}
            </h2>
            <p className="text-white/85 leading-relaxed text-base sm:text-lg font-sans">
              {aboutData.vision.body}
            </p>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Foundational Pillars</span>
            <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mt-1">
              Our Core Institutional Values
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Four enduring principles that shape our curriculum, campus community, and spiritual formation.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {aboutData.values.map((val, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="p-6 rounded-sm bg-white border border-slate-200 border-t-2 border-t-[#C8972B] shadow-sm text-center hover:border-[#1E3A5F] transition-all"
              >
                <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] font-black text-lg mx-auto mb-4 flex items-center justify-center shadow-sm">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-[#1E3A5F] text-lg mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Gold Accent Divider */}
        <div className="flex items-center justify-center gap-4 py-4 max-w-4xl mx-auto mb-16">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-[#C8972B]" />
          <span className="text-[#C8972B] font-serif text-sm italic font-bold">Strategic Pillars of Ministry</span>
          <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-[#C8972B]" />
        </div>

        {/* NEW SECTION: Aims & Objectives */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#FAF5E8] border border-[#E8D4A2] text-[#966E1A] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheckIcon className="w-4 h-4" />
              Institutional Goals
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
              Aims &amp; Objectives
            </h2>
            <p className="text-slate-600 text-base mt-2 font-sans">
              Comprehensive institutional targets driving our academic, missional, and spiritual programs.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {OBJECTIVES.map((obj, i) => {
              const Icon = obj.icon
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-sm bg-white border border-slate-200 shadow-sm border-t-4 border-t-[#C8972B] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-5 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold text-[#C8972B] uppercase tracking-widest block mb-1">
                      {obj.subtitle}
                    </span>

                    <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-3">
                      {obj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {obj.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

      </Section>

      <CTA
        heading="Experience Theological Training with Purpose"
        body="Learn more about our academic programs and apply today."
        primaryCta={{ label: 'Explore Programs', href: '/courses' }}
        secondaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
      />
    </>
  )
}
