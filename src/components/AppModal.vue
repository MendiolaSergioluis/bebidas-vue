<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useModalStore } from '@/stores/modal'
import { useBebidasStore } from '@/stores/bebidas'
import { useFavoritosStore } from '@/stores/favoritos'
import { computed } from 'vue'

const modal = useModalStore()
const bebidas = useBebidasStore()
const favorito = useFavoritosStore()

const formatearIngredientes = () => {
  const ingredientesDiv = document.createElement('div')

  for (let i = 1; i <= 15; i++) {
    if (bebidas.receta[`strIngredient${i}` as keyof typeof bebidas.receta]) {
      const ingrediente = bebidas.receta[`strIngredient${i}` as keyof typeof bebidas.receta]
      const cantidad = bebidas.receta[`strMeasure${i}` as keyof typeof bebidas.receta]

      const ingredienteCantidad = document.createElement('p')
      ingredienteCantidad.classList.add('text-lg', 'text-gray-500')
      ingredienteCantidad.textContent = `${ingrediente} - ${cantidad}`

      ingredientesDiv.appendChild(ingredienteCantidad)
    }
  }
  return ingredientesDiv
}
const instrucciones = computed(() => {
  if (bebidas.receta.strInstructionsES) {
    return bebidas.receta.strInstructionsES
  } else {
    return bebidas.receta.strInstructions
  }
})
</script>

<template>
  <TransitionRoot as="template" :show="modal.modal">
    <Dialog as="div" class="relative z-10" @close="modal.handleClickModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                    {{ bebidas.receta.strDrink }}
                  </DialogTitle>
                  <img
                    :src="bebidas.receta.strDrinkThumb"
                    :alt="`Imagen de bebida: ${bebidas.receta.strDrink}`"
                    class="rounded-2xl mx-auto w-96"
                  />
                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </DialogTitle>
                  <div v-html="formatearIngredientes().outerHTML" />
                  <DialogTitle as="h3" class="text-gray-900 text-4xl font-extrabold my-5">
                    Instrucciones
                  </DialogTitle>
                  <p class="text-lg text-gray-500">{{ instrucciones }}</p>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  type="button"
                  class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                  @click="modal.handleClickModal()"
                >
                  Cerrar
                </button>
                <button
                  v-if="!favorito.existeFavorito()"
                  type="button"
                  class="w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                  @click="favorito.handleClickFavorito()"
                >
                  Agregar a Favoritos
                </button>
                <button
                  v-else
                  type="button"
                  class="w-full rounded bg-orange-600 p-3 font-bold uppercase text-white shadow hover:bg-orange-500"
                  @click="favorito.eliminarFavorito(bebidas.receta.idDrink)"
                >
                  Eliminar de Favoritos
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
