"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { staggerContainer, staggerItem, drawLine } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[100svh] items-center scroll-mt-0 pt-28 pb-20"
    >
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="md:grid md:grid-cols-[180px_1fr] md:gap-10">
          {/* Flow margin */}
          <motion.div
            initial={{ opacity: 0.001 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 md:mb-0"
          >
            <p className="flow-label flex items-baseline gap-2">
              <span className="flow-mark text-base leading-none">§</span>
              <span>Grade 10 · UWC</span>
            </p>
            <p className="flow-aside mt-3">
              A page you can read like a flow — top to bottom, or jump to the
              line you want to contest.
            </p>
          </motion.div>

          {/* Masthead */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.h1
              variants={staggerItem}
              className="text-balance font-display text-6xl font-black leading-[0.92] tracking-tight text-ink md:text-8xl"
            >
              {siteContent.name}
            </motion.h1>

            {/* The argument starts to flow */}
            <motion.div
              variants={staggerItem}
              className="mt-6 flex items-center gap-3"
              aria-hidden
            >
              <motion.span
                variants={drawLine}
                className="block h-px w-20 origin-left bg-flow md:w-32"
              />
              <span className="font-mono text-lg text-flow">→</span>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-6 max-w-xl text-pretty font-sans text-2xl font-normal leading-snug text-graphite md:text-3xl"
            >
              {siteContent.tagline}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-12 flex flex-wrap gap-8">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flow-link"
              >
                Read on ↓
              </button>
              <button
                type="button"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="flow-link"
              >
                Write to me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
