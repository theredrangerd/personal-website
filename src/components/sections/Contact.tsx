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
    <Section
      id="contact"
      mark="→"
      subtitle="Your turn"
      title="Open a rebuttal."
      aside="Best argument I've heard lately? I'd genuinely like to know."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="max-w-prose text-pretty text-lg leading-relaxed text-graphite">
          Whether it&apos;s a project, a debate, or a first-principles argument you think I&apos;ve
          got wrong — write to me.
        </p>

        <dl className="mt-10 space-y-4">
          <div className="rule-hair flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4 first:border-t-0">
            <dt className="flow-label w-24">Email</dt>
            <dd>
              <a href={`mailto:${links.email}`} className="flow-link normal-case tracking-normal">
                {links.email}
              </a>
            </dd>
          </div>

          {links.linkedin && (
            <div className="rule-hair flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4">
              <dt className="flow-label w-24">LinkedIn</dt>
              <dd>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flow-link normal-case tracking-normal"
                >
                  /in/noahqaustin
                </a>
              </dd>
            </div>
          )}

          {links.github && (
            <div className="rule-hair flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4">
              <dt className="flow-label w-24">GitHub</dt>
              <dd>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flow-link normal-case tracking-normal"
                >
                  @theredrangerd
                </a>
              </dd>
            </div>
          )}

          {cvPath && (
            <div className="rule-hair flex flex-wrap items-baseline gap-x-6 gap-y-1 py-4">
              <dt className="flow-label w-24">CV</dt>
              <dd>
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flow-link normal-case tracking-normal"
                >
                  Download (PDF)
                </a>
              </dd>
            </div>
          )}
        </dl>

        <footer className="mt-20 flex flex-wrap items-baseline justify-between gap-2 border-t border-rule pt-6 font-mono text-xs uppercase tracking-[0.14em] text-graphite">
          <span>
            © {new Date().getFullYear()} {siteContent.name}
          </span>
          <span>Flowed in Schibsted Grotesk &amp; Spline Sans Mono</span>
        </footer>
      </motion.div>
    </Section>
  );
}
