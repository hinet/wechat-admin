import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        icon: '',
        title: '登录'
      },
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      meta: {
        icon: '',
        title: '首页'
      },
      component: HomeView,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: {
            icon: 'home',
            title: '仪表盘'
          },
          component: () => import('@/views/Dashboard.vue')
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
        }
      ]
    }
  ]
})

export default router
