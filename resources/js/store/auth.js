import Axios from 'axios'

export default {
  namespaced: true,

  state: {
    currentUser: null,
    loggedIn: false
  },


  getters: {
    isLoggedIn (state) {
      return state.loggedIn
    },

    getToken (state) {
      return state.currentUser.access_token
    },

    getUser (state) {
      return state.currentUser.user
    }
  },

  mutations: {
    userLoggedIn (state, user) {
      state.currentUser = user
      state.loggedIn = true
    },

    logoutUser (state) {
      state.currentUser = null
      state.loggedIn = false
    }
  },

  actions: {
    REGISTER_USER ({commit}, user) {
      return new Promise((resolve, reject) => {
        Axios.post('api/register', user).then(res => {
          commit('userLoggedIn', res.data)
          resolve(res.data)
        })
      })
    },

    LOGIN_USER ({commit}, user) {
      return new Promise((resolve, reject) => {
        Axios.post('api/login', user).then(res => {
          commit('userLoggedIn', res.data)
          resolve(res.data)
        })
      })
    },

    LOGOUT_USER ({state, commit}) {
      return new Promise((resolve, reject) => {
        Axios.post('api/logout', state.currentUser).then(res => {
          commit('logoutUser', res.data)
          resolve(res.data)
        })
      })
    }
  }
}