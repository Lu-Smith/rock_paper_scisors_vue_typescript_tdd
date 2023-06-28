<template>
  <div v-if="!displayGame">
    <div v-if="!name" class="player">
      <input type="text" v-model="playerName" placeholder="Enter your name..."/>
      <button class="confirm" type="submit" @click="submitName">Confirm</button>
    </div>
    <div v-else class="welcome-message">
      Welcome, {{ playerName }}!
    </div>
    <button class="start-game" @click="startGame">Start</button>
  </div>
  <div v-else>
    <MainGame />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import MainGame from "@/components/MainGame.vue";

export default {
  name: "HomePage",
  components: {MainGame},
  setup() {
    const playerName = ref('');
    const name = ref(false);
    const displayGame = ref(false)

    const submitName = () => {
        name.value = true;
    }

    const startGame = () => {
      displayGame.value = true
    }

    return {
      playerName,
      name,
      displayGame,
      submitName,
      startGame
    }
  }
}
</script>

<style>

</style>