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
      firstNextPageToken: '',
      maxResults: 12,
      isLastFetchAPI: false,
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
    checkIsAllDataHasBeenLoaded: (state) => (nextPageToken) => {
      return state.firstNextPageToken === nextPageToken;
    }
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
    },
    setFirstNextPageToken (state, payload) {
      state.firstNextPageToken = payload;
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
      console.log('get called');
      if (state.isLastFetchAPI) {
        console.log('資料都有了');
        return { items: null, nextPageToken: null, pageInfo: null };
      }
      const config = getSearchAllConfig(state.isFirstLoading, state.nextPageToken, state.maxResults);
      const apiUrl = getApiUrl(baseUrl, config);
      // 第一次載入後就更換狀態，為了下次載入可以把 nextPageToken 塞進 config 中
      if (state.isFirstLoading) {
        commit('afterFirstLoading', false);
        commit('setFirstNextPageToken', state.nextPageToken);
      }
      if (state.maxResults === 8) {
        commit('setIsLastFetchAPI', true);
      }
      return fetch(apiUrl).then((response) => response.json());
    },
  }
});

export default store;
