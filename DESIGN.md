---
name: Noah Austin — Personal Site
description: A debater's flow sheet — thinking made visible as an argument that moves across the page.
colors:
  cobalt-flow: "#1e3ad6"
  clash-red: "#c8362a"
  sheet: "#f2f3ef"
  ink: "#16181d"
  graphite: "#565f6b"
  rule: "#d7dad1"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.75rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lede:
    fontFamily: "Schibsted Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  notation:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0"
  sm: "2px"
spacing:
  measure: "56rem"
  margin-col: "180px"
  section-gap: "4rem"
  entry-gap: "2rem"
components:
  flow-link:
    textColor: "{colors.ink}"
    typography: "{typography.notation}"
  flow-link-hover:
    textColor: "{colors.cobalt-flow}"
    typography: "{typography.notation}"
  masthead:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  section-title:
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
  flow-label:
    textColor: "{colors.graphite}"
    typography: "{typography.notation}"
---

# Design System: Noah Austin — Personal Site

## 1. Overview

**Creative North Star: "The Flow"**

A competitive debater keeps a *flow* — the shorthand sheet that tracks an argument's life across a round: a claim is made, a response answers it, a rebuttal extends or drops it, and connectors show where ideas clash. This site is built as one long flow. A cobalt line literally draws down the left edge of each section as you scroll — the argument advancing. The left margin carries debate notation that means something (∴ the claim · — an open thread · → where it's tested · ✓ extended), not decorative numbering. The whole system makes "thinking made visible" concrete from the subject's *own* craft, rather than a generic scholar's margin.

The register is **brand** (the design is the product) with a personality of *disciplined, curious, unpretentious*. Type is a single confident grotesk in heavy contrast, paired with a humanist mono used exactly as a debater uses shorthand — for notation, labels, years, and links. Color commits: near-black ink on a cool sheet, with **cobalt** as the primary argument line and a rare **clash-red** held in reserve. This is a deliberate move *off* the editorial-typographic lane (display serif + mono labels + ruled columns + monochrome) that the previous version had drifted into — no Fraunces, no Newsreader, no reflex-serif restraint.

**Key Characteristics:**
- A two-column flow: notation margin + argument column, with a cobalt flow line drawing down each section.
- Notation carries meaning (∴ — → ✓); numbering only where order is real (the Activities timeline).
- One committed accent — cobalt — used generously as the "argument line"; clash-red is rare.
- One heavy grotesk (Schibsted Grotesk) in weight/size contrast + one humanist mono (Spline Sans Mono) as debate shorthand.
- Hairline rules instead of cards. No box-shadows, no gradients, near-zero radius.

## 2. Colors

A committed two-pen palette — a debater's flow is written in two ink colors, and so is this.

### Primary
- **Cobalt Flow** (`#1e3ad6`, `rgb(30 58 214)`): The argument line. Used generously and structurally: the flow line drawing down each section, the masthead arrow, the active-nav mark (`→`), notation marks (∴ — → ✓), interest ticks, the year on each timeline entry, link underlines, focus rings, and `::selection` at 16% alpha. Contrast on Sheet ≈ 7:1 — safe as link text.

### Secondary
- **Clash Red** (`#c8362a`): The second pen — reserved for clash/rebuttal/dropped notation. Held back deliberately; if it starts appearing everywhere it stops meaning "clash." Currently near-silent, available for future "dropped argument" or emphasis marks.

### Neutral
- **Sheet** (`#f2f3ef`): The page — a cool, faintly green-grey stock (not cream, not paper-warm). The whole background.
- **Ink** (`#16181d`): Primary text — masthead, headings, body emphasis, active nav.
- **Graphite** (`#565f6b`): Secondary text — margin labels, italic asides, body copy in Activities/Distinctions, footer. ≈ 5.4:1 on Sheet.
- **Rule** (`#d7dad1`): Every hairline — section top rules, entry dividers, nav border, footer.

### Named Rules
**The Argument-Line Rule.** Cobalt is the flow of the argument, so it may run generously (lines, marks, years, links) — but only ever as *ink*, never as a filled button or a background panel. It marks the reasoning; it doesn't upholster the page.

**The Two-Pen Rule.** Clash-red is the second pen and stays rare. It appears only where something is genuinely being contested or dropped. Reaching for it as a general accent is prohibited — that is what cobalt is for.

## 3. Typography

**Display / Body Font:** Schibsted Grotesk (with Helvetica Neue, Arial fallback) — one family, weights 400–900, roman + italic.
**Notation / Mono Font:** Spline Sans Mono (with ui-monospace fallback) — a humanist mono, weights 400–600, roman + italic.

**Character:** One opinionated grotesk carries everything from a 900-weight masthead to 400-weight reading copy — contrast comes from weight and scale, not a second proportional face. The mono is not "developer chrome"; it is the debater's *shorthand hand*, so it is confined to notation, labels, years, nav, and link text. That pairing — heavy humanist grotesk vs. humanist mono — is a real contrast axis and deliberately avoids the reflex serif pairings.

