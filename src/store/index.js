import { createStore } from 'vuex';

// import another vuex modules
import favoriteList from './modules/favorite.js';

import { getSearchAllConfig, getApiUrl, baseUrl } from '../api/index.js';

const store = createStore({
  modules: {
    favoriteList
  },
  state () {
    return {
      isFirstLoading: false,
      loadedItems: [],
      currentPageMode: 'home',
      nextPageToken: '',
      currentVideoId: '',
    };
  },
  getters: {
    // NOTE: 先拿來測試能不能順利得到值
    getLoadedItems (state) {
      return state.loadedItems;
    },
    getDataSnippet: (state) => (id) => {
      const { snippet } = state.loadedItems.find((item) => item.id === id);
      return snippet;
    },
    getHighThumbnails: (state) => (id) => {
      const { thumbnails } = state.loadedItems.find((item) => item.id === id);
      return thumbnails.high;
    },
    getCurrentVideoData: (state) => (id) => {
      return state.loadedItems.find((item) => item.id === id);
    },
  },
  mutations: {
    addNewLoadedItems (state, payload = []) {
      console.log('推新 items');
      payload.forEach((newItem) => {
        state.loadedItems.push(newItem);
      });
    },
    afterFirstLoading (state, payload) {
      console.log('結束第一次 loading');
      state.isFirstLoading = payload;
    },
    updateNextPageToken (state, payload) {
      console.log('更新 nextPageToken');
      console.log('old: ', state.nextPageToken);
      state.nextPageToken = payload;
      console.log('new: ', state.nextPageToken);
    },
    updateCurrentVideoId (state, payload) {
      console.log('更新 currentVideoId');
      console.log('old: ', state.currentVideoId);
      state.currentVideoId = payload;
      console.log('new: ', state.currentVideoId);
    },
    changeCurrentPageMode (state, payload) {
      if (payload === 'favorite-page') {
        state.currentPageMode = 'favorite';
      } else if (!payload) {
        state.currentPageMode = 'home';
      }
      console.log(state.currentPageMode);
    }
  },
  actions: {
    fetchVideosData({ state, commit }) {
      console.log('get called');
      const config = getSearchAllConfig(state.isFirstLoading, state.nextPageToken);
      const apiUrl = getApiUrl(baseUrl, config);
      // 第一次載入後就更換狀態，為了下次載入可以把 nextPageToken 塞進 config 中
      if (state.isFirstLoading) {
        commit('afterFirstLoading', false);
      }
      return fetch(apiUrl).then((response) => response.json());
    },
  }
});

export default store;
