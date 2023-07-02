<template>
    <div class="score-container">
    <h3 class="score">Score:</h3>
    <h4 class="player-score">You: {{ playerScore }}</h4>
    <h4 class="computer-score">Computer: {{ computerScore }}</h4>
    <h4 class="total-score">You won: {{ Math.floor(playerScore / (playerScore + computerScore) * 100) }}% games.</h4>
  </div>
</template>

<script lang="ts">
export default {
  name: "ScoreContainer",
  props: ['playerScore', 'computerScore'],
}
</script>

<style>

</style>