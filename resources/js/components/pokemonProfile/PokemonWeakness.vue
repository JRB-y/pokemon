<template>
  <div class="pb-16">
      <div class="grid grid-cols-3 grid-flow-row">
        <div v-for="(weak, index) in weaknessStats" :key="index" class="flex">
          <img :src="`/images/icon_types/${index}.svg`">
          <span class="pt-2 pl-5">{{ weak }}X</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonWeakness',
  props: ['weakness'],

  computed: {
    weaknessStats () {
      const weakness = {}
      for (const [key, value] of Object.entries(this.weakness)) {
        if (key !== 'id' && key !== 'pokedex_id') {
          weakness[key] = value
        }
      }
      return weakness
    }
  }
}
</script>

<style>

</style>