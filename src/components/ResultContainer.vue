<template>
  <h5>{{ finalMessage }}</h5>
  <div class="result-move">{{ playerName }}: <img :src="require(`../assets/images/${playerMove}.png`)" :alt="playerMove" class="player-move"/> </div>
  <div class="result-move">Computer:<img :src="require(`../assets/images/${randomChoice}.png`)" :alt="randomChoice" class="computer-move" /> </div>
</template>

<script lang="ts">

export default {
  name: 'ResultContainer',
  props: {
    finalMessage: {
      type: String,
      required: true,
    },
    randomChoice: {
      type: String,
      required: true,
    },
    playerMove: {
      type: String,
      required: true,
    },
    playerName: {
      type: String,
      required: true,
    },
  }
}
</script>

<style>

</style>