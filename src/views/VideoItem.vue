<template>
  <div class="card-thumb">
    <router-link 
      :to="goToVideoPage"
      @click="handleClick(id)"
    >
    <img :src="snippet.thumbnails.high.url" />
    </router-link>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
  </div>
  <div class="card-content">
    <h2>
      <router-link :to="goToVideoPage">
        {{ snippet.localized.title }}
      </router-link>
    </h2>
    <small>{{ snippet.channelTitle }}</small>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'VideoItem',
  props: {
    id: {
      type: String,
      default: () => ''
    },
    snippet: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState(['loadedItems']),
    goToVideoPage () {
      return { name: 'video-page', params: { videoId: this.id } };
    }
  },
  methods: {
    ...mapMutations(['updateCurrentVideoId']),
    handleClick (id) {
      console.log('I got click!');
      console.log(id)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  img {
    width: 100%;
    display: block;
    margin: -10% 0;
  }
  &-thumb {
    overflow: hidden;
    position: relative;
    border-radius: 0.5rem;
    button {
      position: absolute;
      bottom: 0.25rem;
      right: 0.25rem;
      cursor: pointer;
      border-radius: 50%;
      border: none;
      background-color: $grey-light;
      color: Black;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: background-color 0.3s ease-in, opacity 0.3s ease-in, color 0.3s ease-in;
      &:hover {
        background-color: $success;
        color: White;
        opacity: 1;
      }
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 85px;
    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      display: -webkit-box;
      white-space: normal;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: Black;
      font-size: 1.15rem;
    }
    a {
      text-decoration: none;
      color: inherit;
      font-size: inherit;
      transition: color 0.1s ease-in;
      &:hover {
        color: $success;
      }
    }
    small {
      color: $grey;
    }
  }
}

</style>
