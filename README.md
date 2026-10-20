# Centennial Advisory website

Static site built with [Astro](https://astro.build), hosted on Cloudflare Pages.

## Run it locally

    npm install
    npm run dev        # http://localhost:4321

## Edit content

| To change | Edit |
|---|---|
| Address, phone, email, menu, institution list | `src/site.ts` |
| An assignment | `src/content/assignments/<name>.md` |
| A person | `src/content/people/<name>.md` |
| Page text | `src/pages/<page>.astro` |
| Colours and fonts | top of `src/styles/global.css` |

**Add an assignment:** copy any file in `src/content/assignments/`, rename it (the filename becomes the
web address, e.g. `covid-19-response` → `/experience/covid-19-response/`), and edit the fields at the top.
Set `published: false` to hide it without deleting it. `team` lists people by their filename, e.g.
`team: [rakesh-nangia, anil-sood]`.

Red italic text on the site marks content still to be supplied. Search the code for `class="draft"` to find it all.

## Cloudflare Pages settings

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 (set by `.nvmrc`)

Every push to a branch gets a preview link. Merging to `main` publishes the live site.
