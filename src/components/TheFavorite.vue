<template>
  <the-navigation></the-navigation>
  <div class="favorite-list-wrapper" :class="{ 'no-favorite': isNoFavoriteVideo }">
    <video-list
      :video-list="favoriteList"
      v-if="!isNoFavoriteVideo"
    ></video-list>
    <div
      v-if="isNoFavoriteVideo"
      class="not-found"
    >
      <p>Your list is empty!</p>
      <div class="image-wrapper">
        <img src="../assets/images/no-favorite-video.jpg" />
      </div>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import { mapState } from 'vuex';

import VideoList from '../views/VideoList.vue';
import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';

export default {
  name: 'TheFavorite',
  components: {
    VideoList,
    TheNavigation,
    TheFooter
  },
  computed: {
    ...mapState('favoriteList', ['favoriteList']),
    isNoFavoriteVideo () {
      return this.favoriteList.length === 0;
    }
  },
  updated () {
    this.isNoFavoriteVideo && window.scroll(0, 0);
  }
}
</script>

<style lang="scss" scoped>
.favorite-list-wrapper {
  min-height: 80vh;
}

.favorite-list-wrapper.no-favorite {
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found {
  padding-top: 90px;
  p {
    font-size: 1.75rem;
    text-align: center;
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
  img {
    display: block;
    width: 80%;
  }
}

</style>
