# 🧑🏻‍💻 Eduard Ferré — Developer Hub

<div align="center">

[![Developer Hub Preview](https://github.com/user-attachments/assets/d40d3786-290b-442e-8240-363a055000ca)](https://eduardferre.dev)

[![Live Site](https://img.shields.io/badge/Live_Site-eduardferre.dev-C8FF40?style=flat&logo=astro&logoColor=black)](https://eduardferre.dev)
![Astro](https://img.shields.io/badge/Astro_5-FF5D01?style=flat&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)

</div>

---

## 📌 Overview

Personal developer hub built with **Astro 5**, **Tailwind CSS**, and **TypeScript**. Acts as a central "Linktree"-style landing page routing to projects and subdomains — with a bento-grid layout, animated avatar, and full support for **English / Spanish** and **light / dark** themes.

---

## ✨ Features

- 🌐 **EN / ES language toggle** — client-side i18n with no page reload
- 🎨 **Light / Dark mode** — anti-flash persistence via `localStorage`
- ⚡ **Static site generation** — zero JS overhead, instant loads
- 🃏 **Bento-grid project cards** — per-card accent colors with `color-mix()` glows
- 🖼️ **Animated avatar frame** — CSS `@property` conic-gradient sweep
- 🗺️ **SEO-ready** — sitemap, robots.txt, Open Graph, Twitter Card, JSON-LD
- 🔒 **Security headers** — CSP, HSTS, X-Frame-Options, Referrer-Policy

---

## 🛠️ Tech Stack

| Layer    | Technology                                              |
| -------- | ------------------------------------------------------- |
| Framework | [Astro 5](https://astro.build/)                        |
| Styling  | [Tailwind CSS v3](https://tailwindcss.com/) + CSS vars  |
| Language | TypeScript                                              |
| Fonts    | Syne + Space Mono via Google Fonts                      |
| SEO      | `@astrojs/sitemap` + manual JSON-LD                     |
| Headers  | `public/_headers` (Netlify / Cloudflare Pages)          |

---

## 📁 Project Structure

```
eduardferre-landing/
├── public/
│   ├── _headers          # Security headers (Netlify / Cloudflare Pages)
│   ├── robots.txt
│   ├── favicon.svg
│   └── profile.png
├── src/
│   ├── components/
│   │   └── ProjectCard.astro
│   ├── data/
│   │   └── projects.js   # ← only file to edit when adding projects
│   ├── layouts/
│   │   └── Layout.astro  # Global styles, theme & i18n logic
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── tailwind.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone https://github.com/eduardferre/eduardferre-landing.git
cd eduardferre-landing
pnpm install
```

### Development

```bash
pnpm dev
# → http://localhost:4321
```

### Build & Preview

```bash
pnpm build      # static output → dist/
pnpm preview    # preview production build locally
```

---

## 📜 Available Scripts

| Script         | Description                          |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Start local dev server               |
| `pnpm build`   | Build for production                 |
| `pnpm preview` | Preview the production build locally |

---

## ➕ Adding a Project

Edit `src/data/projects.js` and append an entry:

```js
{
  id:          'my-project',
  title:       'My Project',
  description: 'Short blurb.',
  url:         'https://myproject.eduardferre.dev',
  tag:         'Category',
  color:       '#FF6B6B',       // card accent color
  icon:        '◆',             // decorative glyph
  status:      'live',          // 'live' | 'wip'
  tech:        ['React', 'Node.js'],
  featured:    false,           // true → spans 2 columns on large screens
}
```

Then add both translation keys in `TRANSLATIONS` inside `src/layouts/Layout.astro`:

```js
en: { 'desc-my-project': 'Short blurb.' },
es: { 'desc-my-project': 'Descripción corta.' },
```

---

## 📄 License

Personal use. All rights reserved.

---

<div align="center">

Made with ❤️ by [Eduard Ferré](https://eduardferre.dev)

</div>
