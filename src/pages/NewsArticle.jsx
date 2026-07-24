import { useParams, Link } from 'react-router-dom'
import SEOHead from '@seo/SEOHead'
import JsonLD from '@seo/JsonLD'
import { newsArticleSchema } from '@seo/schemas'
import PageHeader from '@components/common/PageHeader'
import Section from '@components/common/Section'
import Card from '@components/common/Card'
import CTA from '@components/common/CTA'
import { CalendarIcon, UserIcon, ArrowLeftIcon } from '@components/common/Icons'
import newsData from '@content/news.json'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsData.find(item => item.slug === slug || item.id === slug) || newsData[0]

  const related = newsData.filter(item => item.id !== article.id).slice(0, 3)

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'News & Events', href: '/news' },
    { label: article.title, href: `/news/${article.slug}` }
  ]

  return (
    <>
      <SEOHead
        page={`/news/${article.slug}`}
        title={article.title}
        description={article.excerpt}
        canonical={`https://www.gloryeducationcenter.org/news/${article.slug}`}
        ogImage={article.image?.startsWith('http') ? article.image : undefined}
      />
      <JsonLD schema={newsArticleSchema(article)} />

      <PageHeader
        heading={article.title}
        badge={article.category}
        customCrumbs={crumbs}
      />

      <Section bg="white">
        <div className="max-w-4xl mx-auto">

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-[#DDE3EC] mb-8 text-sm text-[#5A6A7A]">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#C8972B]" />
              <span>Published: {article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-[#C8972B]" />
              <span>By {article.author || 'GEC Media Office'}</span>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#EFF3F8] mb-10 border border-[#DDE3EC]">
            <img
              src={article.image?.startsWith('http') ? article.image : `/images/${article.image}`}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          {/* Article Body */}
          <div className="prose max-w-none text-[#1A1A2E] leading-relaxed space-y-6 text-base sm:text-lg mb-12">
            <p className="font-semibold text-[#1E3A5F] text-xl">
              {article.excerpt}
            </p>
            <p>{article.body}</p>
            <p>
            </p>
          </div>

          {/* Back Button */}
          <div className="pt-6 border-t border-[#DDE3EC] mb-16">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EFF3F8] text-[#1E3A5F] font-bold text-sm hover:bg-[#1E3A5F] hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" /> Back to All News &amp; Events
            </Link>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-[#1E3A5F] mb-6">
                Related News &amp; Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Card
                    key={rel.id}
                    title={rel.title}
                    subtitle={rel.category}
                    description={rel.excerpt}
                    badge={rel.category}
                    image={rel.image?.startsWith('http') ? rel.image : `/images/${rel.image}`}
                    href={`/news/${rel.slug}`}
                    actionLabel="Read More"
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </Section>

      <CTA
        heading="Stay Updated with GEC"
        body="Learn more about our academic programs or submit an application today."
        primaryCta={{ label: 'Apply Now', href: '/admissions/apply' }}
        secondaryCta={{ label: 'Explore Programs', href: '/courses' }}
      />
    </>
  )
}
