<template>
  <div>
    <h1 class="mt-2">Pokemon ({{ userName }})</h1>
    <input type="text" placeholder="Search..." class="search-input rounded-lg outline-none w-2/3 mb-5 p-1 w-1/3 md:w-1/3" v-model="searchQuery" @input="searching" style="backgorund-color: ">
    <div id="pokedex" class="bg-white h-screen w-screen">
      <div class="font-sans flex items-center justify-center bg-blue-darker w-full">
        <PokemonList />
      </div>
    </div>
  </div>
</template>

<script>
import BottomNavigation from '../components/navigation/bottomNavigation'
import PokemonList from '../components/pokedex/PokemonList'

export default {
  name: 'PokedexComponent',

  components: { BottomNavigation, PokemonList },

  computed: {
    searchQuery: {
      get () {
        return this.$store.state.search.searchQuery
      },

      set (newVal) {
        this.$store.state.search.searchQuery = newVal
      }
    },

    userName () {
      return this.$store.getters['auth/getUser'].username
    }
  },

  methods: {
    searching () {
      this.$store.commit('search/setSearchQuery', this.searchQuery)
    }
  }
}
</script>

<style scoped>
  .search-input {
    background-color: rgba(0, 0, 0, 0.12);
    color: #4f4f4f;
  }
</style>