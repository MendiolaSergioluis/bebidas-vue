<script setup lang="ts">
import type { Receta } from '@/helpers/types'
import { useBebidasStore } from '@/stores/bebidas'

const bebidas = useBebidasStore()

defineProps<{
  receta: Receta
}>()
</script>

<template>
  <div class="border shadow-lg rounded-3xl overflow-hidden">
    <div class="overflow-hidden">
      <img
        :src="receta.strDrinkThumb"
        :alt="`Imagen de bebida: ${receta.strDrink}`"
        class="hover:scale-110 hover:rotate-2 transition-transform"
      />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
      <button
        type="button"
        @click="bebidas.seleccionarBebida(receta.idDrink)"
        class="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg rounded-2xl"
      >
        Ver Receta
      </button>
    </div>
  </div>
</template>
