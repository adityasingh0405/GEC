import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import { FormInput, FormTextarea } from '@components/forms/FormFields'
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  CheckIcon,
  ClockIcon,
  HeartIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@components/common/Icons'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' }
  ]

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Connect form handler with backend API or email delivery service
    setTimeout(() => {
      setLoading(false)
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <>
      <SEOHead page="/contact" />

      {/* 1. HERO SECTION */}
      <PageHeader
        heading="Contact Us"
        subheading="&quot;We'd love to hear from you. Whether you have questions about admissions, courses, or ministry opportunities, our team is here to help.&quot;"
        badge="Get in Touch"
        customCrumbs={crumbs}
      />

      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Contact Section Body">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="max-w-5xl mx-auto space-y-16">

            {/* 2. WELCOME SECTION ("Partner With Us") */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl shadow-slate-900/5 border-t-4 border-t-[#C8972B] relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md">
                  <HeartIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">
                    Kingdom Partnership
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                    Partner With Us
                  </h2>
                </div>
              </div>

              <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed font-sans space-y-4">
                <p>
                  We welcome you to become partners with us in reaching the hundreds of villages in India, Southeast Asia, and the world with the Gospel of Jesus Christ. Your prayers, contributions, and partnership have a great impact in transforming lives through Christ.
                </p>
                <p>
                  We also welcome your comments and suggestions regarding our school and ministry.
                </p>
              </div>
            </motion.div>

            {/* 3. CONTACT INFORMATION CARDS */}
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Direct Channels</span>
                <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mt-1">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Email Card */}
                {/* TODO: Replace placeholder email with client's preferred official email */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-5 hover:border-[#1E3A5F] transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block mb-1">
                      Email Address
                    </span>
                    <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">
                      info@gloryeducationcenter.org
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Coming Soon — Drop us a line for general inquiries and academic details.
                    </p>
                  </div>
                </motion.div>

                {/* Principal Phone Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-5 hover:border-[#1E3A5F] transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block mb-1">
                      Principal
                    </span>
                    <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">
                      <a href="tel:+916360777933" className="hover:text-[#C8972B] transition-colors">
                        +91 6360777933
                      </a>
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Direct line for academic leadership and executive ministry matters.
                    </p>
                  </div>
                </motion.div>

                {/* Registrar Phone Card */}
                {/* TODO: Replace with registrar phone number when available */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-5 hover:border-[#1E3A5F] transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block mb-1">
                      Registrar
                    </span>
                    <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">
                      +91 00000 00000
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      // TODO: Replace with registrar phone number — Admissions &amp; Student Records.
                    </p>
                  </div>
                </motion.div>

                {/* Campus Address Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex items-start gap-5 hover:border-[#1E3A5F] transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block mb-1">
                      Campus Address
                    </span>
                    <address className="not-italic font-bold text-[#1E3A5F] text-base leading-snug font-sans">
                      Glory Education Center<br />
                      WZ-18/13/3 Village Budella<br />
                      Vikas Puri<br />
                      New Delhi – 110018
                    </address>
                  </div>
                </motion.div>

              </div>
            </div>

            {/* 4. OFFICE HOURS & CONTACT FORM GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Left Column: Office Hours Card */}
              {/* TODO: Replace with client's actual office hours */}
              <div className="lg:col-span-4 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-lg shadow-slate-900/5 relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md">
                      <ClockIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#C8972B] uppercase tracking-widest block">Hours of Operation</span>
                      <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                        Office Hours
                      </h3>
                    </div>
                  </div>

                  <ul className="space-y-4 text-xs sm:text-sm font-sans divide-y divide-slate-100">
                    <li className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-slate-700">Monday – Friday</span>
                      <span className="font-bold text-[#1E3A5F]">9:00 AM – 5:00 PM</span>
                    </li>
                    <li className="flex items-center justify-between pt-3">
                      <span className="font-semibold text-slate-700">Saturday</span>
                      <span className="font-bold text-[#1E3A5F]">9:00 AM – 1:00 PM</span>
                    </li>
                    <li className="flex items-center justify-between pt-3 text-slate-400">
                      <span className="font-semibold">Sunday</span>
                      <span className="font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full text-[10px] uppercase">Closed</span>
                    </li>
                  </ul>

                  <p className="text-[10px] text-slate-400 mt-6 pt-4 border-t border-slate-100 font-sans italic">
                    // TODO: Replace with client's actual office hours.
                  </p>
                </motion.div>

                {/* WhatsApp Quick Chat */}
                <div className="p-6 rounded-3xl bg-[#25D366] text-white shadow-lg flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-base leading-tight">WhatsApp Assistance</h4>
                    <p className="text-xs text-white/90 mt-1">Chat directly with our admissions desk</p>
                  </div>
                  <a
                    href="https://wa.me/916360777933?text=Hello%20Glory%20Education%20Center,%20I%20have%20an%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-white text-[#0B1526] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-1.5 shadow-md"
                  >
                    💬 Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Premium Contact Form */}
              <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5">
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest block">Send an Inquiry</span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
                    Fill out the form below and our administrative team will respond promptly.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200" role="status">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <CheckIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900 mb-2">Message Received!</h4>
                    <p className="text-sm text-emerald-700 leading-relaxed font-sans">
                      Thank you for contacting Glory Education Center. A representative will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* TODO: Connect form handler with backend API or mail service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput
                        label="Full Name"
                        id="contact-name"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Email Address"
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput
                        label="Phone Number"
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Subject"
                        id="contact-subject"
                        name="subject"
                        required
                        placeholder="e.g. Admission Inquiry / Course Information"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <FormTextarea
                      label="Your Message"
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Type your message, questions, or comments here..."
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center shadow-lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

            </div>

            {/* 5. GOOGLE MAP EMBED */}
            {/* TODO: Replace map embed URL with client's exact Google Maps embed iframe */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-900/5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block">Find Our Campus</span>
                  <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                    Campus Location &amp; Map
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0B1526] text-[#C8972B] text-xs font-bold">New Delhi, India</span>
              </div>

              <div className="w-full h-80 bg-[#EFF3F8] rounded-2xl overflow-hidden relative shadow-inner">
                {/* Google Map iframe */}
                <iframe
                  title="Glory Education Center Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.765412!2d77.06!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlrYXMgUHVyaSwgTmV3IERlbGhp!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-[#1E3A5F] shadow-md border border-slate-200">
                  📍 Google Map — WZ-18/13/3 Village Budella, Vikas Puri, New Delhi – 110018
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 font-sans italic pt-1">
                // TODO: Replace map embed URL with client's exact Google Maps embed iframe.
              </p>
            </div>

            {/* 6. QUICK CONTACT CTA BANNER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0B1526] to-[#152940] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/10 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8972B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-[#C8972B] text-[#0B1526] flex items-center justify-center mx-auto shadow-lg font-bold">
                  <SparklesIcon className="w-6 h-6" />
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Need Admission Assistance?
                </h2>

                <p className="text-white/85 text-base sm:text-lg leading-relaxed font-sans">
                  Our admissions team is happy to guide you through the application process.
                </p>

                <div className="pt-4">
                  <Link
                    to="/admissions/apply"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C8972B] text-[#0B1526] text-xs font-bold uppercase tracking-wider hover:bg-[#D4A843] transition-all shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Apply Now</span>
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
