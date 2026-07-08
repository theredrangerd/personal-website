# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Static export — outputs to out/
npm run lint     # ESLint (eslint-config-next)
```

There are no tests. Note `npm run start` does not work with this project: `next.config.ts` uses `output: "export"`, so serve the `out/` directory instead (e.g. `npx serve out`) to preview a production build.

## Architecture

Single-page personal CV site: Next.js 15 App Router + TypeScript + Tailwind + Framer Motion + Lenis, statically exported and deployed to GitHub Pages via `.github/workflows/nextjs.yml` on push to `main`.

### Content/layout separation

All copy (name, tagline, about, interests, activities, achievements, links) lives in `content/site.json`. It is imported and typed by `src/lib/content.ts` (`SiteContent` type); every section component reads from `siteContent` rather than hardcoding text. Content edits go in the JSON; if the JSON shape changes, update the types in `content.ts` to match.

### basePath gotcha (GitHub Pages)

Production builds set `basePath: "/personal-website"` (dev has no basePath). Next.js does NOT prefix plain `<a href>` URLs or asset paths from `site.json`, so links to files in `public/` (e.g. the CV PDF) must manually prepend the basePath in production — see the `cvPath` logic in `src/components/sections/Contact.tsx` for the established pattern. Images are `unoptimized` because static export has no image optimization server.

### Page composition

`src/app/page.tsx` renders sections in order: Hero → About → Interests → Activities → Achievements → Contact (all in `src/components/sections/`). `src/app/layout.tsx` wraps everything in `MotionProvider` (Framer Motion LazyMotion) and `SmoothScrollProvider` (Lenis) and mounts the `Navbar`.

### Navigation and animation conventions

- Section components are client components (`"use client"`) using shared animation variants from `src/lib/motion.ts` (`fadeUp`, `staggerContainer`, `staggerItem`, `scaleIn`, `viewportOnce`). Reuse these rather than defining inline variants. Variants use `opacity: 0.001` in the hidden state deliberately so content stays visible under reduced motion / slow JS.
- `Navbar.tsx` scroll-spy works via IntersectionObserver on section `id`s. The generic `Section` wrapper (`src/components/ui/Section.tsx`) supplies each section's `id`; a new section needs its `id` added to `navItems` in `Navbar.tsx` to appear in the nav.
- Accent color is defined in `tailwind.config.ts`; global styles and `prefers-reduced-motion` handling are in `src/app/globals.css`.
