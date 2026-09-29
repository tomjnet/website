# Tom J — personal website

Astro + Tailwind static site, deployed to GitHub Pages.

| Page | Content lives in |
|---|---|
| Home | `src/components/`, `src/data/site.ts` |
| Posts | the `website-info` repo (`contentRepo` in `src/data/site.ts`), loaded in the browser, so no rebuild is needed |
| Research | the `website-info` repo, same as posts |
| Hobbies | `src/content/hobbies/*.md` |

## Develop

```bash
npm install
npm run dev
```

In dev, Posts and Research read from `website-info/` instead of GitHub.

## Content repo

Copy `website-info/` into a new public GitHub repo (default `tomjnet/website-info`). Its README explains how to add posts and research.

## Deploy

Push to `main`. `.github/workflows/ci-cd.yml` type-checks, builds and publishes to GitHub Pages. Pull requests run the same checks without deploying.
In the repo settings, go to Pages and set Source to **GitHub Actions**.
A repo named `<user>.github.io` is served at the root. Any other repo is served at `/<repo>/`, and the workflow sets that path automatically.
