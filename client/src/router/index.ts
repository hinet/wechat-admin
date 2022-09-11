import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home',
        title: '首页'
      },
      component: HomeView
    },
    {
      path: '/authorize',
      name: 'authorize',
      meta: {
        icon: 'app',
        title: '管家中心'
      },
      component: () => import('@/views/authorize/Index.vue'),
      children: [
        {
          path: '/authorize',
          name: 'authorizeLink',
          meta: {
            icon: '',
            title: '授权链接生成器'
          },
          component: () => import('../views/authorize/Link.vue'),
        },
        {
          path: '/authorize/account',
          name: 'authorizeAccount',
          meta: {
            icon: '',
            title: '授权帐号管理'
          },
          component: () => import('../views/authorize/Account.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        icon: 'info-circle',
        title: '关于我们'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
