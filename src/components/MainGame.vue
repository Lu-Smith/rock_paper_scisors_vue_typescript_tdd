<template>
  <TimerComponent />
  <h2>Main Game</h2>
  <TimeComponent />
</template>

<script lang="ts">
import TimeComponent from './TimeComponent.vue'
import TimerComponent from './TimerComponent.vue'

export default {
  name: "MainGame",
  components: {
    TimerComponent,
    TimeComponent
  }

}
</script>

<style>

</style>