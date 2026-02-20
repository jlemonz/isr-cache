<template>
  <div>
    <h1>ISR Cache Test</h1>
    <p>Rendered at: {{ renderedAt }}</p>
    <pre>{{ data || "Loading..." }}</pre>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("time", () =>
  $fetch("/api/time").catch(() => null),
);
const renderedAt = new Date().toISOString();
</script>
