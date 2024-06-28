import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Primeira from '@/views/Primeira.vue'
import Segunda from '@/views/Segunda.vue'
import Terceira from '@/views/Terceira.vue'
import Quarta from '@/views/Quarta.vue'
import Quinta from '@/views/Quinta.vue'
import Sexta from '@/views/Sexta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1',
      name: 'primeira',
      component: Primeira
    },
    {
      path: '/2',
      name: 'segunda',
      component: Segunda
    },
    {
      path: '/3',
      name: 'terceira',
      component: Terceira
    },
    {
      path: '/4',
      name: 'quarta',
      component: Quarta
    },
    {
      path: '/5',
      name: 'quinta',
      component: Quinta
    },
    {
      path: '/6',
      name: 'sexta',
      component: Sexta
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
