<template>
  <div v-if="!gameOver" class="game-container">
    <h2 class="player-message">Your move, {{ playerName }}</h2>
    <div class="images-container-player">
      <img class="rock player-choice" src="../assets/images/rock.png" alt="rock" @click="handlePlayerMove('rock')"/>
      <img class="paper player-choice" src="../assets/images/paper.png" alt="paper" @click="handlePlayerMove('paper')"/>
      <img class="scissors player-choice" src="../assets/images/scissors.png" alt="scissors"  @click="handlePlayerMove('scissors')"/>
    </div>
    <h2 class="computer">Computer move</h2>
    <img class="loading" src="../assets/images/loading.png" alt="loading"/>
    <div class="images-container-computer">
      <img class="rock" src="../assets/images/rock.png" alt="rock" />
      <img class="paper" src="../assets/images/paper.png" alt="paper" />
      <img class="scissors" src="../assets/images/scissors.png" alt="scissors" />
    </div>
  </div>
  <div v-else class="result-container">
    <button class="play-again" @click="playAgain">play again</button>
    <ResultContainer :finalMessage="finalMessage" :randomChoice="randomChoice" :playerMove="playerMove" :playerName="playerName"/>
  </div>
  <ScoreContainer :computerScore="computerScore" :playerScore="playerScore" :playerName="playerName"/>
</template>

<script lang="ts">
import ResultContainer from './ResultContainer.vue'
import ScoreContainer from './ScoreContainer.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "MainGame",
  props: {
  playerName: {
    type: String,
    default: ''
  },
  playerChoice: {
    type: Boolean,
  },
},
  components: {
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
    },
    playAgain() {
      this.gameOver = false;
      this.$emit('play-again');
      this.playerChoiceInternal = false;
    }
  },
  watch: {
    playerChoiceInternal(newVal) {
      this.$emit('update:playerChoice', newVal);
    }
  }
})

</script>

<style lang="scss">
@import '../assets/variables';

.player-choice:hover, .result-move {
  background-color: $background-color-basic;
  border-radius: $border-radius-large;
}

@keyframes rotateLoading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  width: 30px;
  height: 30px;
  animation: rotateLoading 1s infinite linear;
}

@media screen and (width < 1100px){
  .game-container, .result-container {
    margin-top: $margin-basic;
  }

  .play-again {
    margin-bottom: $margin-basic;
  }
}

@media screen and (width < 860px){
  .game-container, .result-container {
    margin-top: $margin-top-large;
  }
}
</style>