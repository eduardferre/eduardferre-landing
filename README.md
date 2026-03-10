# eduardferre-landing

> Personal developer hub at [eduardferre.dev](https://eduardferre.dev) — a "Linktree"-style landing page routing to projects and subdomains.

[![Live](https://img.shields.io/badge/Live-eduardferre.dev-C8FF40?style=for-the-badge&logo=vercel&logoColor=black)](https://eduardferre.dev)

![Project Screenshot](./public/og-image.png)

---

## Tech Stack

[![Astro](https://img.shields.io/badge/Astro-5-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![pnpm](https://img.shields.io/badge/pnpm-10-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

## Features

- Dark / light mode with anti-flash theme persistence
- EN / ES language toggle (no page reload)
- Bento-grid project cards with per-card accent colors
- Animated avatar frame (conic-gradient CSS `@property`)
- SEO-ready: sitemap, robots.txt, Open Graph, Twitter Card, JSON-LD
- Security headers: CSP, HSTS, X-Frame-Options, Referrer-Policy

## Project Structure

```
/
├── public/
│   ├── _headers        # Security headers (Netlify / Cloudflare Pages)
│   ├── robots.txt
│   ├── favicon.svg
│   └── profile.png
├── src/
│   ├── components/
│   │   └── ProjectCard.astro
│   ├── data/
│   │   └── projects.js   ← only file to edit when adding projects
│   ├── layouts/
│   │   └── Layout.astro  ← global styles, theme & i18n logic
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── tailwind.config.mjs
```

## Getting Started

**Prerequisites:** Node.js v18+ and pnpm

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output → dist/
pnpm preview    # preview built output
```

## Adding a Project

Edit `src/data/projects.js` and append an entry:

```js
{
  id:          'my-project',          // unique slug
  title:       'My Project',
  description: 'Short blurb.',
  url:         'https://myproject.eduardferre.dev',
  tag:         'Category',
  color:       '#FF6B6B',             // card accent color
  icon:        '◆',                   // decorative glyph
  status:      'live',                // 'live' | 'wip'
  tech:        ['React', 'Node.js'],
  featured:    false,                 // true → spans 2 columns on large screens
}
```

Then add the description translation keys to `TRANSLATIONS` in `src/layouts/Layout.astro`:

```js
en: { 'desc-my-project': 'Short blurb.' },
es: { 'desc-my-project': 'Descripción corta.' },
```

## License

Personal use. All rights reserved.
