<template>
  <div v-if="pokemon.type" class="w-screen">
    <div class="h-screen pt-32" :class="`${pokemon.type.type1}-color`">
        <div class="bg-white h-full pl-6 pr-6 content-rounded pokemon_font">
            <PokemonDetails :pokemon="pokemon" />
            <PokemonStats :pokemon="pokemon" />
        </div>
    </div>
  </div>
</template>

<script>
import PokemonStats from '../components/pokemonProfile/PokemonStats'
import PokemonDetails from '../components/pokemonProfile/PokemonDetails'

export default {
  name: 'PokemonProfile',

  components: { PokemonStats, PokemonDetails },

  mounted () {
    window.scrollTo(0,0)
    const pokemonId = this.$route.params.id
    this.$store.dispatch('pokemon/GET_POKEMON', pokemonId)
  },

  computed: {
    pokemon () {
      return this.$store.state.pokemon.selectedPokemon
    }
  }
}
</script>

<style scoped>
#pokemon-profile {
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
}
.content {
  margin-top: 5rem !important;
}

.pokemon-image {
  margin-top: -70px !important;
}

</style>
