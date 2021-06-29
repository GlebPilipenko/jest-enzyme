import {shallow} from 'enzyme';
import {Congrats} from 'src/components';
import {CongratsPropsType} from '../types';
import {findByDataTestAttr} from 'src/test';

const defaultProps = {success: false};

const setup = (props: CongratsPropsType = defaultProps) => {
  return shallow(<Congrats {...props}/>)
};

describe(`test <Congrats /> component`, () => {
  test(`components <Congrats /> render without error`, () => {
    const wrapper = setup();
    const component = findByDataTestAttr(wrapper, `components-congrats`);
    expect(component).toHaveLength(1)
   })

  test(`should be empty string if success - false`, () => {
    const wrapper = setup({success: false});
    const component = findByDataTestAttr(wrapper, `components-congrats`);
    expect(component.text()).toBe('');
  })

  test(`should be text length if success - true`, () => {
    const wrapper = setup({success: true});
    const component = findByDataTestAttr(wrapper, `congrats-message`);
    expect(component.text()).toBe(`Congratulations! You guessed the world!`);
  })
})
