import siteData from '@content/site.json'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteData.name,
  description: siteData.description,
  url: siteData.domain,
  logo: `${siteData.domain}/logo.svg`,
  foundingDate: siteData.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Seminary Road',
    addressLocality: 'City',
    addressRegion: 'State',
    postalCode: '400001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    contactType: 'admissions',
  },
  sameAs: Object.values(siteData.social),
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteData.name,
  url: siteData.domain,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteData.domain}/courses?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function courseSchema(course) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: siteData.name,
      url: siteData.domain,
    },
    courseCode: course.abbreviation,
    timeRequired: `P${parseInt(course.duration)}Y`,
    educationalLevel: course.level,
    url: `${siteData.domain}/courses/${course.slug}`,
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${siteData.domain}${item.href}`,
    })),
  }
}
