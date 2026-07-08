"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteContent } from "@/lib/content";

const navItems = [
  { id: "about", label: "About" },
  { id: "interests", label: "Interests" },
  { id: "activities", label: "Activities" },
  { id: "achievements", label: "Distinctions" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["hero", ...navItems.map((item) => item.id)];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.3, 0.5] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-rule bg-sheet/90 backdrop-blur-sm" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-extrabold tracking-tight text-ink transition-colors hover:text-flow"
        >
          {siteContent.name.split(" ")[0]}
          <span className="text-flow"> →</span>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className={`font-mono text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  activeId === item.id
                    ? "text-ink"
                    : "text-graphite hover:text-ink"
                }`}
              >
                {activeId === item.id && <span className="text-flow">→ </span>}
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-rule bg-sheet px-6 py-4 md:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id} className="rule-hair first:border-t-0">
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={`flex w-full items-center gap-2 py-3 text-left font-mono text-sm font-medium uppercase tracking-[0.14em] transition-colors ${
                      activeId === item.id ? "text-flow" : "text-graphite"
                    }`}
                  >
                    {activeId === item.id && <span aria-hidden>→</span>}
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
