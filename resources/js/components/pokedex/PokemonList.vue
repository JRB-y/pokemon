<template>
  <List :pokemons="pokemons" />
</template>

<script>

import List from '../Pokemon/List'

export default {
  name: 'PokemonList',

  components: { List },

  mounted () {
    this.$store.dispatch('pokemon/GET_POKEMONS')
  },

  computed: {
    pokemons () {
      return this.$store.state.pokemon.pokemons
    },

    // searchQuery () {
    //   return this.$store.state.search.searchQuery
    // },

    // pokemonFilterd () {
    //   if (this.searchQuery.trim() === '') return this.pokemons
    //   const self = this
    //   return this.pokemons.filter(pok => pok.nom_pok.includes(self.searchQuery))
    // }
  },

}
</script>
