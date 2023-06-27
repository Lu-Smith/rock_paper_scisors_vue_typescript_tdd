import { shallowMount } from "@vue/test-utils";
import AppVue from "@/App.vue";
import HomePage from "@/components/HomePage.vue";

describe('App.vue', () => {
    it('renders correctly all components', () => {
        const wrapper = shallowMount(AppVue)
        const titleElement = wrapper.find('h1')
        expect(titleElement.exists()).toBe(true)
        expect(titleElement.text()).toBe('Rock Paper Scissors')
    })

    it('renders all components', () => {
        const wrapper = shallowMount(AppVue)
        const homeElement = wrapper.findComponent(HomePage)
        expect(homeElement.exists()).toBe(true)
        
    })
})