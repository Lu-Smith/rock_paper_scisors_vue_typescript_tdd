import { shallowMount } from "@vue/test-utils";
import TimeComponent from "@/components/TimeComponent.vue";

describe('TimeComponent', () => {
    it('renders all components correctly', () => {
        const wrapper = shallowMount(TimeComponent);

        const timeElement = wrapper.find('h3');
        expect(timeElement.exists()).toBe(true);

        const spanElement = timeElement.find('span');
        expect(spanElement.exists()).toBe(true);
    })
})