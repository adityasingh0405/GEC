import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Container from '@components/common/Container'
import {
  BookOpenIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CheckIcon,
  AcademicCapIcon,
  HomeIcon,
  ArrowRightIcon
} from '@components/common/Icons'
import { fadeInUp, staggerContainer, staggerItem } from '@utils/animations'

const STATEMENT_SECTIONS = [
  {
    number: "01",
    title: "The Scriptures",
    icon: BookOpenIcon,
    statement: "We believe the Holy Bible, consisting of sixty-six books of the Old and New Testaments, to be the inspired, infallible, and authoritative Word of God. It is inerrant in the original manuscripts, fully sufficient for faith and life, and the supreme standard by which all human conduct, creeds, and opinions should be tried.",
    scriptures: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 119:105", "Isaiah 40:8", "Hebrews 4:12"]
  },
  {
    number: "02",
    title: "God the Father",
    icon: SparklesIcon,
    statement: "We believe in God the Father, an infinite, personal Spirit, perfect in holiness, wisdom, power, and love. He concerns Himself mercifully in the affairs of men, hears and answers prayer, and saves from sin and death all who come to Him through Jesus Christ.",
    scriptures: ["Genesis 1:1", "Matthew 6:9", "John 4:24", "1 Timothy 1:17", "1 John 4:8"]
  },
  {
    number: "03",
    title: "God the Son",
    icon: HeartIcon,
    statement: "We believe in Jesus Christ, God's only begotten Son, conceived by the Holy Spirit, born of the Virgin Mary, sinless in His life, who accomplished our redemption through His substitutionary death on the cross, His bodily resurrection, His ascension into heaven, and His perpetual intercession for His people.",
    scriptures: ["John 1:1-14", "Matthew 1:21-23", "1 Corinthians 15:3-4", "Hebrews 7:25", "Acts 1:9-11"]
  },
  {
    number: "04",
    title: "God the Holy Spirit",
    icon: SparklesIcon,
    statement: "We believe in the Holy Spirit, who came forth from the Father and Son to convict the world of sin, righteousness, and judgment, and to regenerate, sanctify, indwell, seal, and empower all who believe in Jesus Christ for holy living and spiritual ministry.",
    scriptures: ["John 14:16-17", "John 16:7-11", "Ephesians 1:13-14", "Galatians 5:22-23", "Acts 1:8"]
  },
  {
    number: "05",
    title: "Humankind and Salvation",
    icon: UserGroupIcon,
    statement: "We believe that human beings were created in the image of God, but through Adam's transgression fell into sin, becoming spiritually dead and subject to eternal condemnation. Salvation is by grace alone, through faith alone, in Jesus Christ alone, granted to all who repent and believe in Him as Lord and Savior.",
    scriptures: ["Genesis 1:26-27", "Romans 3:23", "Ephesians 2:8-9", "Titus 3:5", "John 3:16"]
  },
  {
    number: "06",
    title: "The Church",
    icon: HomeIcon,
    statement: "We believe in the Universal Church, a living spiritual body of which Christ is the Head, composed of all regenerated believers. We believe in the local church, consisting of a company of believers in Jesus Christ, associated for worship, work, fellowship, and the proclamation of the Gospel to the ends of the earth.",
    scriptures: ["Ephesians 1:22-23", "Matthew 16:18", "Acts 2:42-47", "Hebrews 10:24-25", "Matthew 28:19-20"]
  },
  {
    number: "07",
    title: "Baptism",
    icon: CheckIcon,
    statement: "We believe that Christian baptism is the immersion of a believer in water in the name of the Father, Son, and Holy Spirit. It is a public declaration of faith, symbolizing the believer's identification with Christ in His death, burial, and resurrection, and initiation into His body.",
    scriptures: ["Matthew 28:19", "Romans 6:3-5", "Colossians 2:12", "Acts 8:36-39", "Galatians 3:27"]
  },
  {
    number: "08",
    title: "Lord's Supper",
    icon: HeartIcon,
    statement: "We believe that the Lord's Supper (Communion) is a symbolic ordinance instituted by Christ, in which believers partake of the bread and cup in remembrance of His broken body and shed blood, proclaiming His death until He comes again.",
    scriptures: ["1 Corinthians 11:23-26", "Luke 22:19-20", "Matthew 26:26-29", "Acts 20:7"]
  },
  {
    number: "09",
    title: "Marriage and Family",
    icon: UserGroupIcon,
    statement: "We believe that God ordained marriage as the holy covenant union between one biological man and one biological woman for a lifetime. Marriage reflects the sacred relationship between Christ and His Church, providing the foundational framework for family and society.",
    scriptures: ["Genesis 2:24", "Matthew 19:4-6", "Ephesians 5:31-33", "Mark 10:6-9", "Malachi 2:14-15"]
  },
  {
    number: "10",
    title: "Human Sexuality",
    icon: ShieldCheckIcon,
    statement: "We believe that God created humanity intentionally male and female, complementary and distinct. Human sexuality is a gift from God, designed to be expressed exclusively within the covenant of biblical marriage between one man and one woman.",
    scriptures: ["Genesis 1:27", "1 Corinthians 6:18-20", "Hebrews 13:4", "1 Thessalonians 4:3-5", "Romans 1:26-27"]
  }
]

