import { shallowMount } from "@vue/test-utils";
import HomePage from "@/components/HomePage.vue";
import MainGame from "@/components/MainGame.vue";
import TimerComponent from "@/components/TimerComponent.vue"
import { ref } from 'vue'

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

    it('should initialize timer to 10', () => {
      const timer = ref(10);
      expect(timer.value).toBe(10);
  });

  it('should start the timer and decrement it until reaching 0', () => {
    const timer = ref(10);
    const timerInterval = ref(0);
    const timeOver = ref(false);
    // const playerName = ref("Max");
    const displayGame = ref(true);

    const startTimer = () => {
      timerInterval.value = setInterval(() => {
        timer.value--;
        if (timer.value === 0) {
          clearInterval(timerInterval.value);
          displayGame.value = false;
          timeOver.value = true;
        }
      }, 1000);
    };

    startTimer();
    jest.advanceTimersByTime(11000); // Simulate 11 seconds passing

    expect(timer.value).toBe(0);
    expect(timeOver.value).toBe(true);
    expect(displayGame.value).toBe(false);
});

it('submits name correctly', async () => {
  const wrapper = shallowMount(HomePage);

  await wrapper.find('input[type="text"]').setValue('John');
  await wrapper.find('.confirm').trigger('click');

  expect(wrapper.vm.name).toBe(true);
    //players name
    const playerElement = wrapper.find('div.player')
    expect(playerElement.exists()).toBe(false)
    expect(wrapper.find("div.welcome-message").exists()).toBe(true);
    expect(wrapper.find("div.welcome-message").text()).toContain(`Welcome, John!`);
    
    //startGame button
    const startGameButton = wrapper.find('button.start-game')
    expect(startGameButton.exists()).toBe(true)
    expect(startGameButton.text()).toBe('Start')

})

it('starts the game correctly', async () => {
  const wrapper = shallowMount(HomePage);

  (wrapper.vm as any).playerName = 'John Doe';
  await wrapper.vm.$nextTick();

  await wrapper.find('.start-game').trigger('click');

  expect(wrapper.vm.displayGame).toBe(true);
  expect(wrapper.findComponent(MainGame).exists()).toBe(true);
});

})