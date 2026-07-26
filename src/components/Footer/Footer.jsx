import { Link } from 'react-router-dom'
import Container from '@components/common/Container'
import logo from '../../assets/logo.png'
import {
  FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon,
  MapPinIcon, PhoneIcon, MailIcon
} from '@components/common/Icons'
import siteData from '@content/site.json'

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News & Events', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

const courseLinks = [
  { label: 'Bachelor of Theology (B.Th)', href: '/courses/bth' },
  { label: 'Master of Divinity (M.Dv)', href: '/courses/mdv' },
  { label: 'Master of Theology (M.Th)', href: '/courses/mth' },
  { label: 'Diploma in Music', href: '/courses/diploma-music' },
]

const admissionLinks = [
  { label: 'Admission Process', href: '/admissions/process' },
  { label: 'Eligibility', href: '/admissions/eligibility' },
  { label: 'Required Documents', href: '/admissions/documents' },
  { label: 'Fee Structure', href: '/admissions/fees' },
  { label: 'Academic Calendar', href: '/admissions/calendar' },
  { label: 'Apply Now', href: '/admissions/apply' },
]

const resourceLinks = [
  { label: 'Resources Hub', href: '/resources' },
  { label: 'Meeting Schedule', href: '/meeting-schedule' },
  { label: 'Prayer Request', href: '/prayer-request' },
  { label: 'Donation & Support', href: '/donation' },
  { label: 'Sitemap', href: '/sitemap' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#152940] text-white border-t border-white/10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <Container>
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 mb-5 focus-visible:ring-2 focus-visible:ring-[#C8972B] rounded"
              aria-label="Glory Education Center — Home"
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img
                  src={logo}
                  alt="Glory Education Center Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="block text-base font-bold leading-tight">Glory Education Center</span>
                <span className="block text-xs text-white/50 leading-tight">{siteData.accreditation}</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {siteData.description}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {Object.entries(siteData.social).map(([key, url]) => {
                const Icon = socialIcons[key]
                if (!Icon) return null
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm bg-white/10 hover:bg-[#C8972B] hover:text-[#0B1526] flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-4">
              Courses
            </h3>
            <ul className="space-y-2.5">
              {courseLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-4">
              Admissions
            </h3>
            <ul className="space-y-2.5">
              {admissionLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="text-xs font-bold text-[#C8972B] uppercase tracking-widest mb-4">
              Resources &amp; Contact
            </h3>
            <ul className="space-y-2.5 mb-6">
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-start gap-2 text-xs text-white/60">
                <MapPinIcon className="w-3.5 h-3.5 text-[#C8972B] shrink-0 mt-0.5" />
                <span>{siteData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <PhoneIcon className="w-3.5 h-3.5 text-[#C8972B] shrink-0" />
                <a href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {siteData.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <MailIcon className="w-3.5 h-3.5 text-[#C8972B] shrink-0" />
                <a href={`mailto:${siteData.contact.email}`} className="hover:text-white transition-colors">
                  {siteData.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {year} {siteData.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/sitemap" className="text-xs text-white/50 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link to="/privacy-policy" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/50 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
