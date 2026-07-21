import { Link, useLocation } from 'react-router-dom'
import { ChevronRightIcon, HomeIcon } from './Icons'
import JsonLD from '@seo/JsonLD'
import { breadcrumbSchema } from '@seo/schemas'

function buildCrumbs(pathname) {
  const parts = pathname.split('/').filter(Boolean)
  const crumbs = [{ label: 'Home', href: '/' }]
  let path = ''

  parts.forEach(part => {
    path += `/${part}`
    const label = part
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
    crumbs.push({ label, href: path })
  })

  return crumbs
}

/**
 * Breadcrumb — auto-generated from current route, with JSON-LD schema
 */
export default function Breadcrumb({ customCrumbs }) {
  const location = useLocation()
  const crumbs = customCrumbs || buildCrumbs(location.pathname)

  if (crumbs.length <= 1) return null

  return (
    <>
      <JsonLD schema={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol
          className="flex flex-wrap items-center gap-1 text-sm text-[#5A6A7A]"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1
            return (
              <li
                key={crumb.href}
                className="flex items-center gap-1"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {index === 0 && (
                  <HomeIcon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span
                    itemProp="name"
                    className="text-[#1E3A5F] font-medium"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.href}
                    itemProp="item"
                    className="hover:text-[#1E3A5F] transition-colors"
                  >
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                )}
                {!isLast && (
                  <ChevronRightIcon className="w-3.5 h-3.5 text-[#DDE3EC] shrink-0" aria-hidden="true" />
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
