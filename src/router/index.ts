import HomePage from '@/views/Home.page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children:[]
    },
    {
      path: '/about',
      name: 'about',
     component: null,
     children:[]
    },
  ],
})

export default router
