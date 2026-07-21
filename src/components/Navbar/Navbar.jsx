import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '@hooks/useScrolled'
import { MenuIcon, XIcon, ChevronDownIcon } from '@components/common/Icons'
import Button from '@components/common/Button'
import navData from '@content/navigation.json'

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-[#DDE3EC] rounded-xl shadow-xl overflow-hidden z-50"
          role="menu"
        >
          {items.map(item => (
            <li key={item.href} role="none">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EFF3F8] text-[#1E3A5F]'
                      : 'text-[#1A1A2E] hover:bg-[#EFF3F8] hover:text-[#1E3A5F]'
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

function NavItem({ link }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()

  // Close dropdown on route change
  useEffect(() => setOpen(false), [location])

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  if (link.children) {
    const isActive = link.children.some(c => location.pathname.startsWith(c.href))
    return (
      <li className="relative" ref={ref}>
        <button
          onClick={() => setOpen(o => !o)}
          onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
          aria-expanded={open}
          aria-haspopup="true"
          className={`flex items-center gap-1 px-1 py-2 text-sm font-semibold transition-colors rounded ${
            isActive ? 'text-[#1E3A5F]' : 'text-[#5A6A7A] hover:text-[#1E3A5F]'
          }`}
        >
          {link.label}
          <ChevronDownIcon
            className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <DropdownMenu items={link.children} isOpen={open} />
      </li>
    )
  }

  return (
    <li>
      <NavLink
        to={link.href}
        end={link.href === '/'}
        className={({ isActive }) =>
          `block px-1 py-2 text-sm font-semibold transition-colors rounded ${
            isActive ? 'text-[#1E3A5F]' : 'text-[#5A6A7A] hover:text-[#1E3A5F]'
          }`
        }
      >
        {link.label}
      </NavLink>
    </li>
  )
}

export default function Navbar() {
  const scrolled = useScrolled(20)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#DDE3EC]'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus-visible:ring-2 focus-visible:ring-[#C8972B] rounded"
            aria-label="Glory Education Center — Home"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5284 100%)' }}
              aria-hidden="true"
            >
              GEC
            </div>
            <div className="hidden sm:block">
              <span className="block text-base font-bold text-[#1E3A5F] leading-tight">
                Glory Education
              </span>
              <span className="block text-xs text-[#5A6A7A] leading-tight">
                Center
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex">
            <ul className="flex items-center gap-6 list-none">
              {navData.links.map(link => (
                <NavItem key={link.href} link={link} />
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/admissions" variant="primary" size="sm">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#1E3A5F] hover:bg-[#EFF3F8] transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 w-[85vw] max-w-sm z-40 bg-white shadow-2xl overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#DDE3EC]">
                <Link
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #2A5284 100%)' }}
                  >
                    GEC
                  </div>
                  <span className="font-bold text-[#1E3A5F] text-sm">Glory Education Center</span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-[#5A6A7A] hover:bg-[#EFF3F8]"
                  aria-label="Close menu"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav aria-label="Mobile navigation">
                <ul className="px-4 py-4 space-y-1">
                  {navData.links.map(link => (
                    <MobileNavItem
                      key={link.href}
                      link={link}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <div className="px-6 py-4 border-t border-[#DDE3EC] mt-4">
                <Button
                  href="/admissions"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

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
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-left font-semibold text-[#1A1A2E] hover:bg-[#EFF3F8] transition-colors"
        >
          {link.label}
          <ChevronDownIcon className={`w-4 h-4 text-[#5A6A7A] transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pl-4 mt-1 space-y-1"
            >
              {link.children.map(child => (
                <li key={child.href}>
                  <NavLink
                    to={child.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#1E3A5F] text-white'
                          : 'text-[#5A6A7A] hover:bg-[#EFF3F8] hover:text-[#1E3A5F]'
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
          `block px-4 py-3 rounded-lg font-semibold transition-colors ${
            isActive
              ? 'bg-[#1E3A5F] text-white'
              : 'text-[#1A1A2E] hover:bg-[#EFF3F8] hover:text-[#1E3A5F]'
          }`
        }
      >
        {link.label}
      </NavLink>
    </li>
  )
}
