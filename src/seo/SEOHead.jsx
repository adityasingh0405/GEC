import { Helmet } from 'react-helmet-async'
import seoData from '@content/seo.json'
import siteData from '@content/site.json'

/**
 * SEOHead — Injects all page-level SEO metadata
 * @param {string} page - Route path key matching seo.json (e.g. "/about")
 * @param {string} [title] - Override title
 * @param {string} [description] - Override description
 * @param {string} [canonical] - Override canonical URL
 * @param {string} [ogImage] - Open Graph image URL
 */
export default function SEOHead({ page, title, description, canonical, ogImage }) {
  const pageSeo = seoData.pages[page] || {}
  const defaults = seoData.default

  const resolvedTitle = title || pageSeo.title
  const resolvedDescription = description || pageSeo.description || defaults.description
  const resolvedKeywords = pageSeo.keywords || defaults.keywords
  const resolvedCanonical = canonical || `${siteData.domain}${page || '/'}`
  const resolvedOgImage = ogImage || `${siteData.domain}/og-default.jpg`

  const fullTitle = page === '/'
    ? (resolvedTitle || `Glory Education Center — ${siteData.tagline}`)
    : resolvedTitle
      ? defaults.titleTemplate.replace('%s', resolvedTitle)
      : `Glory Education Center — ${siteData.tagline}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords && <meta name="keywords" content={resolvedKeywords} />}
      <link rel="canonical" href={resolvedCanonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteData.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteData.name} />
    </Helmet>
  )
}
