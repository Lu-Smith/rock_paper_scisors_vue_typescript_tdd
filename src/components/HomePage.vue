<template>
  <TimerComponent :timer="timer" />
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
    <MainGame :playerName="playerName" :timer="timer"/>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import MainGame from "@/components/MainGame.vue";
import TimerComponent from './TimerComponent.vue'

export default {
  name: "HomePage",
  components: { MainGame,  TimerComponent },
  setup() {
    const playerName = ref('');
    const name = ref(false);
    const displayGame = ref(false);
    const timer = ref(10);
    const timerInterval = ref(0)

    const submitName = () => {
        name.value = true;
    }

    const startGame = () => {
      displayGame.value = true;
      startTimer()
    }

    const startTimer = () => {
     timerInterval.value = setInterval(() => {
      timer.value--;
      if (timer.value === 0) {
          clearInterval(timerInterval.value);
        }
     }, 1000)

    }

    return {
      playerName,
      name,
      displayGame,
      submitName,
      startGame,
      startTimer,
      timer
    }
  }
}
</script>

<style>

</style>