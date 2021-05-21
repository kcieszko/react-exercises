import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });
  it('should render 0, when prop "start" is not passed', () => {
    expect(wrapper.find('strong').text()).toBe('0');
  });
  it('should render 10, when prop "start" with value of 10 is passed', () => {
    wrapper = shallow(<Counter start='10' />);
    expect(wrapper.find('strong').text()).toBe('10');
  });
  it('should have increment and decrement button', () => {
    expect(wrapper.find('#incr-btn').exists()).toEqual(true);
    expect(wrapper.find('#decr-btn').exists()).toEqual(true);
  });
  it('should increment counter', () => {
    let counter = wrapper.find('strong');

    wrapper.find('#incr-btn').simulate('click');
    wrapper.find('#incr-btn').simulate('click');
    wrapper.find('#incr-btn').simulate('click');
    counter = wrapper.find('strong');
    expect(counter.text()).toBe('3');
  });
  it('should decrement counter', () => {
    let counter = wrapper.find('strong');
    wrapper.find('#decr-btn').simulate('click');
    wrapper.find('#decr-btn').simulate('click');
    counter = wrapper.find('strong');
    expect(counter.text()).toBe('-2');
  });
  it('should set input value, change counter value after "change" button click and reset counter value after "reset" button click', () => {
    let input = wrapper.find('input');
    let counter = wrapper.find('strong');
    input.simulate('change', { target: { value: '4' } });
    input = wrapper.find('input');
    expect(input.props().value).toBe(4);

    const changeBtn = wrapper.find('#change-btn');
    changeBtn.simulate('click');
    counter = wrapper.find('strong');
    expect(counter.text()).toBe('4');

    const resetBtn = wrapper.find('#reset-btn');
    resetBtn.simulate('click');
    counter = wrapper.find('strong');
    expect(counter.text()).toBe('0');
  });
});
