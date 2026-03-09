import AboutView from '@/views/AboutView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import BlogView from '@/views/BlogView.vue'
import NotFound from '@/views/NotFound.vue'
import ProfileView from '@/views/ProfileView.vue'
import PostsView from '@/views/PostsView.vue'
import LikesView from '@/views/LikesView.vue'
import NewsView from '@/views/NewsView.vue'
import HomeFooter from '@/views/HomeFooter.vue'
import PeopleYouMayKnow from '@/views/PeopleYouMayKnow.vue'
import PeopleFooter from '@/views/PeopleFooter.vue'

const HomeView = import('@/views/HomeView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Sidebar: NewsView,
        Footer: HomeFooter,
      },
    },
    {
      path: '/:id',
      name: 'profile',
      props: true,
      components: {
        default: ProfileView,
        Sidebar: PeopleYouMayKnow,
        Footer: PeopleFooter,
      },
      children: [
        {
          path: 'posts',
          component: PostsView
        },
        {
          path: 'likes',
          component: LikesView,
        }
      ]
    },
    {
      path: '/about',
      alias: '/me',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      // redirect: { name: 'home' },
      props: true,
      component: NotFound,
    },
  ],
})
export default router
