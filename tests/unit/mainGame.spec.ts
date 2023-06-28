import { shallowMount } from "@vue/test-utils";
import MainGame from "@/components/MainGame.vue";

describe('MainGame', () => {
    it('redners all the elements correctly', () => {
        const wrapper = shallowMount(MainGame)

        //render TimerComponent
        const timerComponent = wrapper.findComponent('TimerComponent')
        expect(timerComponent.exists()).toBe(true)
        //render game elements
        const instractionElement = wrapper.find('h2')
        expect(instractionElement.exists()).toBe(true)
        expect(instractionElement.text()).toBe('Your move, {{player}}')
        const imagesContainer = wrapper.find('div.images-container')
        expect(imagesContainer.exists()).toBe(true)
            const rockElement = imagesContainer.find('img.rock')
            expect(rockElement.exists()).toBe(true)
            expect(rockElement.attributes('alt')).toBe('rock')
            expect(rockElement.attributes('src')).toBe('../assets/images/rock.png')
            const paperElement = imagesContainer.find('img.paper')
            expect(paperElement.exists()).toBe(true)
            expect(paperElement.attributes('alt')).toBe('paper')
            expect(paperElement.attributes('src')).toBe('../assets/images/paper.png')
            const scissorsElement = imagesContainer.find('img.scissors')
            expect(scissorsElement.exists()).toBe(true)
            expect(scissorsElement.attributes('alt')).toBe('scissors')
            expect(scissorsElement.attributes('src')).toBe('../assets/images/scissors.png')

        
        //render TimerComponent
        const timeComponent = wrapper.findComponent('TimeComponent')
        expect(timeComponent.exists()).toBe(true)
    })
})