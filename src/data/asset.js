// Resolve files in public/ against Vite's base URL ('/' in dev, '/eitan/' in
// production) so static assets work when served from a GitHub Pages subpath.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
