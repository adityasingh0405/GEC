import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PlusIcon, MinusIcon } from '@components/common/Icons'

/**
 * Accordion — accessible expand/collapse component for FAQ sections
 * @param {Array} items - [{ question, answer }]
 * @param {boolean} [allowMultiple=false] - Allow multiple items open at once
 */
export default function Accordion({ items, allowMultiple = false, className = '' }) {
  const [openItems, setOpenItems] = useState(new Set())

  const toggle = (index) => {
    setOpenItems(prev => {
      const next = new Set(allowMultiple ? prev : [])
      if (prev.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className={`space-y-3 ${className}`} role="list">
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const id = `accordion-${index}`
        const panelId = `panel-${index}`

        return (
          <div
            key={index}
            className={`rounded-sm border transition-colors ${
              isOpen ? 'border-[#1E3A5F] border-l-4 border-l-[#C8972B] bg-white' : 'border-[#DDE3EC] border-l-4 border-l-[#1E3A5F] bg-white'
            }`}
            style={{ boxShadow: isOpen ? 'var(--shadow-sm)' : 'none' }}
            role="listitem"
          >
            <button
              id={id}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span
                className={`text-sm sm:text-base font-semibold leading-snug ${
                  isOpen ? 'text-[#1E3A5F]' : 'text-[#1A1A2E]'
                }`}
              >
                {item.question}
              </span>
              <span
                className={`shrink-0 w-7 h-7 rounded-sm flex items-center justify-center transition-colors ${
                  isOpen ? 'bg-[#1E3A5F] text-white' : 'bg-[#EFF3F8] text-[#5A6A7A]'
                }`}
                aria-hidden="true"
              >
                {isOpen ? <MinusIcon className="w-3.5 h-3.5" /> : <PlusIcon className="w-3.5 h-3.5" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-[#5A6A7A] leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
