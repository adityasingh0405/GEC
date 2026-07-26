import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Container from '@components/common/Container'
import CTA from '@components/common/CTA'
import {
  AcademicCapIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BookOpenIcon,
  HeartIcon
} from '@components/common/Icons'
import { ikPortrait } from '@utils/imagekit'

export default function PrincipalsMessage() {
  return (
    <>
      <SEOHead page="/about/principals-message" />

      {/* Hero Section */}
      <PageHeader
        heading="Message from the Principal"
        subheading="Equipping Students for Ministry — Fostering Academic Excellence &amp; Spiritual Formation."
        badge="Academic Leadership"
        breadcrumbs={[
          { label: 'About', href: '/about' },
          { label: "Principal's Message", href: '/about/principals-message' }
        ]}
      />

      {/* Main Editorial Content */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Principal's Message Content">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-[1240px] mx-auto">

            {/* Left Sticky Sidebar: Principal Profile Card */}
            <motion.aside
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:sticky lg:top-28 space-y-6"
            >
              <div className="bg-white rounded-sm p-8 border border-slate-200 shadow-md border-t-4 border-t-[#C8972B] text-center relative overflow-hidden group">

                {/* Photo */}
                <div className="relative w-44 h-44 mx-auto mb-6 rounded-full p-1.5 bg-gradient-to-br from-[#1E3A5F] via-[#C8972B] to-[#0B1526] shadow-lg">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={ikPortrait('https://ik.imagekit.io/xdm1pwpls0/f_downlods/Faculty/Henry')}
                      alt="Dr. Henry Sui — Principal of Glory Education Center"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#1E3A5F] text-[#C8972B] p-2 rounded-full shadow-md">
                    <AcademicCapIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Title */}
                <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">
                  Dr. Henry Sui
                </h2>
                <p className="text-xs uppercase tracking-widest text-[#C8972B] font-bold mt-1">
                  Principal &amp; Professor of Theology
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Glory Education Center
                </p>

                <hr className="my-6 border-slate-100" />

                {/* Academic Credentials Box */}
                <div className="p-4 rounded-sm bg-[#EFF3F8] text-left space-y-2 border border-slate-200">
                  <div className="text-xs font-bold text-[#1E3A5F] uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheckIcon className="w-4 h-4 text-[#C8972B]" />
                    Academic Mandate
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    Guiding academic rigor, pastoral formation, and theological scholarship since 2012.
                  </p>
                </div>

                {/* Scripture Blessing */}
                <div className="mt-6 text-xs text-slate-500 italic leading-relaxed">
                  "Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth."
                  <span className="block font-bold not-italic text-[#1E3A5F] mt-1">— 2 Timothy 2:15</span>
                </div>
              </div>
            </motion.aside>

            {/* Right Main Article / Letter */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8 bg-white rounded-sm p-8 sm:p-12 lg:p-14 border border-slate-200 shadow-md border-t-4 border-t-[#1E3A5F] relative"
            >
              {/* Decorative Watermark */}
              <div className="absolute top-10 right-10 text-slate-100 pointer-events-none font-serif text-9xl leading-none select-none">
                “
              </div>

              {/* Header */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#EFF3F8] border border-slate-200 text-[#1E3A5F] text-xs font-bold uppercase tracking-wider mb-4">
                  <AcademicCapIcon className="w-3.5 h-3.5 text-[#C8972B]" />
                  Welcome from the Principal
                </span>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] tracking-tight leading-tight">
                  Equipping Students for Ministry
                </h1>
                <p className="text-sm text-slate-400 font-medium mt-2">
                  Office of the Academic Principal • Glory Education Center
                </p>
              </div>

              {/* Lead Paragraph */}
              <div className="text-xl font-serif text-[#1E3A5F] leading-relaxed border-l-4 border-[#C8972B] pl-6 py-2 italic bg-[#FAF8F5] rounded-r-sm mb-10">
                Welcome to Glory Education Center — a community dedicated to biblical truth, academic excellence, and vibrant Christian service.
              </div>

              {/* Body Text */}
              <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-sans leading-[1.85] space-y-6">
                <p>
                  As Principal of Glory Education Center, it is my privilege to invite you into an academic and spiritual journey designed to transform your life and empower your calling. We live in a world that desperately needs leaders of deep biblical conviction, holy character, and practical ministry competence.
                </p>

                <p>
                  Our academic curriculum across Bachelor of Theology (B.Th), Master of Divinity (M.Div), Master of Theology (M.Th), and Diploma in Music programs combines rigorous exegesis, systematic theology, church history, pastoral care, and worship arts. We ensure that every student leaves our halls not only intellectually equipped, but spiritually forged for the challenges of 21st-century ministry.
                </p>

                {/* Pull Quote */}
                <div className="my-10 p-8 rounded-sm bg-[#0B1526] text-white shadow-lg relative overflow-hidden border-l-4 border-[#C8972B]">
                  <div className="text-3xl text-[#C8972B] font-serif leading-none mb-2">“</div>
                  <blockquote className="font-serif text-xl sm:text-2xl italic font-medium leading-snug text-white/95">
                    We do not merely teach theology as an academic discipline; we nurture hearts to love God passionately and minds to think biblically.
                  </blockquote>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#C8972B]">
                    — Dr. Henry Sui
                  </div>
                </div>

                <p>
                  At GEC, classroom learning is seamlessly integrated with community chapel worship, small-group prayer, faculty mentorship, and active weekend ministry outreach. We believe that true theological education happens in fellowship — where faculty and students walk together in pursuit of Christlikeness.
                </p>

                {/* Highlighted Blessing Section */}
                <div className="my-8 p-6 rounded-sm bg-[#FAF8F5] border border-[#E8D4A2] text-[#1E3A5F]">
                  <h4 className="font-bold text-[#C8972B] text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    <SparklesIcon className="w-4 h-4" />
                    A Principal's Blessing for Every Student
                  </h4>
                  <p className="font-serif italic text-lg leading-relaxed text-[#1E3A5F]">
                    "May the Lord grant you clarity in your calling, wisdom in your studies, and a burning passion to serve His church and proclaim His gospel to the ends of the earth."
                  </p>
                </div>
              </div>

              {/* Our Commitment Section */}
              <div className="mt-14 pt-10 border-t border-slate-200">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Our Institutional Pledge</span>
                  <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mt-1">
                    Our Commitment
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                    Four pillars defining student life and academic experience at GEC.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 rounded-sm bg-white border border-slate-200 border-t-2 border-t-[#C8972B] hover:border-[#1E3A5F] shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center mb-4 shadow-sm">
                      <AcademicCapIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">Academic Excellence</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Rigorous biblical scholarship, sound hermeneutics, and faculty-led theological instruction.
                    </p>
                  </div>

                  <div className="p-6 rounded-sm bg-white border border-slate-200 border-t-2 border-t-[#C8972B] hover:border-[#1E3A5F] shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center mb-4 shadow-sm">
                      <HeartIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">Spiritual Formation</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Daily chapel worship, personal quiet time, prayer retreats, and Christ-like character building.
                    </p>
                  </div>

                  <div className="p-6 rounded-sm bg-white border border-slate-200 border-t-2 border-t-[#C8972B] hover:border-[#1E3A5F] shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center mb-4 shadow-sm">
                      <UserGroupIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">Leadership Development</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Practical pastoral skills, church administration, mentoring, and team ministry dynamics.
                    </p>
                  </div>

                  <div className="p-6 rounded-sm bg-white border border-slate-200 border-t-2 border-t-[#C8972B] hover:border-[#1E3A5F] shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] text-[#C8972B] flex items-center justify-center mb-4 shadow-sm">
                      <ShieldCheckIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#1E3A5F] text-base mb-1">Kingdom Service</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Active weekend ministry placement, community engagement, and global mission focus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature Block */}
              <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="font-serif italic text-lg text-[#1E3A5F] mb-1">
                    Blessings,
                  </p>
                  <p className="font-display text-2xl font-bold text-[#0B1526]">
                    Dr. Henry Sui
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#C8972B] font-bold">
                    Principal
                  </p>
                  <p className="text-xs text-slate-500">
                    Glory Education Center
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-[#EFF3F8] border border-slate-200 text-center">
                  <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-bold">Office of the</span>
                  <span className="block text-sm font-bold text-[#1E3A5F]">Academic Principal</span>
                  <span className="block text-[10px] text-[#C8972B] font-bold">Veritas et Gratia</span>
                </div>
              </div>
            </motion.article>

          </div>
        </Container>
      </section>

      {/* Action CTA */}
      <CTA
        heading="Begin Your Academic &amp; Spiritual Journey"
        body="Explore our undergraduate, graduate, and music diploma programs today."
        primaryCta={{ label: 'Explore Programs', href: '/courses' }}
        secondaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
      />
    </>
  )
}
