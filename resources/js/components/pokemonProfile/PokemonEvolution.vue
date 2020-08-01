<template>
  
  <img class="object-scale-down w-40 inline-block pt-0 pb-16" :src="`/images/pokemon_images/${formatPokemonName(pokemon.evolution.id_pok_evol)}.png`" v-if="pokemon.evolution"/>
  <div class="pb-16 pt-5" v-else>No Evolution</div>
</template>

<script>
import FormatPokemonName from '../../mixins/formatPokemonName'

export default {
  name: 'PokemonEvolution',

  props: ['pokemon'],
  
  mixins: [FormatPokemonName]

}
</script>

<style>

</style>