export default function StatementOfFaith() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Statement of Faith', href: '/about/statement-of-faith' }
  ]

  return (
    <>
      <SEOHead page="/about/statement-of-faith" />

      {/* 1. Hero Section */}
      <PageHeader
        heading="Statement of Faith"
        subheading="&quot;Our beliefs are firmly rooted in the authority of Scripture and our commitment to faithfully proclaim the Gospel of Jesus Christ.&quot;"
        badge="Doctrinal Foundation"
        customCrumbs={crumbs}
      />

      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Statement of Faith Body">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="max-w-4xl mx-auto space-y-12">

            {/* 2. Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-md border-t-4 border-t-[#C8972B] relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-sm">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">
                    Institutional Confession
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                    Our Foundation
                  </h2>
                </div>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
                At Glory Education Center, every aspect of our teaching, ministry, and leadership is grounded in God's Word. The following Statement of Faith summarizes the biblical convictions that guide our institution and shape our mission.
              </p>
            </motion.div>

            {/* Decorative Section Divider */}
            <div className="flex items-center justify-center gap-4 py-2">
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-[#C8972B]" />
              <span className="text-[#C8972B] font-serif text-sm italic font-bold">The Ten Doctrinal Pillars</span>
              <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-[#C8972B]" />
            </div>

            {/* 3. Statement of Faith — 10 Doctrinal Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8"
            >
              {STATEMENT_SECTIONS.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.number}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-sm p-8 sm:p-10 border border-slate-200 shadow-md border-t-4 border-t-[#C8972B] hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">
                            Pillar {item.number}
                          </span>
                          <h3 className="font-display text-2xl font-bold text-[#1E3A5F]">
                            {item.number}. {item.title}
                          </h3>
                        </div>
                      </div>

                      <div className="hidden sm:flex w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#E8D4A2] text-[#1E3A5F] font-serif font-bold text-sm items-center justify-center shrink-0">
                        {item.number}
                      </div>
                    </div>

                    {/* Doctrinal Statement */}
                    <p className="text-slate-700 font-sans leading-relaxed text-base sm:text-lg mb-6">
                      {item.statement}
                    </p>

                    {/* Highlighted Scripture References Box */}
                    <div className="bg-[#FAF8F5] border border-[#E8D4A2]/70 rounded-sm p-4 sm:p-5 text-[#1E3A5F]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#C8972B] uppercase tracking-wider mb-2">
                        <BookOpenIcon className="w-4 h-4" />
                        <span>Scripture References</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {item.scriptures.map((ref, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-3 py-1 rounded-sm bg-white border border-[#E8D4A2] text-[#1E3A5F] text-xs font-semibold"
                          >
                            {ref}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* 4. Closing Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0B1526] to-[#152940] rounded-sm p-8 sm:p-12 text-white shadow-xl border border-white/10 border-t-4 border-t-[#C8972B] text-center relative overflow-hidden"
            >
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-12 h-12 rounded-sm bg-[#C8972B] text-[#0B1526] flex items-center justify-center mx-auto shadow-md font-bold">
                  <AcademicCapIcon className="w-6 h-6" />
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Our Commitment
                </h2>

                <p className="text-white/85 text-base sm:text-lg leading-relaxed font-sans">
                  Glory Education Center is committed to faithfully teaching God's Word and equipping students to serve Christ with biblical conviction, spiritual maturity, and academic excellence.
                </p>

                <div className="pt-4">
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#C8972B] border border-[#C8972B] text-[#0B1526] text-xs font-bold uppercase tracking-wider hover:bg-[#D4A843] hover:border-[#D4A843] transition-all shadow-md hover:-translate-y-0.5"
                  >
                    <span>Explore Our Programs</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  )
}
