<template>
  <the-navigation></the-navigation>
  <h1>The Video page</h1>
  <!-- <the-youtube -->
  <!--   :src="https://www.youtube.com/watch?v=QpH3F9abCas" -->
  <!--   ref="youtube" -->
  <!--   @ready="onReady" -->
  <!-- ></the-youtube> -->
  <test-video :src="currentVideoId"></test-video>
  <the-footer
  ></the-footer>
</template>

<script>
import { mapGetters } from 'vuex';
import { fetchVideoDataById } from '../api/index.js';

// NOTE: 結果竟然只能傳子層... 要再想一下好的串接方式 + 複習 props 到底是 :子層的key="還是子層的key其實在這裡"

import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';
import TestVideo from './TestVideo.vue';

export default {
  name: 'TheVideo',
  components: {
    TheNavigation,
    TheFooter,
    TestVideo
  },
  data () {
    return {
      currentVideoId: '',
      currentVideoItem: {},
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
    // onReady () {
    //   console.log('play video');
    //   console.log(this.currentVideoId);
    //   console.log(this.youtubuUrl);
    //   this.$refs.youtube.playVideo();
    // }
  },
  async mounted () {
    // NOTE: 最後再試試看能不能用 router guards 解決（先檢查有無資料，若無打完再進來之類的）

    this.currentVideoId = this.$route.params.videoId;
    const foundVideo = this.hasTheVideoLocally(this.currentVideoId);
    if (foundVideo) { 
     return Object.assign(this.currentVideoItem, foundVideo);
    }
    const fetchedVideo = await this.getVideoById(this.currentVideoId);
    Object.assign(this.currentVideoItem, fetchedVideo);
    console.log(this.currentVideoItem);
  },
}
</script>
