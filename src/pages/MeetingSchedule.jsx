import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import { ClockIcon, MapPinIcon, CalendarIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'

const scheduleData = [
  {
    day: "Monday – Saturday",
    title: "Students Wake Up",
    time: "6:00 AM – 6:30 AM",
    location: "Student Hostels",
    description: "Morning wake-up routine and personal preparation for the day.",
    category: "Routine"
  },
  {
    day: "Monday – Saturday",
    title: "Morning Devotion",
    time: "8:00 AM – 8:30 AM",
    location: "Prayer Chapel",
    description: "Corporate morning prayer and scripture meditation to begin the day in God's presence.",
    category: "Devotion"
  },
  {
    day: "Monday – Friday",
    title: "Faculty & Staff Devotion",
    time: "8:20 AM",
    location: "Faculty Lounge / Main Office",
    description: "Daily morning devotion and prayer gathering for faculty and administrative staff.",
    category: "Faculty"
  },
  {
    day: "Monday – Friday",
    title: "Chapel Service",
    time: "10:00 AM – 10:30 AM",
    location: "Main Sanctuary Hall",
    description: "Daily chapel worship, song, testimony, and biblical exhortation for all students.",
    category: "Chapel"
  },
  {
    day: "Monday – Saturday",
    title: "Lunch Break",
    time: "1:00 PM – 2:00 PM",
    location: "Dining Hall",
    description: "Community lunch break and fellowship for students, faculty, and staff.",
    category: "Fellowship"
  },
  {
    day: "Monday – Saturday",
    title: "Study Hours",
    time: "2:00 PM – 3:00 PM",
    location: "Library / Classrooms",
    description: "Dedicated quiet study, reading, research, and assignment preparation.",
    category: "Academics"
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

      {/* 1. HERO SECTION */}
      <PageHeader
        heading="Weekly Meeting &amp; Chapel Schedule"
        subheading="Regular chapel services, prayer gatherings, choir rehearsals, and Bible study groups at GEC."
        badge="Weekly Schedule"
        customCrumbs={crumbs}
      />

      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Meeting Schedule List">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          {/* 2. SECTION HEADER */}
          <div className="max-w-3xl mx-auto mb-16 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#C8972B] mb-2">
              <CalendarIcon className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Weekly Events</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F]">
              Campus Gathering Schedule
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-sans">
              All students and visitors are welcome to join our open chapel and prayer meetings.
            </p>
          </div>

          {/* 3. SCHEDULE CARDS */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {scheduleData.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200 border-l-4 border-l-[#1E3A5F] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-l-[#C8972B] hover:-translate-y-1 transition-all group relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-[#0B1526] text-[#C8972B] text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                      {item.day}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#1E3A5F] group-hover:text-[#C8972B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-xl">
                    {item.description}
                  </p>
                </div>

                <div className="md:text-right shrink-0 space-y-2 pt-5 md:pt-0 border-t md:border-t-0 border-slate-100 relative z-10">
                  <div className="flex items-center md:justify-end gap-2 text-sm font-bold text-[#1E3A5F]">
                    <ClockIcon className="w-4 h-4 text-[#C8972B]" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center md:justify-end gap-2 text-xs font-semibold text-slate-500">
                    <MapPinIcon className="w-3.5 h-3.5 text-[#C8972B]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* 4. CTA SECTION */}
      <CTA
        heading="Join Us for Chapel &amp; Worship"
        body="Visitors are always welcome to attend our morning chapel services."
        primaryCta={{ label: 'Contact Campus Office', href: '/contact' }}
        secondaryCta={{ label: 'Submit Prayer Request', href: '/prayer-request' }}
      />
    </>
  )
}