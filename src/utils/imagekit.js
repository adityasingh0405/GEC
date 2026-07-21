/**
 * ImageKit URL builder — constructs optimized image URLs
 * Falls back gracefully if ImageKit endpoint is not configured
 */
import siteData from '@content/site.json'

const ENDPOINT = siteData.imagekit.endpoint

/**
 * Build an ImageKit URL with optional transformations
 * @param {string} path - Image path (relative to IK endpoint)
 * @param {object} transforms - { w, h, q, f, fo, tr } etc.
 */
export function ikUrl(path, transforms = {}) {
  if (!path) return ''
  // If already absolute URL, return as-is
  if (path.startsWith('http')) return path

  const params = []
  if (transforms.w) params.push(`w-${transforms.w}`)
  if (transforms.h) params.push(`h-${transforms.h}`)
  if (transforms.q) params.push(`q-${transforms.q}`)
  if (transforms.f) params.push(`f-${transforms.f}`)
  if (transforms.fo) params.push(`fo-${transforms.fo}`)
  if (transforms.ar) params.push(`ar-${transforms.ar}`)
  if (transforms.bl) params.push(`bl-${transforms.bl}`)

  const trStr = params.length ? `tr:${params.join(',')}` : ''
  const cleanEndpoint = ENDPOINT.replace(/\/$/, '')
  const cleanPath = path.replace(/^\//, '')

  return trStr
    ? `${cleanEndpoint}/tr:${params.join(',')}/${cleanPath}`
    : `${cleanEndpoint}/${cleanPath}`
}

/**
 * Generate a srcset string for responsive images
 * @param {string} path - Image path
 * @param {number[]} widths - Array of widths
 */
export function ikSrcSet(path, widths = [320, 640, 960, 1280, 1920]) {
  return widths
    .map(w => `${ikUrl(path, { w, f: 'auto', q: 80 })} ${w}w`)
    .join(', ')
}
