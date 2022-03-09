import { createApp } from 'vue';
import { store } from './store';
import App from './App.vue';
import './registerServiceWorker';
// import { initJsStore } from './service/jsstore_con';
import i18n from './i18n';

// initJsStore();
createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');
