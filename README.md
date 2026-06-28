# Eitan Hiller — Acting Portfolio

A single-page scroll portfolio for actor / singer / composer / teacher **Eitan Hiller**.
Built with React + Vite + Tailwind CSS + Framer Motion, with a warm "Playbill"
theatrical aesthetic (Fraunces display + Archivo body, marquee/spotlight motifs).

## Sections

Hero → About → Reels (video gallery, tabbed by category) → Stage (production photos)
→ Press → Contact. All content lives in [`src/data/content.js`](src/data/content.js).

## Develop

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Assets

Portraits, production photos, and the Resume PDF live in `public/assets/`
(downloaded from the original site). Reel videos are embedded from YouTube via
privacy-friendly `youtube-nocookie.com` iframes opened in a modal player.

## Notes

- Animations respect `prefers-reduced-motion`.
- The build output (`dist/`) is a static bundle — deployable to any static host
  (e.g. a Render Static Site).
