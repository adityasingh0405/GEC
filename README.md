# Glory Education Center — Official Web Application

A production-ready, highly accessible, mobile-first, and SEO-optimized website built for **Glory Education Center**.

Developed with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **React Router v7**. Architecture follows a **decoupled component-driven model** with all content centralized in strict JSON schema structures to enable seamless future migration to **Decap CMS, Sanity, Contentful, or Strapi** without altering UI components.

---

## Technical Stack & Specifications

| Dimension | Technology / Tool | Purpose & Details |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + Vite 8 | Ultra-fast SPA development with Rolldown bundling & HMR |
| **Styling System** | Tailwind CSS v4 + Vanilla CSS | Modern CSS cascade layers (`@layer base`, `@theme`) |
| **Animation Engine**| Framer Motion | Smooth, accessible, reduced-motion-aware animations |
| **Routing** | React Router v7 | Code-split SPA routing (`createBrowserRouter`, `Suspense`) |
| **SEO & Meta** | React Helmet Async | Dynamic Open Graph, Twitter Cards, canonicals & JSON-LD |
| **Form Handling** | Netlify Forms | Static HTML form target (`/success.html`) for serverless capture |
| **Media Assets** | ImageKit | Cloud image transformations and responsive fallback handling |
| **Hosting & CI/CD** | Netlify | Edge deployment with pre-compressed Gzip & Brotli assets |

---

## Directory Architecture & File Responsibilities

```
GEC/
├── public/                     # Static assets served as-is by Vite
│   ├── favicon.svg             # Vector site icon
│   ├── manifest.webmanifest    # Progressive Web App manifest
│   ├── robots.txt              # Search engine crawler permissions
│   ├── sitemap.xml             # Canonical XML sitemap with 16 URLs
│   └── success.html            # Static Netlify Forms submission landing page
│
├── src/
│   ├── components/             # UI Components (Atomic Design Pattern)
│   │   ├── cards/
│   │   │   ├── CourseCard.jsx  # Academic program overview card with hover depth
│   │   │   ├── FacultyCard.jsx # Staff profile card with credentials & bio toggle
│   │   │   └── NewsCard.jsx    # Article card with category badge & publication date
│   │   ├── common/
│   │   │   ├── Accordion.jsx   # Accessible FAQ collapsible component
│   │   │   ├── Breadcrumb.jsx  # ARIA-compliant structured navigation indicator
│   │   │   ├── Button.jsx      # Polymorphic button/link component (4 variants)
│   │   │   ├── Container.jsx   # Centralized responsive width & padding boundary
│   │   │   ├── CTA.jsx        # Reusable conversion callout banner
│   │   │   ├── FormFields.jsx  # Accessible input, select, & textarea components
│   │   │   ├── Icons.jsx      # Inline SVG icon system (zero external icon runtime)
│   │   │   ├── SectionHeading.jsx # Standardized section title + subtitle
│   │   │   ├── SkipLink.jsx   # WCAG 2.2 AA keyboard navigation skip-to-content
│   │   │   └── Timeline.jsx   # Vertical milestone timeline component
│   │   ├── Footer/
│   │   │   └── Footer.jsx     # Comprehensive site footer with dynamic dynamic links
│   │   └── Navbar/
│   │       └── Navbar.jsx     # Sticky, accessible header with dropdown & mobile drawer
│   │
│   ├── content/                # Decoupled Data Layer (CMS-Ready JSON Schemas)
│   │   ├── about.json         # Vision, mission, history timeline, leadership
│   │   ├── admissions.json    # Application steps, requirements, intake dates, FAQ
│   │   ├── contact.json       # Address, telephone, email, map, office hours
│   │   ├── courses.json       # B.Th, M.Dv, M.Th, Diploma in Music details & curricula
│   │   ├── faculty.json       # Full faculty profiles, qualification, designations
│   │   ├── gallery.json       # Categorized campus photo gallery metadata
│   │   ├── home.json          # Hero messaging, key statistics, program spotlights
│   │   ├── navigation.json   # Header & footer dynamic menu trees
│   │   ├── news.json          # Institutional updates, events, and announcements
│   │   ├── seo.json           # Site-wide meta titles, descriptions, & keywords
│   │   └── site.json          # Global institution metadata & contact defaults
│   │
│   ├── hooks/
│   │   └── useReducedMotion.js # Custom hook detecting OS prefers-reduced-motion
│   │
│   ├── layouts/
│   │   └── RootLayout.jsx     # Core application shell (Navbar + Suspense Outlet + Footer)
│   │
│   ├── pages/                  # Route Views (Lazy-Loaded Chunks)
│   │   ├── About.jsx          # Institutional history, mission, leadership, faculty
│   │   ├── Admissions.jsx     # Application instructions & Netlify application form
│   │   ├── Contact.jsx        # Contact form, Google map, campus operating hours
│   │   ├── CoursePage.jsx     # Dynamic single course route (slug-matched)
│   │   ├── Courses.jsx        # Full program directory with filter tabs
│   │   ├── Gallery.jsx        # Interactive campus photo gallery with modal view
│   │   ├── Home.jsx           # Strategic landing page showcasing GEC's mission
│   │   ├── News.jsx           # News & updates feed with category filtering
│   │   ├── NotFound.jsx       # Custom 404 page with return paths
│   │   ├── PrivacyPolicy.jsx  # Legal privacy statement
│   │   └── Terms.jsx          # Institutional terms of service
│   │
│   ├── seo/
│   │   ├── JsonLD.jsx         # Injects structured JSON-LD schema into document head
│   │   ├── schemas.js         # EducationalOrganization & WebSite Schema generators
│   │   └── SEOHead.jsx        # Dynamic OpenGraph, Twitter Card & Canonical Manager
│   │
│   ├── styles/
│   │   ├── animations.css     # CSS keyframe animation helpers
│   │   └── global.css         # Primary stylesheet (Tailwind v4 `@layer base` & `@theme`)
│   │
│   ├── utils/
│   │   └── animations.js      # Centralized Framer Motion stagger & entrance variants
│   │
│   ├── App.jsx                # Router setup (`createBrowserRouter`) with Suspense fallbacks
│   └── main.jsx               # React DOM root entry point wrapped in `HelmetProvider`
│
├── .gitignore                 # Version control exclusion rules
├── .oxlintrc.json             # Code quality audit configuration
├── index.html                 # Main HTML template with preloaded typography
├── netlify.toml               # Netlify build configuration & header compression
├── package.json               # Package dependencies and npm scripts
└── vite.config.js             # Vite 8 build plugin pipeline & resolution aliases
```

