import siteData from '@content/site.json'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteData.name,
  description: siteData.description,
  url: siteData.domain,
  logo: {
    '@type': 'ImageObject',
    url: `${siteData.domain}/logo.png`,
    width: 512,
    height: 512,
  },
  foundingDate: siteData.founded,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'WZ-18/13/3 Village Budella, Vikas Puri',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '110018',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    contactType: 'admissions',
  },
  sameAs: [
    siteData.social.facebook,
    siteData.social.instagram,
    siteData.social.youtube,
  ].filter(Boolean),
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

export function newsArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: article.author || siteData.name,
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: siteData.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteData.domain}/logo.png`,
      },
    },
    url: `${siteData.domain}/news/${article.slug}`,
    ...(article.image?.startsWith('http')
      ? { image: article.image }
      : {}),
  }
}

export function faqSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
