<template>
    <div class="score-container">
    <h3 class="score">Score:</h3>
    <h4 class="player-score">{{ playerName || "You"}}: <span>{{ playerScore }}</span></h4>
    <h4 class="computer-score">Computer: <span>{{ computerScore }}</span></h4>
    <h4 class="total-score" v-if="playerScore > 0">You won: <span>{{ Math.floor(playerScore / (playerScore + computerScore) * 100) }}%</span> games.</h4>
  </div>
</template>

<script lang="ts">
export default {
  name: "ScoreContainer",
  props: {
    playerScore: {
      type: Number,
      required: true,
    },
    computerScore: {
      type: Number,
      required: true,
    },
    playerName: {
      type: String,
      required: true,
    },
  }
}
</script>

<style lang="scss">
@import '../assets/variables';
@import '../assets/mixins';

.score-container{
  @include centerElement(row, space-around);
  background-color: $background-color-basic;
  position: fixed;
  bottom: 110px;
  right: 20px;
  border-radius: $border-radius-basic;
}

</style>