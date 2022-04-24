import { createRouter, createWebHistory } from 'vue-router';

// import components
import HomePage from '../components/HomePage.vue';
import TheFavorite from '../components/TheFavorite.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      component: HomePage
    },
    {
      path: '/favorite',
      component: TheFavorite
    }
  ]
});

export default router;
