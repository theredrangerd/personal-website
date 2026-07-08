import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

/** Gentle fade-up on scroll; content stays visible if motion is reduced or JS is slow */
export const fadeUp: Variants = {
  hidden: { opacity: 0.001, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0.999 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0.001, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

/** Timeline entries slide in from the flow line on the left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0.001, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

/** A connector / flow line that draws itself along its length */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

/** Vertical flow line that draws downward */
export const drawLineY: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const viewportOnce = { once: true, margin: "-60px" as const };
