import { defineStore } from 'pinia'
import { ref, type Ref, watch } from 'vue'

export const useNotificacionesStore = defineStore('notificacion', () => {
  const texto: Ref<string> = ref('')
  const error: Ref<boolean> = ref(false)
  const mostrar: Ref<boolean> = ref(false)

  function $reset() {
    texto.value = ''
    error.value = false
    mostrar.value = false
  }

  watch(mostrar, () => {
    if (mostrar.value) {
      setTimeout(() => {
        $reset()
      }, 3000)
    }
  })

  return {
    texto,
    error,
    mostrar
  }
})
