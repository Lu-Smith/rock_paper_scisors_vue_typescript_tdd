<template>
  <TimerComponent :timer="timer"/>
  <div v-if="!displayGame">
    <div v-if="!name" class="player">
      <input type="text" v-model="playerName" placeholder="Enter your name..."/>
      <button v-if="playerName.length > 0" class="confirm" type="submit" @click="submitName">Confirm</button>
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
    <div v-if="remider" class="remider">Please enter your name</div>
  </div>
  <div v-else>
    <MainGame :playerName="playerName"  v-model:playerChoice="playerChoice" @play-again="startTimer" />
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
    const remider = ref(false)


    const submitName = () => {
        name.value = true;
    }

    const startGame = () => {
      if (playerName.value.length > 0) {
        displayGame.value = true;
        timer.value = 10;
        startTimer()
      } else {
        remider.value = true
      }
 
    }

    const startTimer = () => {
      timer.value = 10
      timerInterval.value = setInterval(() => {
      timer.value--;
        if(playerChoice.value === true) {
        clearInterval(timerInterval.value);
        timer.value = timer.value + 1;
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
      playerChoice,
      remider
    }
  }
}
</script>
