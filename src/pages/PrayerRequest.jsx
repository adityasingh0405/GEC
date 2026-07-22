import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import { FormInput, FormTextarea } from '@components/forms/FormFields'
import { CheckIcon, HeartIcon } from '@components/common/Icons'

export default function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    prayerRequest: '',
  })

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Prayer Request', href: '/prayer-request' }
  ]

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <>
      <SEOHead page="/prayer-request" />

      <PageHeader
        heading="Prayer Request"
        subheading="Share your prayer requests with our dedicated intercessory prayer team. We stand with you in faith."
        badge="Intercessory Prayer"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#DDE3EC] shadow-md">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center"
            >
              <div className="w-16 h-16 bg-[#1E3A5F] text-[#C8972B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckIcon className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#1E3A5F] mb-3">
                Your Prayer Request Has Been Received
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed text-sm max-w-md mx-auto mb-6">
                Thank you, {formData.name}. Our faculty and chapel prayer team will pray over your request during our morning intercessory sessions. May God bless and strengthen you.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="secondary" size="sm">
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#DDE3EC]">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A5F]/10 text-[#1E3A5F] flex items-center justify-center">
                  <HeartIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A5F] text-lg">Send Your Prayer Need</h3>
                  <p className="text-xs text-[#5A6A7A]">All requests remain confidential with our prayer team.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                  label="Your Name"
                  id="name"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormInput
                  label="Email Address"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <FormInput
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210 (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />

              <FormTextarea
                label="Your Prayer Request"
                id="prayerRequest"
                name="prayerRequest"
                rows={5}
                required
                placeholder="Share your prayer needs, health concerns, family requests, or ministry intentions..."
                value={formData.prayerRequest}
                onChange={handleChange}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full justify-center text-base"
              >
                Submit Prayer Request
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
