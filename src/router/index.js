import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Charts from '@/pages/Charts.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/two',
      name: 'charts',
      component: Charts,
    },
  ],
});

export default router;
