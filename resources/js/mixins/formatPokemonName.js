export default {
  methods: {
    formatPokemonName (id) {
      return ('000' + id).substr(-3)
    }
  }
}
