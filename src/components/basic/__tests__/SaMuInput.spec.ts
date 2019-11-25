import 'jest';
import { shallowMount } from '@vue/test-utils';
import SaMuInput from '../SaMuInput.vue';

describe('Salve Mundi Input', () => {
  it('Correctly renders', () => {
    const value = 'value';
    const name = 'name';
    const autocomplete = 'off';
    const type = 'password';
    const placeholder = 'secret password';

    const wrapper = shallowMount(SaMuInput, {
      propsData: {
        placeholder,
        type,
        value,
        name,
        autocomplete,
      },
    });

    // Test value prop
    expect(wrapper.props('value')).toMatch(value);

    // Test name prop
    expect(wrapper.props('name')).toMatch(name);
    expect(wrapper.html()).toContain('name="' + name + '"');

    // Test autocomplete prop
    expect(wrapper.props('autocomplete')).toMatch(autocomplete);
    expect(wrapper.html()).toContain('autocomplete="' + autocomplete + '"');

    // Test type prop
    expect(wrapper.props('type')).toMatch(type);
    expect(wrapper.html()).toContain('type="' + type + '"');

    // Test placeholder prop
    expect(wrapper.props('placeholder')).toMatch(placeholder);
    expect(wrapper.html()).toContain('placeholder="' + placeholder + '"');

    // Test classes
    expect(wrapper.html()).toContain('class="SaMuInput"');
  });

  it('Correctly renders without type defined', () => {
    const value = 'value';
    const name = 'name';
    const type = 'text';
    const placeholder = 'some text';

    const wrapper = shallowMount(SaMuInput, {
      propsData: {
        placeholder,
        value,
        name,
      },
    });

    // Test value prop
    expect(wrapper.props('value')).toMatch(value);

    // Test name prop
    expect(wrapper.props('name')).toMatch(name);
    expect(wrapper.html()).toContain('name="' + name + '"');

    // Test type prop
    expect(wrapper.props('type')).toBeUndefined();
    expect(wrapper.html()).toContain('type="' + type + '"');

    // Test placeholder prop
    expect(wrapper.props('placeholder')).toMatch(placeholder);
    expect(wrapper.html()).toContain('placeholder="' + placeholder + '"');

    // Test classes
    expect(wrapper.html()).toContain('class="SaMuInput"');
  });
});
