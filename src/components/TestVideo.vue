<template>
  <the-youtube
    src="currentVideoId"
    ref="youtube"
    @ready="onReady"
  ></the-youtube>
</template>

<script>
export default {
  name: 'TestVideo',
  props: ['currentVideoId'],
  methods: {
    onReady () {
      console.log('play video');
      console.log(this.currentVideoId);
      // console.log(this.youtubuUrl);
      this.$refs.youtube.playVideo();
    }
  }
}
</script>
