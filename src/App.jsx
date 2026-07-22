import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '@layouts/RootLayout'

// Lazy-loaded main pages
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))

// About subpages
const OurStory = lazy(() => import('@pages/about/OurStory'))
const VisionMission = lazy(() => import('@pages/about/VisionMission'))
const StatementOfFaith = lazy(() => import('@pages/about/StatementOfFaith'))
const ChurchProfile = lazy(() => import('@pages/about/ChurchProfile'))
const LeadershipFaculty = lazy(() => import('@pages/about/LeadershipFaculty'))
const FoundersMessage = lazy(() => import('@pages/about/FoundersMessage'))
const PrincipalsMessage = lazy(() => import('@pages/about/PrincipalsMessage'))

// Course pages
const Courses = lazy(() => import('@pages/Courses'))
const CoursePage = lazy(() => import('@pages/CoursePage'))

// Admissions & Subpages
const Admissions = lazy(() => import('@pages/Admissions'))
const AdmissionProcess = lazy(() => import('@pages/admissions/AdmissionProcess'))
const Eligibility = lazy(() => import('@pages/admissions/Eligibility'))
const RequiredDocuments = lazy(() => import('@pages/admissions/RequiredDocuments'))
const FeeStructure = lazy(() => import('@pages/admissions/FeeStructure'))
const AcademicCalendar = lazy(() => import('@pages/admissions/AcademicCalendar'))
const ApplyNow = lazy(() => import('@pages/admissions/ApplyNow'))

// Institution pages
const Faculty = lazy(() => import('@pages/Faculty'))
const StudentLife = lazy(() => import('@pages/StudentLife'))
const News = lazy(() => import('@pages/News'))
const NewsArticle = lazy(() => import('@pages/NewsArticle'))
const Gallery = lazy(() => import('@pages/Gallery'))

// Resources & Action pages
const Resources = lazy(() => import('@pages/Resources'))
const PrayerRequest = lazy(() => import('@pages/PrayerRequest'))
const Donation = lazy(() => import('@pages/Donation'))
const MeetingSchedule = lazy(() => import('@pages/MeetingSchedule'))
const Contact = lazy(() => import('@pages/Contact'))
const Sitemap = lazy(() => import('@pages/Sitemap'))

// Legal & Fallback
const PrivacyPolicy = lazy(() => import('@pages/PrivacyPolicy'))
const Terms = lazy(() => import('@pages/Terms'))
const NotFound = lazy(() => import('@pages/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      // About section
      { path: 'about', element: <About /> },
      { path: 'about/our-story', element: <OurStory /> },
      { path: 'about/vision-mission', element: <VisionMission /> },
      { path: 'about/statement-of-faith', element: <StatementOfFaith /> },
      { path: 'about/church-profile', element: <ChurchProfile /> },
      { path: 'about/leadership-faculty', element: <LeadershipFaculty /> },
      { path: 'about/founders-message', element: <FoundersMessage /> },
      { path: 'about/principals-message', element: <PrincipalsMessage /> },

      // Courses
      { path: 'courses', element: <Courses /> },
      { path: 'courses/diploma-music', element: <CoursePage slug="diploma-music" /> },
      { path: 'courses/diploma-church-planting', element: <CoursePage slug="diploma-church-planting" /> },
      { path: 'courses/bmin', element: <CoursePage slug="bmin" /> },
      { path: 'courses/bth', element: <CoursePage slug="bth" /> },
      { path: 'courses/mth', element: <CoursePage slug="mth" /> },
      { path: 'courses/mdv', element: <CoursePage slug="mdv" /> },

      // Admissions
      { path: 'admissions', element: <Admissions /> },
      { path: 'admissions/process', element: <AdmissionProcess /> },
      { path: 'admissions/eligibility', element: <Eligibility /> },
      { path: 'admissions/documents', element: <RequiredDocuments /> },
      { path: 'admissions/fees', element: <FeeStructure /> },
      { path: 'admissions/calendar', element: <AcademicCalendar /> },
      { path: 'admissions/apply', element: <ApplyNow /> },

      // Faculty, Student Life, News, Gallery
      { path: 'faculty', element: <Faculty /> },
      { path: 'student-life', element: <StudentLife /> },
      { path: 'news', element: <News /> },
      { path: 'news/:slug', element: <NewsArticle /> },
      { path: 'gallery', element: <Gallery /> },

      // Resources, Prayer, Giving, Schedule, Contact, Sitemap
      { path: 'resources', element: <Resources /> },
      { path: 'prayer-request', element: <PrayerRequest /> },
      { path: 'donation', element: <Donation /> },
      { path: 'meeting-schedule', element: <MeetingSchedule /> },
      { path: 'contact', element: <Contact /> },
      { path: 'sitemap', element: <Sitemap /> },

      // Legal & 404
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
