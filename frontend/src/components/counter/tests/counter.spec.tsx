import {shallow} from 'enzyme';
import {Counter} from 'src/components';
import {findByDataTestAttr} from 'src/test';

const setup = () => shallow(<Counter />);

describe(`test <Counter /> component`, () => {
  test(`components <Counter /> render without error`, () => {
    const wrapper = setup();
    const component = findByDataTestAttr(wrapper, `component-counter`);

    expect(component).toHaveLength(1);
  });

  test(`increment button render without error`, () => {
    const wrapper = setup();
    const incrementButton = findByDataTestAttr(wrapper, `increment-button`);

    expect(incrementButton).toHaveLength(1);
  });

  test(`decrement button render without error`, () => {
    const wrapper = setup();
    const decrementButton = findByDataTestAttr(wrapper, `decrement-button`);

    expect(decrementButton).toHaveLength(1);
  });

  test(`counter display render without error`, () => {
    const wrapper = setup();
    const counterDisplay = findByDataTestAttr(wrapper, `counter-display`);
    expect(counterDisplay).toHaveLength(1);
  });

  test(`counter display render with start value - 0`, () => {
    const wrapper = setup();
    const count = findByDataTestAttr(wrapper, `count`).text();
    expect(count).toBe(`0`);
  });

  test(`button increments worked correct`, () => {
    const wrapper = setup();
    const incrementButton = findByDataTestAttr(wrapper, `increment-button`);
    incrementButton.simulate(`click`);
    const count = findByDataTestAttr(wrapper, `count`).text();
    expect(count).toBe(`1`);
  });

  test(`button decrement worked correct`, () => {
    const wrapper = shallow(<Counter />);
    const decrementButton = findByDataTestAttr(wrapper, `decrement-button`);
    decrementButton.simulate(`click`);
    const count = findByDataTestAttr(wrapper, `count`).text();
    expect(count).toBe(`-1`);
  });
})
