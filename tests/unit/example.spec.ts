import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe('Home has only one component', () => {
  it('check home view has component', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find(HelloWorld).exists()).toBeTruthy();
  });
});
