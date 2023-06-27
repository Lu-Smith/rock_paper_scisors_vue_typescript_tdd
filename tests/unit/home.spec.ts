import { shallowMount } from "@vue/test-utils";
import HomePage from "@/components/HomePage.vue";
import { ref } from "vue";

describe('HomePage', () => {
    it('renders all elements correctly  when name is not set', async () => {
        const wrapper = shallowMount(HomePage)
        
        //players name
        const playerElement = wrapper.find('div.player')
        expect(playerElement.exists()).toBe(true)
        const playerNameInput = playerElement.find("input[type='text']")
        expect(playerNameInput.exists()).toBe(true)
        expect(playerNameInput.attributes('placeholder')).toBe('Enter your name...')
        const confirmButton = playerElement.find('button.confirm')
        expect(confirmButton.exists()).toBe(true)
        expect(confirmButton.attributes('type')).toBe('submit')
        expect(wrapper.find("div.welcome-message").exists()).toBe(false);
        
        //startGame button
        const startGameButton = wrapper.find('button.start-game')
        expect(startGameButton.exists()).toBe(true)
        expect(startGameButton.text()).toBe('Start')
    })

    it('renders all elements correctly  when name is set', async () => {
      const HomePageConditional = {
        template: `
          <div v-if="!name" class="player">
            <input type="text" v-model="playerName" placeholder="Enter your name..."/>
            <button class="confirm" type="submit" @click="submitName">Confirm</button>
          </div>
          <div v-else class="welcome-message">
            Welcome, {{ playerName }}!
          </div>
          <button class="start-game">Start</button>
        `,
        data() {
          return {
            name: true,
            playerName: 'Max'
          }
        }
      }
      const wrapper = shallowMount(HomePageConditional);
  
        
        //players name
        const playerElement = wrapper.find('div.player')
        expect(playerElement.exists()).toBe(false)
        expect(wrapper.find("div.welcome-message").exists()).toBe(true);
        expect(wrapper.find("div.welcome-message").text()).toContain(`Welcome, Max!`);
        
        //startGame button
        const startGameButton = wrapper.find('button.start-game')
        expect(startGameButton.exists()).toBe(true)
        expect(startGameButton.text()).toBe('Start')
    })
})