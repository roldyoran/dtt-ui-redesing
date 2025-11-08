import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import PanelLayout from '@/layouts/PanelLayout.vue'
import DashboardView from '@/views/DashboardView.vue'
import MisCursosView from '@/views/MisCursosView.vue'
import PlaceholderView from '@/views/PlaceholderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Rutas que usan el panel layout
    {
      path: '/panel',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardView,
        },
      ]
    },
    {
      path: '/mis-cursos',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'mis-cursos',
          component: MisCursosView,
        },
      ]
    },
    {
      path: '/proyectos',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'proyectos',
          component: PlaceholderView,
        },
      ]
    },
    {
      path: '/perfil',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'perfil',
          component: PlaceholderView,
        },
      ]
    },
    {
      path: '/gestion-salones',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'gestion-salones',
          component: PlaceholderView,
        },
      ]
    },
    {
      path: '/bolsa-trabajo',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'bolsa-trabajo',
          component: PlaceholderView,
        },
      ]
    },
    {
      path: '/ayuda',
      component: PanelLayout,
      children: [
        {
          path: '',
          name: 'ayuda',
          component: PlaceholderView,
        },
      ]
    },
    // page not found
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView,
    }
  ],
})

export default router
