import { ref, type Ref, reactive, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'
import { useModalStore } from '@/stores/modal'
import type { Categoria, Busqueda, Receta, RecetaDetails } from '@/helpers/types'

export const useBebidasStore = defineStore('bebidas', () => {
  const modal = useModalStore()
  const categorias: Ref<Categoria[]> = ref([] as Categoria[])
  const busqueda: Busqueda = reactive({
    nombre: '',
    categoria: ''
  })
  const recetas: Ref<Receta[]> = ref([] as Receta[])
  const receta: Ref<RecetaDetails> = ref({} as RecetaDetails)

  onMounted(async function (): Promise<void> {
    categorias.value = (await APIService.obtenerCategorias()).data.drinks as Categoria[]
  })

  async function obtenerRecetas() {
    const {
      data: { drinks }
    } = await APIService.buscarRecetas(busqueda)
    recetas.value = drinks
  }

  async function seleccionarBebida(id: string) {
    const {
      data: { drinks }
    } = await APIService.buscarReceta(id)
    receta.value = drinks[0]
    modal.handleClickModal()
  }

  const noRecetas = computed(() => recetas.value.length === 0)

  return {
    categorias,
    busqueda,
    obtenerRecetas,
    recetas,
    seleccionarBebida,
    receta,
    noRecetas
  }
})
