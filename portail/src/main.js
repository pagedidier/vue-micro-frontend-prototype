import Vue from 'vue'
import App from './App.vue'
import router from './router/router';
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)


Vue.config.ignoredElements = [
  'per-app',
  'mer-app'
]
new Vue({
  render: h => h(App),
  router
}).$mount('#app')