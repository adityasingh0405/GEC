import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import {
  BookOpenIcon,
  Globe,
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  CheckIcon,
  HeartIcon,
  ArrowRightIcon,
} from '@components/common/Icons'
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from '@utils/animations'

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Church Profile', href: '/about/church-profile' },
]

/* ─── Core pillars ── */
const pillars = [
  {
    icon: UserGroupIcon,
    num: '01',
    title: 'Inter-Denominational Fellowship',
    desc: 'GEC warmly welcomes students from diverse orthodox Christian backgrounds. We celebrate unity in the essential truths of Scripture while honouring the variety of ministry contexts our students come from.',
  },
  {
    icon: HeartIcon,
    num: '02',
    title: 'Church-Centred Ministry',
    desc: 'Every GEC student actively participates in a local church assembly. We believe that academic study must remain deeply connected to pastoral practice and real-world ministry.',
  },
  {
    icon: Globe,
    num: '03',
    title: 'Mission-Oriented Formation',
    desc: 'Theological education at GEC is never an end in itself. Our goal is to send graduates into the harvest field — equipped to plant churches, serve communities, and make disciples of all nations.',
  },
]

/* ─── College Affiliations ── */
const affiliations = [
  {
    name: 'Southwest Baptist University (SBU)',
    location: 'Bolivar, Missouri, USA',
    type: 'Academic Partner',
    desc: 'GEC holds an affiliation with Southwest Baptist University, a Christ-centred institution offering quality undergraduate and graduate programmes. This partnership affirms GEC\'s commitment to internationally recognised academic standards.',
    badge: 'Academic Affiliation',
    badgeColor: 'bg-[#1E3A5F]/10 text-[#1E3A5F] border-[#1E3A5F]/20',
    accentColor: 'border-t-[#1E3A5F]',
    link: 'https://www.sbuniv.edu',
    linkLabel: 'Visit SBU Website',
  },
  {
    name: 'GPTAM',
    location: 'India',
    type: 'Ministry Network',
    desc: 'GEC is affiliated with GPTAM (Glory Project Theological Association for Missions), a ministry network that shares GEC\'s vision of equipping believers for theological education and cross-cultural missionary service across India and beyond.',
    badge: 'Ministry Affiliation',
    badgeColor: 'bg-[#C8972B]/10 text-[#C8972B] border-[#C8972B]/20',
    accentColor: 'border-t-[#C8972B]',
    link: null,
    linkLabel: null,
  },
]

/* ─── Governance values ── */
const governanceValues = [
  {
    icon: BookOpenIcon,
    title: 'Scriptural Authority',
    desc: 'All policy, curriculum, and community life is anchored in the inerrant and sufficient Word of God.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Moral Integrity',
    desc: 'Faculty, staff, and students are held to a high standard of personal conduct consistent with biblical holiness.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Academic Accountability',
    desc: 'GEC\'s academic leadership upholds rigorous standards for teaching quality, assessment, and ongoing faculty development.',
  },
  {
    icon: Globe,
    title: 'Missional Focus',
    desc: 'Every governance decision is made with the Great Commission in view — nurturing an institution that deploys gospel workers.',
  },
]

