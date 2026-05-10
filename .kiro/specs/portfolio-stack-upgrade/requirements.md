# Requirements Document

## Introduction

This document defines the requirements for upgrading the existing React portfolio (currently built with Create React App, Tailwind CSS v3, react-icons, and Poppins typography) to a modern, high-performance tech stack. The upgrade covers five distinct areas: migrating the build toolchain from CRA to Vite, upgrading Tailwind CSS from v3 to v4, replacing react-icons with Lucide React, switching typography from Poppins to Playfair Display + Inter, and enhancing all page animations with cinematic scroll-reveal patterns using Framer Motion. The backend (Node.js/Express + Nodemailer) is out of scope and must remain untouched.

---

## Glossary

- **Portfolio_App**: The React 18 single-page application that constitutes the portfolio website.
- **Build_Tool**: The toolchain responsible for bundling, transpiling, and serving the Portfolio_App (currently react-scripts; target: Vite).
- **Tailwind**: The utility-first CSS framework used for styling (currently v3; target: v4).
- **Icon_Library**: The package that supplies SVG icons rendered throughout the Portfolio_App (currently react-icons; target: Lucide React).
- **Typography_System**: The set of Google Fonts typefaces applied globally (currently Poppins; target: Playfair Display for headings, Inter for body text).
- **Animation_System**: The Framer Motion configuration and variants responsible for all motion effects in the Portfolio_App.
- **Scroll_Reveal**: An animation pattern where elements animate into view as the user scrolls them into the viewport, implemented via Framer Motion's `useInView` or `whileInView` API.
- **Dark_Mode**: The Portfolio_App's existing light/dark theme toggle, persisted in `localStorage` and applied via a CSS class on the root element.
- **Contact_Form**: The form on the Contact page that submits data to the Express backend at `https://portfolio-1-ehqi.onrender.com/api/contact`.
- **Page**: Any of the six route-level components: Home, Skills, Projects, Experience, Resume, Contact.
- **CRA**: Create React App — the current build toolchain being replaced.
- **Vite**: The target build tool (v5+) that replaces CRA.

---

## Requirements

### Requirement 1: Migrate Build Toolchain from CRA to Vite

**User Story:** As a developer, I want to replace Create React App with Vite, so that I get significantly faster hot module replacement, faster cold-start dev server, and optimised production builds.

#### Acceptance Criteria

1. THE Build_Tool SHALL use Vite v5 or later as the bundler and dev server, replacing `react-scripts` entirely.
2. WHEN the developer runs the dev command, THE Build_Tool SHALL start the development server and serve the Portfolio_App within 2 seconds on a modern laptop.
3. WHEN the developer runs the build command, THE Build_Tool SHALL produce a production-ready bundle in the `dist/` directory.
4. WHEN the production bundle is generated, THE Build_Tool SHALL produce a bundle where the largest individual JavaScript chunk does not exceed 500 KB (uncompressed).
5. THE Build_Tool SHALL support JSX transformation for `.jsx` files without requiring manual Babel configuration.
6. THE Build_Tool SHALL resolve the `src/` directory as the module root so that existing relative imports continue to work without path changes.
7. WHEN the Portfolio_App is built for production, THE Build_Tool SHALL inline or hash asset filenames to enable long-term browser caching.
8. THE Build_Tool SHALL expose environment variables prefixed with `VITE_` to the client bundle, replacing the previous `REACT_APP_` prefix convention.
9. WHEN `index.html` is moved to the project root (as required by Vite), THE Portfolio_App SHALL continue to load the avatar image, PDF resume, and font assets without broken references.
10. THE Build_Tool SHALL retain the existing `gh-pages` deployment workflow so that `npm run deploy` continues to publish the `dist/` output to GitHub Pages.
11. IF the Vite build encounters an unresolvable module, THEN THE Build_Tool SHALL emit a descriptive error message identifying the missing module and the file that imports it.

---

### Requirement 2: Upgrade Tailwind CSS from v3 to v4

**User Story:** As a developer, I want to upgrade Tailwind CSS to v4, so that I benefit from zero-runtime CSS, faster build times, and the new CSS-first configuration model.

#### Acceptance Criteria

