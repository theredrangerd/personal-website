import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Fade-up on scroll; content stays visible if motion is reduced or JS is slow */
export const fadeUp: Variants = {
  hidden: { opacity: 0.001, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0.999 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0.001, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0.001, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const viewportOnce = { once: true, margin: "-60px" as const };
