import React, {Component, useState} from 'react';
import {Input} from 'src/components';
import {InputPropsType} from '../types';
import {findByDataTestAttr} from 'src/test';
import {shallow, ShallowWrapper} from 'enzyme';

type OriginalUseStateType = {
  <S>(initialState: ((() => S) | S)): [S, React.Dispatch<React.SetStateAction<S>>];
  <S = undefined>(): [(S | undefined), React.Dispatch<React.SetStateAction<S | undefined>>]
}

const setup = (props: InputPropsType = {success: false}) => {
  return shallow(<Input {...props} />)
};

describe(`render <Input />`, () => {
  describe(`success is false`, () => {
    let wrapper: ShallowWrapper<{}, Component['state'], Component>;

    beforeEach(() => {
      wrapper = setup({success: false});
    });

    test(`<Input /> render without error`, () => {
      const component = findByDataTestAttr(wrapper, `component-input`);
      expect(component).toHaveLength(1);
    });
    test(`input box show`, () => {
      const component = findByDataTestAttr(wrapper, `input-box`);
      expect(component.exists()).toBe(true);
    });
    test(`submit button show`, () => {
      const component = findByDataTestAttr(wrapper, `submit-button`);
      expect(component.exists()).toBe(true);
    });
  });

  describe(`success is true`, () => {
    let wrapper: ShallowWrapper<{}, Component['state'], Component>;

    beforeEach(() => {
      wrapper = setup({success: true});
    });

    test(`<Input /> render without error`, () => {
      const component = findByDataTestAttr(wrapper, `component-input`);
      expect(component).toHaveLength(1);
    });
    test(`input box doesn't show`, () => {
      const component = findByDataTestAttr(wrapper, `input-box`);
      expect(component.exists()).toBe(false);
    });
    test(`submit button doesn't show`, () => {
      const component = findByDataTestAttr(wrapper, `submit-button`);
      expect(component.exists()).toBe(false);
    });
  });
});

describe(`state controlled input field`, () => {
  // create mockFunction
  const mockSetCurrentGuess = jest.fn();
  let wrapper: ShallowWrapper<{}, Component['state'], Component>;
  let originalUseState: OriginalUseStateType;

  beforeEach(() => {
    // clear mockSetCurrentGuess by last tests
    mockSetCurrentGuess.mockClear();
    originalUseState = useState;
    // React.useState return array with:
    // start value and function who change start value
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  })

  afterEach(() => {
    React.useState = originalUseState;
  });

  test(`components <Congrats /> render without error`, () => {
    const component = findByDataTestAttr(wrapper, `component-input`);
    expect(component).toHaveLength(1);
  });

  test(`state updates with value of input box upon change`, () => {
    const inputBox = findByDataTestAttr(wrapper, `input-box`);
    // create mockEvent with object { ... }
    const mockEvent = {currentTarget: {value: `train`}};
    // simulate change event, and add mockEvent,
    // mockEvent === e: ChangeEvent< ... >
    inputBox.simulate(`change`, mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith(`train`);
  });

  test(`field is cleared upon submit button click`, () => {
    const submitButton = findByDataTestAttr(wrapper, `submit-button`);
    submitButton.simulate(`click`, {preventDefault() {}});
    expect(mockSetCurrentGuess).toHaveBeenCalledWith(``);
  });
});
