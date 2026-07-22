import { Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import navigationData from '@content/navigation.json'

export default function Sitemap() {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Sitemap', href: '/sitemap' }
  ]

  const sections = [
    {
      title: 'Main Navigation',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Us Overview', href: '/about' },
        { label: 'Academic Programs', href: '/courses' },
        { label: 'Admissions Center', href: '/admissions' },
        { label: 'Faculty Directory', href: '/faculty' },
        { label: 'Student Life', href: '/student-life' },
        { label: 'Photo Gallery', href: '/gallery' },
        { label: 'News & Events', href: '/news' },
        { label: 'Resources & Downloads', href: '/resources' },
        { label: 'Contact Us', href: '/contact' },
      ]
    },
    {
      title: 'About Section',
      links: [
        { label: 'Our Story & History', href: '/about/our-story' },
        { label: 'Vision & Mission', href: '/about/vision-mission' },
        { label: 'Statement of Faith', href: '/about/statement-of-faith' },
        { label: 'Church Profile & Affiliation', href: '/about/church-profile' },
        { label: 'Leadership & Faculty', href: '/about/leadership-faculty' },
      ]
    },
    {
      title: 'Academic Programs',
      links: [
        { label: 'Bachelor of Theology (B.Th)', href: '/courses/bth' },
        { label: 'Master of Divinity (M.Dv)', href: '/courses/mdv' },
        { label: 'Master of Theology (M.Th)', href: '/courses/mth' },
        { label: 'Diploma in Music', href: '/courses/diploma-music' },
      ]
    },
    {
      title: 'Admissions Services',
      links: [
        { label: 'Admission Roadmap', href: '/admissions/process' },
        { label: 'Eligibility Criteria', href: '/admissions/eligibility' },
        { label: 'Required Documents Checklist', href: '/admissions/documents' },
        { label: 'Tuition Fee Structure', href: '/admissions/fees' },
        { label: 'Academic Calendar', href: '/admissions/calendar' },
        { label: 'Online Application Form', href: '/admissions/apply' },
      ]
    },
    {
      title: 'Resources & Community',
      links: [
        { label: 'Weekly Meeting Schedule', href: '/meeting-schedule' },
        { label: 'Prayer Request Form', href: '/prayer-request' },
        { label: 'Donation & Financial Partnership', href: '/donation' },
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
      ]
    }
  ]

  return (
    <>
      <SEOHead page="/sitemap" />

      <PageHeader
        heading="Website Sitemap"
        subheading="Complete index of all public pages and sub-sections across Glory Education Center."
        badge="Site Index"
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#F8F9FA] border border-[#DDE3EC]">
              <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-4 pb-2 border-b border-[#DDE3EC]">
                {sec.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {sec.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[#5A6A7A] hover:text-[#C8972B] hover:underline transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[#C8972B] font-bold">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
