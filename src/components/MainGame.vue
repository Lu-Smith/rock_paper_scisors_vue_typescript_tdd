<template>
  <div v-if="!gameOver" class="game-container">
    <h2 class="player">Your move, {{ playerName }}</h2>
    <div class="images-container-player">
      <img class="rock" src="../assets/images/rock.png" alt="rock" @click="handlePlayerMove('rock')"/>
      <img class="paper" src="../assets/images/paper.png" alt="paper" @click="handlePlayerMove('paper')"/>
      <img class="scissors" src="../assets/images/scissors.png" alt="scissors"  @click="handlePlayerMove('scissors')"/>
    </div>
    <h2 class="computer">Computer move</h2>
    <h3>loading...</h3>
    <div class="images-container-computer">
      <img class="rock" src="../assets/images/rock.png" alt="rock" />
      <img class="paper" src="../assets/images/paper.png" alt="paper" />
      <img class="scissors" src="../assets/images/scissors.png" alt="scissors" />
    </div>
  </div>
  <div v-else class="result-container">
    <button class="play-again">play again</button>
    <ResultContainer :finalMessage="finalMessage" :randomChoice="randomChoice" :playerMove="playerMove"/>
  </div>
  <ScoreContainer :computerScore="computerScore" :playerScore="playerScore" />
  <TimeComponent />
</template>

<script lang="ts">
import TimeComponent from './TimeComponent.vue'
import ResultContainer from './ResultContainer.vue'
import ScoreContainer from './ScoreContainer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "MainGame",
  props: {
    playerName: String,
    playerChoice: Boolean
  },
  components: {
    TimeComponent,
    ResultContainer,
    ScoreContainer
  },
  data() {
    return {
      gameOver: false,
      playerChoiceInternal: false,
      playerMove: '',
      finalMessage: '',
      randomChoice: '',
      computerChoices: ['rock', 'paper', 'scissors'],
      computerScore: 0,
      playerScore: 0,
    }
  },
  methods: {
    handlePlayerMove(move: string) {
      this.gameOver = true;
      this.playerChoiceInternal = true;
      this.playerMove = move;
      const randomIndex = Math.floor(Math.random() * this.computerChoices.length);
      this.randomChoice = this.computerChoices[randomIndex];

      if (this.playerMove === this.randomChoice) {
        this.finalMessage = 'Tie'
      } else {
        if (this.playerMove === 'rock' && this.randomChoice === 'scissors') {
          this.finalMessage = 'You won!'
          this.playerScore++
        } else if (this.playerMove === 'rock' && this.randomChoice === 'paper') {
          this.finalMessage = 'You lost!'
          this.computerScore++
        } else if (this.playerMove === 'paper' && this.randomChoice === 'scissors') {
          this.finalMessage = 'You lost!'
          this.computerScore++
        } else if (this.playerMove === 'paper' && this.randomChoice === 'rock') {
          this.finalMessage = 'You won!'
          this.playerScore++
        } else if (this.playerMove === 'scissors' && this.randomChoice === 'rock') {
          this.finalMessage = 'You lost!'
          this.computerScore++
        } else {
          this.finalMessage = 'You won!'
          this.playerScore++
        }
      }
    } 
  },
  watch: {
    playerChoiceInternal(newVal) {
      this.$emit('update:playerChoice', newVal);
    }
  }
})

</script>

<style>

</style>