"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      mark="∴"
      subtitle="The claim"
      title="First, a premise."
      aside="The line everything below is built to defend."
    >
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-prose text-pretty text-xl font-normal leading-relaxed text-ink md:text-2xl md:leading-relaxed"
      >
        {siteContent.about}
      </motion.p>
    </Section>
  );
}
