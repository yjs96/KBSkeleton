import Home from '@/pages/Home.vue';
import Statistics from '@/pages/Statistics.vue';
import Charts from '@/pages/Charts.vue';
import Mypage from '@/pages/Mypage.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics,
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts,
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage,
  },
];

export default routes;
