export default ({
  namespaced: true,
  state () {
    return {
      favoriteList: []
    }
  },
  getters: {
    checkVideoHasAlreadyExisted: (state) => (id) => {
      return state.favoriteList.find((item) => item.id === id);
    }
  },
  mutations: {
    addNewFavoriteItem (state, payload) {
      state.favoriteList.push(payload);
    },
    deleteFavoriteItem (state, payload) {
      state.favoriteList = state.favoriteList.filter((item) => item.id !== payload);
    }
  },
});
