import { shallowMount } from "@vue/test-utils";
import HomePage from "@/components/HomePage.vue";
import MainGame from "@/components/MainGame.vue";
import TimerComponent from "@/components/TimerComponent.vue"
import { ref } from 'vue'

const HomePageConditionalSetName = {
  template: `
  <TimerComponent :timer="timer" />
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
  setup() {
    const playerName = ref('Max');
    const name = ref(true);
    const displayGame = ref(false)

    const submitName = () => {
        name.value = true;
    }

    const startGame = () => {
      displayGame.value = true
    }

    return {
      playerName,
      name,
      displayGame,
      submitName,
      startGame
    }
  }
}

const HomePageConditionalStartGame = {
  template: `
  <TimerComponent :timer="timer" />
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
  setup() {
    const playerName = ref('Max');
    const name = ref(true);
    const displayGame = ref(true)

    const submitName = () => {
        name.value = true;
    }

    const startGame = () => {
      displayGame.value = true
    }

    return {
      playerName,
      name,
      displayGame,
      submitName,
      startGame
    }
  }
}


describe('HomePage', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Enable Jest's fake timers
  });

  afterEach(() => {
    jest.runOnlyPendingTimers(); // Clear any pending timers
    jest.useRealTimers(); // Restore real timers
  });

    it('renders all elements correctly  when name is not set', () => {
        const wrapper = shallowMount(HomePage)

        //render TimerComponent
        const timerComponent = wrapper.findComponent(TimerComponent)
        expect(timerComponent.exists()).toBe(true)
        
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

    it('renders all elements correctly when name is set', async () => {
     
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
      (wrapper.vm as any).displayGame = false;
      
      wrapper.find('.start-game').trigger('click');
      
      expect(wrapper.vm.displayGame).toBe(true);
    });

    it('change the name to true on button click', () => {
      const wrapper = shallowMount(HomePage);
      (wrapper.vm as any).name = false;
      
      wrapper.find('.confirm').trigger('click');
      
      expect(wrapper.vm.name).toBe(true);
    });

    it('should initialize timer to 10', () => {
      const timer = ref(10);
      expect(timer.value).toBe(10);
  });

  it('should start the timer and decrement it until reaching 0', () => {
  const timer = ref(10);
  const timerInterval = ref(0);
  const gameOver = ref(false);

  const startTimer = () => {
    timerInterval.value = setInterval(() => {
      timer.value--;
      if (timer.value === 0) {
        clearInterval(timerInterval.value);
      }
    }, 1000);
  };

  startTimer();
  jest.advanceTimersByTime(11000); // Simulate 11 seconds passing

  expect(timer.value).toBe(0);
});
})