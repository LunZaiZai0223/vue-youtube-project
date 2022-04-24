<template>
  <the-navigation></the-navigation>
  <video-items></video-items>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';
import VideoItems from './VideoItems.vue';

export default {
  name: 'HomePage',
  components: {
    TheNavigation,
    TheFooter,
    VideoItems
  },
}
</script>
<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>

