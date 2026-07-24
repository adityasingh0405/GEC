/**
 * Timeline — vertical history timeline component
 * @param {Array} items - [{ year, event }]
 */
export default function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-[#DDE3EC] ml-4 space-y-8">
      {items.map((item, index) => (
        <li key={index} className="ml-6">
          {/* Dot */}
          <span
            className="absolute -left-[11px] w-5 h-5 rounded-sm border-2 border-[#1E3A5F] bg-white flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-sm bg-[#C8972B]" />
          </span>

          {/* Year badge */}
          <span className="inline-block text-xs font-bold text-[#C8972B] bg-[#C8972B]/10 px-2.5 py-0.5 rounded-sm uppercase tracking-wider mb-2">
            {item.year}
          </span>

          <p className="text-sm text-[#5A6A7A] leading-relaxed">{item.event}</p>
        </li>
      ))}
    </ol>
  )
}
