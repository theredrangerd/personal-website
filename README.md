# Personal CV Website

A bold-motion personal portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scrolling.

## Quick start

```bash
cd ~/Desktop/Coding/personal-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Edit your content

All copy lives in one file — no need to touch the layout code:

**[`content/site.json`](content/site.json)**

Update your name, tagline, about text, interests, activities, achievements, and links there.

### Assets

| File | Purpose |
|------|---------|
| `public/avatar.svg` | Replace with your photo (`avatar.jpg` or `.png`) and update the path in `Hero.tsx` if needed |
| `public/cv.pdf` | Drop your CV PDF here (linked from Contact section) |

To use a photo instead of the SVG placeholder, add `public/avatar.jpg` and change `src="/avatar.svg"` to `src="/avatar.jpg"` in `src/components/sections/Hero.tsx`.

## Project structure

```
content/site.json          ← Your CV content (edit this)
public/                    ← Photos, CV PDF
src/app/                   ← Page layout & routing
src/components/sections/   ← Hero, About, Interests, etc.
src/components/layout/     ← Navbar with scroll-spy
src/lib/content.ts         ← Loads site.json
```

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository:
   ```bash
   git add .
   git commit -m "Initial personal site"
   git remote add origin https://github.com/YOUR_USERNAME/personal-site.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.

3. Click **Add New Project** → import your repo → deploy.

4. Vercel builds automatically on every push. Add a custom domain in project settings when ready.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Customisation

- **Accent colour:** edit `accent` values in [`tailwind.config.ts`](tailwind.config.ts)
- **Animations:** shared variants in [`src/lib/motion.ts`](src/lib/motion.ts)
- **Reduced motion:** animations respect `prefers-reduced-motion` in `globals.css`
