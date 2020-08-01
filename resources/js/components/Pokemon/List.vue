<template>
  <div class="overflow-hidden bg-white rounded w-screen sm:w-screen md:w-1/3 shadow-lg  leading-normal pb-20">
    <router-link :to="{path: `/pokemon/${pokemon.id_pok}`}" class="flex block group hover:bg-blue-100 p-4 border-b" v-for="pokemon in pokemons" :key="pokemon.id_pok">
      <img :src="`/images/pokemon_images/${formatPokemonName(pokemon.id_pok)}.png`" width="60" alt="">
      <div class="flex-1 text-left pl-10">
        <div>{{pokemon.nom_pok}}</div>
        <div class="text-gray-400">#{{formatPokemonName(pokemon.id_pok)}}</div>
      </div>
      <img :src="`/images/icon_types/${pokemon.type.type1}.svg`" class="" v-if="pokemon.type.type1" @error="imageLoadError">
      <img :src="`/images/icon_types/${pokemon.type.type2}.svg`" class="" v-if="pokemon.type.type2" @error="imageLoadError">
    </router-link>
    <div class="overflow-hidden bg-white rounded w-screen sm:w-screen md:w-1/3 shadow-lg  leading-normal pb-20"></div>
  </div>
</template>

<script>
import formatPokemonName from '../../mixins/formatPokemonName'

export default {
  name: 'List',

  props: ['pokemons'],

  mixins: [formatPokemonName],

  methods: {
    imageLoadError (event) {
      console.warn('Image NotFound')
    }
  },
}
</script>
