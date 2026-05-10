# Implementation Plan: Portfolio Stack Upgrade

## Overview

Migrate the portfolio from CRA + Tailwind v3 + react-icons + Poppins to Vite v5 + Tailwind v4 + Lucide React + Playfair Display/Inter + cinematic scroll-reveal animations.

## Tasks

- [x] 1. Migrate build toolchain from CRA to Vite
  - Install `vite@^5`, `@vitejs/plugin-react`, and remove `react-scripts` from `package.json`
  - Create `vite.config.js` at the project root with `@vitejs/plugin-react`, `base: './'`, and `manualChunks` splitting `vendor` and `motion`
  - Move `public/index.html` to the project root; replace `%PUBLIC_URL%` references with `/`; add `<script type="module" src="/src/main.jsx"></script>` and Google Fonts `<link>` tags for Playfair Display + Inter
  - Rename `src/index.js` to `src/main.jsx` and update it to use `ReactDOM.createRoot`
  - Update `package.json` scripts: `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`, `"predeploy": "npm run build"`, `"deploy": "gh-pages -d dist"`
  - _Requirements: 1.1, 1.2, 1.3, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11_

- [x] 2. Upgrade Tailwind CSS from v3 to v4
  - Install `tailwindcss@^4` and `@tailwindcss/vite`; remove old `tailwindcss@^3` and `autoprefixer`
  - Delete `tailwind.config.js` and `postcss.config.js`
  - Rewrite `src/index.css` with `@import "tailwindcss"`, `@theme` block for fonts and animations, and global `body`/`h1,h2,h3` font rules
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

- [x] 3. Checkpoint — verify Vite + Tailwind v4 baseline
  - Confirm `npm run build` produces a `dist/` directory without errors

- [x] 4. Replace react-icons with Lucide React across all components
  - Install `lucide-react`; remove `react-icons` from `package.json`
  - Update Navbar, Home, Footer, Projects, Skills, Experience with Lucide icons and correct aria attributes
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 5. Migrate typography from Poppins to Playfair Display + Inter
  - Remove all `font-poppins` class references from every file
  - Update `src/App.jsx` Toaster `fontFamily` to `'Inter, sans-serif'`
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 4.10_

- [x] 6. Create shared animation variants module
  - Create `src/animations/variants.js` exporting `fadeUp`, `slideInLeft`, `staggerContainer`, `heroFadeUp`, and `noMotion`
  - _Requirements: 5.11_

- [x] 7. Apply whileInView scroll-reveal animations to all page components
  - Update Skills, Projects, Experience pages to use `whileInView` + `viewport={{ once: true, amount: 0.2 }}`
  - Update Home to use `heroFadeUp` from shared variants with `useReducedMotion` guard
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11_

- [x] 8. Preserve and verify existing functionality
  - Verify dark mode persistence, contact form, PDF download, lazy loading, ErrorBoundary, Navbar
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.10_

- [x] 9. Final build verification
  - Run `npm run build` and confirm `dist/` output, chunk sizes, hashed filenames
  - _Requirements: 1.3, 1.4, 1.7, 1.10_
