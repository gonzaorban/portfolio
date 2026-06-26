# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint
```

There is no test suite.

### Docker (desarrollo sin instalar Node)

```bash
docker compose up         # Levanta el dev server en http://localhost:3000 (agrega -d para background)
docker compose up --build # Reconstruye la imagen (necesario tras cambiar package.json o Dockerfile.dev)
docker compose down       # Detiene y elimina el contenedor
docker compose logs -f web  # Sigue los logs del dev server
```

El código se monta como volumen, así que **los cambios recargan en caliente** sin reconstruir. Notas no obvias del setup ([Dockerfile.dev](Dockerfile.dev) + [docker-compose.yml](docker-compose.yml)):

- El contenedor corre `next dev --webpack` (no Turbopack) a propósito: el watcher de Turbopack no detecta cambios a través del volumen montado en Windows. Webpack respeta `WATCHPACK_POLLING=true` y sí recarga.
- `node_modules` y `.next` viven en volúmenes anónimos para no mezclar binarios del host (Windows) con los del contenedor (Linux). Por eso, tras cambiar dependencias hay que `docker compose up --build`.

## Architecture

Single-page personal portfolio built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4**. The entire site is one route: [app/page.tsx](app/page.tsx) renders a fixed sequence of full-width section components (`Hero`, `ProjectBento`, `ResearchSpotlight`, `CybersecurityHub`, `TechStack`, `Contact`, `Footer`). To reorder or add a section, edit this file — there is no routing or CMS.

- **Section components** live flat in [components/](components/) and are mostly `"use client"` because they use `framer-motion` for scroll/entrance animations. Content (projects, links, social handles, copy) is hardcoded as in-file arrays/objects, so editing portfolio content means editing the relevant component directly.
- **UI primitives** in [components/ui/](components/ui/) are shadcn/ui (New York style, Radix-based). Most are unused by the actual page — treat them as a library to draw from, not as load-bearing code.
- **Layout & theming** are set in [app/layout.tsx](app/layout.tsx): the site is hard-forced into dark mode (`className="...dark"` on `<html>`), loads Inter (`--font-inter`) and JetBrains Mono (`--font-mono`) via `next/font`, and renders a fixed full-screen radial-gradient glow div behind all content. The page background is intentionally transparent so this glow shows through (see `bg-transparent` on `main`).

### Styling
- Tailwind v4 — **no `tailwind.config.js`**. All design tokens (colors as `oklch`, fonts, radius) are CSS variables defined in [app/globals.css](app/globals.css) via `@theme inline`. Change theme colors there, not in a config file.
- **`app/globals.css` is the live stylesheet** (imported by `app/layout.tsx`). `styles/globals.css` is a stale, unimported duplicate — do not edit it expecting changes to take effect.
- Use the `cn()` helper from [lib/utils.ts](lib/utils.ts) (clsx + tailwind-merge) for conditional classes.
- Icons come from `lucide-react`; custom SVG icons (e.g. the X/Twitter logo) are defined inline within components.

### Conventions
- Path alias `@/*` maps to the repo root (e.g. `@/components/hero`, `@/lib/utils`).
- TypeScript build errors are **ignored at build time** (`next.config.mjs` → `typescript.ignoreBuildErrors: true`) and `images.unoptimized: true`. A successful `npm run build` does not mean the code is type-clean — run type checks separately if correctness matters.
- Remote images are only allowed from `i.ibb.co` (configured in `next.config.mjs`).
- UI copy is in **Spanish**; keep new user-facing text in Spanish.

## v0 / Deployment

This repo is linked to a [v0](https://v0.app) project and auto-deploys on every merge to `main`. v0 can push commits directly, so expect generated/AI-authored code and occasional regenerated files.
