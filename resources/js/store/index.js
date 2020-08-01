import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const persistedStateOptions = {
  paths: [
    'auth',
  ]
}

import pokemon from './pokemon'
import search from './search'
import auth from './auth'
import team from './team'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { pokemon, search, auth, team },

  plugins: [createPersistedState(persistedStateOptions)]
})