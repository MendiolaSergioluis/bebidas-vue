<script setup lang="ts">
import { useFavoritosStore } from '@/stores/favoritos'
import Receta from '@/components/AppReceta.vue'
import { computed } from 'vue'

const favoritos = useFavoritosStore()

const existenFavoritos = computed((): boolean => {
  return !!favoritos.favoritos.length
})
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  <p v-if="!existenFavoritos" class="my-10 text-center text-2xl">No hay favoritos aún...</p>
  <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-12">
    <Receta v-for="receta in favoritos.favoritos" :receta="receta" :key="receta.idDrink" />
  </div>
</template>

<style scoped></style>
