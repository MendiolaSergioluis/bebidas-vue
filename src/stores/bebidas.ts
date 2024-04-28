import { ref, type Ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import type { Categoria, Busqueda } from '@/helpers/types'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias: Ref<Categoria[]> = ref([] as Categoria[])
  const busqueda: Busqueda = reactive({
    nombre: '',
    categoria: ''
  })

  onMounted(async () => {
    categorias.value = (await axios('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'))
      .data.drinks as Categoria[]
  })
  return {
    categorias,
    busqueda
  }
})
