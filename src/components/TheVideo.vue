<template>
  <the-navigation></the-navigation>
  <!-- v-if 控制資料有沒有來 -->
  <video-player 
    v-if="currentVideoItem"
    :video-link="getVideoLink"
    :video-title="getVideoTitle"
    :video-description="getVideoDescription"
    :channel-title="getChannelTitle"
  ></video-player>
  <the-footer></the-footer>
</template>

<script>
import { mapGetters } from 'vuex';
import { fetchVideoDataById } from '../api/index.js';

import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';
import VideoPlayer from '../views/VideoPlayer.vue';

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
      // null 給 template 判斷 true / false
      currentVideoItem: null,
    }
  },
  computed: {
    ...mapGetters(['getCurrentVideoData']),
    getVideoLink () {
      return `https://www.youtube.com/watch?v=${this.currentVideoId}`;
    },
    getVideoDescription () {
      console.log('get video description');
      return this.currentVideoItem.snippet.description;
    },
    getVideoTitle () {
      console.log('get video title');
      return this.currentVideoItem.snippet.localized.title;
    },
    getChannelTitle () {
      return this.currentVideoItem.snippet.channelTitle;
    }
  },
  methods: {
    hasTheVideoLocally (currentVideoId) {
      return this.getCurrentVideoData(currentVideoId);
    },
     async getVideoById () {
      this.currentVideoId = this.$route.params.videoId;
      const foundVideo = this.hasTheVideoLocally(this.currentVideoId);
      if (foundVideo) { 
        console.log('vuex 有這個影片');
        this.currentVideoItem = foundVideo;
        console.log(this.currentVideoItem);
        return;
      }
      const { items } = await fetchVideoDataById({ id: this.currentVideoId }).then((data) => data);
      // items 是 array
      this.currentVideoItem = items[0];
      console.log(this.currentVideoItem);
    },
  },
  // created () {
  // NOTE: 留著之後測驗 template 上有的東西和 created 誰跑的快
  //   
  //   console.log('created got called');
  //   // this.getVideoById();
  // },
  mounted () {
    // NOTE: 最後再試試看能不能用 router guards 解決（先檢查有無資料，若無打完再進來之類的）
    // NOTE: 即便是 lifecycle，template 上有的東西還是會先跑贏 mounted？這個可以好好筆記一下

    this.getVideoById();
    console.log('mounted got first');
    console.log(' in mounted');
  }
}
</script>
