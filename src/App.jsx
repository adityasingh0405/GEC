import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '@layouts/RootLayout'

// Lazy-loaded pages (code splitting)
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Courses = lazy(() => import('@pages/Courses'))
const CoursePage = lazy(() => import('@pages/CoursePage'))
const Admissions = lazy(() => import('@pages/Admissions'))
const Gallery = lazy(() => import('@pages/Gallery'))
const News = lazy(() => import('@pages/News'))
const Contact = lazy(() => import('@pages/Contact'))
const PrivacyPolicy = lazy(() => import('@pages/PrivacyPolicy'))
const Terms = lazy(() => import('@pages/Terms'))
const NotFound = lazy(() => import('@pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'courses', element: <Courses /> },
      { path: 'courses/bth', element: <CoursePage slug="bth" /> },
      { path: 'courses/mdv', element: <CoursePage slug="mdv" /> },
      { path: 'courses/mth', element: <CoursePage slug="mth" /> },
      { path: 'courses/diploma-music', element: <CoursePage slug="diploma-music" /> },
      { path: 'admissions', element: <Admissions /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'news', element: <News /> },
      { path: 'contact', element: <Contact /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
