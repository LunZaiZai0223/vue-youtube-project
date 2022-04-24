<template>
  <main>
    <div 
     v-for="({ id, snippet }) in loadedItems" 
     :key="id"
     class="card"
    >
      <!-- {{ getDataSnippet(id).thumbnails.default.url }} -->
      <!-- <img :src="getDataSnippet(id).thumbnails.high.url" /> -->
      <div class="card-thumb">
        <router-link :to="id">
          <img :src="snippet.thumbnails.high.url" />
        </router-link>
      </div>
      <div class="card-content">
        <h2>
          <router-link :to="id">
            {{ snippet.localized.title }}
          </router-link>
        </h2>
        <small>{{ snippet.channelTitle }}</small>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'VideoItems',
  computed: {
    ...mapState(['loadedItems']),
    ...mapGetters(['getDataSnippet', 'getHighThumbnails'])
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
}

/* TODO: 
  把 card 的 hover 用偽元素長大/縮小達成像參考範例的效果
*/
.card {
  width: 25%;
  padding: 0.75rem;
  padding-bottom: 2rem;
  border: 1px solid red;
  border-radius: .25rem;
  transition: background-color 0.5s ease-in;
  img {
    width: 100%;
    display: block;
    margin: -10% 0;
  }
  &-thumb {
    overflow: hidden;
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
    }
  }
  &:hover {
    background-color: Grey;
  }
}


.testbg {
  width: 25%;
}

</style>
