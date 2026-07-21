import { motion } from 'framer-motion'
import { fadeInUp } from '@utils/animations'

/**
 * SectionHeading — consistent h2 + subheading pairing for all page sections
 */
export default function SectionHeading({
  heading,
  subheading,
  align = 'center',
  className = '',
  headingAs: Tag = 'h2',
  animate = true,
}) {
  const alignClass = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }[align]

  const wrapper = (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignClass} ${className}`}>
      <Tag
        className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-tight mb-4 text-balance"
      >
        {heading}
      </Tag>
      {subheading && (
        <p className="text-base sm:text-lg text-[#5A6A7A] leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  )

  if (!animate) return wrapper

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {wrapper}
    </motion.div>
  )
}
