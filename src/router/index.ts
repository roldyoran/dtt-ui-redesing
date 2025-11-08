import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import PanelView from '@/views/PanelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { 
      path: '/panel',
      name: 'panel',
      component: PanelView,

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
