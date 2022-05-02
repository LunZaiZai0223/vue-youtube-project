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
      maxResults: 12,
      isLastFetchAPI: false,
    };
  },
  getters: {
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
      payload.forEach((newItem) => {
        state.loadedItems.push(newItem);
      });
    },
    afterFirstLoading (state, payload) {
      state.isFirstLoading = payload;
    },
    updateNextPageToken (state, payload) {
      state.nextPageToken = payload;
    },
    setMaxResults (state, payload) {
      state.maxResults = payload;
    },
    setIsLastFetchAPI (state, payload = true) {
      state.isLastFetchAPI = payload
    }
  },
  actions: {
    fetchVideosData({ state, commit }) {
      if (state.isLastFetchAPI) {
        return { items: null, nextPageToken: null, pageInfo: null };
      }
      const config = getSearchAllConfig(state.isFirstLoading, state.nextPageToken, state.maxResults);
      const apiUrl = getApiUrl(baseUrl, config);
      // 第一次載入後就更換狀態，為了下次載入可以把 nextPageToken 塞進 config 中
      if (state.isFirstLoading) {
        commit('afterFirstLoading', false);
      }
      // 更換 API config，收到只剩下 8 個就不用再打 API
      //   -> state.isLastFetchAPI 最後控制是否要繼續打
      if (state.maxResults === 8) {
        commit('setIsLastFetchAPI', true);
      }
      return fetch(apiUrl).then((response) => response.json());
    },
  }
});

export default store;
