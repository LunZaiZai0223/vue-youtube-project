<template>
  <the-navigation></the-navigation>
  <is-fetching v-if="isFetchingData"></is-fetching>
  <video-list 
    v-if="loadedItems.length !== 0"
    :video-list="loadedItems"
    list-Type="home"
  ></video-list>
  <the-footer></the-footer>
</template>

<script>
import { mapState } from 'vuex';

import TheNavigation from './nav/TheNavigation.vue';
import TheFooter from './footer/TheFooter.vue';
import IsFetching from './IsFetching.vue';
import VideoList from '../views/VideoList.vue';

export default {
  name: 'HomePage',
  components: {
    TheNavigation,
    TheFooter,
    VideoList,
    IsFetching,
  },
  data () {
    return {
      isFetchingData: true
    }
  },
  mounted () {
    this.getVideosData();
  },
  methods: {
    async getVideosData () {
      if (this.loadedItems.length > 0) {
        this.toggleIsFetchingData();
        return;
      }
      const { items, nextPageToken } = await this.$store.dispatch('fetchVideosData').then((data) => data);
      this.$store.commit('updateNextPageToken', nextPageToken);
      this.$store.commit('addNewLoadedItems', items);
      this.toggleIsFetchingData();
    },
    toggleIsFetchingData () {
      this.isFetchingData = false;
    }
  },
  computed: {
    ...mapState(['loadedItems'])
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: $primary;
}
</style>

