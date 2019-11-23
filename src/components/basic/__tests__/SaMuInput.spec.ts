import 'jest';
import { shallowMount } from '@vue/test-utils';
import SaMuInput from '../SaMuInput.vue'

describe('Salve Mundi Input', () => {
    test("Correctly renders", () => {
        const msg = "new message";
        const wrapper = shallowMount(SaMuInput, {
          propsData: { 
            placeholder: 'test',
            type: 'text',
            value: 'jojo',
            name: 'Test',
            autocomplete: 'off'
           }
        });
        console.log(wrapper.text())
        expect(wrapper.find('input').text()).toMatch('jojo');
      });
});