<template>
    <div class="score-container">
    <h3 class="score">Score:</h3>
    <h4 class="player-score">You: <span>{{ playerScore }}</span></h4>
    <h4 class="computer-score">Computer: <span>{{ computerScore }}</span></h4>
    <h4 class="total-score" v-if="playerScore > 0">You won: <span>{{ Math.floor(playerScore / (playerScore + computerScore) * 100) }}%</span> games.</h4>
  </div>
</template>

<script lang="ts">
export default {
  name: "ScoreContainer",
  props: ['playerScore', 'computerScore'],
}
</script>

<style lang="scss">
@import '../assets/variables';

.score-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: $background-color-basic;
  position: fixed;
  bottom: 110px;
  right: 20px;
  border-radius: $border-radius-basic;
}

</style>