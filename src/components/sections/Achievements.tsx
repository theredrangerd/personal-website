"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { siteContent } from "@/lib/content";
import { scaleIn, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { Section } from "@/components/ui/Section";

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = String(Math.round(latest));
        }
      },
    });

    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>0</span>;
}

export function Achievements() {
  const count = siteContent.achievements.length;

  return (
    <Section id="achievements" title="Highlights" subtitle="Achievements">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={scaleIn}
        className="mb-12 flex items-center gap-6 rounded-3xl border border-accent/20 bg-gradient-to-r from-accent/10 to-transparent p-8"
      >
        <p className="font-display text-6xl font-bold text-accent-glow md:text-7xl">
          <AnimatedCounter value={count} />
        </p>
        <div>
          <p className="font-display text-lg font-semibold text-white">Key achievements</p>
          <p className="text-sm text-zinc-400">Milestones I&apos;m proud of so far</p>
        </div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-4 md:grid-cols-2"
      >
        {siteContent.achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            variants={staggerItem}
            whileHover={{ scale: 1.02, y: -2 }}
            className="group glass rounded-2xl p-6 transition-shadow hover:border-accent/30 hover:shadow-glow-sm"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent-glow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-glow">
              {achievement.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{achievement.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
