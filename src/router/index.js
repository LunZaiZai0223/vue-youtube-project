import { createRouter, createWebHistory } from 'vue-router';

// import components
import HomePage from '../components/HomePage.vue';
import TheFavorite from '../components/TheFavorite.vue';
import TheVideo from '../components/TheVideo.vue';
import NotFound from '../components/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // path: '/'
      path: process.env.NODE_ENV === 'production' ? '/vue-youtube-project/' : '/',
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
    {
      path: '/:notFound(.*)', 
      component: NotFound
    }
  ],

  scrollBehavior(to, _, savedPosition) {
    if (to.name === 'home-page') {
      return savedPosition || { left: 0, top: 0, behavior: 'smooth' };
    }
    if (to.name === 'favorite-page' || to.name === 'video-page') {
      return { left: 0, top: 0 };
    }
    if (savedPosition) {
      return savedPosition;
    }
  }
});

export default router;
