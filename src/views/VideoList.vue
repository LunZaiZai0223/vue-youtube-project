<template>
  <main ref="listWrapper">
    <div 
      v-for="({ id, snippet }) in videoList" 
      :id="id"
      :key="id"
      class="card"
      ref="cards"
    >
      <video-item 
        :snippet="snippet"
        :id="id"
      ></video-item>
    </div>
  </main>
  <div class="list-loading-wrapper" v-if="displayLoading">
    <p>載入中...</p>
    <div class="list-loading"></div>
  </div>
</template>

<script>
import VideoItem from './VideoItem.vue';

export default {
  name: 'VideoList',
  components: {
    VideoItem,
  },
  data () {
    return {
      observer: null,
      displayLoading: false,
    }
  },
  props: {
    videoList: {
      type: Array,
      default: () => []
    },
    listType: {
      type: String,
      default: () => 'home'
    }
  },
  mounted () {
    const observerConfig = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -25% 0px',
    };
    this.observer = new IntersectionObserver(this.observerCallBack, observerConfig);
    // 第一次載入 div observer 綁定
    const cards = this.$refs.cards;
    cards.forEach((card) => { 
      this.observer.observe(card) 
    });
  },
  methods: {
    needToGetFurtherVideoData (id) {
      const foundItemWithIndex = this.videoList.findIndex((item) => item.id === id);
      const isLastVideo = foundItemWithIndex +1 === this.videoList.length;
      return isLastVideo;
    },
    observerFurtherCards () {
      // 確保接收到資料建立新的 .cards 再抓全部的 .cards
      setTimeout(() => {
        const [...newCards] = this.$refs.cards.slice(this.$refs.cards.length - 12, this.$refs.cards.length);
        newCards.forEach((newCard) => this.observer.observe(newCard));
      }, 500);
    },
    observerCallBack (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const thumbDiv = entry.target.children[0].children[0].children[0];
          const foundItem = this.videoList.find((item) => item.id === entry.target.id);
          thumbDiv.style.backgroundImage = `url(${foundItem.snippet.thumbnails.high.url})`;
          this.observer.unobserve(entry.target);
          // 如果在主頁還要判斷是否要繼續拉資料
          if (this.listType === 'home') {
            const isNeededToGetFurtherVideoData = this.needToGetFurtherVideoData(entry.target.id);
            if (isNeededToGetFurtherVideoData) {
              this.fetchFurtherVideoHandler(this.getFurtherVideoData, this.observerFurtherCards)
            }
          }
        }
      })
    },
    async getFurtherVideoData () {
      const { items, nextPageToken, pageInfo } = await this.$store.dispatch('fetchVideosData').then((data) => data);
      // 資料都有了就不會再打 API
      //   -> { items: null, nextPageToken: null, pageInfo: null }
      if (!items && !nextPageToken && !pageInfo) {
        return false;
      }
      if (pageInfo.resultsPerPage === 8) {
        // 擋住不要繼續往下走
        return false;
      }
      if (!nextPageToken) {
        this.$store.commit('setMaxResults', 8);
      }
      this.$store.commit('updateNextPageToken', nextPageToken);
      this.$store.commit('addNewLoadedItems', items);
      return true;
    },
    async fetchFurtherVideoHandler (fetchApiFunc, action) {
      this.activateLoading();
      const furtherApiResult = await fetchApiFunc();
      if (furtherApiResult) {
        action();
      }
      this.deactivateLoading();
    },
    activateLoading () {
      this.displayLoading = true
    },
    deactivateLoading () {
      this.displayLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: 1280px;
  margin: 1.5rem auto;
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 1.5rem;
  /* 因為 navbar 是 position: fiexd，會跳出計算的範圍，所以 padding-top 要留 navbar 的高度*/
  padding-top: 90px;
}

.card {
  &-thumb {
    div {
      background-image: url('https://i.ytimg.com/vi/oXJAsPz7QnQ/hqdefault.jpg') !important;
    }
  }
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

.list-loading {
  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.75rem 0;
    gap: 0.5rem;
  }
  display: flex;
  justify-content: center;
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 5px solid $grey;
    border-top-color: $success;
    animation: loading 1s ease infinite;
  }
}

@keyframes loading {
  to {
    transform: rotate(1turn);
  }
}

</style>
