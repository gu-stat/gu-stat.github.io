# ogustavo.com — Astro site

Bilingual (EN / PT-BR) personal site for Gustavo Varela Alvarenga. Static, no cookies, no analytics, no trackers. Built with [Astro](https://astro.build).

## Run locally

Requires Node.js 18.20+ (20+ recommended).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

## Deploy to GitHub Pages

1. Push this project to your `gu-stat/gu-stat.github.io` repo on the `main` branch.
   (Your old build was published from a local preview, which is why URLs pointed to `localhost`. This project sets the real domain in `astro.config.mjs` → `site`.)
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.
4. The custom domain is set via `public/CNAME` (`www.ogustavo.com`). Make sure **Enforce HTTPS** is enabled under Settings → Pages.

> Note: `username.github.io` repos serve from the repo root, so no `base` path is needed.

## Edit content

Almost everything lives in two files:

- `src/data/site.ts` — name, domain, social links (set your **Google Scholar** URL here), CV file paths.
- `src/data/content.ts` — all page text in `en` and `pt`: bio, experience bullets, education, awards, privacy text, nav labels.

Other things you may want to touch:

- **Photo:** drop `public/img/portrait.jpg` (~800×1000). Until then a clean placeholder frame shows.
- **CVs:** replace the files in `public/uploads/` (English `Resume-...pdf`, Portuguese `Curriculo-...pdf`). The Download CV button serves the right one per language.
- **Theme colors:** `src/styles/global.css` — `:root` is the light theme (Cool Gray + Red), `html.dark` is dark (Slate + Gold).
- **R Code / Shiny / Papers** pages are placeholders (`src/components/Placeholder.astro`) ready for you to port content from the old site.

## What this fixes from the old site

- Correct canonical/Open Graph URLs (was `localhost:4321`).
- Emits `Person` + `ProfilePage` structured data instead of the `Event` schema that triggered the Search Console warnings (missing `eventStatus`/`offers`/`performer`/`organizer` and the invalid image URL).
- No cookies, analytics, or trackers; only a local theme preference. A `/privacy` page and footer line state this.

## Structure

```
src/
  data/        site.ts, content.ts   (config + all copy)
  styles/      global.css            (theme tokens + layout)
  components/  BaseHead, Header, Footer, Home, Experience, Education, Privacy, Placeholder
  layouts/     Base.astro
  pages/       index, experience, education, privacy, code, shinyapps, publication, 404
  pages/pt/    same pages in Portuguese (served at /pt/...)
public/        CNAME, robots.txt, favicon.svg, uploads/ (CVs), img/ (portrait)
```
