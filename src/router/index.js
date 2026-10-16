import { createRouter, createWebHashHistory } from 'vue-router'
import PortadaView from '../views/PortadaView.vue'
import EjercicioIf from '../views/EjercicioIf.vue'
import EjercicioShow from '../views/EjercicioShow.vue'
import EjercicioFor from '../views/EjercicioFor.vue'
import EjercicioKey from '../views/EjercicioKey.vue'

const routes = [
  { path: '/', name: 'Portada', component: PortadaView },
  { path: '/if', name: 'v-if', component: EjercicioIf },
  { path: '/show', name: 'v-show', component: EjercicioShow },
  { path: '/for', name: 'v-for', component: EjercicioFor },
  { path: '/key', name: 'v-bind:key', component: EjercicioKey }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
