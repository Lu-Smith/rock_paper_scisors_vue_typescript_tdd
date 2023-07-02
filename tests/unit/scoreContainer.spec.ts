import { shallowMount } from "@vue/test-utils";
import ScoreContainer from "@/components/ScoreContainer.vue";

describe('ScoreContainer', () => {
    it('renders all elements correctly', async () => {

        const playerScore = 1;
        const computerScore = 2;


        const wrapper = shallowMount(ScoreContainer, {
            props: {
                playerScore,
                computerScore
            }
        });

        //score
        const scoreContainer = wrapper.find('div.score-container')
        expect(scoreContainer.exists()).toBe(true)
            const scoreElement = scoreContainer.find('h3.score')
            expect(scoreElement.exists()).toBe(true)
            expect(scoreElement.text()).toBe('Score:')
            const playerScoreContainer = scoreContainer.find('h4.player-score')
            expect(playerScoreContainer.exists()).toBe(true)
            expect(playerScoreContainer.text()).toContain(`You: ${playerScore}`)
            expect(playerScoreContainer.text()).toContain(`You: 1`)
            const computerScoreContainer = scoreContainer.find('h4.computer-score')
            expect(computerScoreContainer.exists()).toBe(true)
            expect(computerScoreContainer.text()).toContain(`Computer: ${computerScore}`)
            expect(computerScoreContainer.text()).toContain(`Computer: 2`)
            const totalScore = scoreContainer.find('h4.total-score')
            expect(totalScore.exists()).toBe(true)
            expect(totalScore.text()).toContain(`You won: ${ Math.floor(playerScore / (playerScore + computerScore) * 100) }% games.`)
            expect(totalScore.text()).toContain(`You won: ${ Math.floor(1 / (1 + 2) * 100) }% games.`)
    })
})