import { useReduceMotion } from 'framer-motion'

/**
 * Hook that returns true if the user prefers reduced motion.
 * Wraps Framer Motion's useReduceMotion for accessibility.
 * Used to disable/simplify animations throughout the site.
 */
export function useReducedMotion() {
  // framer-motion exports useReduceMotion (no 'd' at end)
  return useReduceMotion()
}
