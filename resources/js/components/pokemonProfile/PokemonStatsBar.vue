<template>
  <div class="stats text-left flex flex-row">
    <p class="w-1/6 text-xs" :class="`${colorClass}-color--text`">{{text}}</p>
    <p class="w-1/6 text-gray-600 text-sm">{{value}}</p>
    <div class="w-4/6">
      <div class="shadow w-full bg-grey-light">
        <div class="bg-blue text-xs leading-none py-1 text-center text-white" :style="{width: value > 100 ? '100' : `${value}%`}" :class="`${colorClass}-color--bg`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonStatusBar',

  props: ['colorClass', 'text', 'value']
}
</script>

<style>

</style>