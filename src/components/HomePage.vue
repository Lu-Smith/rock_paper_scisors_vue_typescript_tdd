<template>
  <TimerComponent :timer="timer"/>
  <div v-if="!displayGame">
    <div v-if="!name" class="player">
      <input type="text" v-model="playerName" placeholder="Enter your name..."/>
      <button class="confirm" type="submit" @click="submitName">Confirm</button>
    </div>
    <div v-else class="welcome-message">
      <div v-if="!timeOver">
        Welcome, {{ playerName }}!
      </div>
      <div v-else>
        {{ playerName }}! Shape your destiny with confidence ( 10s ).
      </div>
    </div>
    <button class="start-game" @click="startGame">Start</button>
  </div>
  <div v-else>
    <MainGame :playerName="playerName"  v-model:playerChoice="playerChoice" />
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
    const timerInterval = ref(0);
    const timeOver = ref(false);
    const playerChoice = ref(false);
    

    const submitName = () => {
        name.value = true;
    }

    const startGame = () => {
      displayGame.value = true;
      timer.value = 10;
      startTimer()
    }

    const startTimer = () => {
      timerInterval.value = setInterval(() => {
  
      timer.value--;
        if(playerChoice.value === true) {
        clearInterval(timerInterval.value);
      }

      if (timer.value === 0) {
          clearInterval(timerInterval.value);
          displayGame.value = false
          timeOver.value = true
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
      timer, 
      timeOver,
      playerChoice
    }
  }
}
</script>
