import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Timeline from '@components/common/Timeline'
import CTA from '@components/common/CTA'
import { slideInLeft, slideInRight } from '@utils/animations'
import aboutData from '@content/about.json'

export default function OurStory() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Our Story', href: '/about/our-story' }
  ]

  return (
    <>
      <SEOHead page="/about/our-story" />

      <PageHeader
        heading="Our Story &amp; Heritage"
        subheading="Over two decades of God's faithfulness in equipping leaders for ministry and music."
        badge="About GEC"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              Founding &amp; Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6">
              {aboutData.history.heading}
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed mb-6">
              {aboutData.history.body}
            </p>
            <p className="text-[#5A6A7A] leading-relaxed mb-6">
              // TODO: Replace with client content — Additional historical narrative details, founding stories, key pioneers, and institutional expansion landmarks can be added here.
            </p>
            <div className="p-6 rounded-2xl bg-[#EFF3F8] border border-[#DDE3EC]">
              <h3 className="font-bold text-[#1E3A5F] mb-2">Institutional Milestone</h3>
              <p className="text-sm text-[#5A6A7A] leading-relaxed">
                From a foundational class of 20 students in 2005 to hundreds of active alumni across South Asia, Glory Education Center continues to stand as a beacon of evangelical scholarship and worship ministry.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-6">
              Key Historic Milestones
            </h3>
            <Timeline items={aboutData.history.timeline} />
          </motion.div>
        </div>
      </Section>

      <CTA
        heading="Be Part of Our Next Chapter"
        body="Join our student body and write your own story of ministry formation."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Explore Programs', href: '/courses' }}
      />
    </>
  )
}
