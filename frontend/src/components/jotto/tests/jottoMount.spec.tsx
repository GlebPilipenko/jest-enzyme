import {mount} from 'enzyme';
import {Jotto} from 'src/components';
import {findByDataTestAttr} from 'src/test';

const setup = (state = {}) => {
  let wrapper: any = mount(<Jotto {...state} />)

  const inputBox = findByDataTestAttr(wrapper, `input-box`);
  inputBox.simulate(`change`, {currentTarget: {value: `train`}});

  const submitButton = findByDataTestAttr(wrapper, `submit-button`);
  inputBox.simulate(`change`, {preventDefault() {}});

  console.log(wrapper.debug());
  return wrapper;
};

test(`qwerty`, () => {

});
