<template>
  <div class="player-wrapper" ref="player">
    <YouTube 
      class="red"
      :src="testLink" 
      width= "100%"
      ref="youtube" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
  components: { YouTube },
  props: ['testLink', 'playerHeight', 'playerWidth'],
  mounted () {
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    onReady() {
      this.$refs.youtube.playVideo()
    },
    handleResize () {
      console.log(this.$refs.youtube);
      console.log(this.$refs.player);
    }
  },
})
</script>

<style lang="scss" scoped>
.player-wrapper {
  max-width: 1280px;
  padding: 0 1.5rem;
  margin: 0 auto;
}

/* 直接開大決... */
/* https://www.webdesigns.com.tw/youtube-rwd.asp */

.red {
  position: relative !important;
  padding-bottom: 56.25% !important;
  padding-top: 30px !important;
  height: 0 !important;
  overflow: hidden !important;
  ::v-deep iframe {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
}

</style>
