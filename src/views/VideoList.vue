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
    }
  },
  created () {
    console.log('in created');
  },
  mounted () {
    console.log(this.videoList);
    console.log(this.videoList.length);
    console.log(this.$route);
    this.$store.commit('changeCurrentPageMode', this.$route.name);
    console.log(this.$refs.listWrapper);
    // this.observer = new IntersectionObserver(this.callBack, {
    //   threshold: 0.2,
    // })
    // this.observer.observer(this.$refs.listWrapper);
    // console.log(this.observer);
    // const testObserver = new IntersectionObserver((entries) => {
    //   console.log(entries);
    //   entries.forEach((entry) => {
    //     console.log(entry.intersectionRatio);
    //   }),
    //   {
    //     rootMargin: '0px 0px -50% 0px',
    //     threshold: 0.2,
    //   }
    // });
    // testObserver.observe(this.$refs.listWrapper);
    // this.observer = new IntersectionObserver(this.callBack, {
    //   rootMargin: '0px 0px -80% 0px',
    // });
    const testObserver = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const thumbDiv = entry.target.children[0].children[0].children[0];
          const foundItem = this.videoList.find((item) => item.id === entry.target.id);
          thumbDiv.style.backgroundImage = `url(${foundItem.snippet.thumbnails.high.url})`;
          testObserver.unobserve(entry.target);
        }
      })
    },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -30% 0px',
      }
    );
    const cards = this.$refs.cards;
    cards.forEach((card) => { 
      console.log(card);
      testObserver.observe(card) 
    });
    console.log(testObserver);
    // console.log(this.observer);
    console.log(cards);
    // const [...cards] = document.getElementsByClassName('card');
    // for (let i = 0; i < cards.length; i++) {
    //   console.log(cards[i]);
    //   testObserver.observe(cards[i]);
    // }
    // cards.forEach((card) => {
    //   console.log(card);
    //   testObserver.observe(card);
    // });
    console.log('end of mounted');
  },
  methods: {
    callBack (entries) {
      console.log('hit callback');
      entries.forEach((target) => {
        console.log(target);
        console.log(target.isIntersecting);
      })
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
