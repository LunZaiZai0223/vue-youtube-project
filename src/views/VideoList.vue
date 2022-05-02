<template>
  <main ref="listWrapper">
    <div 
      v-for="({ id, snippet }) in videoList" 
      :key="id"
      :id="id"
      class="card"
      ref="cards"
    >
      <video-item 
        :snippet="snippet"
        :id="id"
      ></video-item>
    </div>
  </main>
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
  created () {
    console.log('in created');
  },
  mounted () {
    this.$store.commit('changeCurrentPageMode', this.$route.name);
    console.log(this.$refs.listWrapper);
    const observerConfig = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -25% 0px',
    };
    this.observer = new IntersectionObserver(this.observerCallBack, observerConfig);
    // const testObserver = new IntersectionObserver((entries) => {
    //   console.log(entries);
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       const thumbDiv = entry.target.children[0].children[0].children[0];
    //       const foundItem = this.videoList.find((item) => item.id === entry.target.id);
    //       thumbDiv.style.backgroundImage = `url(${foundItem.snippet.thumbnails.high.url})`;
    //       testObserver.unobserve(entry.target);
    //       if (this.listType === 'home') {
    //         const foundItemWithIndex = this.videoList.findIndex((item) => item.id === entry.target.id);
    //         const isLastVideo = foundItemWithIndex +1 === this.videoList.length;
    //         if (isLastVideo) {
    //           this.getFurtherVideoData();
    //           setTimeout(() => {
    //             console.log(this.$refs.cards);
    //             const [...newCards] = this.$refs.cards.slice(this.$refs.cards.length - 12, this.$refs.cards.length);
    //             console.log(newCards)
    //             newCards.forEach((newCard) => testObserver.observe(newCard));
    //           }, 1000);
    //           // console.log(this.$refs.cards[this.$refs.cards.length - 12]);
    //           // const [...newCards] = this.$refs.cards.slice(this.$refs.cards.length - 12, this.$refs.cards.length);
    //           // console.log(newCards)
    //           // FIX: 要找到動態更新 observe 元素的辦法
    //         }
    //       }
    //     }
    //   })
    // }, observerConfig);
    const cards = this.$refs.cards;
    cards.forEach((card) => { 
      console.log(card);
      // testObserver.observe(card) 
      this.observer.observe(card) 
    });
    // console.log(this.observer);
    console.log(cards);
    console.log('end of mounted');
  },
  methods: {
    callBack (entries) {
      console.log('hit callback');
      entries.forEach((target) => {
        console.log(target);
        console.log(target.isIntersecting);
      })
    },
    observerCallBack (entries) {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const thumbDiv = entry.target.children[0].children[0].children[0];
          const foundItem = this.videoList.find((item) => item.id === entry.target.id);
          thumbDiv.style.backgroundImage = `url(${foundItem.snippet.thumbnails.high.url})`;
          // testObserver.unobserve(entry.target);
          this.observer.unobserve(entry.target);
          if (this.listType === 'home') {
            const foundItemWithIndex = this.videoList.findIndex((item) => item.id === entry.target.id);
            const isLastVideo = foundItemWithIndex +1 === this.videoList.length;
            if (isLastVideo) {
              this.getFurtherVideoData();
              setTimeout(() => {
                console.log(this.$refs.cards);
                const [...newCards] = this.$refs.cards.slice(this.$refs.cards.length - 12, this.$refs.cards.length);
                console.log(newCards)
                newCards.forEach((newCard) => this.observer.observe(newCard));
              }, 500);
              // console.log(this.$refs.cards[this.$refs.cards.length - 12]);
              // const [...newCards] = this.$refs.cards.slice(this.$refs.cards.length - 12, this.$refs.cards.length);
              // console.log(newCards)
              // FIX: 要找到動態更新 observe 元素的辦法
            }
          }
        }
      })
    },
    async getFurtherVideoData () {
      console.log('要打資料');
      const { items, nextPageToken, pageInfo } = await this.$store.dispatch('fetchVideosData').then((data) => data);
      if (!items && !nextPageToken && !pageInfo) {
        console.log('no data at all');
        return;
      }
      console.log(nextPageToken);
      console.log(pageInfo);
      // console.log(this.$store.getters('checkIsAllDataHasBeenLoaded'));
      console.log(this.$store.state.firstNextPageToken === nextPageToken);
      if (pageInfo.resultsPerPage === 8) {
        console.log('全部打完了');
        return;
      }
      if (!nextPageToken) {
        console.log('最後一批');
        this.$store.commit('setMaxResults', 8);
        // return;
      }
      this.$store.commit('updateNextPageToken', nextPageToken);
      this.$store.commit('addNewLoadedItems', items);
      console.log('fetch further data');
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

</style>
