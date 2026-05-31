# Uma Classes - Project Guidelines (Updated 2026)

This document outlines the architectural standards, design conventions, and workflows for the Uma Classes website.

## 🚀 Tech Stack
- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide Icons](https://lucide.dev/) (via CDN)
- **Deployment:** GitHub Pages (via GitHub Actions)

## 🎨 Design System
### Branding
- **Name:** "Uma Classes" (Title Case, elegant serif).

### Typography
- **Headings:** `Playfair Display`, serif (Elegant, authoritative, non-bold/caps in navbar).
- **Body:** `Inter`, sans-serif (Modern, readable).

### Color Palette
- **Primary:** `#1e3a5f` (Deep Navy Blue)
- **Accent:** `#c9a84c` (Warm Gold)
- **Backgrounds:** White (`#ffffff`), Light Gray (`#f8f9fa`)
- **Dark Mode Background:** `#0f1923`
- **Dark Mode Cards:** `#1a2332`
- **Dark Mode Primary Elements:** `#0a1628`
- **Light Mode Text:** `#1a1a2e` (Dark), `#6b7280` (Gray)

## 🏗️ Architecture & Conventions
### Internal Linking
- Always use the `{base}` variable from `Astro` or the hardcoded `/uma-commerce-classes-demo` prefix for all internal links and assets.

### Dark Mode
- **Strategy:** Tailwind v4 `@variant dark (&:where(.dark, .dark *))` in `global.css`.
- **Trigger:** `.dark` class on the `html` element.
- **Persistence:** Saved in `localStorage.theme`.
- **Default:** Always lands on Light Mode for first-time visitors (ignoring system preference).
- **UI:** Sun/Moon toggle (Lucide icons) in the Navbar.

### Animations & Interactivity
- **Stability Standards:**
  - All elements use `-webkit-transform: translateZ(0)` to force GPU rendering and prevent flickering.
  - Buttons and Cards use `isolation: isolate` to manage stacking contexts.
  - Pseudo-elements (`::before`, `::after`) must use `z-index: -1 !important` to stay behind parent content.
- **Scroll Animations:** Viewport-triggered fade/slide effects using `IntersectionObserver` (class: `animate-on-scroll`).
- **Stats Counter:** Dynamic count-up for statistics on entry (attribute: `data-counter`).
- **Navbar:** Scroll-responsive transparency (transitions from transparent to solid with shadow).
- **Micro-interactions:** 
  - Topper Cards: Scale and gold glow (`#c9a84c`) on hover.
  - Buttons: Simple opacity/background transitions with a subtle gold glow (`hover:shadow`). Complex "sliding" shimmer effects are avoided for mobile stability.
  - CTAs: Subtle pulse animation on primary Navbar actions.

### Topper Data
- **Dynamic Extraction:** Topper information (Name, Subject, Marks) is extracted from filenames in the `Toppers/` directory. 
- **Format:** `StudentName -Subject Marks-Total.png` (Parsed dynamically in `results.astro` and `index.astro`).
- **Current Data Year:** 2026.

### Google Maps
- **Verified Embed:** Use the specific place identifier for "Uma Commerce Classes" (`0x396f9a5e8c4c8a3b:0x219f64e0442d9b7d`).
- **Implementation:** Live iframe in `contact.astro` and a mini-map in the `Footer.astro`.
- **Styling:** Applied `filter contrast-[1.1] dark:invert dark:hue-rotate-180 dark:brightness-[0.8]`.

## 📦 Deployment
- **Branch:** `main`
- **Workflow:** `.github/workflows/deploy.yml` (Requires Node.js 22)
- **URL:** [https://owais0p.github.io/uma-commerce-classes-demo/](https://owais0p.github.io/uma-commerce-classes-demo/)
