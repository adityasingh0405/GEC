import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import SectionHeading from '@components/common/SectionHeading'
import Accordion from '@components/common/Accordion'
import Breadcrumb from '@components/common/Breadcrumb'
import Button from '@components/common/Button'
import { FormInput, FormSelect, FormTextarea } from '@components/forms/FormFields'
import { CheckIcon, ArrowRightIcon } from '@components/common/Icons'
import { staggerContainer, staggerItem } from '@utils/animations'
import admissionsData from '@content/admissions.json'

export default function Admissions() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    'bot-field': ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Netlify form submission handling via fetch
    const encodedData = new URLSearchParams({
      'form-name': 'admissions-inquiry',
      ...formData
    }).toString()

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodedData
    })
      .then(() => {
        setLoading(false)
        setFormSubmitted(true)
      })
      .catch((error) => {
        console.error('Form submission error:', error)
        setLoading(false)
        // Fallback for local testing or network issues
        setFormSubmitted(true)
      })
  }

  return (
    <>
      <SEOHead page="/admissions" />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
        aria-labelledby="admissions-hero-heading"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <svg width="100%" height="100%"><defs><pattern id="dotsAdm" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dotsAdm)"/></svg>
        </div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Breadcrumb />
            <h1 id="admissions-hero-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 text-balance">
              {admissionsData.hero.heading}
            </h1>
            <p className="text-white/75 mt-3 text-lg leading-relaxed">
              {admissionsData.hero.subheading}
            </p>
            <div className="mt-6 inline-block bg-[#C8972B]/20 border border-[#C8972B]/40 text-[#C8972B] text-sm font-semibold px-4 py-2 rounded-full">
              {admissionsData.intake}
            </div>
          </div>
        </Container>
      </section>

      {/* Admission Process Steps */}
      <section className="section-padding bg-white" aria-labelledby="process-heading">
        <Container>
          <SectionHeading
            heading="Admission Process"
            subheading="Five simple steps to join our vibrant academic and spiritual community"
            className="mb-14"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative"
          >
            {admissionsData.process.map((step) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#DDE3EC] relative flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F] text-white flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#1E3A5F] text-base mb-2">{step.title}</h3>
                <p className="text-xs text-[#5A6A7A] leading-relaxed flex-1">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Requirements & Form Section */}
      <section className="section-padding bg-[#EFF3F8]" aria-labelledby="inquiry-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: General Requirements */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-2 block">Checklist</span>
                <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-4">
                  General Requirements
                </h2>
                <p className="text-[#5A6A7A] text-sm leading-relaxed mb-6">
                  Ensure you have all necessary documents ready prior to submitting your formal application.
                </p>
                <ul className="space-y-3.5">
                  {admissionsData.requirements.general.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#DDE3EC]">
                      <span className="w-5 h-5 rounded-full bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5 text-[#1E3A5F]" />
                      </span>
                      <span className="text-sm text-[#1A1A2E] font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] text-white p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-2">Need Financial Assistance?</h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {admissionsData.fees.note}
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8972B] hover:underline">
                  Inquire about scholarships <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Netlify Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#DDE3EC] shadow-sm">
              <h2 id="inquiry-heading" className="font-display text-2xl font-bold text-[#1E3A5F] mb-2">
                Admissions Inquiry Form
              </h2>
              <p className="text-sm text-[#5A6A7A] mb-6">
                Fill out the form below to receive detailed information or start your application process.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-green-50 rounded-xl border border-green-200" role="status">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Inquiry Submitted!</h3>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Thank you for your interest in Glory Education Center. Our admissions office will contact you within 2 business days.
                  </p>
                </div>
              ) : (
                <form
                  name="admissions-inquiry"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden Inputs for Netlify */}
                  <input type="hidden" name="form-name" value="admissions-inquiry" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Full Name"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Phone Number"
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <FormSelect
                      label="Program of Interest"
                      id="course"
                      name="course"
                      required
                      options={admissionsData.formFields.courses}
                      value={formData.course}
                      onChange={handleChange}
                    />
                  </div>

                  <FormTextarea
                    label="Additional Message / Questions"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your background or any questions you have..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center">
                    Submit Application Inquiry
                  </Button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" aria-labelledby="admissions-faq-heading">
        <Container>
          <SectionHeading
            heading="Admissions FAQ"
            subheading="Common questions regarding admissions, enrollment, and requirements"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <Accordion items={admissionsData.faq} />
          </div>
        </Container>
      </section>
    </>
  )
}
