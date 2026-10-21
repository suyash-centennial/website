# Centennial Advisory website

Static site built with [Astro](https://astro.build), hosted on Cloudflare Workers (static assets).

## Run it locally

    npm install
    npm run dev        # http://localhost:4321

## Edit content

| To change | Edit |
|---|---|
| Location, email, menu, institution list | `src/site.ts` |
| An assignment | `src/content/assignments/<name>.md` |
| A person | `src/content/people/<name>.md` |
| A headshot | `public/images/people/<name>.jpg` |
| Page text | `src/pages/<page>.astro` |
| Colours and fonts | top of `src/styles/global.css` |

**Add an assignment:** copy any file in `src/content/assignments/`, rename it (the filename becomes the
web address, e.g. `covid-19-response` → `/experience/covid-19-response/`), and edit the fields at the top.
Set `published: false` to hide it without deleting it. `team` lists people by their filename, e.g.
`team: [rakesh-nangia, anil-sood]`.

**Add a headshot:** save it as `public/images/people/<person-filename>.jpg`, for example
`public/images/people/rakesh-nangia.jpg`. It replaces the initials automatically. Portrait crop (4:5), at least
800 × 1000 pixels.

**Give an assignment its own page:** write its description in the body of the file, below the `---` lines.
Assignments with no description still appear in the lists, without a link.

Red italic text on the site marks content still to be supplied. Search the code for `class="draft"` to find it all.

## Hosting

Cloudflare builds and deploys automatically on every push.

- Live preview: https://centennial-advisory.suyash-3c6.workers.dev
- Config: `wrangler.jsonc` (static files from `dist`, styled 404 page)
- Build command: `npm run build` · Deploy command: `npx wrangler deploy`
- Node version: 22 (set by `.nvmrc`)

Pushing to `main` updates the live site. Other branches get their own preview link.

## Before launch

1. Set `site` in `astro.config.mjs` to the real domain.
2. Set `indexable: true` in `src/site.ts`.
