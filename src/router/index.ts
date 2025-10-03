import { createRouter, createWebHistory } from 'vue-router'
import PortfolioPage from '../PortfolioPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioPage,
    },
  ],
})

export default router
