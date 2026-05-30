# Uma Classes - Project Guidelines

This document outlines the architectural standards, design conventions, and workflows for the Uma Classes website.

## 🚀 Tech Stack
- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment:** GitHub Pages (via GitHub Actions)

## 🎨 Design System
### Typography
- **Headings:** `Playfair Display`, serif (Elegant, authoritative).
- **Body:** `Inter`, sans-serif (Modern, readable).

### Color Palette
- **Primary:** `#1e3a5f` (Deep Navy Blue)
- **Accent:** `#c9a84c` (Warm Gold)
- **Backgrounds:** White (`#ffffff`), Light Gray (`#f8f9fa`)
- **Dark Mode Background:** `#0f1923`
- **Dark Mode Cards:** `#1a2332`
- **Dark Mode Primary Elements:** `#0a1628`

## 🏗️ Architecture & Conventions
### Internal Linking
- Always use the `{base}` variable from `Astro` or the hardcoded `/uma-commerce-classes-demo` prefix for all internal links and assets to ensure compatibility with GitHub Pages sub-directory hosting.

### Dark Mode
- **Strategy:** Tailwind v4 `class` variant.
- **Trigger:** `.dark` class on the `html` element.
- **Persistence:** Saved in `localStorage.theme`.
- **Implementation:** Headings should smoothly transition. Maps use CSS filters (`invert`, `hue-rotate`) in dark mode.

### Topper Data
- **Dynamic Extraction:** Topper information (Name, Subject, Marks) is extracted from filenames in the `Toppers/` directory. 
- **Format:** `StudentName -Subject Marks-Total.png`.
- **Update Process:** When adding new toppers, ensure the filename follows this pattern and run the sync command to update `public/images/toppers/`.

### Google Maps
- **Embeds:** Use the verified embed code for "Uma Commerce Classes".
- **Styling:** Apply `filter contrast-[1.1] dark:invert dark:hue-rotate-180 dark:brightness-[0.8]` for visual consistency.

## 📦 Deployment
- **Branch:** `main`
- **Workflow:** `.github/workflows/deploy.yml`
- **URL:** [https://owais0p.github.io/uma-commerce-classes-demo/](https://owais0p.github.io/uma-commerce-classes-demo/)
