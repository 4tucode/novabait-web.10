import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: HomeView, // Temporal, redirige a home con scroll
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: HomeView, // Temporal, redirige a home con scroll
    },
    {
      path: '/sobre-nosotros',
      name: 'sobre-nosotros',
      component: HomeView, // Temporal, redirige a home con scroll
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: HomeView, // Temporal, redirige a home con scroll
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
