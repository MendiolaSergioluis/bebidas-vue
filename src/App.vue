<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import Modal from '@/components/AppModal.vue'
</script>

<template>
  <AppHeader />
  <main class="container mx-auto mt-10 px-10">
    <RouterView />
  </main>
  <Modal />
</template>

<style scoped></style>
