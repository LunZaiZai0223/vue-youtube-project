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
      name: 'home-page',
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
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    if (to.name === 'favorite-page' || to.name === 'video-page') {
      return { left: 0, top: 0 };
    }
    if (savedPosition) {
      return savedPosition;
    }
  }
});

export default router;
