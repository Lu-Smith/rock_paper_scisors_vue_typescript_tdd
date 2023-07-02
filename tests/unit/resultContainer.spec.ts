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
          props: { playerMove, finalMessage: "Tie",
            randomChoice: 'rock', },
        });
    
        const playerMoveImage = wrapper.find('.player-move');
        expect(playerMoveImage.attributes('alt')).toBe(playerMove);
      });
    
      it('displays randomChoice image correctly', () => {
        const randomChoice = 'scissors';
        const wrapper = shallowMount(ResultContainer, {
          props: { randomChoice, playerMove: "rock", finalMessage: "You won!", },
        });
    
        const randomChoiceImage = wrapper.find('.computer-move');
        expect(randomChoiceImage.attributes('alt')).toBe(randomChoice);
      });
})