import { ref, type Ref, reactive, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'

import type { Categoria, Busqueda } from '@/helpers/types'

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias: Ref<Categoria[]> = ref([] as Categoria[])
  const busqueda: Busqueda = reactive({
    nombre: '',
    categoria: ''
  })

  onMounted(async function (): Promise<void> {
    categorias.value = (await APIService.obtenerCategorias()).data.drinks as Categoria[]
  })

  function obtenerRecetas() {
    console.log('Consultando API')
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas
  }
})
