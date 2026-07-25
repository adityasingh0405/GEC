import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import DownloadCard from '@components/cards/DownloadCard'
import Card from '@components/common/Card'
import CTA from '@components/common/CTA'
import {
  DocumentIcon, CalendarIcon, HeartIcon,
  PhoneIcon, DownloadIcon, CheckIcon
} from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import resourcesData from '@content/resources.json'

export default function Resources() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' }
  ]

  return (
    <>
      <SEOHead page="/resources" />

      <PageHeader
        heading="Institutional Resources &amp; Downloads"
        subheading="Access official documents, prospectuses, schedules, prayer support, and giving options."
        badge="Resource Hub"
        customCrumbs={crumbs}
      />

      {/* Downloadable Institutional Documents */}
      <Section bg="white" heading="Official Downloads &amp; Documents" subheading="Download administrative publications and application files.">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {resourcesData.downloads.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <DownloadCard
                title={item.title}
                description={item.description}
                format={item.format}
                size={item.size}
                href={item.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Quick Services & Portals */}
      <Section bg="light" heading="Quick Links &amp; Services" subheading="Access key student services and ministry portals.">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {resourcesData.quickActions.map((action) => (
            <motion.div key={action.id} variants={staggerItem}>
              <Card
                title={action.title}
                description={action.description}
                href={action.href}
                actionLabel={action.actionLabel}
                image={action.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTA
        heading="Need Additional Information?"
        body="Our administrative office is available to assist with document requests."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Admissions Inquiry', href: '/admissions/apply' }}
      />
    </>
  )
}
