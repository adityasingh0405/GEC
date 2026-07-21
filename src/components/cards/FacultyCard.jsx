import { motion } from 'framer-motion'
import { cardHover } from '@utils/animations'

/**
 * FacultyCard — displays faculty member with photo, name, title, specialization
 */
export default function FacultyCard({ member, onClick }) {
  return (
    <motion.article
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="bg-white rounded-2xl overflow-hidden border border-[#DDE3EC] text-center cursor-pointer"
      style={{ boxShadow: 'var(--shadow-sm)' }}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `View profile of ${member.name}` : undefined}
    >
      {/* Avatar */}
      <div className="relative bg-gradient-to-br from-[#EFF3F8] to-[#DDE3EC] aspect-square overflow-hidden">
        <img
          src={`/images/placeholder-faculty.jpg`}
          alt={`Portrait of ${member.name}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          width={300}
          height={300}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement.innerHTML = `
              <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:2.5rem;font-weight:700;color:#2A5284;background:linear-gradient(135deg,#EFF3F8,#DDE3EC)">
                ${member.name.split(' ').slice(-1)[0].charAt(0)}
              </div>
            `
          }}
        />
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-[#1E3A5F] leading-snug mb-1">{member.name}</h3>
        <p className="text-xs font-semibold text-[#C8972B] mb-2 leading-snug">{member.title}</p>
        <p className="text-xs text-[#5A6A7A]">{member.qualifications}</p>
        {member.specialization && (
          <p className="text-xs text-[#5A6A7A] mt-1 italic">{member.specialization}</p>
        )}
      </div>
    </motion.article>
  )
}
