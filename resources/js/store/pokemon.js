import Axios from 'axios'

export default {
  namespaced: true,

  state: {
    pokemons: [],
    selectedPokemon: {}
  },


  getters: {

  },

  mutations: {
    setPokemons (state, pokemons) {
      state.pokemons = pokemons
    },

    setPokemon (state, pokemon) {
      state.selectedPokemon = pokemon
    }
  },

  actions: {
    GET_POKEMONS ({commit, rootGetters}) {
      const config = {
        headers: { Authorization: `Bearer ${rootGetters['auth/getToken']}` }
      }
      Axios.get('/api/pokemons', config).then(res => {
        commit('setPokemons', res.data)
      })
    },

    GET_POKEMON({ commit, rootGetters}, pokemonId) {
      const config = {
        headers: { Authorization: `Bearer ${rootGetters['auth/getToken']}` }
      }
      Axios.get(`/api/pokemons/${pokemonId}`, config).then(res => {
        commit('setPokemon', res.data)
      })
    }
  }
}