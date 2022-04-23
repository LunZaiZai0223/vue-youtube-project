<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import { fetchVideosData } from './api/index.js';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    this.getVideosData();
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
  },
  methods: {
    async getVideosData () {
      const { items, nextPageToken } = await fetchVideosData({ isFirstLoad: false, nextPageToken: 'CAwQAA' }).then((data) => data);
      console.log(items);
      console.log(nextPageToken);
      console.log('hello world');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
