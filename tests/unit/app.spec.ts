import { shallowMount } from "@vue/test-utils";
import AppVue from "@/App.vue";
import HomePage from "@/components/HomePage.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import TimeComponent from "@/components/TimeComponent.vue";

describe('App.vue', () => {
    it('renders correctly all components', () => {
        const wrapper = shallowMount(AppVue)
        const titleElement = wrapper.find('h1')
        expect(titleElement.exists()).toBe(true)
        expect(titleElement.text()).toBe('Rock Paper Scissors')
        const footerElement = wrapper.find('footer')
        expect(footerElement.exists()).toBe(true)
    })

    it('renders all components', () => {
        const wrapper = shallowMount(AppVue)
        //HomePage component
        const homeElement = wrapper.findComponent(HomePage)
        expect(homeElement.exists()).toBe(true)
        //FooterComponent
        const footerElement = wrapper.findComponent(FooterComponent)
        expect(footerElement.exists()).toBe(true)
        //render TimerComponent
        const timeComponent = wrapper.findComponent(TimeComponent)
        expect(timeComponent.exists()).toBe(true)
        
    })
})