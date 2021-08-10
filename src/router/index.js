import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PlaylistDetails/:type/:id',
    name: 'PlaylistDetails',
    component: () => import('../pages/PlaylistDetails.vue')
    // Importar dessa forma faz com que o webPack carregue as rotas atravéz do lazy-loaded, deixando a aplicação mais performática.
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
