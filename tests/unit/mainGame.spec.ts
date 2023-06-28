import { shallowMount } from "@vue/test-utils";
import MainGame from "@/components/MainGame.vue";
import TimeComponent from "@/components/TimeComponent.vue"
import TimerComponent from "@/components/TimerComponent.vue"

describe('MainGame', () => {
    it('redners all the elements correctly', () => {
        const wrapper = shallowMount(MainGame, {
            propsData: {
                playerName: 'Max'
            }
        })

        //render TimerComponent
        const timerComponent = wrapper.findComponent(TimerComponent)
        expect(timerComponent.exists()).toBe(true)
        //render player elements
        const instractionElement = wrapper.find('h2.player')
        expect(instractionElement.exists()).toBe(true)
        expect(instractionElement.text()).toBe(`Your move, Max`)
        const imagesContainerPlayer = wrapper.find('div.images-container-player')
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

        //score
        const scoreContainer = wrapper.find('div.score-container')
        expect(scoreContainer.exists()).toBe(true)
            const scoreElement = scoreContainer.find('h3.score')
            expect(scoreElement.exists()).toBe(true)
            expect(scoreElement.text()).toBe('Score:')
            const playerScore = scoreContainer.find('h4.player-score')
            expect(playerScore.exists()).toBe(true)
            const computerScore = scoreContainer.find('h4.computer-score')
            expect(computerScore.exists()).toBe(true)
            const totalScore = scoreContainer.find('h4.total-score')
            expect(totalScore.exists()).toBe(true)

        //render TimerComponent
        const timeComponent = wrapper.findComponent(TimeComponent)
        expect(timeComponent.exists()).toBe(true)
    })
})