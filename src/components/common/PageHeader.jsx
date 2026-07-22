import Container from '@components/common/Container'
import Breadcrumb from '@components/common/Breadcrumb'

/**
 * PageHeader — Reusable Hero header section for standard pages
 */
export default function PageHeader({ heading, subheading, badge, customCrumbs, className = '' }) {
  return (
    <section
      className={`relative py-16 sm:py-20 flex items-center bg-[#152940] overflow-hidden ${className}`}
      style={{ background: 'linear-gradient(135deg, #0B1526 0%, #1E3A5F 100%)' }}
      aria-labelledby="page-header-title"
    >
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="headerDots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#headerDots)" />
        </svg>
      </div>

      {/* Decorative Blur Orbs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C8972B, transparent)' }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 max-w-3xl">
          <Breadcrumb customCrumbs={customCrumbs} />

          {badge && (
            <div className="mt-4 mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8972B]/20 border border-[#C8972B]/40 text-[#C8972B] text-xs font-bold uppercase tracking-wider">
              {badge}
            </div>
          )}

          <h1
            id="page-header-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight text-balance"
          >
            {heading}
          </h1>

          {subheading && (
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mt-4 max-w-2xl">
              {subheading}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
