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
  const recetas = ref([] as unknown)

  onMounted(async function (): Promise<void> {
    categorias.value = (await APIService.obtenerCategorias()).data.drinks as Categoria[]
  })

  async function obtenerRecetas() {
    const {
      data: { drinks }
    } = await APIService.buscarRecetas(busqueda)
    recetas.value = drinks
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas
  }
})
