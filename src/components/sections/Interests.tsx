"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function Interests() {
  return (
    <Section id="interests" title="What Drives Me" subtitle="Interests">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {siteContent.interests.map((interest, index) => (
          <motion.div
            key={`${index}-${interest}`}
            variants={staggerItem}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group glass relative flex min-h-[7.5rem] flex-col overflow-hidden rounded-2xl p-6 transition-shadow hover:border-accent/40 hover:shadow-glow-sm"
          >
            <span className="font-display text-xs text-accent-glow/60">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-3 break-words font-medium leading-snug text-white transition-colors group-hover:text-accent-glow">
              {interest}
            </p>
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
