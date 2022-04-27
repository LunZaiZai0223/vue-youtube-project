<template>
  <the-navigation></the-navigation>
  <h1>The Video page</h1>
  <video-player :test-link="testLink" :player-height="playerHeight" :player-width="playerWidth"></video-player>
  <the-footer></the-footer>
</template>

<script>
import { mapGetters } from 'vuex';
import { fetchVideoDataById } from '../api/index.js';

import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';
import VideoPlayer from './VideoPlayer.vue';

export default {
  name: 'TheVideo',
  components: {
    TheNavigation,
    TheFooter,
    VideoPlayer
  },
  data () {
    return {
      currentVideoId: '',
      currentVideoItem: {},
      testLink: 'https://www.youtube.com/watch?v=QpH3F9abCas',
      playerHeight: 0,
      playerWidth: 0,
    }
  },
  computed: {
    ...mapGetters(['getCurrentVideoData']),
    youtubuUrl () {
      console.log(this.currentVideoId);
      return `https://www.youtube.com/watch?v=${this.currentVideoId}`;
    }
  },
  methods: {
    hasTheVideoLocally (currentVideoId) {
      return this.getCurrentVideoData(currentVideoId);
    },
     async getVideoById (id) {
      const { items } = await fetchVideoDataById({ id }).then((data) => data);
      // items 是 array
      return items[0];
    },
    getPlayerHeight () {
      const currentClientWidth = document.documentElement.clientWidth;
      console.log(currentClientWidth);
      if (currentClientWidth > 1275) {
        this.playerHeight = 693;
      } else {
        this.playerHeight = Math.floor((currentClientWidth / 1.8));
      }
      console.log(this.playerHeight);
    },
    getPlayerWidth () {
      const currentClientWidth = document.documentElement.clientWIdth;
      if (currentClientWidth > 1280) {
        this.playerWidth = 1280;
      } else {
        this.playerWidth = currentClientWidth - 24;
      }
    }
  },
  async mounted () {
    // NOTE: 最後再試試看能不能用 router guards 解決（先檢查有無資料，若無打完再進來之類的）
    // this.getPlayerHeight();
    // this.getPlayerWidth();
    // window.addEventListener('resize', this.getPlayerHeight);
    // window.addEventListener('resize', this.getPlayerWidth);
    this.currentVideoId = this.$route.params.videoId;
    const foundVideo = this.hasTheVideoLocally(this.currentVideoId);
    if (foundVideo) { 
     return Object.assign(this.currentVideoItem, foundVideo);
    }
    const fetchedVideo = await this.getVideoById(this.currentVideoId);
    Object.assign(this.currentVideoItem, fetchedVideo);
    console.log(this.currentVideoItem);
  },
  unmounted () {
    // window.removeEventListener('resize', this.getPlayerHeight);
    // window.removeEventListener('resize', this.getPlayerWidth);
  }
}
</script>
