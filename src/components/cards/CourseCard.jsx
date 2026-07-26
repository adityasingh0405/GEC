import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ClockIcon, ArrowRightIcon, AcademicCapIcon } from '@components/common/Icons'
import { cardHover } from '@utils/animations'

/**
 * CourseCard — displays a course with image, duration, level, and CTA
 */
export default function CourseCard({ course }) {
  const { slug, title, abbreviation, duration, level, category, tagline, color } = course

  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-sm overflow-hidden border border-[#DDE3EC] flex flex-col h-full"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Color band header */}
      <div
        className="h-1.5 w-full"
        style={{ background: color || '#1E3A5F' }}
        aria-hidden="true"
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-sm uppercase tracking-wider"
            style={{
              background: `${color || '#1E3A5F'}15`,
              color: color || '#1E3A5F',
            }}
          >
            <AcademicCapIcon className="w-3.5 h-3.5" />
            {category}
          </span>
          <span className="text-xs font-bold text-[#5A6A7A] bg-[#EFF3F8] px-2.5 py-1 rounded-sm uppercase tracking-wider">
            {level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#1E3A5F] mb-1 leading-tight">
          {title}
        </h3>
        <p className="text-xs font-semibold text-[#C8972B] mb-3">{abbreviation}</p>

        {/* Tagline */}
        <p className="text-sm text-[#5A6A7A] leading-relaxed flex-1 mb-5">
          {tagline}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-1.5 text-sm text-[#5A6A7A] mb-5">
          <ClockIcon className="w-4 h-4 text-[#C8972B]" />
          <span>{duration}</span>
        </div>

        {/* Official Website CTA for Diploma in Music */}
        {slug === 'diploma-music' && (
          <div className="mb-4 pt-3 border-t border-[#EFF3F8]">
            <a
              href="https://www.zahaumusic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#0B1526] bg-[#C8972B] hover:bg-[#D4A843] rounded-sm transition-all shadow-xs hover:shadow-sm"
              aria-label="Visit Official Music Academy Website"
            >
              <span>Visit Official Music Academy Website</span>
              <span aria-hidden="true" className="text-sm">↗</span>
            </a>
          </div>
        )}

        {/* CTA */}
        <Link
          to={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#C8972B] transition-colors group"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}
