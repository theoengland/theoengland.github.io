# theo-england-site

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321, reloads as you edit
npm run build    # production build into dist/
```

## How it's put together

| Path | What it is |
|---|---|
| `src/pages/` | Each file is a URL. `index.astro` is `/`. |
| `src/layouts/Base.astro` | Shared `<html>`/`<head>`/footer wrapped around every page. |
| `src/components/` | Reusable pieces with their own scoped CSS. |
| `src/data/experience.ts` | Work history as plain data — edit here, not in HTML. |
| `src/styles/global.css` | Site-wide colours, type and spacing. |
| `public/` | Copied as-is (favicon, images, CV PDF). |
| `.github/workflows/deploy.yml` | Builds and publishes on every push to `main`. |

The `---` fence at the top of an `.astro` file is JavaScript/TypeScript that runs at
build time; everything below it is HTML-like markup with `{expressions}`.

## Going live

1. Push to a GitHub repo.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Set `site` (and `base` if needed) in `astro.config.mjs`.

## Natural next steps

- Blog / case studies: add a content collection (`src/content/`) with Markdown files.
- Custom domain: add `public/CNAME` and point DNS at GitHub Pages.
