import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { XIcon, ChevronRightIcon } from '@components/common/Icons'

function ChevronLeftIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

/**
 * Lightbox — full-screen image viewer with keyboard navigation
 * @param {Array} images - [{ src, alt, thumb }]
 * @param {number|null} currentIndex - Active image index (null = closed)
 * @param {function} onClose
 * @param {function} onPrev
 * @param {function} onNext
 */
export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const isOpen = currentIndex !== null && currentIndex >= 0

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [isOpen, onClose, onPrev, onNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown, isOpen])

  if (!isOpen) return null

  const current = images[currentIndex]

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image viewer"
          >
            <XIcon className="w-6 h-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 z-10 text-sm text-white/60 font-medium">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl max-h-[85vh] mx-auto px-16 sm:px-20"
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-sm shadow-2xl"
            />
            {current.alt && (
              <p className="text-center text-sm text-white/60 mt-3">{current.alt}</p>
            )}
          </motion.div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-sm bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
