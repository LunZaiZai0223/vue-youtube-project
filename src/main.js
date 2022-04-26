import { createApp } from 'vue'
import App from './App.vue'
import Youtube from 'vue3-youtube'
import router from './router/index.js';
import store from './store/index.js';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('the-youtube', Youtube);

app.mount('#app');

// createApp(App).mount('#app')
// TODO
// e12313
