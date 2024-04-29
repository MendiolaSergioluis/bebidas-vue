import api from '@/lib/axios'
import { type Busqueda } from '@/helpers/types'

export default {
  obtenerCategorias() {
    return api.get('/list.php?c=list')
  },
  buscarRecetas(busqueda: Busqueda) {
    const { categoria, nombre } = busqueda
    return api.get(`/filter.php?c=${categoria}&&i=${nombre}`)
  },
  buscarReceta(id: string) {
    return api.get(`/lookup.php?i=${id}`)
  }
}
