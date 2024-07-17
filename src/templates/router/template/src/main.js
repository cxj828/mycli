import { createApp } from 'vue';
import App from './App.vue';

async function mainInit() {
  const app = createApp(App);

  app.mount('#app');
}

mainInit();



