import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
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
  const [submitError, setSubmitError] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitError(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/gec1322@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Contact Form Submission',
          _template: 'table',
          _captcha: 'true'
        })
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setFormSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
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
              className="bg-white rounded-sm p-8 sm:p-12 border border-slate-200 shadow-xl border-t-4 border-t-[#C8972B] relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md">
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
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#1E3A5F] shadow-xl flex items-start gap-5 hover:border-[#1E3A5F] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block mb-1">
                      Email Address
                    </span>
                    <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">
                      <a href="mailto:gec1322@gmail.com" className="hover:text-[#C8972B] transition-colors">gec1322@gmail.com</a>
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">

                      Direct email for academic leadership and executive ministry matters.
                    </p>
                  </div>
                </motion.div>

                {/* Principal Phone Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#1E3A5F] shadow-xl flex items-start gap-5 hover:border-[#1E3A5F] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
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
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#1E3A5F] shadow-xl flex items-start gap-5 hover:border-[#1E3A5F] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block mb-1">
                      Registrar
                    </span>
                    <h3 className="font-bold text-[#1E3A5F] text-lg mb-1">
                      <a href="tel:+919911053332" className="hover:text-[#C8972B] transition-colors">
                        +91 9911053332
                      </a>
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      Registrar phone number — Admissions &amp; Student Records.
                    </p>
                  </div>
                </motion.div>

                {/* Campus Address Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-sm border border-slate-200 border-t-4 border-t-[#1E3A5F] shadow-xl flex items-start gap-5 hover:border-[#1E3A5F] transition-colors group"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center shrink-0 shadow-md">
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
                  className="bg-white rounded-sm p-8 border border-slate-200 shadow-xl border-t-4 border-t-[#1E3A5F] relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md">
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
                      <span className="font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-sm text-[10px] uppercase">Closed</span>
                    </li>
                  </ul>

                  <p className="text-[10px] text-slate-400 mt-6 pt-4 border-t border-slate-100 font-sans italic">
                  </p>
                </motion.div>

                {/* WhatsApp Quick Chat */}
                <div className="p-6 rounded-sm bg-[#25D366] text-white shadow-md flex items-center justify-between gap-4 border border-[#20B958]">
                  <div>
                    <h4 className="font-bold text-base leading-tight">WhatsApp Assistance</h4>
                    <p className="text-xs text-white/90 mt-1">Chat directly with our admissions desk</p>
                  </div>
                  <a
                    href="https://wa.me/916360777933?text=Hello%20Glory%20Education%20Center,%20I%20have%20an%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-sm bg-white text-[#0B1526] font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-1.5 shadow-md"
                  >
                    💬 Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Premium Contact Form */}
              <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-sm border border-slate-200 shadow-xl border-t-4 border-t-[#C8972B]">
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
                  <div className="p-8 text-center bg-emerald-50 rounded-sm border border-emerald-200" role="status">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                      <CheckIcon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900 mb-2">Thank you!</h4>
                    <p className="text-sm text-emerald-700 leading-relaxed font-sans">
                      Your submission has been received.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_subject" value="New Contact Form Submission" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="true" />

                    {submitError && (
                      <div className="p-4 text-center bg-rose-50 text-rose-700 rounded-sm border border-rose-200 text-sm font-sans" role="alert">
                        Something went wrong. Please try again.
                      </div>
                    )}

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

                    <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center shadow-md rounded-sm">
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

            </div>

            {/* 5. GOOGLE MAP EMBED */}
            {/* TODO: Replace map embed URL with client's exact Google Maps embed iframe */}
            <div className="bg-white rounded-sm p-8 border border-slate-200 shadow-xl border-t-4 border-t-[#1E3A5F] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-[#C8972B] uppercase tracking-wider block">Find Our Campus</span>
                  <h3 className="font-display text-xl font-bold text-[#1E3A5F]">
                    Campus Location &amp; Map
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-sm bg-[#0B1526] text-[#C8972B] text-xs font-bold">New Delhi, India</span>
              </div>

              <div className="w-full h-80 bg-[#EFF3F8] rounded-sm overflow-hidden relative shadow-inner border border-slate-200">
                {/* Google Map iframe */}
                <iframe
                  title="Glory Education Center Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d644.5637418163527!2d77.06812133310135!3d28.638721447058696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0594240e1495%3A0xde78273588329df1!2sGlory%20Education%20Center%20Music%20School!5e1!3m2!1sen!2sin!4v1784893746716!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm text-xs font-bold text-[#1E3A5F] shadow-md border border-slate-200">
                  📍 Google Map — WZ-18/13/3 Village Budella, Vikas Puri, New Delhi – 110018
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 font-sans italic pt-1">

              </p>
            </div>

            {/* 6. QUICK CONTACT CTA BANNER */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0B1526] to-[#152940] rounded-sm p-8 sm:p-12 text-white shadow-xl border border-white/10 border-t-4 border-t-[#C8972B] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C8972B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-12 h-12 rounded-sm bg-[#C8972B] text-[#0B1526] flex items-center justify-center mx-auto shadow-md font-bold">
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
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#C8972B] border border-[#C8972B] text-[#0B1526] text-xs font-bold uppercase tracking-wider hover:bg-[#D4A843] hover:border-[#D4A843] transition-all shadow-md group-hover:gap-3"
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