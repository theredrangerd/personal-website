"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";
import { staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-0 pt-24"
    >
      <div className="mesh-gradient pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-muted/30 blur-[100px]" />

      <div className="relative mx-auto grid max-w-6xl flex-1 items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="order-2 md:order-1"
        >
          <motion.p
            variants={staggerItem}
            className="mb-4 font-display text-sm uppercase tracking-[0.25em] text-accent-glow"
          >
            Welcome
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-accent-glow">{siteContent.name}</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            {siteContent.tagline}
          </motion.p>
          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-glow-sm transition-transform hover:scale-105 hover:bg-accent-glow"
            >
              Discover my story
            </button>
            <button
              type="button"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass rounded-full px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-accent/40 hover:text-white"
            >
              Get in touch
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerItem}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent via-accent-muted to-accent-glow opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-full border-2 border-accent/30 shadow-glow">
              <Image
                src="/avatar.svg"
                alt={`Portrait of ${siteContent.name}`}
                width={320}
                height={320}
                className="h-64 w-64 object-cover md:h-80 md:w-80"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
