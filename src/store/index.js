import { createStore } from 'vuex'
import { api } from '../services/api'

export default createStore({
  state: {
    userPlaylists: null,
    toMusicPlaylists: null,
    loading: true
  },
  mutations: {
    setUserPlaylists(state, payload) {
      state.userPlaylists = payload
    },
    setToMusicPlaylists(state, payload) {
      state.toMusicPlaylists = payload
    },
    setLoading(state, payload) {
      state.loading = payload
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
    }
  },
  modules: {
  }
})
