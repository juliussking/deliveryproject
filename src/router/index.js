import { createRouter, createWebHistory } from 'vue-router'

import Promocoes from '../views/Promocoes.vue'
import Todos from '../views/Todos.vue'
import Salgadas from '../views/Salgadas.vue'
import Doces from '../views/Doces.vue'
import Combos from '../views/Combos.vue'
import Bebidas from '../views/Bebidas.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: 'todos',
          component: Todos,
          name: 'todos'
        },
        {
          path: 'promocoes',
          component: Promocoes,
          name: 'promo'
        },
        {
          path: 'salgadas',
          component: Salgadas,
          name: 'salgadas'
        },
        {
          path: 'doces',
          component: Doces,
          name: 'doces'
        },
        {
          path: 'combos',
          component: Combos,
          name: 'combos'
        },
        {
          path: 'bebidas',
          component: Bebidas,
          name: 'bebidas'
        },
      ],
      
      component: () => import('../views/Home.vue'),
    },
  ],
})

export default router
