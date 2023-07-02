<template>
  <h5>{{ finalMessage }}</h5>
  <div class="result-move">You: <img :src="getImagePath(playerMove)" :alt='playerMove' class="player-move"/> </div>
  <div class="result-move">Computer:<img :src="getImagePath(randomChoice)" :alt='randomChoice' class="computer-move" /> </div>
</template>

<script lang="ts">
export default {
  name: 'ResultContainer',
  props: ['finalMessage', 'randomChoice', 'playerMove'],
  methods: {
    getImagePath(move: string): string {
      return `../assets/images/${move}.png`;
    },
  },
}
</script>

<style>

</style>