import { shallowMount } from "@vue/test-utils";
import HomePage from "@/components/HomePage.vue";
import MainGame from "@/components/MainGame.vue";

const HomePageConditionalSetName = {
  template: `
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
    <MainGame />
  </div>
  `,
  data() {
    return {
      name: true,
      playerName: 'Max',
      displayGame: false
    }
  }
}

const HomePageConditionalStartGame = {
  template: `
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
    <MainGame />
  </div>
  `,
  components: { MainGame },
  data() {
    return {
      displayGame: true
    }
  }
}


describe('HomePage', () => {
    it('renders all elements correctly  when name is not set', () => {
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

    it('renders all elements correctly when name is set', () => {
     
      const wrapper = shallowMount(HomePageConditionalSetName);
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

    it('renders MainGame component when start-game button is pressed', () => {
    
      const wrapper = shallowMount(HomePageConditionalStartGame);

        //displays MainGame component
        expect(wrapper.findComponent(MainGame).exists()).toBe(true);
    })

    it('starts the game on button click', () => {
      const wrapper = shallowMount(HomePage);
      wrapper.vm.displayGame = false;
      
      wrapper.find('.start-game').trigger('click');
      
      expect(wrapper.vm.displayGame).toBe(true);
    });
})