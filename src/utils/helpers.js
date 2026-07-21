/**
 * Formats a date string to a human-readable format
 * @param {string} dateString - ISO date string (e.g., "2026-01-10")
 * @param {object} [options] - Intl.DateTimeFormat options
 */
export function formatDate(dateString, options = {}) {
  const defaults = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Intl.DateTimeFormat('en-IN', { ...defaults, ...options }).format(
    new Date(dateString)
  )
}

/**
 * Truncates text to a given character limit
 */
export function truncate(text, limit = 120) {
  if (!text || text.length <= limit) return text
  return text.slice(0, limit).trimEnd() + '…'
}

/**
 * Converts a slug to a human-readable title
 */
export function slugToTitle(slug) {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/**
 * Clamps a number between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
