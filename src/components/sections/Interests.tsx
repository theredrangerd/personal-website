"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function Interests() {
  return (
    <Section
      id="interests"
      mark="—"
      subtitle="Open threads"
      title="Things I keep returning to."
      aside="A set, not a ranking — curiosity rarely files itself in order."
    >
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="columns-1 gap-x-12 sm:columns-2"
      >
        {siteContent.interests.map((interest, index) => (
          <motion.li
            key={`${index}-${interest}`}
            variants={staggerItem}
            className="rule-hair flex items-baseline gap-3 break-inside-avoid py-3"
          >
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-flow" />
            <span className="font-sans text-lg text-ink">{interest}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
