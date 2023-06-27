import { shallowMount } from "@vue/test-utils";
import FooterComponent from "@/components/FooterComponent.vue";

describe('FooterComponent', () => {
    it('renders correct links', () => {
        const wrapper = shallowMount(FooterComponent)

        //h3 element
        const footerElement = wrapper.find('h3')
        expect(footerElement.exists()).toBe(true)
        expect(footerElement.text()).toBe('This software was coded by Luna Smith and is available as an open-source project on GitHub.')
        
        //profile link
        const profileLink = footerElement.find('a.profile-link')
        expect(profileLink.exists()).toBe(true)
        expect(profileLink.text()).toBe('Luna Smith')
        expect(profileLink.attributes('href')).toBe('https://www.lunasmithart.com/')
        expect(profileLink.attributes('target')).toBe('_blank')
       
        //gitHub link
        const gitHubLink = footerElement.find('a.gitHub-link')
        expect(gitHubLink.exists()).toBe(true)
        expect(gitHubLink.text()).toBe('GitHub')
        expect(gitHubLink.attributes('href')).toBe('https://github.com/Lu-Smith/rock_paper_scisors_vue_typescript_tdd')
        expect(gitHubLink.attributes('target')).toBe('_blank')
    })
})

