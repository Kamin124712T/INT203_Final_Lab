import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ReadMe',
    component: () => import('../views/ReadMe.vue')
  },
  {
    path: '/color',
    name: 'ColorList',
    component: () => import('../views/ColorList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
