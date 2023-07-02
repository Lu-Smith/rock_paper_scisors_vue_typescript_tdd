<template>
  <h5>{{ finalMessage }}</h5>
  <div class="result-move">You: <img :src="`../assets/images/${playerMove}.png`" :alt='playerMove' class="player-move"/> </div>
  <div class="result-move">Computer:<img :src="`../assets/images/${randomChoice}.png`" :alt='randomChoice' class="computer-move" /> </div>
</template>

<script lang="ts">
export default {
  name: 'ResultContainer',
  props: ['finalMessage', 'randomChoice', 'playerMove'],
}
</script>

<style>

</style>