"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { slideInLeft, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function Activities() {
  return (
    <Section
      id="activities"
      mark="→"
      subtitle="Where it's tested"
      title="Where the thinking gets tested."
      aside="Rooms where an argument has to survive contact with other people."
    >
      <div>
        {siteContent.activities.map((activity, index) => (
          <motion.article
            key={`${activity.title}-${activity.period}`}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={slideInLeft}
            transition={{ delay: index * 0.05 }}
            className="rule-hair py-8 first:pt-0"
          >
            <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.14em] text-flow">
              {activity.period}
            </p>
            <h3 className="text-balance font-display text-2xl font-bold tracking-tight text-ink">
              {activity.title}
            </h3>
            <p className="mt-3 max-w-prose text-pretty text-lg leading-relaxed text-graphite">
              {activity.description}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
