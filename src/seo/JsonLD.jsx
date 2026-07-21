import { Helmet } from 'react-helmet-async'

/**
 * JsonLD — Injects JSON-LD structured data as a <script> tag
 * @param {object} schema - The JSON-LD schema object
 */
export default function JsonLD({ schema }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
