import { shallowMount } from "@vue/test-utils";
import MainGame from "@/components/MainGame.vue";
import TimeComponent from "@/components/TimeComponent.vue"
import ResultContainer from '@/components/ResultContainer.vue'
import ScoreContainer from '@/components/ScoreContainer.vue'
import { ref } from 'vue'

const MainGameOver = {
    template: `
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
            <ResultContainer  />
        </div>
        <ScoreContainer />
        <TimeComponent />
    `,
    setup() {
      const gameOver = ref(true)
  
      const handlePlayerMove = (move: string) => {
          gameOver.value = !gameOver.value
      }
  
      return {
        gameOver,
        handlePlayerMove
      }
    }
}

describe('MainGame', () => {
   
    it('redners all the elements correctly', () => {
        const wrapper = shallowMount(MainGame, {
            propsData: {
                playerName: 'Max'
            }
        })

        //render player elements
        const gameContainer = wrapper.find('div.game-container')
            const instractionElement = gameContainer.find('h2.player')
            expect(instractionElement.exists()).toBe(true)
            expect(instractionElement.text()).toBe(`Your move, Max`)
            const imagesContainerPlayer = gameContainer.find('div.images-container-player')
            expect(imagesContainerPlayer.exists()).toBe(true)
                const rockPlayerElement = imagesContainerPlayer.find('img.rock')
                expect(rockPlayerElement.exists()).toBe(true)
                expect(rockPlayerElement.attributes('alt')).toBe('rock')
                rockPlayerElement.element.setAttribute('src', '../assets/images/rock.png');
                expect(rockPlayerElement.attributes('src')).toBe('../assets/images/rock.png')
                const paperPlayerElement = imagesContainerPlayer.find('img.paper')
                expect(paperPlayerElement.exists()).toBe(true)
                expect(paperPlayerElement.attributes('alt')).toBe('paper')
                paperPlayerElement.element.setAttribute('src', '../assets/images/paper.png');
                expect(paperPlayerElement.attributes('src')).toBe('../assets/images/paper.png')
                const scissorsPlayerElement = imagesContainerPlayer.find('img.scissors')
                expect(scissorsPlayerElement.exists()).toBe(true)
                expect(scissorsPlayerElement.attributes('alt')).toBe('scissors')
                scissorsPlayerElement.element.setAttribute('src', '../assets/images/scissors.png');
                expect(scissorsPlayerElement.attributes('src')).toBe('../assets/images/scissors.png')

          //render computer elements
            const computerElement = wrapper.find('h2.computer')
            expect(computerElement.exists()).toBe(true)
            expect(computerElement.text()).toBe(`Computer move`)
            const loadingElement = wrapper.find('h3')
            expect(loadingElement.exists()).toBe(true)
            const imagesContainerComputer = wrapper.find('div.images-container-computer')
            expect(imagesContainerComputer.exists()).toBe(true)
                const rockComputerElement = imagesContainerComputer.find('img.rock')
                expect(rockComputerElement.exists()).toBe(true)
                expect(rockComputerElement.attributes('alt')).toBe('rock')
                rockComputerElement.element.setAttribute('src', '../assets/images/rock.png');
                expect(rockComputerElement.attributes('src')).toBe('../assets/images/rock.png')
                const paperComputerElement = imagesContainerComputer.find('img.paper')
                expect(paperComputerElement.exists()).toBe(true)
                expect(paperComputerElement.attributes('alt')).toBe('paper')
                paperComputerElement.element.setAttribute('src', '../assets/images/paper.png');
                expect(paperComputerElement.attributes('src')).toBe('../assets/images/paper.png')
                const scissorsComputerElement = imagesContainerComputer.find('img.scissors')
                expect(scissorsComputerElement.exists()).toBe(true)
                expect(scissorsComputerElement.attributes('alt')).toBe('scissors')
                scissorsComputerElement.element.setAttribute('src', '../assets/images/scissors.png');
                expect(scissorsComputerElement.attributes('src')).toBe('../assets/images/scissors.png')

                // renders ScoreComponent
                const scoreComponent = wrapper.findComponent(ScoreContainer)
                expect(scoreComponent.exists()).toBe(true)

                // does not render ResultComponent
                const ResultComponent = wrapper.findComponent(ResultContainer)
                expect(ResultComponent.exists()).toBe(false)
        

        //render TimerComponent
        const timeComponent = wrapper.findComponent(TimeComponent)
        expect(timeComponent.exists()).toBe(true)
    })
   
    it('renders all elements for when gameOver is true', () => {
        const wrapper = shallowMount(MainGameOver, {
            global: {
              components: {
                TimeComponent,
                ResultContainer,
                ScoreContainer
              }
            }
          });
      
          const gameContainer = wrapper.find('.game-container')
          expect(gameContainer.exists()).toBe(false)
      
          const resultContainer = wrapper.find('.result-container')
          expect(resultContainer.exists()).toBe(true)
      
          const ResultComponent = wrapper.findComponent(ResultContainer)
          expect(ResultComponent.exists()).toBe(true)
    })

})