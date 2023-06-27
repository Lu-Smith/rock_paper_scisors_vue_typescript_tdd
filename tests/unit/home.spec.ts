import { shallowMount } from "@vue/test-utils";
import HomePage from "@/components/HomePage.vue";

describe('HomePage', () => {
    it('renders all elements correctly', () => {
        const wrapper = shallowMount(HomePage)
        
        //players name
        const playerElement = wrapper.find('div.player')
        expect(playerElement.exists()).toBe(true)
        const playerNameInput = playerElement.find('input')
        expect(playerNameInput.exists()).toBe(true)
        expect(playerNameInput.attributes('placeHolder')).toBe('Enter your name...')
        //startGame button
        const startGameButton = wrapper.find('button.start-game')
        expect(startGameButton.exists()).toBe(true)
    })
})