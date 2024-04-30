import { ref, type Ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from '@/stores/bebidas'
import { useModalStore } from '@/stores/modal'
import { useNotificacionesStore } from '@/stores/notificaciones'
import type { RecetaDetails } from '@/helpers/types'

export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidas = useBebidasStore()
  const modal = useModalStore()
  const notificaciones = useNotificacionesStore()

  const favoritos: Ref<RecetaDetails[]> = ref([] as RecetaDetails[])

  onMounted(() => {
    // Trae la información de los favoritos del local storage
    const favoritosLocalStorage = localStorage.getItem('favoritos')
    if (favoritosLocalStorage) {
      favoritos.value = JSON.parse(favoritosLocalStorage)
    }
  })

  watch(
    favoritos,
    () => {
      sincronizarLocalStorage()
    },
    { deep: true }
  )

  function sincronizarLocalStorage() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  function handleClickFavorito() {
    // verifica que la receta no se encuentre en favoritos
    if (existeFavorito()) {
      return
    } else {
      // Guarda la receta a los favoritos
      agregarFavorito()
    }
    modal.handleClickModal()
  }

  function agregarFavorito() {
    favoritos.value.push(bebidas.receta)
    notificaciones.texto = 'Se agregó a favoritos'
    notificaciones.mostrar = true
  }

  function eliminarFavorito(id: string) {
    favoritos.value = favoritos.value.filter((f) => f.idDrink !== id)
    notificaciones.texto = 'Eliminado de favoritos'
    notificaciones.mostrar = true

    modal.handleClickModal()
  }
  function existeFavorito() {
    return favoritos.value.find((f) => f.idDrink === bebidas.receta.idDrink)
  }
  return {
    favoritos,
    handleClickFavorito,
    existeFavorito,
    eliminarFavorito
  }
})
