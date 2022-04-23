import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import App1 from '../views/App1Wrapper.vue';
import App2 from '../views/App2Wrapper.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app1',
    name: 'App1',
    component: App1,
  },
  {
    path: '/app2',
    name: 'App2',
    component: App2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
