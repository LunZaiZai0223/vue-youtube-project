<template>
  <main>
    <div 
     v-for="({ id, snippet }) in loadedItems" 
     :key="id"
     class="card"
    >
      <video-item 
        :snippet="snippet"
        :id="id"
      ></video-item>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import VideoItem from './VideoItem.vue';

export default {
  name: 'VideoList',
  components: {
    VideoItem,
  },
  computed: {
    ...mapState(['loadedItems']),
    ...mapGetters(['getDataSnippet', 'getHighThumbnails']),
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 1280px;
  margin: 1.5rem auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5rem;
}

.card {
  @media screen and (min-width: 1280px) {
    width: 25%;
  }
  @media screen and (max-width: 1280px) {
    width: 33.33%;
  }
  @media screen and (max-width: 1040px) {
    width: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  padding: 0.75rem;
  padding-bottom: 2rem;
  border-radius: .25rem;
  transition: background-color 0.5s ease-in;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: scale(0.8);
    background-color: $grey-light;
    border-radius: 0.5rem;
    z-index: -1;
    opacity: 0;
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
  }
  &:hover {
    &:after {
      transform: scale(1);
      opacity: 0.7;
    }
  }
}

</style>
