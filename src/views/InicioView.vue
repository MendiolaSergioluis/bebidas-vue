<script setup lang="ts">
import Receta from '@/components/AppReceta.vue'
import { useBebidasStore } from '@/stores/bebidas'

const bebidas = useBebidasStore()
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-12">
    <Receta v-for="receta in bebidas.recetas" :receta="receta" :key="receta.idDrink" />
  </div>
</template>

<style scoped></style>
