import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cardHover } from '@utils/animations'

/**
 * Card — Generic reusable card component
 */
export default function Card({
  title,
  subtitle,
  description,
  badge,
  icon: Icon,
  image,
  href,
  onClick,
  actionLabel = 'Learn More',
  className = '',
}) {
  const content = (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={`bg-white rounded-2xl overflow-hidden border border-[#DDE3EC] flex flex-col h-full ${className}`}
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {image && (
        <div className="relative aspect-video overflow-hidden bg-[#EFF3F8]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          {badge && (
            <span className="absolute top-3 right-3 px-3 py-1 bg-[#1E3A5F] text-[#C8972B] text-xs font-bold rounded-full">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {!image && badge && (
          <span className="inline-block w-max px-3 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-bold rounded-full mb-3">
            {badge}
          </span>
        )}

        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-[#1E3A5F]/10 flex items-center justify-center mb-4 shrink-0 text-[#1E3A5F]">
            <Icon className="w-6 h-6" />
          </div>
        )}

        <h3 className="font-display text-xl font-bold text-[#1E3A5F] mb-1 leading-snug">
          {title}
        </h3>

        {subtitle && (
          <p className="text-xs font-semibold text-[#C8972B] uppercase tracking-wider mb-3">
            {subtitle}
          </p>
        )}

        <p className="text-sm text-[#5A6A7A] leading-relaxed flex-1 mb-5">
          {description}
        </p>

        {href && (
          <div className="mt-auto pt-3 border-t border-[#DDE3EC]/60 flex items-center text-sm font-bold text-[#1E3A5F] group-hover:text-[#C8972B] transition-colors">
            <span>{actionLabel}</span>
            <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>
        )}
      </div>
    </motion.article>
  )

  if (href) {
    return (
      <Link to={href} className="group block h-full focus-visible:outline-none">
        {content}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="group block text-left w-full h-full focus-visible:outline-none">
        {content}
      </button>
    )
  }

  return content
}
