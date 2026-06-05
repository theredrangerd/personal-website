"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" title="Who I Am" subtitle="About">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-start"
      >
        <div className="glass rounded-3xl p-8">
          <p className="font-display text-6xl font-bold text-accent/30">01</p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-white">
            Quick introduction
          </h3>
        </div>
        <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:leading-loose">
          {siteContent.about}
        </p>
      </motion.div>
    </Section>
  );
}
