"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function Activities() {
  return (
    <Section id="activities" title="What I Do" subtitle="Activities">
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:block" />

        <div className="flex flex-col gap-6 md:gap-8">
          {siteContent.activities.map((activity, index) => (
            <motion.article
              key={`${activity.title}-${activity.period}`}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              whileHover={{ x: 8 }}
              className="group glass relative ml-0 rounded-2xl p-6 transition-all hover:border-accent/30 hover:shadow-glow-sm md:ml-12 md:p-8"
            >
              <div className="absolute -left-[3.35rem] top-8 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-white group-hover:text-accent-glow">
                  {activity.title}
                </h3>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent-glow">
                  {activity.period}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-zinc-400">{activity.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