---

## CSS Architecture & Cascade Layer Fix

Tailwind CSS v4 uses modern native CSS layers (`@layer base`, `@layer theme`, `@layer utilities`). 

In our `src/styles/global.css`:
1. Custom design tokens (`--color-navy-800`, `--font-display`, etc.) are declared inside `@theme` to generate native Tailwind classes like `bg-navy-800` and `font-display`.
2. All base element resets (`body`, `h1-h6`, `p`, `button`) are strictly placed inside `@layer base`. This guarantees that Tailwind's `@layer utilities` (`text-white`, `px-4`, `py-6`, `mb-4`) can properly override base styles across all components without specificity conflicts.

---

## Local Development & Build Scripts

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
Starts Vite dev server on port `5173`:
```bash
npm run dev
```

### 3. Production Build
Builds optimized bundle with code splitting, Brotli/Gzip compression, and CSS minification:
```bash
npm run build
```

### 4. Production Preview
Locally preview production build output on port `4173`:
```bash
npm run preview
```

---

## Accessibility (WCAG 2.2 AA)

- **Keyboard Navigation**: Skip-to-content link rendered via `<SkipLink />` at top of DOM.
- **Focus States**: High-contrast gold focus indicators (`outline: 3px solid #C8972B`) on all interactive controls.
- **Motion Safety**: Respects `prefers-reduced-motion` at both the CSS layer and Framer Motion JavaScript level.
- **Semantic Structure**: Proper heading hierarchy (`h1` -> `h6`), ARIA landmark roles (`main`, `nav`, `banner`, `contentinfo`), and explicit button roles.

---

## CMS Migration Plan

All institutional content resides in `src/content/*.json`. When transitioning to a Headless CMS (Decap, Sanity, Contentful, or Strapi):
1. Connect the CMS output to write to `src/content/*.json` or query via API inside custom data hooks.
2. The UI components (`src/components/` and `src/pages/`) consume these JSON schemas directly, requiring **zero design or markup refactoring**.
#   G E C  
 #   g l o r y e d u c a t i o n c e n t e r  
 #   g l o r y e d u c a t i o n c e n t e r  
 