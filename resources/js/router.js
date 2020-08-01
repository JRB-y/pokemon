import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from './components/auth/login.vue'
import RegisterComponent from './components/auth/register.vue'
import PokedexComponent from './pages/Pokedex.vue'
import PokemonProfile from './pages/PokemonProfile.vue'
import TeamComponent from './pages/Team.vue'
import TradeComponent from './pages/Trade.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: LoginComponent, meta: { auth: false } },
  { path: '/register', component: RegisterComponent, meta: { auth: false } },
  { path: '/pokedex', component: PokedexComponent, meta: { auth: true } },
  { path: '/pokemon/:id', component: PokemonProfile, meta: { auth: true } },
  { path: '/team', component: TeamComponent, meta: { auth: true } },
  { path: '/trade', component: TradeComponent, meta: { auth: true } }
]

export default new VueRouter({
  mode: 'history',
  routes
})