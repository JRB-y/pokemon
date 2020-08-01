<template>
  <div>
    <div class="header gradient_right pt-6 pb-6">
        <div class="pikachu">
          <div class="header-round w-1/3 m-auto ">
            <img class="header-picture " :src="`/images/profile/${currentUser['profil-icon']}.png`" />
          </div>
        </div>
        <div class="flex items-center flex-row pokemon_font">
          <div class="w-1/4"></div> 
          <h1 class="header-username text-center text-gray-700 mt-6 opacity-10 text-4xl w-2/4">{{currentUser.username}}</h1>
          <p class="text-gray-700 text-opacity-50 text-center mt-8 w-1/4">ID #{{currentUser.id}}</p>
        </div>
    </div>
    <List :pokemons="pokemons" class="h-full"/>
  </div>
</template>

<script>
import List from '../components/Pokemon/List'

export default {
  name: 'TeamComponent',

  components: { List },

  mounted () {
    this.$store.dispatch('team/GET_MYTEAM')
  },

  computed: {
    pokemons () {
      return this.$store.state.team.pokemons
    },

    currentUser () {
      return this.$store.state.auth.currentUser.user
    }
  }
  
}
</script>
