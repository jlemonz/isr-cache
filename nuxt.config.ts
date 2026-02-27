// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-02-20",
  routeRules: {
    "/": { isr: 60 },
  },
  modules: [
    "@nuxtjs/seo",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxtjs/supabase",
    "nuxt-security",
    "@nuxt/scripts",
  ],
  nitro: {
    externals: {
      inline: ["unhead", "@unhead/vue"],
    },
  },
  supabase: {
    redirect: false,
  },
  ui: {
    colorMode: false,
  },
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
        "connect-src": ["'self'", "https://*.supabase.co"],
      },
      crossOriginEmbedderPolicy: "unsafe-none",
    },
  },
});
