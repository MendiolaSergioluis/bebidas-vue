import { type Ref, ref } from 'vue'
import { defineStore } from 'pinia'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias: Ref<string[]> = ref([])

  return {
    categorias
  }
})
