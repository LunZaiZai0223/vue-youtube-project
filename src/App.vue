<template>
  <router-view></router-view>
  <!-- <button @click="testClick">More</button> -->
</template>

<script>
import { mapMutations, mapState } from 'vuex';
// import { fetchVideosData } from './api/index.js';

export default {
  name: 'App',
  mounted () {
    // this.getVideosData();
    // fetchVideosData({ isFirstLoad: true });
    // console.log('in mounted');
    // const url = 'https://youtube.googleapis.com/youtube/v3/videos?';
    // const apiKey = 'AIzaSyBZ7Mm1v1QEyUaYnPET_koH0uC10x3XWwo';
    // // const config = {key: apiKey};
    // const config = {
    //   method: 'Get',
    //   part: 'snippet',
    //   chart: 'mostPopular',
    //   maxResults: 12,
    //   regionCode: 'TW',
    //   key: apiKey,
    // };
    // // fetch(url).then((response) => response.json()).then((data) => console.log(data));
    // fetch(url, config)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    console.log('app component loaded!!!!')
    this.checkLocalStorage();
  },
  computed: {
    ...mapState('favoriteList', ['favoriteList']),
  },
  methods: {
    // async getVideosData () {
      // const { items, nextPageToken } = await fetchVideosData({ isFirstLoading: false, nextPageToken: 'CAwQAA' }).then((data) => data);
    //   const { items, nextPageToken } = await this.$store.dispatch('fetchVideosData').then((data) => data);
    //   console.log(items);
    //   console.log(nextPageToken);
    //   this.$store.commit('updateNextPageToken', nextPageToken);
    //   this.$store.commit('addNewLoadedItems', items);
    //   console.log('hello world');
    // },
    ...mapMutations('favoriteList', ['parseDataFromLocalStorage']),
    testClick () {
      console.log('got click');
      this.getVideosData();
    },
    checkLocalStorage () {
      if (this.favoriteList.length === 0 && localStorage.getItem('favorite') === null) return;
      if (this.favoriteList.length === 0 && localStorage.getItem('favorite')) {
        const localStorageData = JSON.parse(localStorage.getItem('favorite'));
        this.parseDataFromLocalStorage(localStorageData);

      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&family=Nunito:wght@300;400;500&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', 'Noto Sans TC', serif;
}

ul {
  list-style-type: none;
}

.svg-icon {
  width: 20px;
  height: 20px;
}

</style>
