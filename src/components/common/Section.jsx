import Container from '@components/common/Container'
import SectionHeading from '@components/common/SectionHeading'

/**
 * Section — Reusable content section wrapper
 */
export default function Section({
  id,
  heading,
  subheading,
  bg = 'white', // 'white' | 'light' | 'dark'
  children,
  className = '',
  containerClassName = '',
  ariaLabelledby,
}) {
  const bgStyles = {
    white: 'bg-white text-[#1A1A2E]',
    light: 'bg-[#EFF3F8] text-[#1A1A2E]',
    dark: 'bg-[#0B1526] text-white',
  }

  const sectionId = id || (heading ? heading.toLowerCase().replace(/\s+/g, '-') : undefined)
  const headingId = ariaLabelledby || (sectionId ? `${sectionId}-heading` : undefined)

  return (
    <section
      id={sectionId}
      className={`section-padding ${bgStyles[bg] || bgStyles.white} ${className}`}
      aria-labelledby={headingId}
    >
      <Container className={containerClassName}>
        {heading && (
          <SectionHeading
            id={headingId}
            heading={heading}
            subheading={subheading}
            alignment="center"
            className="mb-12"
          />
        )}
        {children}
      </Container>
    </section>
  )
}
