import { shallowMount } from "@vue/test-utils";
import AppVue from "@/App.vue";

describe('App.vue', () => {
    it('renders correctly all components', () => {
        const wrapper = shallowMount(AppVue)
        const titleElement = wrapper.find('h1')
        expect(titleElement.exists()).toBe(true)
        expect(titleElement.text()).toBe('Rock Paper Scissors')
    })
})