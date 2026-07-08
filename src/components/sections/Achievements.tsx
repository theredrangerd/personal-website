"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      mark="✓"
      subtitle="Extended"
      title="A few marks along the way."
      aside="Recognition is a proxy, not the point — but a useful one."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {siteContent.achievements.map((achievement) => (
          <motion.article
            key={achievement.title}
            variants={staggerItem}
            className="rule-hair py-8 first:pt-0"
          >
            <h3 className="flex items-baseline gap-3 text-balance font-display text-xl font-bold leading-snug tracking-tight text-ink">
              <span aria-hidden className="font-mono text-base text-flow">
                ✓
              </span>
              <span>{achievement.title}</span>
            </h3>
            <p className="mt-2 max-w-prose text-pretty text-lg leading-relaxed text-graphite">
              {achievement.detail}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
