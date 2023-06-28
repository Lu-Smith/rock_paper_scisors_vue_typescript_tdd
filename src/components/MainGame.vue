<template>
  <TimerComponent />
  <div v-if="!gameOver" class="game-container">
    <h2 class="player">Your move, {{ playerName }}</h2>
    <div class="images-container-player">
      <img class="rock" src="../assets/images/rock.png" alt="rock" />
      <img class="paper" src="../assets/images/paper.png" alt="paper" />
      <img class="scissors" src="../assets/images/scissors.png" alt="scissors" />
    </div>
    <h2 class="computer">Computer move</h2>
    <h3>loading...</h3>
    <div class="images-container-computer">
      <img class="rock" src="../assets/images/rock.png" alt="rock" />
      <img class="paper" src="../assets/images/paper.png" alt="paper" />
      <img class="scissors" src="../assets/images/scissors.png" alt="scissors" />
    </div>
  </div>
  <ResultContainer v-else />
  <ScoreContainer />
  <TimeComponent />
</template>

<script lang="ts">
import TimeComponent from './TimeComponent.vue'
import TimerComponent from './TimerComponent.vue'
import ResultContainer from './ResultContainer.vue'
import ScoreContainer from './ScoreContainer.vue'

export default {
  name: "MainGame",
  props: ['playerName'],
  components: {
    TimerComponent,
    TimeComponent,
    ResultContainer,
    ScoreContainer
  },
  setup() {
    const gameOver = false

    return {
      gameOver
    }
  }

}
</script>

<style>

</style>