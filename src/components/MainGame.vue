<template>
  <TimerComponent />
  <h2>Your move, {{ playerName }}</h2>
  <div class="images-container">
    <img class="rock" src="../assets/images/rock.png" alt="rock" />
    <img class="paper" src="../assets/images/paper.png" alt="paper" />
    <img class="scissors" src="../assets/images/scissors.png" alt="scissors" />
  </div>
  <TimeComponent />
</template>

<script lang="ts">
import TimeComponent from './TimeComponent.vue'
import TimerComponent from './TimerComponent.vue'

export default {
  name: "MainGame",
  props: ['playerName'],
  components: {
    TimerComponent,
    TimeComponent
  }

}
</script>

<style>

</style>