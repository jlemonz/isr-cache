// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-20",
  routeRules: {
    // ISR on the index route — revalidate every 60s in background
    // BUG: nuxt-security sets Cache-Control: no-store on all routes,
    // which prevents Nitro from caching this response at all.
    // Navigate away and back (client-side) → /_payload.json is fetched fresh
    // but the ISR cache never actually stored it, so data is stale/null.
    "/": { isr: 60 },
  },
  modules: ["nuxt-security"],
  security: {
    headers: {
      contentSecurityPolicy: {
        "script-src": [
          "'self'",
          "https:",
          "'strict-dynamic'",
          // This nonce makes every response unique → caching impossible
          "'nonce-{{nonce}}'",
          "'wasm-unsafe-eval'",
        ],
        "style-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "data:", "https:"],
        "connect-src": ["'self'"],
      },
      crossOriginEmbedderPolicy: "unsafe-none",
    },
  },
});
