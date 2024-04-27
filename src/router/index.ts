import { createRouter, createWebHistory } from 'vue-router'
// Componentes de vista cargados de forma regular
import Inicio from '@/views/InicioView.vue'

// Componentes de vista cargados solo cuando se requieren.
const Favoritos = () => import('@/views/FavoritosView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: Favoritos
    }
  ]
})

export default router
