<template>
  <h2>{{ msg }}</h2>
  <div class="player">
    <input type="text" v-model="playerName" placeholder="Enter your name..."/>
    {{ playerName }}
  </div>
  <button class="start-game">Start</button>
</template>

<script lang="ts">
export default {
    props: ['msg'],
    data() {
      return {
        playerName: ""
      }
    }

}
</script>

<style>

</style>