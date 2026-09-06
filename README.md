# Amina Ahmad — Portfolio

A React + TypeScript + Vite portfolio site. No database, no required backend — the
contact form opens the visitor's email client directly (`mailto:`), so this site is
100% static and can be deployed to any static host.

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to http://localhost:3000).

## Build

```bash
npm run build
```

This builds the static site into `dist/public/` and also bundles a small optional
Node/Express server into `dist/index.js` (see "Deployment options" below).

## Deployment options

### Option A — Static hosting (recommended: Vercel or Netlify)

This is the simplest, free, and fastest option — no server to manage.

**Vercel**
1. Push this project to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel will detect the included `vercel.json` automatically (build command
   `npx vite build`, output directory `dist/public`, with SPA routing configured).
4. Deploy. You'll get a free `*.vercel.app` URL, with the option to attach a
   custom domain later.

**Netlify**
1. Push this project to a GitHub repo.
2. Go to netlify.com → Add new site → import the repo.
3. Netlify will detect the included `netlify.toml` automatically.
4. Deploy. You'll get a free `*.netlify.app` URL, with the option to attach a
   custom domain later.

**Cloudflare Pages** works the same way: build command `npx vite build`,
output directory `dist/public`. You'll need to add an SPA fallback rule
(`/* /index.html 200`) in the Pages dashboard since there's no config file
convention for it there.

### Option B — Node server (consistent with your other apps, e.g. PythonAnywhere-style hosting)

If you'd rather run this as a persistent Node process (e.g. on Render, Railway,
Fly.io, or a VPS):

```bash
npm install
npm run build
npm start
```

`npm start` runs `dist/index.js`, a minimal Express server that serves the built
site and handles client-side routing. It listens on `process.env.PORT` (defaults
to 3000) — most hosts set `PORT` automatically.

## Notes

- No environment variables are required for a working deploy.
- All project screenshots and the profile photo are bundled directly into the
  build (not loaded from any external service), so the site works identically
  wherever it's hosted.
