import { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import { FormInput, FormTextarea } from '@components/forms/FormFields'
import { CheckIcon, HeartIcon } from '@components/common/Icons'

export default function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState(false)
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitError(false)

    try {
      const response = await fetch('https://formsubmit.co/ajax/office@gloryeducationcenter.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: 'New Prayer Request',
          _template: 'table',
          _captcha: 'true'
        })
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          prayerRequest: '',
        })
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEOHead page="/prayer-request" />

      {/* 1. HERO SECTION */}
      <PageHeader
        heading="Prayer Request"
        subheading="Share your prayer requests with our dedicated intercessory prayer team. We stand with you in faith."
        badge="Intercessory Prayer"
        customCrumbs={crumbs}
      />

      <section className="py-16 lg:py-24 bg-[#F8FAFC] relative overflow-hidden" aria-label="Prayer Request Form Section">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1E3A5F_1px,transparent_1px)] [background-size:24px_24px]" />

        <Container>
          <div className="max-w-4xl mx-auto space-y-16">

            {/* Official GEC Prayer Points */}
            <div className="bg-white p-8 sm:p-10 rounded-sm border border-slate-200 shadow-md border-t-4 border-t-[#1E3A5F]">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C8972B]">Stand With Us In Faith</span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F] mt-1">
                  Our Prayer Requests
                </h2>
                <p className="text-slate-500 text-sm mt-2 font-sans">
                  We invite you to join us in interceding for Glory Education Centre, our community, and our nation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Pray that God will provide one acre of land for constructing the GEC campus, including the School of Music and Theological College.",
                  "Pray for the smooth and successful operation of Glory Education Centre in every area.",
                  "Pray for our students—their health, spiritual growth, academic excellence, wisdom, and God's protection.",
                  "Pray for our prayer partners, that God will bless, strengthen, and continue to use them.",
                  "Pray that God will open the way to establish a GEC branch in Mizoram, including vocational training such as tailoring and other skill-development programmes.",
                  "Pray for India—for the Prime Minister, Cabinet Ministers, Members of Parliament, MLAs, local government officials, police, armed forces, judges, public servants, and for peace, unity, justice, prosperity and God's protection.",
                  "Pray for pastors, missionaries, evangelists, worship leaders, singers, musicians, Bible teachers, and everyone serving in Christian ministry.",
                  "Pray for doctors, nurses, scientists, researchers, teachers, engineers, business leaders, farmers and all professionals for wisdom, integrity, health and success."
                ].map((item, index) => (
                  <div key={index} className="p-4 rounded-sm bg-[#FAF8F5] border border-slate-200/80 flex items-start gap-3.5">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F] text-[#C8972B] text-xs font-bold flex items-center justify-center mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Prayer Request Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-12 rounded-sm border border-slate-200 shadow-xl border-t-4 border-t-[#C8972B] relative max-w-3xl mx-auto"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                  role="status"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1E3A5F] mb-3 tracking-tight">
                    Thank you!
                  </h2>
                  <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base max-w-lg mx-auto mb-8">
                    Your submission has been received.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                    size="md"
                    className="rounded-sm shadow-sm font-bold tracking-wider"
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <input type="hidden" name="_subject" value="New Prayer Request" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="true" />

                  {submitError && (
                    <div className="p-4 text-center bg-rose-50 text-rose-700 rounded-sm border border-rose-200 text-sm font-sans" role="alert">
                      Something went wrong. Please try again.
                    </div>
                  )}
                  {/* Form Header */}
                  <div className="flex items-start sm:items-center gap-4 pb-6 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-sm bg-[#0B1526] text-[#C8972B] flex items-center justify-center font-bold shadow-md shrink-0">
                      <HeartIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#C8972B] uppercase tracking-widest block mb-1">Confidential &amp; Caring</span>
                      <h3 className="font-display text-2xl font-bold text-[#1E3A5F]">
                        Send Your Prayer Need
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
                        All requests remain strictly confidential with our dedicated prayer team.
                      </p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput
                        label="Your Name"
                        id="name"
                        name="name"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Email Address"
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <FormInput
                      label="Phone Number"
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210 (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <FormTextarea
                      label="Your Prayer Request"
                      id="prayerRequest"
                      name="prayerRequest"
                      rows={6}
                      required
                      placeholder="Share your prayer needs, health concerns, family requests, or ministry intentions..."
                      value={formData.prayerRequest}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={loading}
                      className="w-full justify-center shadow-md rounded-sm text-sm"
                    >
                      {loading ? 'Sending...' : 'Submit Prayer Request'}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        </Container>
      </section>
    </>
  )
}