1. THE Tailwind SHALL use Tailwind CSS v4 or later as the styling framework.
2. WHEN Tailwind v4 is installed, THE Portfolio_App SHALL remove `tailwind.config.js` and `postcss.config.js` and replace them with a single CSS `@import "tailwindcss"` directive in `src/index.css`.
3. THE Tailwind SHALL expose the custom `font-playfair` and `font-inter` utility classes via a `@theme` block in `src/index.css`, replacing the previous `fontFamily` extension in `tailwind.config.js`.
4. THE Tailwind SHALL expose the existing custom animation utilities (`fade-in`, `fade-in-slow`, `slide-in`) via the `@theme` block so that all existing animation class names continue to work.
5. WHEN the Portfolio_App is rendered, THE Tailwind SHALL apply Dark_Mode styles using the `dark:` variant, preserving the existing class-based dark mode behaviour.
6. WHEN the production bundle is generated, THE Tailwind SHALL include only the CSS classes actually used in the source files (no unused utility classes in the output).
7. IF a Tailwind utility class used in the source does not exist in v4, THEN THE Portfolio_App SHALL replace it with the equivalent v4 class or a custom CSS rule so that no visual regression occurs.
8. THE Tailwind SHALL support all responsive breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`) used across all Pages without modification to the breakpoint values.

---

### Requirement 3: Replace react-icons with Lucide React

**User Story:** As a developer, I want to replace react-icons with Lucide React, so that I have a consistent, tree-shakeable icon set with a clean, modern aesthetic.

#### Acceptance Criteria

1. THE Icon_Library SHALL use `lucide-react` as the sole icon package; `react-icons` SHALL be removed from `package.json`.
2. THE Portfolio_App SHALL replace every `react-icons` import across all Pages and components with the equivalent Lucide React icon component.
3. WHEN a Lucide React icon is rendered, THE Icon_Library SHALL render an accessible SVG element with an appropriate `aria-label` or `aria-hidden` attribute depending on whether the icon is decorative or meaningful.
4. THE Icon_Library SHALL replace the following icon mappings without visual regression:

   | Current (react-icons) | Replacement (Lucide React) | Location |
   |---|---|---|
   | `FaGithub` | `Github` | Home, Projects |
   | `FaLinkedin` | `Linkedin` | Home |
   | `FaEnvelope` | `Mail` | Home |
   | `FaSun` | `Sun` | Navbar |
   | `FaMoon` | `Moon` | Navbar |
   | `FaBars` | `Menu` | Navbar |
   | `FaTimes` | `X` | Navbar |
   | `FaExternalLinkAlt` | `ExternalLink` | Projects |
   | `FaPaintBrush` | `Paintbrush` | Skills |
   | `FaCode` | `Code2` | Skills |
   | `FaDatabase` | `Database` | Skills |
   | `FaToolbox` | `Wrench` | Skills |
   | `FaCogs` | `Settings` | Skills |
   | `FaLaptopCode` | `Monitor` | Skills, Experience |
   | `FaBriefcase` | `Briefcase` | Experience |

5. WHEN a Lucide React icon is used as a standalone interactive element (e.g., the dark mode toggle button), THE Icon_Library SHALL ensure the parent `<button>` retains its existing `aria-label` attribute.
6. THE Icon_Library SHALL pass a consistent `size` prop (default `20`) to all Lucide React icon instances unless a specific size is required by the design context.

---

### Requirement 4: Migrate Typography from Poppins to Playfair Display + Inter

**User Story:** As a developer, I want to replace the Poppins typeface with Playfair Display for headings and Inter for body text, so that the portfolio achieves a luxury editorial aesthetic.

#### Acceptance Criteria

1. THE Typography_System SHALL load Playfair Display (weights 400, 700, 900) and Inter (weights 300, 400, 500, 600, 700) from Google Fonts via a `<link>` tag in `index.html`.
2. THE Typography_System SHALL remove the Poppins Google Fonts import from `src/index.css` and all `font-poppins` class references from every Page and component file.
3. THE Typography_System SHALL apply Inter as the default body font via the CSS `body` selector in `src/index.css`.
4. THE Typography_System SHALL apply Playfair Display to all heading elements (`h1`, `h2`, `h3`) via a `font-playfair` Tailwind utility class defined in the `@theme` block.
5. WHEN the Portfolio_App is rendered, THE Typography_System SHALL display the hero name (`Hi, I'm Harshwardhan Sahu`) in Playfair Display at the existing font size and weight.
6. WHEN the Portfolio_App is rendered, THE Typography_System SHALL display all section headings (My Skills, Projects, Experience, Contact, Resume / Blog) in Playfair Display.
7. WHEN the Portfolio_App is rendered, THE Typography_System SHALL display all body copy, navigation links, form labels, and button text in Inter.
8. THE Typography_System SHALL preserve the existing font-weight hierarchy: headings use bold/extrabold weights, body text uses regular/medium weights.
9. WHEN the Portfolio_App is rendered in Dark_Mode, THE Typography_System SHALL maintain legible contrast ratios (minimum 4.5:1 for body text, 3:1 for large text) for both Playfair Display and Inter typefaces.
10. THE Typography_System SHALL update the `fontFamily` toast option in `App.jsx` from `'Poppins, sans-serif'` to `'Inter, sans-serif'`.

