<template>
  <div v-if="!name" class="player">
    <input type="text" v-model="playerName" placeholder="Enter your name..."/>
    <button class="confirm" type="submit" @click="submitName">Confirm</button>
  </div>
  <div v-else class="welcome-message">
    Welcome, {{ playerName }}!
  </div>
  <button class="start-game">Start</button>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: "HomePage",
  setup() {
    const playerName = ref('');
    const name = ref(false);

    const submitName = () => {
        name.value = true;
    }

    return {
      playerName,
      name,
      submitName
    }
  }
}
</script>

<style>

</style>