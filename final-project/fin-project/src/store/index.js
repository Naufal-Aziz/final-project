import Vue from 'vue'
import Vuex from 'vuex'
import blogs from './modules/blogs'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    guest: true,
    user: {},
    token: ''
  },
  actions: {
    setGuest({ commit }, value) {
      commit('setGuest', value)
    },
    setUser({ commit }, payload) {
      commit('setUser', payload)
    },
    setToken({ commit }, payload) {
      commit('setToken', payload)
    }
  },
  mutations: {
    setGuest(state, value) {
      state.guest = value
    },
    setUser(state, payload) {
      state.user = payload
    },
    setToken(state, payload) {
      state.token = payload
    }
  },
  modules: {
    blogs,
  }
})