---

### Requirement 5: Enhance Animations with Cinematic Scroll Reveals

**User Story:** As a visitor, I want page sections to animate into view as I scroll, so that the portfolio feels dynamic and visually engaging.

#### Acceptance Criteria

1. THE Animation_System SHALL use Framer Motion's `whileInView` prop (or `useInView` hook) to trigger animations when elements enter the viewport, replacing the current `initial="hidden" animate="visible"` pattern on page-level `<motion.div>` wrappers.
2. WHEN a section heading scrolls into view, THE Animation_System SHALL animate it with a fade-up effect: `opacity` from `0` to `1` and `y` from `40px` to `0` over `0.6s` with an `easeOut` easing curve.
3. WHEN a skill card scrolls into view, THE Animation_System SHALL animate it with a staggered fade-up effect where each card delays by `0.1s` relative to the previous card.
4. WHEN a project card scrolls into view, THE Animation_System SHALL animate it with a staggered fade-up effect where each card delays by `0.1s` relative to the previous card.
5. WHEN an experience timeline entry scrolls into view, THE Animation_System SHALL animate it with a slide-in-from-left effect: `opacity` from `0` to `1` and `x` from `-40px` to `0` over `0.5s`.
6. WHEN the Home page hero section mounts, THE Animation_System SHALL retain the existing staggered fade-up sequence for the avatar, name, typewriter, description, buttons, and social icons (mount-time animation, not scroll-triggered).
7. THE Animation_System SHALL set `viewport={{ once: true }}` on all scroll-reveal animations so that each element animates only the first time it enters the viewport.
8. THE Animation_System SHALL set `viewport={{ amount: 0.2 }}` as the default threshold so that animations trigger when at least 20% of the element is visible.
9. WHEN the user navigates between Pages, THE Animation_System SHALL preserve the existing `AnimatePresence` page-transition behaviour in `App.jsx`.
10. WHEN the Portfolio_App is rendered on a device that has `prefers-reduced-motion: reduce` set, THE Animation_System SHALL disable all motion animations and render elements in their final visible state immediately.
11. THE Animation_System SHALL define all reusable animation variants (fade-up, slide-in-left, stagger-container) in a shared `src/animations/variants.js` file so that variants are not duplicated across Page components.

---

### Requirement 6: Preserve Existing Functionality Throughout the Upgrade

**User Story:** As a visitor, I want all existing portfolio features to continue working correctly after the upgrade, so that the migration does not introduce regressions.

#### Acceptance Criteria

1. WHEN a visitor submits the Contact_Form with a valid name, email, and message, THE Contact_Form SHALL POST the data to `https://portfolio-1-ehqi.onrender.com/api/contact` and display a success message.
2. IF the Contact_Form submission fails due to a network error, THEN THE Contact_Form SHALL display an error message without crashing the Portfolio_App.
3. WHEN a visitor clicks "Download Full Resume PDF", THE Portfolio_App SHALL initiate a download of `Harshwardhan_Sahu.pdf` from the `public/` directory.
4. WHEN a visitor toggles Dark_Mode, THE Portfolio_App SHALL persist the preference in `localStorage` and apply it immediately across all Pages without a page reload.
5. WHEN a visitor navigates between Pages using the Navbar, THE Portfolio_App SHALL render the correct Page component and highlight the active navigation link.
6. WHEN a visitor accesses the Portfolio_App on a viewport narrower than `640px`, THE Portfolio_App SHALL display the mobile hamburger menu and hide the desktop navigation links.
7. THE Portfolio_App SHALL lazy-load all Page components via `React.lazy` and `Suspense`, displaying the existing spinner fallback during loading.
8. WHEN the Portfolio_App is deployed to GitHub Pages via `npm run deploy`, THE Portfolio_App SHALL be accessible at the configured `homepage` URL with all routes functioning correctly.
9. THE Portfolio_App SHALL retain the `<Helmet>` title and meta description tags on the root route.
10. IF a runtime error occurs in any Page component, THEN THE Portfolio_App SHALL catch it via the existing `ErrorBoundary` component and display a fallback UI without a full page crash.
