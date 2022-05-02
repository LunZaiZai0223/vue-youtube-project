<template>
  <router-view></router-view>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'App',
  mounted () {
    this.checkLocalStorage();
  },
  computed: {
    ...mapState('favoriteList', ['favoriteList']),
  },
  methods: {
    ...mapMutations('favoriteList', ['parseDataFromLocalStorage']),
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
