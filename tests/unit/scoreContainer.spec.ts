import { shallowMount } from "@vue/test-utils";
import ScoreContainer from "@/components/ScoreContainer.vue";

describe('ScoreContainer', () => {
    it('renders all elements correctly', () => {
        const wrapper = shallowMount(ScoreContainer)

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
    })
})