import Axios from 'axios'

export default {
  namespaced: true,

  state: {
    pokemons: []
  },


  getters: {
    getPokemons (state) {
      return state.pokemons
    }
  },

  mutations: {
    setPokemons(state, pokemons) {
      state.pokemons = pokemons
    }
  },

  actions: {
    GET_MYTEAM({ commit, rootGetters }) {
      const config = {
        headers: { Authorization: `Bearer ${rootGetters['auth/getToken']}` }
      }
      Axios.get('/api/users/me/team', config).then(res => {
        commit('setPokemons', res.data)
      })
    },
  }
}