import api from '@/lib/axios'
import { type Busqueda } from '@/helpers/types'

export default {
  obtenerCategorias() {
    return api.get('/list.php?c=list')
  },
  buscarRecetas(busqueda: Busqueda) {
    const { categoria, nombre } = busqueda
    console.log(categoria, nombre)
    return api(`/filter.php?c=${categoria}&i=${nombre}`)
  }
}
