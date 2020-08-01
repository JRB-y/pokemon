import Axios from 'axios'

export default {
  namespaced: true,

  state: {
    searchQuery: ''
  },


  getters: {

  },

  mutations: {
    setSearchQuery (state, searchQuery) {
      state.searchQuery = searchQuery
    }
  },

  actions: {
    
  }
}