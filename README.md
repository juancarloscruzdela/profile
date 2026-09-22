# Juan Carlos Dela Cruz — Portfolio

A responsive, single-page portfolio for Juan Carlos Dela Cruz, built with React, Vite, and Tailwind CSS.

## Stack

- React 19
- Vite
- Tailwind CSS v4
- Lucide React icons

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production-ready files are generated in `dist/`.

## GitHub Pages

Production builds are configured for deployment at `/profile/`; local development remains at `/`. Pushing to the `master` branch runs the GitHub Actions workflow in `.github/workflows/deploy.yml`.

In the repository’s **Settings → Pages**, set **Source** to **GitHub Actions** once. The published site will be available at `https://juancarloscruzdela.github.io/profile/` when the repository belongs to the `juancarloscruzdela` account.

## Customize content

Portfolio content, links, project data, and skills live in `src/App.jsx`. Images used by the site are in `public/assets/`.

## Contact

juan.carlos.cruzdela@gmail.com
