"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
};

export function Section({ id, children, className = "", title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(title || subtitle) && (
          <motion.div
            className="mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            {subtitle && (
              <p className="mb-2 font-display text-sm uppercase tracking-[0.2em] text-accent-glow">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
