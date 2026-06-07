"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

export function Contact() {
  const { links } = siteContent;

  const isProd = process.env.NODE_ENV === "production";
  const cvPath = links.cvPdf
    ? (isProd ? `/personal-website${links.cvPdf}` : links.cvPdf)
    : undefined;

  return (
    <Section id="contact" title="Let's Connect" subtitle="Contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="glass relative overflow-hidden rounded-3xl p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />

        <p className="max-w-2xl text-lg text-zinc-300">
          Interested in collaborating, chatting about a project, or just saying hello? I&apos;d
          love to hear from you.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${links.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow-sm transition-transform hover:scale-105 hover:bg-accent-glow"
          >
            {links.email}
          </a>

          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-accent/40 hover:text-white"
            >
              LinkedIn
            </a>
          )}

          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-accent/40 hover:text-white"
            >
              GitHub
            </a>
          )}

          {cvPath && (
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-accent/40 hover:text-white"
            >
              Download CV
            </a>
          )}
        </div>
      </motion.div>

      <footer className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} {siteContent.name}. Built with Next.js & Framer Motion.
        </p>
      </footer>
    </Section>
  );
}
