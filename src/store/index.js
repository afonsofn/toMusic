import { createStore } from 'vuex'
import { api } from '../services/api'

export default createStore({
  state: {
    userPlaylists: null,
    toMusicPlaylists: null,
    playListOnDetail: null,
    loading: true,
    loadingDetails: true
  },
  mutations: {
    setUserPlaylists(state, payload) {
      state.userPlaylists = payload
    },
    setToMusicPlaylists(state, payload) {
      state.toMusicPlaylists = payload
    },
    setPlayListOnDetail(state, payload) {
      state.playListOnDetail = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setLoadingDetails(state, payload) {
      state.loadingDetails = payload
    }
  },
  actions: {
    getUserPlaylists({ commit }) {
      commit("setLoading", true)
      api('/userPlaylists')
      .then(({ data }) => {
        commit("setUserPlaylists", data)
      })
      .finally(() => {
        commit("setLoading", false)
        setTimeout(() => {
          M.Carousel.init(document.querySelectorAll('.carousel'), {dist: 0, numVisible: 8})
        }, 300);
      })
    },
    getToMusicPlaylists({ commit }) {
      commit("setLoading", true)
      api('/toMusicPlaylists')
      .then(({ data }) => {
        commit("setToMusicPlaylists", data)
      })
      .finally(() => {
        commit("setLoading", false)
      })
    },
    getPlaylists({ commit }, { type, id }) {
      commit("setLoadingDetails", true)
      api(`/${type}/${id}`)
      .then(({ data }) => {
        commit("setPlayListOnDetail", data)
      })
      .finally(() => {
        commit("setLoadingDetails", false)
      })
    }
  },
  modules: {
  }
})
