// Shared Framer Motion animation variants
// Import from this file in all page components — do not define inline variants.

/**
 * Fade up — used for section headings and general content reveals (whileInView)
 */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/**
 * Slide in from left — used for experience timeline entries (whileInView)
 */
export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

/**
 * Stagger container — wraps a list of children that each use fadeUp or slideInLeft.
 * Apply whileInView + viewport to this container.
 */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

/**
 * Hero fade up — mount-time stagger for the Home hero section.
 * Accepts a custom delay via the `custom` prop on each child.
 */
export const heroFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

/**
 * No motion — swap in when useReducedMotion() returns true.
 * Renders elements immediately in their final visible state.
 */
export const noMotion = {
  hidden: { opacity: 1, y: 0, x: 0 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0 } },
}
