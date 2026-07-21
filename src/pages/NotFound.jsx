import SEOHead from '@seo/SEOHead'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import { HomeIcon } from '@components/common/Icons'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found | Glory Education Center" description="The page you are looking for does not exist." />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-[#F8F9FA]">
        <Container>
          <div className="text-center max-w-md mx-auto">
            <span className="font-display text-8xl font-bold text-[#C8972B] block mb-2">404</span>
            <h1 className="font-display text-3xl font-bold text-[#1E3A5F] mb-4">
              Page Not Found
            </h1>
            <p className="text-[#5A6A7A] mb-8 leading-relaxed">
              Sorry, the page you are looking for could not be found or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/" variant="primary" size="md">
                <HomeIcon className="w-4 h-4" />
                Back to Home
              </Button>
              <Button href="/courses" variant="secondary" size="md">
                Explore Programs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
