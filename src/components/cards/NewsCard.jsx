import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarIcon, ArrowRightIcon } from '@components/common/Icons'
import { formatDate, truncate } from '@utils/helpers'
import { cardHover } from '@utils/animations'

/**
 * NewsCard — displays news article thumbnail, date, category, excerpt
 */
export default function NewsCard({ article }) {
  const { slug, title, excerpt, date, category, author } = article

  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-2xl overflow-hidden border border-[#DDE3EC] flex flex-col h-full"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] bg-gradient-to-br from-[#EFF3F8] to-[#DDE3EC] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[#2A5284]/20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1E3A5F] text-white">
          {category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Date & Author */}
        <div className="flex items-center gap-2 text-xs text-[#5A6A7A] mb-3">
          <CalendarIcon className="w-3.5 h-3.5" />
          <time dateTime={date}>{formatDate(date)}</time>
          <span className="text-[#DDE3EC]">·</span>
          <span>{author}</span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#1E3A5F] leading-snug mb-2 flex-1">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#5A6A7A] leading-relaxed mb-4">
          {truncate(excerpt, 100)}
        </p>

        {/* Read More */}
        <Link
          to={`/news/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#C8972B] transition-colors group mt-auto"
          aria-label={`Read full article: ${title}`}
        >
          Read More
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}
