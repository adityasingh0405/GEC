/**
 * ImageKit URL builder — constructs optimized image URLs.
 * Falls back gracefully if ImageKit endpoint is not configured.
 */
import siteData from '@content/site.json'

const ENDPOINT = siteData.imagekit.endpoint // "https://ik.imagekit.io/xdm1pwpls0"
const IK_ORIGIN = 'https://ik.imagekit.io/'

// ─── Relative-path URL builder (existing API) ────────────────────────────────

/**
 * Build an ImageKit URL from a relative path with optional transformations.
 * @param {string} path - Image path (relative to IK endpoint)
 * @param {object} transforms - { w, h, q, f, fo, ar, bl }
 */
export function ikUrl(path, transforms = {}) {
  if (!path) return ''
  if (path.startsWith('http')) return path

  const params = []
  if (transforms.w)  params.push(`w-${transforms.w}`)
  if (transforms.h)  params.push(`h-${transforms.h}`)
  if (transforms.q)  params.push(`q-${transforms.q}`)
  if (transforms.f)  params.push(`f-${transforms.f}`)
  if (transforms.fo) params.push(`fo-${transforms.fo}`)
  if (transforms.ar) params.push(`ar-${transforms.ar}`)
  if (transforms.bl) params.push(`bl-${transforms.bl}`)

  const cleanEndpoint = ENDPOINT.replace(/\/$/, '')
  const cleanPath     = path.replace(/^\//, '')

  return params.length
    ? `${cleanEndpoint}/tr:${params.join(',')}/${cleanPath}`
    : `${cleanEndpoint}/${cleanPath}`
}

/**
 * Generate a srcset string for responsive images.
 * @param {string} path - Relative image path
 * @param {number[]} widths - Array of widths
 */
export function ikSrcSet(path, widths = [320, 640, 960, 1280, 1920]) {
  return widths
    .map(w => `${ikUrl(path, { w, f: 'auto', q: 80 })} ${w}w`)
    .join(', ')
}

// ─── Absolute URL transformation helpers ─────────────────────────────────────
// These handle absolute ImageKit URLs stored in JSON content files and JSX.

/**
 * Apply an ImageKit transformation string to an absolute ImageKit URL.
 *
 * - Strips any ?updatedAt= cache-busting query param (improves CDN cache hits).
 * - Inserts /tr:.../ path segment after the account ID.
 * - Replaces any existing /tr:.../ segment to avoid double-transformation.
 * - Returns the original URL unchanged if it is not an ImageKit URL.
 *
 * Example:
 *   ikTransform(
 *     "https://ik.imagekit.io/xdm1pwpls0/f_downlods/photo.jpg?updatedAt=123",
 *     "f-auto,q-80,w-480"
 *   )
 *   // → "https://ik.imagekit.io/xdm1pwpls0/tr:f-auto,q-80,w-480/f_downlods/photo.jpg"
 *
 * @param {string} url  - Absolute ImageKit URL
 * @param {string} tr   - Transformation string e.g. "f-auto,q-80,w-480"
 * @returns {string}
 */
export function ikTransform(url, tr) {
  if (!url || !tr) return url ?? ''
  if (!url.startsWith(IK_ORIGIN)) return url

  // Strip cache-busting query params
  const [path] = url.split('?')

  // Decompose:  https://ik.imagekit.io/  xdm1pwpls0  /  rest/of/path.jpg
  const afterOrigin = path.slice(IK_ORIGIN.length)
  const slashIdx    = afterOrigin.indexOf('/')
  if (slashIdx === -1) return path

  const accountId = afterOrigin.slice(0, slashIdx)          // "xdm1pwpls0"
  const rest      = afterOrigin.slice(slashIdx + 1)         // "tr:old/path.jpg" OR "path.jpg"

  // Remove any existing /tr:.../ segment before inserting the new one
  const filePath = rest.startsWith('tr:')
    ? rest.slice(rest.indexOf('/') + 1)
    : rest

  return `${IK_ORIGIN}${accountId}/tr:${tr}/${filePath}`
}

// ─── Preset helpers ───────────────────────────────────────────────────────────

/** Gallery thumbnail (480 px wide, rendered ~240 px on mobile) */
export const ikGalleryThumb = (url) => ikTransform(url, 'f-auto,q-80,w-480')

/** Card image – news / student-life / resources (640 px wide) */
export const ikCard = (url) => ikTransform(url, 'f-auto,q-80,w-640')

/** Faculty portrait in grid / marquee (320 px wide) */
export const ikFaculty = (url) => ikTransform(url, 'f-auto,q-80,w-320')

/** Small avatar (rendered 64-96 px; delivered at 128 px for 2×) */
export const ikAvatar = (url) => ikTransform(url, 'f-auto,q-80,w-128')

/** Medium portrait (rendered ~176 px; delivered at 256 px for 2×) */
export const ikPortrait = (url) => ikTransform(url, 'f-auto,q-80,w-256')

/** Full-width feature / about-preview image (800 px wide) */
export const ikFeature = (url) => ikTransform(url, 'f-auto,q-80,w-800')

/** Small QR code / icon image (200 px wide) */
export const ikIcon = (url) => ikTransform(url, 'f-auto,q-80,w-200')
