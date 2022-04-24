import { createStore } from 'vuex';

import { getSearchAllConfig, getApiUrl, baseUrl } from '../api/index.js';

const store = createStore({
  state () {
    return {
      isFirstLoading: false,
      loadedItems: [],
      nextPageToken: '',
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
    }
  }
});

export default store;
