import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import Breadcrumb from '@components/common/Breadcrumb'
import siteData from '@content/site.json'

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead page="/privacy-policy" />

      <section
        className="relative py-16"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
      >
        <Container>
          <Breadcrumb />
          <h1 className="font-display text-4xl font-bold text-white mt-3">Privacy Policy</h1>
          <p className="text-white/70 mt-2">Last updated: January 2026</p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-[#5A6A7A] leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">1. Introduction</h2>
            <p>
              Glory Education Center (&quot;GEC&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">2. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide through our admissions inquiry and contact forms, including your name, email address, phone number, and any additional details you share.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">3. How We Use Your Information</h2>
            <p>
              Your information is strictly used to process your inquiry, provide details regarding our academic programs, communicate updates, and manage campus admissions. We do not sell or lease your personal information to third parties.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to safeguard your personal data against unauthorized access, disclosure, or alteration.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at{' '}
              <a href={`mailto:${siteData.contact.email}`} className="text-[#1E3A5F] font-semibold hover:underline">
                {siteData.contact.email}
              </a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
