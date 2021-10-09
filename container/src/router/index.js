import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import App1 from '../views/App1Wrapper.vue';
import App2 from '../views/App2Wrapper.vue';

Vue.use(VueRouter);

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

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
