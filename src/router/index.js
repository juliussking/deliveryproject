import { createRouter, createWebHistory } from 'vue-router'
import Show from '../views/Show.vue'
import { useLoading } from '../composables/useLoading.js'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: 'show',
          component: Show,
          name: 'todos',
        },
      ],
      
      component: () => import('../views/Home.vue'),
    },
  ],
})

router.afterEach(() => {
const { isLoading } = useLoading()

  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

export default router
