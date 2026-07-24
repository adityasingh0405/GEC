import { motion } from 'framer-motion'
import { DocumentIcon, DownloadIcon } from '@components/common/Icons'
import { cardHover } from '@utils/animations'

/**
 * DownloadCard — Reusable component for institutional documents and resource downloads
 */
export default function DownloadCard({
  title,
  description,
  format = 'PDF',
  size = '1.5 MB',
  onDownload,
  href,
  target,
  rel,
  icon: CustomIcon
}) {
  const IconComponent = CustomIcon || DocumentIcon

  // Automatically detect external links (e.g. ImageKit PDFs)
  const isExternal = href?.startsWith('http')

  const handleDownload = (e) => {
    if (onDownload) {
      e.preventDefault()
      onDownload()
    }
  }

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white p-6 rounded-sm border border-[#DDE3EC] border-t-2 border-t-[#C8972B] flex flex-col justify-between h-full"
      style={{ boxShadow: 'var(--shadow-sm)' }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-sm bg-[#1E3A5F]/10 border border-[#1E3A5F]/20 text-[#1E3A5F] flex items-center justify-center">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="px-2.5 py-1 rounded-sm bg-[#EFF3F8] text-[#5A6A7A] text-xs font-semibold uppercase tracking-wider">
            {format} • {size}
          </span>
        </div>

        <h3 className="font-bold text-[#1E3A5F] text-lg mb-2 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-[#5A6A7A] leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <a
        href={href || '#'}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        onClick={handleDownload}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#1E3A5F] border border-[#1E3A5F] text-white text-xs font-bold uppercase tracking-wider transition-all hover:bg-[#C8972B] hover:border-[#C8972B] hover:text-[#0B1526] hover:-translate-y-0.5 shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#1E3A5F]"
      >
        <DownloadIcon className="w-4 h-4" />
        Download Document
      </a>
    </motion.div>
  )
}