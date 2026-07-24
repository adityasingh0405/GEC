import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import { FormInput, FormSelect, FormTextarea } from '@components/forms/FormFields'
import { CheckIcon } from '@components/common/Icons'
import admissionsData from '@content/admissions.json'

export default function ApplyNow() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: 'Male',
    address: '',
    program: '',
    education: '',
    churchName: '',
    pastorName: '',
    testimony: '',
    declaration: false,
    'bot-field': '',
  })

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Apply Now', href: '/admissions/apply' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
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
          _subject: 'New Admission Enquiry',
          _template: 'table',
          _captcha: 'true'
        })
      })

      if (response.ok) {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          dob: '',
          gender: 'Male',
          address: '',
          program: '',
          education: '',
          churchName: '',
          pastorName: '',
          testimony: '',
          declaration: false,
          'bot-field': '',
        })
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEOHead page="/admissions/apply" />

      <PageHeader
        heading="Online Application Form"
        subheading="Submit your formal application for academic programs at Glory Education Center."
        badge="Application 2026–2027"
        customCrumbs={crumbs}
      />

      <Section bg="light">
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-2xl border border-[#DDE3EC] shadow-md">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckIcon className="w-8 h-8" />
              </div>
              <h2 className="font-display text-3xl font-bold text-[#1E3A5F] mb-3">
                Thank you!
              </h2>
              <p className="text-[#5A6A7A] leading-relaxed max-w-lg mx-auto mb-6">
                Your submission has been received.
              </p>
              <Button href="/" variant="primary" size="md">
                Return to Home
              </Button>
            </motion.div>
          ) : (
            <form
              name="gec-online-application"
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <input type="hidden" name="_subject" value="New Admission Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />

              {submitError && (
                <div className="p-4 text-center bg-rose-50 text-rose-700 rounded-sm border border-rose-200 text-sm font-sans" role="alert">
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Step 1: Personal Info */}
              <div>
                <h3 className="font-display text-xl font-bold text-[#1E3A5F] pb-2 border-b border-[#DDE3EC] mb-4">
                  1. Personal Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormInput
                    label="Full Name"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="First Middle Last Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Email Address"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
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
                  <FormInput
                    label="Date of Birth"
                    id="dob"
                    name="dob"
                    type="date"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <FormTextarea
                    label="Permanent Residential Address"
                    id="address"
                    name="address"
                    rows={2}
                    required
                    placeholder="Street, City, State, Pincode"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Step 2: Academic Program Choice */}
              <div>
                <h3 className="font-display text-xl font-bold text-[#1E3A5F] pb-2 border-b border-[#DDE3EC] mb-4">
                  2. Program Choice &amp; Qualifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormSelect
                    label="Program Applied For"
                    id="program"
                    name="program"
                    required
                    options={admissionsData.formFields.courses}
                    value={formData.program}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Highest Qualification"
                    id="education"
                    name="education"
                    required
                    placeholder="e.g. 10+2 / B.A. / B.Sc / B.Th"
                    value={formData.education}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Step 3: Church Background & Testimony */}
              <div>
                <h3 className="font-display text-xl font-bold text-[#1E3A5F] pb-2 border-b border-[#DDE3EC] mb-4">
                  3. Church Background &amp; Christian Testimony
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <FormInput
                    label="Local Church Name &amp; Denomination"
                    id="churchName"
                    name="churchName"
                    required
                    placeholder="Church Name, Location"
                    value={formData.churchName}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Pastor's Full Name &amp; Contact"
                    id="pastorName"
                    name="pastorName"
                    required
                    placeholder="Rev. / Pr. Name & Phone"
                    value={formData.pastorName}
                    onChange={handleChange}
                  />
                </div>
                <FormTextarea
                  label="Personal Testimony &amp; Reason for Applying"
                  id="testimony"
                  name="testimony"
                  rows={4}
                  required
                  placeholder="Share a brief account of your faith journey and why you feel called to study at Glory Education Center..."
                  value={formData.testimony}
                  onChange={handleChange}
                />
              </div>

              {/* Declaration Checkbox */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EFF3F8] border border-[#DDE3EC]">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declaration"
                  required
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-[#1E3A5F] rounded border-[#DDE3EC] focus:ring-[#1E3A5F]"
                />
                <label htmlFor="declaration" className="text-xs text-[#5A6A7A] leading-relaxed select-none cursor-pointer">
                  I hereby declare that all information provided in this application is true and complete. I agree to abide by the spiritual and academic guidelines of Glory Education Center if admitted.
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={loading}
                className="w-full justify-center text-base"
              >
                {loading ? 'Sending...' : 'Submit Application Now'}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
