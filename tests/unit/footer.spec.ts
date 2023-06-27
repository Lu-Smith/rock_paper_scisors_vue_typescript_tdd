import { shallowMount } from "@vue/test-utils";
import FooterComponent from "@/components/FooterComponent.vue";

describe('FooterComponent', () => {
    it('renders correct links', () => {
        const wrapper = shallowMount(FooterComponent)

        //h3 element
        const footerElement = wrapper.find('h3')
        expect(footerElement.exists()).toBe(true)
        expect(footerElement.text()).toBe('Coded by Luna Smith, open source on GitHub.')
        
        //profile link
        //GitHub link
    })
})

