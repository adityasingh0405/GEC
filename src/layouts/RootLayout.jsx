import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import SkipLink from '@components/common/SkipLink'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import JsonLD from '@seo/JsonLD'
import { organizationSchema, websiteSchema } from '@seo/schemas'

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading">
      <div
        className="animate-spin w-10 h-10 border-4 border-[#DDE3EC] border-t-[#1E3A5F] rounded-full"
        aria-hidden="true"
      />
    </div>
  )
}

export default function RootLayout() {

  return (
    <>
      {/* Site-wide JSON-LD */}
      <JsonLD schema={organizationSchema} />
      <JsonLD schema={websiteSchema} />

      {/* Accessibility */}
      <SkipLink />

      {/* Navigation */}
      <Navbar />

      {/* Main content — offset for sticky navbar height */}
      <main
        id="main-content"
        style={{ paddingTop: 'var(--navbar-height)' }}
        tabIndex={-1}
      >
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
