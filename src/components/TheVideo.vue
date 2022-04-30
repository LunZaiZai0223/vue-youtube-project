<template>
  <the-navigation></the-navigation>
  <!-- v-if 控制資料有沒有來 -->
  <video-player 
    v-if="currentVideoItem"
    :video-link="getVideoLink"
    :video-title="getVideoTitle"
    :video-description="getVideoDescription"
    :video-id="getVideoId"
    :channel-title="getChannelTitle"
    :snippet="currentVideoItem"
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
      console.log(this.currentVideoItem);
      return this.currentVideoItem.snippet.localized.title;
    },
    getChannelTitle () {
      return this.currentVideoItem.snippet.channelTitle;
    },
    getVideoId () {
      return this.currentVideoItem.id;
    },
  },
  methods: {
    hasTheVideoLocally (currentVideoId) {
      return this.getCurrentVideoData(currentVideoId);
    },
     async getVideoById () {
      // 如果 vuex 有資料的話就會是同步的，因為根本沒用到非同步 XDD
      console.log('in get video by id')
      this.currentVideoId = this.$route.params.videoId;
      const foundVideo = this.hasTheVideoLocally(this.currentVideoId);
      if (foundVideo) { 
        // 有影片就不用再打 API 資料 -> 同步
        console.log('vuex 有這個影片');
        this.currentVideoItem = foundVideo;
        console.log(this.currentVideoItem);
        return;
      }
      // vuex 沒影片資料就要重新打 API -> 非同步
      const { items } = await fetchVideoDataById({ id: this.currentVideoId }).then((data) => data);
      // items 是 array
      this.currentVideoItem = items[0];
      console.log(this.currentVideoItem);
    },
  },
  mounted () {
    // NOTE: 最後再試試看能不能用 router guards 解決（先檢查有無資料，若無打完再進來之類的）

    this.getVideoById();
    console.log('mounted got first');
    console.log(' in mounted');
  }
}
</script>
