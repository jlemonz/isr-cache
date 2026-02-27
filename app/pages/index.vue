<template>
  <div style="font-family: monospace; padding: 2rem">
    <h1>ISR Cache Test</h1>
    <p>This page has <code>isr: 60</code> set.</p>
    <p><strong>Rendered at:</strong> {{ serverTime }}</p>
    <p><strong>Data:</strong> {{ data }}</p>
    <NuxtLink to="/about">Go to /about</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("time", () =>
  Promise.resolve({ time: new Date().toISOString() }),
);
const serverTime = new Date().toISOString();
</script>
