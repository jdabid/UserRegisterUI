import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      redirect: '/landing/home',
      name: 'landing',
      component: () => import('@/modules/layouts/LandingLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomePage,
        },
        {
          path: 'listusers',
          name: 'listUsers',
          component: () => import('@/modules/landing/pages/ListUsers.vue'),
        },
        {
          path: 'updateuser/:userid',
          name: 'updateUser',
          props: true,
          component: () => import('@/modules/landing/pages/UpdateUserPage.vue'),
        },
      ],
    },
    {
      path: '/auth',
      redirect: '/auth/login',
      name: 'auth',
      component: () => import('@/modules/auth/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404,
    },
  ],
});

export default router;
