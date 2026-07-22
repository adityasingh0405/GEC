import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import CTA from '@components/common/CTA'
import { ClockIcon, MapPinIcon, CalendarIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'

const scheduleData = [
  {
    day: "Monday – Friday",
    title: "Morning Chapel Service",
    time: "8:30 AM – 9:15 AM",
    location: "Main Sanctuary Hall",
    description: "Daily worship, student & faculty devotions, prayer, and scripture exposition.",
    category: "Chapel"
  },
  {
    day: "Tuesday",
    title: "Intercessory Prayer Meeting",
    time: "4:00 PM – 5:00 PM",
    location: "Prayer Chapel (Room 102)",
    description: "Student-led prayer for global missions, local churches, and personal requests.",
    category: "Prayer"
  },
  {
    day: "Wednesday",
    title: "GEC Sanctuary Choir Rehearsal",
    time: "5:00 PM – 6:30 PM",
    location: "Music Department Hall",
    description: "Vocal warmup, choir practice, and song arrangement for chapel and special recitals.",
    category: "Music"
  },
  {
    day: "Thursday",
    title: "Faculty & Staff Devotional",
    time: "3:30 PM – 4:30 PM",
    location: "Faculty Lounge",
    description: "Weekly gathering of administrative leadership and faculty for prayer and fellowship.",
    category: "Faculty"
  },
  {
    day: "Friday",
    title: "Youth & Community Bible Study",
    time: "6:00 PM – 7:30 PM",
    location: "Auditorium Annex",
    description: "Interactive Bible study, discussion, and fellowship for resident and commuter students.",
    category: "Bible Study"
  },
  {
    day: "Saturday",
    title: "Weekend Ministry & Outreach Preparation",
    time: "9:00 AM – 11:30 AM",
    location: "Campus Fellowship Hall",
    description: "Team briefing and practical setup for weekend church ministry placements.",
    category: "Outreach"
  }
]

export default function MeetingSchedule() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Meeting Schedule', href: '/meeting-schedule' }
  ]

  return (
    <>
      <SEOHead page="/meeting-schedule" />

      <PageHeader
        heading="Weekly Meeting &amp; Chapel Schedule"
        subheading="Regular chapel services, prayer gatherings, choir rehearsals, and Bible study groups at GEC."
        badge="Weekly Schedule"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-3">
            Campus Gathering Schedule
          </h2>
          <p className="text-[#5A6A7A] text-base">
            All students and visitors are welcome to join our open chapel and prayer meetings.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="p-6 sm:p-8 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#1E3A5F] text-[#C8972B] text-xs font-bold rounded-full">
                    {item.day}
                  </span>
                  <span className="text-xs font-bold text-[#5A6A7A] uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A6A7A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="md:text-right shrink-0 space-y-1.5 pt-4 md:pt-0 border-t md:border-t-0 border-[#DDE3EC]">
                <div className="flex items-center md:justify-end gap-2 text-sm font-bold text-[#1E3A5F]">
                  <ClockIcon className="w-4 h-4 text-[#C8972B]" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center md:justify-end gap-2 text-xs text-[#5A6A7A]">
                  <MapPinIcon className="w-3.5 h-3.5 text-[#C8972B]" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTA
        heading="Join Us for Chapel &amp; Worship"
        body="Visitors are always welcome to attend our morning chapel services."
        primaryCta={{ label: 'Contact Campus Office', href: '/contact' }}
        secondaryCta={{ label: 'Submit Prayer Request', href: '/prayer-request' }}
      />
    </>
  )
}
