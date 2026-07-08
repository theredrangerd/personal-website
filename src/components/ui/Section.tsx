"use client";

import { motion } from "framer-motion";
import { fadeUp, drawLineY, viewportOnce } from "@/lib/motion";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  /** Flow notation mark — carries meaning (∴ premise, → response, ✓ extended) */
  mark?: string;
  /** Section label shown in the flow margin */
  subtitle?: string;
  /** Heading at the top of the argument column */
  title?: string;
  /** Annotator's aside in the margin, under the label */
  aside?: string;
};

export function Section({
  id,
  children,
  className = "",
  mark,
  subtitle,
  title,
  aside,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 ${className}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="rule-hair pt-12 md:grid md:grid-cols-[180px_1fr] md:gap-10 md:pt-16">
          {/* Flow margin: notation + label + annotator's aside */}
          <div className="mb-6 md:mb-0">
            <div className="md:sticky md:top-28">
              {(mark || subtitle) && (
                <p className="flow-label flex items-baseline gap-2">
                  {mark && (
                    <span className="flow-mark text-base leading-none">{mark}</span>
                  )}
                  {subtitle && <span>{subtitle}</span>}
                </p>
              )}
              {aside && <p className="flow-aside mt-3 hidden md:block">{aside}</p>}
            </div>
          </div>

          {/* Argument column, with the flow line drawing down its left edge */}
          <div className="relative min-w-0 md:pl-8">
            <motion.span
              aria-hidden
              variants={drawLineY}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="absolute left-0 top-1.5 hidden h-[calc(100%-0.75rem)] w-px origin-top bg-flow/30 md:block"
            />
            {title && (
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="mb-8 text-balance font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink md:text-4xl"
              >
                {title}
              </motion.h2>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
