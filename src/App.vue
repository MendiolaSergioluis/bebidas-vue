<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>

<style scoped></style>
