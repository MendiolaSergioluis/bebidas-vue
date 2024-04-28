<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useBebidasStore } from '@/stores/bebidas'

const route = useRoute()
const bebidas = useBebidasStore()
console.log(bebidas.categorias)

const paginaInicio = computed(() => route.name === 'inicio')
const paginaFavoritos = computed(() => route.name === 'favoritos')
</script>

<template>
  <header class="bg-slate-800" :class="{ header: paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img class="w-32" src="/img/logo.svg" alt="Logotipo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'inicio' }"
            class="uppercase font-bold"
            :class="paginaInicio ? 'text-orange-500' : 'text-white'"
          >
            Inicio
          </RouterLink>
          <RouterLink
            :to="{ name: 'favoritos' }"
            class="uppercase font-bold"
            :class="paginaFavoritos ? 'text-orange-500' : 'text-white'"
          >
            Favoritos
          </RouterLink>
        </nav>
      </div>
      <form
        v-if="paginaInicio"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
      >
        <!--          Ingrediente Input -->
        <div class="space-y-4">
          <label for="ingrediente" class="block text-white uppercase font-extrabold text-lg"
            >Nombre o Ingredientes</label
          >
          <input
            type="text"
            id="ingrediente"
            placeholder="Nombre o Ingrediente: Ej. Vodka, Tequila, etc..."
            class="p-3 w-full rounded-lg focus:outline-none"
          />
        </div>
        <!--          Categoría -->
        <div class="space-y-4">
          <label for="categoria" class="block text-white uppercase font-extrabold text-lg"
            >Categoría</label
          >
          <select name="categoria" id="categoria" class="p-3 w-full rounded-lg focus:outline-none">
            <option value="">-- Seleccione --</option>
            <option
              v-for="categoria in bebidas.categorias"
              :key="categoria['strCategory']"
              :value="categoria['strCategory']"
            >
              {{ categoria['strCategory'] }}
            </option>
          </select>
        </div>
        <!--          Botón -->
        <input
          type="submit"
          value="Buscar Recetas"
          class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
        />
      </form>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