### Hierarchy
- **Display** (Schibsted Grotesk 900, `clamp(3.75rem, 8vw, 6rem)`, line-height 0.92, −0.025em): The hero masthead, once. Followed by the drawing cobalt arrow.
- **Headline** (700, `clamp(1.875rem, 4vw, 2.25rem)`, line-height 1.05): Section titles. `text-wrap: balance`.
- **Title** (700, 1.5rem): Activity / distinction entry titles.
- **Body** (400, 1.125–1.5rem, line-height 1.6): Reading copy, capped ~65–75ch. `text-wrap: pretty`.
- **Lede** (400, `clamp(1.5rem, 3vw, 1.875rem)`, line-height 1.3): The hero tagline.
- **Notation** (Spline Sans Mono 500, 0.7rem, tracking 0.16em, UPPERCASE): Margin labels, years, nav, links, marks.

### Named Rules
**The One-Family Rule.** Contrast is built from Schibsted Grotesk's own weight range (400 → 900), not a second proportional typeface. A serif never enters this system.

**The Shorthand Rule.** Mono means notation. If text is set in Spline Sans Mono it must be a label, a year, a mark, a nav item, or a link — never running prose. Its appearance always signals "this is annotation."

## 4. Elevation

Flat by doctrine — no box-shadows, no glassmorphism, no gradients. Depth is the flow line and the margin/main split, not lift. The only stateful surface is the fixed navbar, which gains a Rule bottom-border and a `sheet/90` backdrop-blur once scrolled — a legibility affordance, not decoration.

### Named Rules
**The Paper-Flat Rule.** Surfaces never lift. To separate content, use a hairline rule, whitespace, or the cobalt flow line — never a shadow or a card.

## 5. Components

### Buttons / Links
No filled buttons — every action is a text link. **Feel: tactile & confident** — the underline sweeps in decisively (1.5px cobalt, 5px offset) and the label shifts to cobalt on hover/focus.
- **flow-link (primary action):** Spline Sans Mono, uppercase, tracking 0.1em, Ink text. Transparent underline → Cobalt on hover/focus, text shifts to Cobalt.
- **prose-link (inline):** Rendered in Cobalt with a 40%-alpha cobalt underline that solidifies on hover.
- **Focus:** global 2px cobalt outline at 3px offset, always visible.

### Cards / Containers
Forbidden. Groupings are separated by a `1px #d7dad1` top rule (`.rule-hair`) + vertical padding. See The Paper-Flat Rule.

### Navigation
- Fixed top bar, transparent until scrolled; then Rule border + `sheet/90` blur.
- Spline Sans Mono, 0.75rem, uppercase, tracking 0.14em. Default Graphite → hover Ink.
- Active item: Ink text preceded by a cobalt `→`. Brand mark: first name + cobalt `→`.
- Mobile: hamburger (three 1px Ink lines) → `bg-sheet` panel, hairline-separated; active item turns Cobalt with a `→`.

### Signature: The Flow Line + Notation
The defining system. Each `Section` is a `[180px_1fr]` grid; a cobalt line (`bg-flow/30`, `origin-top`) draws down the left edge of the argument column on scroll (reduced-motion: appears statically). The margin holds a mono notation mark + label whose glyph encodes the section's role in the argument: **∴** (the claim), **—** (open threads / an unordered set), **→** (where it's tested), **✓** (extended / won), **§** (the masthead colophon). On mobile the grid collapses; the mark+label ride above the content as an eyebrow and the flow line is hidden.

## 6. Do's and Don'ts

### Do:
- **Do** keep the notation margin + argument column, and let the cobalt flow line draw down each section (static under reduced motion).
- **Do** make every margin mark mean something (∴ — → ✓); use ordered numbering only where order is real, like the Activities timeline.
- **Do** run cobalt (`#1e3ad6`) generously *as ink* — lines, marks, years, links — and keep clash-red (`#c8362a`) rare.
- **Do** build hierarchy from Schibsted Grotesk's weight range; confine Spline Sans Mono to notation, labels, years, nav, and links.
- **Do** cap body measure ~65–75ch, use `text-wrap: balance` on headings / `pretty` on prose, and honor `prefers-reduced-motion`.
- **Do** keep reading copy ≥16px so Graphite on Sheet clears 4.5:1.

### Don't:
- **Don't** reintroduce the editorial-typographic lane: no display serif (Fraunces / Newsreader / Playfair / Cormorant), no italic-serif headlines, no mono-label-over-monochrome restraint. That's the reflex this redesign moved off.
- **Don't** ship generic AI slop: no dark-bg + neon accent, no glassmorphism, no gradient text, no decorative `01/02/03` numbering, no animated counters.
- **Don't** drift into corporate SaaS: no hero metric, no feature-card grids, no filled CTA buttons.
- **Don't** use cards, side-stripe borders, or any `box-shadow` — surfaces stay flat; separate with rules, whitespace, or the flow line.
- **Don't** set running prose in the mono, or turn cobalt into a filled button/background.
- **Don't** let clash-red spread into a general accent — it means "clash / dropped," nothing else.
