# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server (localhost:4321)
pnpm build      # static build to dist/
pnpm preview    # preview built output
```

No linter or test suite configured.

## Architecture

Single-page Astro 4 static site — a "Linktree"-style developer hub at `eduardferre.dev`.

**Data flow**: `src/data/projects.js` → `src/pages/index.astro` → `src/components/ProjectCard.astro`

- **`src/data/projects.js`** — the only file to edit when adding/modifying projects. Each entry has: `id, title, description, url, tag, color, icon, status ('live'|'wip'), tech[], featured`.
- **`src/layouts/Layout.astro`** — wraps every page. Contains global CSS design tokens (`:root` / `html.dark`), font imports (Syne + Space Mono), anti-flash theme script, theme toggle, and EN/ES language toggle. All JS for theme and i18n lives here.
- **`src/pages/index.astro`** — hero section + project bento grid. Imports projects array and maps to `ProjectCard`.
- **`src/components/ProjectCard.astro`** — card component. `featured: true` → `lg:col-span-2`. Card color comes from `--card-color` CSS var set inline; uses `color-mix()` for glow effects.

## Styling conventions

- **Dark mode**: `darkMode: 'class'` — toggle adds/removes `.dark` on `<html>`.
- **CSS variables** drive all theming (defined in `Layout.astro` `<style is:global>`). Never hardcode colors that should change between modes — use `var(--text-primary)`, `var(--bg-card)`, `var(--accent)`, etc.
- **No global CSS file** — global styles live inside `Layout.astro`'s `<style is:global>` block; component styles live in scoped `<style>` within each `.astro` file.
- **Tailwind** for layout/spacing/responsive utilities; CSS vars + scoped styles for design tokens and card-specific theming.

## i18n

Translations for EN/ES are hardcoded in `Layout.astro` in the `TRANSLATIONS` object. Text nodes that need translation carry a `data-i18n="key"` attribute. Card descriptions use `data-i18n="desc-{project.id}"` — adding a new project requires adding its description key to both `en` and `es` in `TRANSLATIONS`.
