import { useState, useEffect } from 'react'

/**
 * Hook that returns true when the component is mounted (client-side only)
 * Useful for avoiding SSR hydration mismatches
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

/**
 * Hook that tracks scroll position
 * @param {number} threshold - Y position threshold
 * @returns {boolean} - true if scrolled past threshold
 */
export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

/**
 * Hook that locks body scroll (for modals, mobile menus)
 */
export function useScrollLock(locked) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [locked])
}
