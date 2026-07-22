import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import {
  BookOpenIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  HeartIcon,
  Globe
} from '@components/common/Icons'
import { fadeInUp, staggerContainer, staggerItem } from '@utils/animations'

export default function FoundersMessage() {
  return (
    <>
      <SEOHead page="/about/founders-message" />

      {/* Hero Section */}
      <PageHeader
        heading="Message from the Founder"
        subheading="A Church in Every Village — Equipping Faithful Servant-Leaders for God's Harvest Field."
        badge="Institutional Leadership"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: "Founder's Message", href: '/about/founders-message' }
        ]}
      />

      {/* Main Editorial Content */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Founder's Message Content">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-[1240px] mx-auto">

            {/* Left Sticky Sidebar: Founder Profile Card */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-900/5 text-center relative overflow-hidden group">
                {/* Gold Accent Bar */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#D4A843] via-[#C8972B] to-[#D4A843]" />

                {/* Portrait */}
                <div className="relative w-44 h-44 mx-auto mb-6 rounded-full p-1.5 bg-gradient-to-br from-[#C8972B] via-[#E2C074] to-[#1E3A5F] shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80"
                      alt="Dr. Breckenridge Merkle — Founder of Glory Education Center"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#C8972B] text-[#0B1526] p-2 rounded-full shadow-md">
                    <SparklesIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Title */}
                <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">
                  Dr. Breckenridge Merkle
                </h2>
                <p className="text-xs uppercase tracking-widest text-[#C8972B] font-bold mt-1">
                  Founder &amp; President Emeritus
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Glory Education Center
                </p>

                <hr className="my-6 border-slate-100" />

                {/* Vision Badge Card */}
                <div className="p-4 rounded-2xl bg-[#0B1526] text-white text-left space-y-2 relative overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#C8972B]/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center gap-2 text-[#C8972B] text-xs font-bold uppercase tracking-wider">
                    <Globe className="w-4 h-4" />
                    <span>The Master Burden</span>
                  </div>
                  <p className="text-sm font-serif italic text-white/90 leading-snug">
                    "A Church in Every Village"
                  </p>
                </div>

                {/* Scripture Reference */}
                <div className="mt-6 text-xs text-slate-500 italic leading-relaxed">
                  "How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard?"
                  <span className="block font-bold not-italic text-[#1E3A5F] mt-1">— Romans 10:14</span>
                </div>
              </div>
            </motion.aside>

            {/* Right Main Article / Letter */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-xl shadow-slate-900/5 relative"
            >
              {/* Decorative Watermark Quote Icon */}
              <div className="absolute top-10 right-10 text-slate-100 pointer-events-none font-serif text-9xl leading-none select-none">
                “
              </div>

              {/* Editorial Header */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5E8] border border-[#E8D4A2] text-[#966E1A] text-xs font-bold uppercase tracking-wider mb-4">
                  <HeartIcon className="w-3.5 h-3.5" />
                  From the Founder's Desk
                </span>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight leading-tight">
                  A Church in Every Village
                </h1>
                <p className="text-sm text-slate-400 font-medium mt-2">
                  Published by the Office of the Founder • Glory Education Center
                </p>
              </div>

              {/* Lead Paragraph */}
              <div className="text-xl font-serif text-[#1E3A5F] leading-relaxed border-l-4 border-[#C8972B] pl-6 py-2 italic bg-[#FAF8F5] rounded-r-2xl mb-10">
                Dear Friends, Co-laborers, and Prospective Students in Christ,
              </div>

              {/* Main Letter Body */}
              <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-sans leading-[1.85] space-y-6">
                <p>
                  When God laid the foundation of Glory Education Center in 2005, it was born out of a profound and unrelenting spiritual burden. Walking through hundreds of unreached communities, towns, and rural settlements, my heart was deeply stirred by a singular reality: millions of precious souls have yet to hear the clear, life-transforming gospel of our Lord Jesus Christ.
                </p>

                <p>
                  The mandate of the Great Commission in <strong>Matthew 28:19-20</strong> is not a mere recommendation for the church; it is our supreme calling. Yet, effective, enduring church planting requires more than zeal — it demands men and women of God who are thoroughly grounded in sound biblical doctrine, spiritual maturity, pastoral wisdom, and holy passion.
                </p>

                {/* Floating Pull Quote Card */}
                <div className="my-10 p-8 rounded-2xl bg-gradient-to-br from-[#0B1526] to-[#152940] text-white shadow-xl relative overflow-hidden text-center border-t-4 border-[#C8972B]">
                  <div className="text-4xl text-[#C8972B] font-serif leading-none mb-3">“</div>
                  <blockquote className="font-serif text-xl sm:text-2xl italic font-medium leading-snug text-white/95 max-w-2xl mx-auto">
                    Our vision is to see a church in every village — a vibrant, worshipping, gospel-centered sanctuary in every unreached community across the nation.
                  </blockquote>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#C8972B]">
                    — Dr. Breckenridge Merkle
                  </div>
                </div>

                <p>
                  At Glory Education Center, our passion is not simply to confer academic degrees, but to raise up spiritual harvest workers. We train our students to dig deep into the Scriptures, to handle the Word of truth with reverence and precision (<strong>2 Timothy 2:15</strong>), and to minister with Christ-like humility and servant leadership.
                </p>

                <p>
                  Whether God is calling you to pastoral ministry, cross-cultural church planting, biblical exposition, or music and worship ministry, GEC provides a sacred environment where your mind will be sharpened, your character refined, and your spirit ignited for Kingdom impact.
                </p>
              </div>

              {/* Highlighted Vision Box */}
              <div className="mt-14 pt-10 border-t border-slate-200">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Institutional Mandate</span>
                  <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mt-1">
                    The Four Pillars of the GEC Vision
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                    How Glory Education Center fulfills the call to reach every village.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8D4A2]/60 hover:border-[#C8972B] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-4 shadow-md">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">1. Church Planting</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Establishing self-sustaining, biblically sound local churches in unreached rural and urban villages.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8D4A2]/60 hover:border-[#C8972B] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-4 shadow-md">
                      <HeartIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">2. Evangelism</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Proclaiming the Gospel of grace with conviction, cultural sensitivity, and uncompromised biblical truth.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8D4A2]/60 hover:border-[#C8972B] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-4 shadow-md">
                      <UserGroupIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">3. Leadership Development</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Mentoring servant-leaders with spiritual integrity, pastoral wisdom, and resilient faith.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8D4A2]/60 hover:border-[#C8972B] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center mb-4 shadow-md">
                      <BookOpenIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">4. Biblical Education</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Offering accessible, high-rigor theological degree and diploma programs for all whom God calls.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature Block */}
              <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="font-serif italic text-lg text-[#1E3A5F] mb-1">
                    A Church In Every Village,
                  </p>
                  <p className="font-display text-2xl font-bold text-[#0B1526]">
                    Dr. Breckenridge Merkle
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#C8972B] font-bold">
                    Founder &amp; President Emeritus
                  </p>
                  <p className="text-xs text-slate-500">
                    Glory Education Center
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8D4A2] text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">Established</span>
                  <span className="block text-xl font-bold text-[#1E3A5F]">2005</span>
                  <span className="block text-[10px] text-[#C8972B] font-bold">Solideo Gloria</span>
                </div>
              </div>
            </motion.article>

          </div>
        </Container>
      </section>

      {/* Action CTA */}
      <CTA
        heading="Partner in the Vision — A Church in Every Village"
        body="Join our community of students and harvest workers preparing for gospel ministry."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Support the Vision', href: '/donation' }}
      />
    </>
  )
}
