<template>
  <the-navigation></the-navigation>
  <video-list></video-list>
  <the-footer></the-footer>
</template>

<script>
import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';
import VideoList from '../views/VideoList.vue';

export default {
  name: 'HomePage',
  components: {
    TheNavigation,
    TheFooter,
    VideoList
  },
}
</script>
<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>

