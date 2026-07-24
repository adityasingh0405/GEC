import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarIcon, ArrowRightIcon } from '@components/common/Icons'
import { formatDate, truncate } from '@utils/helpers'
import { cardHover } from '@utils/animations'

export default function NewsCard({ article }) {
  const {
    slug,
    title,
    excerpt,
    date,
    category,
    author,
    image
  } = article

  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-sm overflow-hidden border border-[#DDE3EC] border-t-2 border-t-[#1E3A5F] flex flex-col h-full"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#EFF3F8]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />

        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wider bg-[#1E3A5F] text-white">
          {category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-[#5A6A7A] mb-3">
          <CalendarIcon className="w-3.5 h-3.5" />
          <time dateTime={date}>{formatDate(date)}</time>
          <span className="text-[#DDE3EC]">•</span>
          <span>{author}</span>
        </div>

        <h3 className="text-base font-bold text-[#1E3A5F] leading-snug mb-2 flex-1">
          {title}
        </h3>

        <p className="text-sm text-[#5A6A7A] leading-relaxed mb-4">
          {truncate(excerpt, 100)}
        </p>

        <Link
          to={`/news/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#C8972B] transition-colors group mt-auto"
        >
          Read More
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  )
}