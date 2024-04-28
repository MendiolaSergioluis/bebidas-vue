import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type { Categoria } from '@/helpers/types'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([] as Categoria[])

  onMounted(async () => {
    categorias.value = (await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'))
      .data.drinks as Categoria[]
  })
  return {
    categorias
  }
})
