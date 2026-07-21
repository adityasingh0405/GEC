import { useState } from 'react'
import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import Breadcrumb from '@components/common/Breadcrumb'
import Button from '@components/common/Button'
import { FormInput, FormTextarea } from '@components/forms/FormFields'
import { MapPinIcon, PhoneIcon, MailIcon, CheckIcon } from '@components/common/Icons'
import contactData from '@content/contact.json'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    'bot-field': ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const encodedData = new URLSearchParams({
      'form-name': 'contact-form',
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
        console.error('Contact form error:', error)
        setLoading(false)
        setFormSubmitted(true)
      })
  }

  return (
    <>
      <SEOHead page="/contact" />

      {/* Hero */}
      <section
        className="relative py-20"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
        aria-labelledby="contact-hero-heading"
      >
        <Container>
          <div className="relative z-10 max-w-3xl">
            <Breadcrumb />
            <h1 id="contact-hero-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">
              {contactData.hero.heading}
            </h1>
            <p className="text-white/75 mt-3 text-lg leading-relaxed">
              {contactData.hero.subheading}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-[#F8F9FA]" aria-label="Contact information and form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-[#DDE3EC] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 text-[#1E3A5F]">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A5F] text-base mb-1">Campus Location</h3>
                  <p className="text-sm text-[#5A6A7A] leading-relaxed">{contactData.address.full}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DDE3EC] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 text-[#1E3A5F]">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A5F] text-base mb-1">Phone Inquiry</h3>
                  <p className="text-sm text-[#5A6A7A] mb-1">{contactData.phone}</p>
                  <span className="text-xs text-[#5A6A7A]">{contactData.officeHours}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DDE3EC] shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center shrink-0 text-[#1E3A5F]">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A5F] text-base mb-1">Email Addresses</h3>
                  <p className="text-sm text-[#5A6A7A]">General: <a href={`mailto:${contactData.email}`} className="text-[#1E3A5F] font-semibold hover:underline">{contactData.email}</a></p>
                  <p className="text-sm text-[#5A6A7A] mt-0.5">Admissions: <a href={`mailto:${contactData.admissionsEmail}`} className="text-[#1E3A5F] font-semibold hover:underline">{contactData.admissionsEmail}</a></p>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-2xl border border-[#DDE3EC] shadow-sm overflow-hidden p-2">
                <div className="w-full h-64 bg-[#EFF3F8] rounded-xl flex items-center justify-center text-center p-4">
                  <div className="text-sm text-[#5A6A7A]">
                    <MapPinIcon className="w-8 h-8 mx-auto mb-2 text-[#1E3A5F]" />
                    <p className="font-semibold text-[#1E3A5F]">Interactive Map Embed</p>
                    <p className="text-xs text-[#5A6A7A] mt-1">{contactData.address.full}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-[#DDE3EC] shadow-sm">
              <h2 className="font-display text-2xl font-bold text-[#1E3A5F] mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-[#5A6A7A] mb-6">
                Have a question or comment? Fill out the form below and we will get back to you shortly.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-green-50 rounded-xl border border-green-200" role="status">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-sm text-green-700 leading-relaxed">
                    Thank you for reaching out. A representative will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Your Name"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Email Address"
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <FormInput
                    label="Subject"
                    id="contact-subject"
                    name="subject"
                    required
                    placeholder="e.g. Program Information Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <FormTextarea
                    label="Your Message"
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button type="submit" variant="primary" size="lg" loading={loading} className="w-full justify-center">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

          </div>
        </Container>
      </section>
    </>
  )
}
