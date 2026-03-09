import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      // alias: '/me',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/:notFound(.*)*',
      name: 'notfound',
      // redirect: { name: 'home' },
      component: NotFound,
    },
  ],
})
export default router
