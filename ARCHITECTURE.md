# DigiQuiz Architecture & Component Reference

This document explains how the DigiQuiz marketing site is put together, and serves as an at‑a‑glance reference for every component in the codebase. Use it when onboarding contributors, wiring new sections, or adjusting styling/animations.

---

## Stack Overview

- **Framework**: Next.js 14 (`app` router, React 18, TypeScript)
- **Styling**: Tailwind CSS with custom brand palette (`tailwind.config.ts`)
- **Animation**: Framer Motion for reveal/entrance transitions, GSAP for staggered card animation, Lottie for hero illustration
- **Icons**: `lucide-react`
- **Theming**: Light/dark toggle powered by a custom React context (`ThemeProvider`)
- **Smooth scrolling**: Client component that sets `scroll-behavior: smooth` when mounted

---

## Directory Layout

```
src/
├── app/
│   ├── globals.css          # Tailwind base layer + global utility overrides
│   ├── layout.tsx           # Root layout, fonts, theme + smooth scroll providers
│   └── page.tsx             # Home page composition (all sections in order)
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky nav + theme toggle + mobile menu
│   │   ├── Footer.tsx       # Footer links and legal text
│   │   ├── ThemeProvider.tsx# Light/dark context with localStorage persistence
│   │   └── SmoothScroll.tsx # Sets document scroll behavior to smooth
│   └── sections/
│       ├── Hero.tsx
│       ├── AudienceGrid.tsx
│       ├── FeaturesShowcase.tsx
│       ├── UseCases.tsx
│       ├── TemplatesShowcase.tsx
│       ├── Testimonial.tsx
│       ├── Faqs.tsx
│       ├── VideoResources.tsx
│       └── WaitlistCTA.tsx
└── data/
    ├── content.ts           # Typed content models exported as const arrays
    └── animations/
        ├── quiz-burst.json
        └── student.json     # Lottie asset used in the hero
```

---

## Top-Level Flow

`src/app/page.tsx` stitches the landing experience together. Each section component is self-contained and pulls copy/imagery from `src/data/content.ts` where appropriate. The components only receive props when necessary (today everything is static), so adding new sections typically means:

1. Add new data to `content.ts` (or create a new data module).
2. Create a section component under `components/sections`.
3. Register it in `page.tsx` in the correct order.

---

## Component Reference

### Layout Components

| Component | Purpose | Key Details |
|-----------|---------|-------------|
| `Header` | Sticky navigation, light/dark switch, responsive drawer | Uses Framer Motion for entrance, `lucide-react` icons, and `useTheme` for toggling theme. Mobile sheet animates in with `AnimatePresence`. |
| `Footer` | Contact info, section links, copyright strip | Static JSX; links fall back to hash anchors or mailto. |
| `ThemeProvider` | Supplies `theme`, `isDark`, and `toggleTheme` values | Persists user choice to `localStorage`, syncs to `<html>` `classList` and `color-scheme`. Throws if `useTheme` is consumed outside provider. |
| `SmoothScroll` | Global smooth scrolling | On mount sets `document.documentElement.style.scrollBehavior = "smooth"` and restores the previous value on unmount. |

### Hero

- Blends brand purple into the illustration side via a full-width left→right gradient overlay.
- Uses GSAP to stagger the trio of highlight cards as they mount.
- Right column renders `student.json` via `lottie-react`; uses a bottom overlay for descriptive text.
- CTA buttons jump to `#waitlist` and `#features`.

### AudienceGrid

- Four highlight tiles sourced from `audienceHighlights`.
- Each tile is a `motion.div` that fades upward on scroll and lifts slightly on hover (`hover:-translate-y-1`).

### FeaturesShowcase

- Top hero copy plus pill badges (from `featurePills`).
- `featureCards` map to animated `motion.article` cards with gradient accents and hover lift.

### UseCases

- Grid of long-form cards describing platform use cases (`useCaseTracks`).
- Each card animates in as it scrolls into view and responds to hover with lift/shadow.
- CTA links use hash anchors so smooth scroll applies automatically.

### TemplatesShowcase

- Three-column grid on desktop fed by `templateCollections`.
- Cards layer background gradients on hover and animate in from below.

### Testimonial

- Pulls the first testimonial from `content.ts`.
- Early return if no testimonial is provided to keep the section optional.
- Decorative gradients and blurred highlights for on-brand halo effect.

### Faqs

- Controlled accordion using React state; first item open by default.
- `AnimatePresence` handles smooth height transitions.
- Cards gain a subtle hover lift cueing interactivity.

### VideoResources

- Two-column grid featuring learning resources, with gradient overlay appearing on hover.

### WaitlistCTA

- Bold gradient container with form input.
- `form` is static (no submit handler); integrate with API/form backend as needed.

---

## Styling & Theming

- Tailwind powers layout, spacing, and components. Custom colors live under `theme.extend.colors.brand`.
- Background utilities such as `bg-grid-soft` and `bg-gradient-radial` are declared in `tailwind.config.ts`.
- Dark mode is class-based (`darkMode: "class"`). Use the `dark:` prefix when styling new elements.
- When adding new hover animations, prefer the existing pattern (`transition`, `hover:-translate-y-1`, `hover:shadow-*`) for consistency.

---

## Animation Guidelines

- **Entrance animations**: Use Framer Motion’s `motion.*` elements with `initial`, `animate`, and `transition`. Keep durations between `0.5–0.8s`.
- **Scroll triggers**: Current sections use `whileInView` with `viewport={{ once: true, margin: "-80px" }}`; reuse to maintain consistent feel.
- **Complex sequences**: the hero uses GSAP for staggered card animations. If you add more GSAP logic, wrap it in `gsap.context` and clean up with `ctx.revert()`.
- **Lottie**: place JSON files in `src/data/animations` and import directly (`lottie-react` supports tree shaking).

---

## Adding Content

- Update text/content inside `src/data/content.ts`. The arrays export literal data used across sections. Shape your objects to match existing ones.
- For localized or dynamic content, consider elevating data fetching to `page.tsx` and passing props down instead of importing directly inside components.
- New Lottie assets: drop JSON into `src/data/animations`, import with a descriptive name, and update component props as needed.

---

## Development Tips

- **Start**: `npm run dev`
- **Lint**: `npm run lint` (uses Next.js ESLint preset)
- **Build**: `npm run build`
- Smooth scrolling is global; hash-based navigation in `<a href="#...">` will animate automatically.
- Keep component comments minimal; rely on this document plus clear naming to explain behavior.

---

## Future Enhancements

- Wire up the waitlist form to a backend or marketing automation endpoint.
- Extract repeated hover/animation patterns into reusable Tailwind component classes or small utility components.
- Expand `content.ts` into typed modules if the app grows (e.g., `types/content.ts` + dedicated interfaces).

---

Questions or suggestions? Open an issue or drop a note in the project README so everyone can keep the architecture doc in sync. Happy building!
