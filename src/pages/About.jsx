import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Card from '@components/common/Card'
import CTA from '@components/common/CTA'
import {
  BookOpenIcon,
  EyeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import aboutData from '@content/about.json'

const iconsMap = {
  'our-story': BookOpenIcon,
  'vision-mission': EyeIcon,
  'statement-of-faith': ShieldCheckIcon,
  'church-profile': UserGroupIcon,
  'leadership-faculty': AcademicCapIcon,
}

export default function About() {
  return (
    <>
      <SEOHead page="/about" />

      <PageHeader
        heading="About Glory Education Center"
        subheading="Learn about our rich story, doctrinal convictions, vision, ecclesial roots, and institutional leadership."
        badge="Overview"
      />

      {/* Leadership Messages Section (Featured Cards) */}
      <Section
        heading="Leadership Messages"
        subheading="Hear directly from our Founder and Principal regarding our core vision and academic mandate."
        bg="white"
      >
        <div className="flex justify-center">

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl bg-white rounded-sm p-8 sm:p-10 text-slate-800 shadow-xl border border-slate-200 border-t-4 border-t-[#1E3A5F] flex flex-col justify-between relative overflow-hidden group hover:border-[#1E3A5F] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#EFF3F8] text-[#1E3A5F] border border-slate-200 text-xs font-bold uppercase tracking-wider">
                  <AcademicCapIcon className="w-3.5 h-3.5 text-[#C8972B]" />
                  Academic Welcome
                </span>

                <span className="text-xs text-slate-400 font-serif italic">
                  Office of Principal
                </span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src="https://ik.imagekit.io/xdm1pwpls0/f_downlods/Faculty/Henry?updatedAt=1784916862186"
                  alt="Dr. Henry"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#1E3A5F]"
                />

                <div>
                  <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                    Principal's Message
                  </h3>

                  <p className="text-xs text-[#C8972B] font-bold uppercase tracking-wider">
                    Dr. Henry
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                "Equipping Students for Ministry" — Read Dr. Henry's letter on our commitment to academic excellence, spiritual formation, and kingdom service.
              </p>
            </div>

            <div>
              <Link
                to="/about/principals-message"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1E3A5F] border border-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B1526] transition-all shadow-md group-hover:gap-3"
              >
                <span>Read Full Message</span>
                <ArrowRightIcon className="w-4 h-4 text-[#C8972B]" />
              </Link>
            </div>
          </motion.div>

        </div>
      </Section>

      {/* Main Grid of About Subpage Sections */}
      <Section
        heading="Explore Glory Education Center"
        subheading="Navigate through our foundational pillars, history, statement of faith, and faculty."
        bg="light"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aboutData.subpages.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <Card
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                icon={iconsMap[item.id]}
                href={item.href}
                actionLabel="Explore Section"
                image={item.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Institutional Highlights */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block mb-2">
              Transformative Education
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              Word, Worship &amp; Servant Leadership
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed mb-6">
              Since 2005, Glory Education Center has committed itself to equipping servant-leaders with solid biblical truth, theological discernment, and worship arts. We believe that true theological education transforms both the heart and the mind.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-sm bg-[#EFF3F8] border border-[#DDE3EC]">
                <div className="text-2xl font-black text-[#1E3A5F]">20+</div>
                <div className="text-xs text-[#5A6A7A] font-semibold mt-1">Years of Excellence</div>
              </div>
              <div className="p-4 rounded-sm bg-[#EFF3F8] border border-[#DDE3EC]">
                <div className="text-2xl font-black text-[#C8972B]">500+</div>
                <div className="text-xs text-[#5A6A7A] font-semibold mt-1">Active Ministry Alumni</div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-sm bg-gradient-to-br from-[#1E3A5F] to-[#0B1526] text-white shadow-xl border-t-4 border-t-[#C8972B]">
            <h3 className="font-display text-2xl font-bold mb-4 text-[#C8972B]">
              Our Core Mission
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              "{aboutData.mission.body}"
            </p>
            <hr className="border-white/15 mb-6" />
            <h4 className="font-bold text-[#C8972B] text-sm uppercase tracking-wider mb-2">
              Our Vision
            </h4>
            <p className="text-white/75 text-sm leading-relaxed">
              "{aboutData.vision.body}"
            </p>
          </div>
        </div>
      </Section>

      <CTA
        heading="Ready to Join Our Community?"
        body="Applications are open for undergraduate, graduate, and music diploma programs."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
