import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@hooks/useScrolled'
import { MenuIcon, XIcon, ChevronDownIcon } from '@components/common/Icons'
import navData from '@content/navigation.json'
import logo from "@assets/logo.png"

/* ─────────────────────────────────────────
   Desktop Dropdown Menu
───────────────────────────────────────── */
function DropdownMenu({ items, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-60 bg-[#0E1E33] border border-white/15 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50 py-1.5"
          role="menu"
        >
          <div className="h-[2px] w-full bg-gradient-to-r from-[#D4A843] via-[#C8972B] to-[#D4A843]" />
          {items.map(item => (
            <li key={item.href} role="none">
              <NavLink
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-150 ${isActive
                    ? 'bg-white/10 text-[#D4A843]'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`
                }
                role="menuitem"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────
   Desktop Nav Item with Hover + Click Support
───────────────────────────────────────── */
function NavItem({ link }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const timeoutRef = useRef(null)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 150)
  }

  if (link.children) {
    const isActive = link.children.some(c => location.pathname === c.href || (c.href !== '/' && location.pathname.startsWith(c.href)))
      || (link.href && location.pathname.startsWith(link.href))

    return (
      <li
        className="relative"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-haspopup="true"
          className={`relative flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
        >
          {link.label}
          <ChevronDownIcon className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          {isActive && (
            <motion.span
              layoutId="navUnderline"
              className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#C8972B]"
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
        </button>
        <DropdownMenu items={link.children} isOpen={open} onClose={() => setOpen(false)} />
      </li>
    )
  }

  return (
    <li>
      <NavLink to={link.href} end={link.href === '/'}>
        {({ isActive }) => (
          <span
            className={`relative block py-2 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/80 hover:text-white'
              }`}
          >
            {link.label}
            {isActive && (
              <motion.span
                layoutId="navUnderline"
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#C8972B]"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
          </span>
        )}
      </NavLink>
    </li>
  )
}

/* ─────────────────────────────────────────
   Mobile Nav Item — Accordion Expand/Collapse
───────────────────────────────────────── */
function MobileNavItem({ link, onClose }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  if (link.children) {
    return (
      <li>
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-bold text-white hover:bg-white/10 transition-colors text-xs uppercase tracking-wider"
        >
          {link.label}
          <ChevronDownIcon className={`w-4 h-4 text-white/60 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pl-4 mt-1 space-y-0.5"
            >
              {link.children.map(child => (
                <li key={child.href}>
                  <NavLink
                    to={child.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${isActive
                        ? 'bg-[#C8972B] text-[#0B1526]'
                        : 'text-white/75 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    )
  }

  return (
    <li>
      <NavLink
        to={link.href}
        end={link.href === '/'}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${isActive
            ? 'bg-[#C8972B] text-[#0B1526]'
            : 'text-white/85 hover:bg-white/10 hover:text-white'
          }`
        }
      >
        {link.label}
      </NavLink>
    </li>
  )
}

/* ─────────────────────────────────────────
   Main Full-Width Header / Navbar
───────────────────────────────────────── */
export default function Navbar() {
  const scrolled = useScrolled(20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMobileOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Full-Width Fixed Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-[#0B1526]/95 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-[#0B1526]/85 backdrop-blur-lg border-b border-white/10"
          }`}
        role="banner"
      >
        {/* Gold Accent */}
        <div className="h-[2px] w-full bg-[#C8972B]" />

        {/* Header Container */}
        <div className="max-w-[1400px] mx-auto h-[78px] px-6 lg:px-10 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-4 shrink-0 overflow-visible group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8972B] rounded-lg"
            aria-label="Glory Education Center — Home"
          >
            <div className="relative flex items-center justify-center shrink-0">
              <img
                src={logo}
                alt="Glory Education Center Logo"
                className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="leading-none">
              <h1 className="text-[17px] font-bold text-white tracking-tight">
                Glory Education Center
              </h1>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/65 font-medium">
                Theological &amp; Music Education
              </p>
            </div>
          </Link>

          {/* ================= NAVIGATION ================= */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center"
          >
            <ul className="flex items-center gap-8 xl:gap-10">
              {navData.links.map((link) => (
                <NavItem key={link.label} link={link} />
              ))}
            </ul>
          </nav>

          {/* ================= CTA BUTTON ================= */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/admissions/apply"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C8972B] bg-[#C8972B] text-[#0B1526] text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-[#D4A843] hover:-translate-y-[1px] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8972B]"
            >
              Apply Now
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm z-50 bg-[#0B1526] shadow-2xl overflow-y-auto border-l border-white/10"
            >
              <div className="h-[2px] w-full bg-[#C8972B]" />

              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link
                  to="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#C8972B] flex items-center justify-center text-[#0B1526] text-xs font-black">
                    GEC
                  </div>
                  <div>
                    <span className="block font-bold text-white text-sm">Glory Education Center</span>
                    <span className="block text-[9px] uppercase tracking-widest text-white/60">Theological &amp; Music</span>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <nav aria-label="Mobile navigation">
                <ul className="px-4 py-5 space-y-1">
                  {navData.links.map(link => (
                    <MobileNavItem
                      key={link.label}
                      link={link}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </ul>
              </nav>

              <div className="px-6 py-4 border-t border-white/10">
                <Link
                  to="/admissions/apply"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0B1526] bg-[#C8972B] hover:bg-[#D4A843] transition-all shadow-md"
                >
                  Apply Now &rarr;
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
