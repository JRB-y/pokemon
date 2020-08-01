<template>
  <div>
    <div class="button flex flex-row text-xs items-center justify-center pt-3 pb-3">
      <a href="#" class="rounded-full py-3 px-8 1/3" :class="{[`${pokemon.type.type1}-color--tab-button`]: selectedTab === 'stats'}" @click="select('stats')">STATS</a>
      <a href="#" class="1/3 rounded-full py-2 px-4" :class="{[`${pokemon.type.type1}-color--tab-button`]: selectedTab === 'weakness'}" @click="select('weakness')">WEAKNESSES</a>
      <a href="#" class="1/3 rounded-full py-2 px-4" :class="{[`${pokemon.type.type1}-color--tab-button`]: selectedTab === 'evolutions'}" @click="select('evolutions')">EVOLUTIONS</a>
    </div>
    <div class="gauges pb-20" v-if="selectedTab === 'stats'">
      <PokemonStatsBar
        v-for="sta in statsList" 
        :key="sta.id"
        :text="sta.txt"
        :value="pokemon.stats[sta.id]"
        :colorClass="pokemon.type.type1"
      />
    </div>
    <div v-if="selectedTab === 'weakness'">
      <PokemonWeakness :weakness="pokemon.weakness" />
    </div>
    <div v-if="selectedTab === 'evolutions'">
      <PokemonEvolution :pokemon="pokemon" />
    </div>
  </div>
</template>

<script>
import PokemonStatsBar from './PokemonStatsBar'
import PokemonEvolution from './PokemonEvolution'
import PokemonWeakness from './PokemonWeakness'

export default {
  name: 'PokemonStats',

  props: ['pokemon'],

  components: { PokemonStatsBar, PokemonEvolution, PokemonWeakness },

  data () {
    return {
      statsList: [
        { id: 'hp', txt: 'HP'},
        { id: 'attack', txt: 'ATK'},
        { id: 'defense', txt: 'DEF'},
        { id: 'sp_attack', txt: 'SATK'},
        { id: 'sp_defense', txt: 'SDEF'},
        { id: 'speed', txt: 'SPD'}
      ],

      selectedTab: 'stats',
    }
  },

  methods: {
    select (tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style>

</style>