export default function ChurchProfile() {
  return (
    <>
      <SEOHead page="/about/church-profile" />

      <PageHeader
        heading="Church Profile &amp; Affiliation"
        subheading="An inter-denominational evangelical institution rooted in the local church, connected to global partners, and committed to biblical mission."
        badge="Ecclesial Roots"
        customCrumbs={crumbs}
      />

      {/* ══════════════════════════════════════════════
          1 · INTRODUCTION — Who We Are
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-white" aria-labelledby="church-intro-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
                Who We Are
              </span>
              <h2
                id="church-intro-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-5 leading-tight"
              >
                Serving the Church of Jesus Christ
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed mb-5">
                Glory Education Centre (GEC) is an inter-denominational evangelical institution committed to serving the Church of Jesus Christ through accredited theological formation, music education, and holistic spiritual development. We exist not as an end in ourselves, but as a resource for the local and global church.
              </p>
              <p className="text-[#5A6A7A] leading-relaxed">
                Our church profile is shaped by a deep conviction that the local church is God's primary instrument for advancing the Kingdom. Every student we train is sent back to strengthen, lead, and serve their church community — and beyond, to the mission fields of the world.
              </p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2022', label: 'Year Founded' },
                  { value: '47+', label: 'Founding Students' },
                  { value: '2', label: 'Affiliations' },
                  { value: '∞', label: 'Missional Impact' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-[#EFF3F8] border border-[#DDE3EC] rounded-sm p-6 text-center"
                  >
                    <p className="font-display text-3xl font-bold text-[#1E3A5F] mb-1">{stat.value}</p>
                    <p className="text-xs text-[#5A6A7A] font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          2 · PILLARS
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="pillars-heading">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              Our Commitments
            </span>
            <h2
              id="pillars-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] leading-tight"
            >
              Pillars of Our Ecclesial Identity
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-white rounded-sm border border-[#DDE3EC] border-t-2 border-t-[#C8972B] p-8"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest">{pillar.num}</span>
                  </div>
                  <h3 className="font-bold text-[#1E3A5F] text-base mb-2">{pillar.title}</h3>
                  <p className="text-sm text-[#5A6A7A] leading-relaxed">{pillar.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          3 · COLLEGE AFFILIATIONS
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-white" aria-labelledby="affiliations-heading">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              Academic &amp; Ministry Partnerships
            </span>
            <h2
              id="affiliations-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] leading-tight"
            >
              College Affiliations
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed mt-4 max-w-xl mx-auto text-sm">
              GEC maintains formal affiliations that strengthen its academic credibility and missional network. These partnerships reflect our commitment to excellence both in scholarship and in kingdom work.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {affiliations.map((aff, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`bg-[#F8FAFC] border border-[#DDE3EC] border-t-4 ${aff.accentColor} rounded-sm p-8 shadow-sm`}
              >
                {/* Type badge */}
                <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-5 ${aff.badgeColor}`}>
                  {aff.badge}
                </span>

                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold text-[#1E3A5F] leading-tight mb-1">
                    {aff.name}
                  </h3>
                  <p className="text-xs font-medium text-[#5A6A7A] uppercase tracking-wider">{aff.location}</p>
                </div>

                <p className="text-sm text-[#5A6A7A] leading-relaxed mb-6">{aff.desc}</p>

                {aff.link && (
                  <a
                    href={aff.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1E3A5F] uppercase tracking-widest hover:text-[#C8972B] transition-colors group"
                  >
                    {aff.linkLabel}
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          4 · ACCREDITATION & GOVERNANCE
      ══════════════════════════════════════════════ */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="governance-heading">
        <Container>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-3 block">
              Principles &amp; Standards
            </span>
            <h2
              id="governance-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#1E3A5F] leading-tight"
            >
              Accreditation &amp; Governance
            </h2>
            <p className="text-[#5A6A7A] leading-relaxed mt-4 max-w-xl mx-auto text-sm">
              GEC is committed to operating with integrity, transparency, and a God-honouring standard of academic governance. The following values guide our institutional leadership and culture.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          >
            {governanceValues.map((val, i) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="bg-white border border-[#DDE3EC] rounded-sm p-6 flex items-start gap-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-sm bg-[#EFF3F8] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C8972B]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1E3A5F] text-sm mb-1">{val.title}</h3>
                    <p className="text-xs text-[#5A6A7A] leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Partnership Checklist Box */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-sm border border-[#DDE3EC] border-t-4 border-t-[#1E3A5F] p-8">
              <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-6">
                Academic &amp; Ecclesial Commitments
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Affiliated with Southwest Baptist University (SBU), USA',
                  'Affiliated with GPTAM ministry network',
                  'Church-placement internship programme for all students',
                  'Inter-denominational open enrolment for Bible-believing students',
                  'Regular faculty development and theological review',
                  'Community accountability through local church partnership',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1A1A2E]">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-[#C8972B]/15 border border-[#C8972B]/30 flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3 h-3 text-[#C8972B]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTA
        heading="Partner with Glory Education Centre"
        body="Learn how your church or organisation can walk alongside us in training gospel workers for India and beyond."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        secondaryCta={{ label: 'Support & Donate', href: '/donation' }}
      />
    </>
  )
}
