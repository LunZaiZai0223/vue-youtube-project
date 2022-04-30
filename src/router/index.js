import { createRouter, createWebHistory } from 'vue-router';

// import components
import HomePage from '../components/HomePage.vue';
import TheFavorite from '../components/TheFavorite.vue';
import TheVideo from '../components/TheVideo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', 
      component: HomePage
    },
    {
      path: '/favorite',
      name: 'favorite-page',
      component: TheFavorite
    },
    {
      path: '/video/:videoId',
      name: 'video-page',
      params: true,
      component: TheVideo
    },
  ]
});

export default router;
