<template>
  <div style="font-family: monospace; padding: 2rem">
    <h1>ISR Cache Test</h1>
    <p>
      This page has <code>isr: 60</code> set. The timestamp below is baked into
      the HTML at render time and should stay frozen for 60s with ISR working.
    </p>
    <p><strong>Rendered at:</strong> {{ new Date().toISOString() }}</p>
    <NuxtLink to="/about">Go to /about</NuxtLink>
  </div>
</template>
