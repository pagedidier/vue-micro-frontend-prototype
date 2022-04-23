import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const mountEl = document.querySelector('#app1');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (createElement) => {
    const ctx = {
      props: { ...mountEl.dataset },
    };
    return createElement(App, ctx);
  },
}).$mount('#app1');
