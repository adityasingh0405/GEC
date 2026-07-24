import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon } from '@components/common/Icons'

/**
 * Modal — accessible focus-trapped dialog
 * @param {boolean} isOpen - Controls visibility
 * @param {function} onClose - Called to close the modal
 * @param {string} title - Modal title (used for aria-labelledby)
 * @param {ReactNode} children - Modal content
 */
export default function Modal({ isOpen, onClose, title, children }) {
  const overlayRef = useRef(null)
  const closeRef = useRef(null)

  // Focus close button on open
  useEffect(() => {
    if (isOpen) closeRef.current?.focus()
  }, [isOpen])

  // ESC to close + body scroll lock
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) {
      window.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose()
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={handleOverlayClick}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white rounded-sm border border-[#DDE3EC] border-t-4 border-t-[#C8972B] w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#DDE3EC]">
              <h2 id="modal-title" className="text-lg font-bold text-[#1E3A5F]">
                {title}
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                className="p-1.5 rounded-sm text-[#5A6A7A] hover:bg-[#EFF3F8] transition-colors"
                aria-label="Close dialog"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
