
import { createApp } from 'vue';
import { store, key } from './store';
import App from './App.vue';
import './registerServiceWorker';
import { initJsStore } from './service/jsstore_con';
import i18n from './i18n';

initJsStore();
createApp(App)
  .use(i18n)
  .use(store, key)
  .mount('#app');
