import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/app.css';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'app1-app',
  'app2-app',
];

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
