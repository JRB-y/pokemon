<template>
  <div>
    <img class="content-picture object-scale-down w-40 inline-block pokemon-image" :src="`/images/pokemon_images/${formatPokemonName(pokemon.id_pok)}.png`"/>
    <h1 class="items-center text-center opacity-75 text-gray-900 mt-6 pb-3 text-4xl">{{pokemon.nom_pok}}</h1>
    <div>
      <img :src="`/images/boutons/${pokemon.type.type1}.svg`" class="inline"/>
      <img :src="`/images/boutons/${pokemon.type.type2}.svg`" v-if="pokemon.type.type2"  class="inline"/>
    </div>
    <p class="text-center opacity-75 text-sm my-5 mx-2">
      {{ pokemon.description.description }}
    </p>
  </div>
</template>

<script>
import FormatPokemonName from '../../mixins/formatPokemonName'

export default {
  name: 'PokemonDetails',
  
  props: ['pokemon'],

  mixins: [FormatPokemonName]

}
</script>

<style>

</style>