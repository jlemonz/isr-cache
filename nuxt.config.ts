// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-20",
  routeRules: {
    "/**": { isr: 60 },
  },
  modules: ["nuxt-security"],
  security: {
    headers: {
      contentSecurityPolicy: {
        "script-src": [
          "'self'",
          "https:",
          "'strict-dynamic'",
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
