import { createApp, defineCustomElement } from 'vue';
import App1 from '@dpage/application-1';
import App2 from '@dpage/application-2';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/app.css';

const a = defineCustomElement(App1);
const b = defineCustomElement(App2);

export { a, b };

export function register() {
  customElements.define('application-1', a);
  customElements.define('application-2', b);
}

createApp(App).use(store).use(router).mount('#app');
