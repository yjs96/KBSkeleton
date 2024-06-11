import Home from '@/pages/Home.vue';
import Statistics from '@/pages/Statistics.vue';
import Charts from '@/pages/Charts.vue';
import { createRouter, createWebHistory } from 'vue-router';


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
    {
      path: '/three',
      name: 'statistics',
      component: Statistics,
    }
  ],
});

export default router;
