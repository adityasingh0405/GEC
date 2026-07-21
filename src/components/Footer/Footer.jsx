import { Link } from 'react-router-dom'
import Container from '@components/common/Container'
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
  { label: 'Admissions', href: '/admissions' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

const courseLinks = [
  { label: 'Bachelor of Theology (B.Th)', href: '/courses/bth' },
  { label: 'Master of Divinity (M.Dv)', href: '/courses/mdv' },
  { label: 'Master of Theology (M.Th)', href: '/courses/mth' },
  { label: 'Diploma in Music', href: '/courses/diploma-music' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#152940] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <Container>
        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3 mb-5 focus-visible:ring-2 focus-visible:ring-[#C8972B] rounded"
              aria-label="Glory Education Center — Home"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'linear-gradient(135deg, #2A5284 0%, #1E3A5F 100%)' }}
              >
                GEC
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
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#C8972B] flex items-center justify-center transition-colors"
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
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-[#C8972B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Programs
            </h3>
            <ul className="space-y-2.5">
              {courseLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-[#C8972B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-[#C8972B] shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-snug">
                  {siteData.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-[#C8972B] shrink-0" />
                <a
                  href={`tel:${siteData.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm text-white/60 hover:text-[#C8972B] transition-colors"
                >
                  {siteData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="w-4 h-4 text-[#C8972B] shrink-0" />
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="text-sm text-white/60 hover:text-[#C8972B] transition-colors"
                >
                  {siteData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {year} {siteData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
