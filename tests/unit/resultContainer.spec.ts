import { shallowMount } from "@vue/test-utils";
import ResultContainer from "@/components/ResultContainer.vue";

describe('ResultContainer', () => {
    it('renders sthe final message correctly', () => {
        const finalMessage = 'You won!';
        const wrapper = shallowMount(ResultContainer, {
            props: {
            finalMessage,
            randomChoice: 'rock',
            playerMove: 'scissors'}
        });

        expect(wrapper.find('h5').text()).toBe(finalMessage);
    })

    it('displays playerMove image correctly', () => {
        const playerMove = 'rock';
        const wrapper = shallowMount(ResultContainer, {
          propsData: { playerMove },
        });
    
        const playerMoveImage = wrapper.find('.player-move');
        expect(playerMoveImage.attributes('src')).toBe(`../assets/images/${playerMove}.png`);
        expect(playerMoveImage.attributes('alt')).toBe(playerMove);
      });
    
      it('displays randomChoice image correctly', () => {
        const randomChoice = 'scissors';
        const wrapper = shallowMount(ResultContainer, {
          propsData: { randomChoice },
        });
    
        const randomChoiceImage = wrapper.find('.computer-move');
        expect(randomChoiceImage.attributes('src')).toBe(`../assets/images/${randomChoice}.png`);
        expect(randomChoiceImage.attributes('alt')).toBe(randomChoice);
      });
    
      it('generates correct image path', () => {
        const wrapper = shallowMount(ResultContainer);
    
        const move = 'paper';
        const imagePath = (wrapper.vm as any).getImagePath(move);
    
        expect(imagePath).toBe(`../assets/images/${move}.png`);
      });
})