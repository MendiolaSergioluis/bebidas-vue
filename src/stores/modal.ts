import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modal: Ref<boolean> = ref(false)

  function handleClickModal(): void {
    modal.value = !modal.value
  }

  return {
    modal,
    handleClickModal
  }
})
