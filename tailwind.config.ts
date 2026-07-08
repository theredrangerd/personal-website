import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sheet: "#F2F3EF",
        ink: "#16181D",
        graphite: "#565F6B",
        rule: "#D7DAD1",
        flow: {
          DEFAULT: "rgb(var(--color-flow-rgb) / <alpha-value>)",
        },
        clash: {
          DEFAULT: "rgb(var(--color-clash-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-grotesk)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-spline-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
