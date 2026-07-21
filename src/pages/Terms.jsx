import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import Breadcrumb from '@components/common/Breadcrumb'
import siteData from '@content/site.json'

export default function Terms() {
  return (
    <>
      <SEOHead page="/terms" />

      <section
        className="relative py-16"
        style={{ background: 'linear-gradient(135deg, #152940 0%, #1E3A5F 100%)' }}
      >
        <Container>
          <Breadcrumb />
          <h1 className="font-display text-4xl font-bold text-white mt-3">Terms & Conditions</h1>
          <p className="text-white/70 mt-2">Last updated: January 2026</p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-[#5A6A7A] leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of Glory Education Center (&quot;GEC&quot;), you agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">2. Intellectual Property</h2>
            <p>
              All content on this site, including text, graphics, logos, images, and software, is the property of Glory Education Center and is protected by copyright and intellectual property laws.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">3. Academic Information Disclaimer</h2>
            <p>
              Course details, curriculum descriptions, fees, and admission criteria listed on this website are subject to change. Official program policies will be provided upon formal admission.
            </p>

            <h2 className="font-display text-2xl font-bold text-[#1E3A5F]">4. Contact</h2>
            <p>
              For inquiries regarding terms of use, please reach out to{' '}
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
