import {shallow} from 'enzyme';
import {Jotto} from 'src/components';
import {findByDataTestAttr} from 'src/test';
import {PropsType} from '../types';

const setup = (props: PropsType = {success: false, guessedWords: []}) => {
  return shallow(<Jotto {...props} />)
};

test(`component <Jotto /> render without error`, () => {
  const wrapper = setup();
  const component = findByDataTestAttr(wrapper, `component-jotto`);
  expect(component).toHaveLength(1);
});
