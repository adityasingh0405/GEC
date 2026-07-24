import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import { CheckIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import aboutData from '@content/about.json'

export default function ChurchProfile() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Church Profile', href: '/about/church-profile' }
  ]

  const { churchProfile } = aboutData

  return (
    <>
      <SEOHead page="/about/church-profile" />

      <PageHeader
        heading="Church Profile &amp; Affiliation"
        subheading="Serving the Church of Jesus Christ through accredited theological formation and church partnerships."
        badge="Ecclesial Roots"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-4">
            {churchProfile.heading}
          </h2>
          <p className="text-[#5A6A7A] text-lg leading-relaxed">
            {churchProfile.overview}
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {churchProfile.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="p-8 rounded-sm bg-[#F8F9FA] border border-[#DDE3EC] border-t-2 border-t-[#C8972B] text-center"
            >
              <div className="w-12 h-12 rounded-sm bg-[#1E3A5F] text-[#C8972B] mx-auto mb-5 flex items-center justify-center font-bold text-lg">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#1E3A5F] text-xl mb-3">{pillar.title}</h3>
              <p className="text-sm text-[#5A6A7A] leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="p-8 rounded-sm bg-[#EFF3F8] border border-[#DDE3EC] border-t-4 border-t-[#1E3A5F]">
          <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-4">
            Accreditation &amp; Governance
          </h3>
          <p className="text-[#5A6A7A] leading-relaxed mb-6">
            // TODO: Replace with client content — Detailed accreditation body details, denominational ties, board structure, and regional church networks.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#1A1A2E]">
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Recognized Board of Theological Education Accreditation
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Member of Asia Theological Association Networks
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Endorsed by Regional Evangelical Fellowship
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-[#C8972B]" /> Church-Internship Placement Network across India
            </li>
          </ul>
        </div>
      </Section>

      <CTA
        heading="Partner with Glory Education Center"
        body="Learn how your church or organization can partner with us in training gospel workers."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Support & Donate', href: '/donation' }}
      />
    </>
  )
}
