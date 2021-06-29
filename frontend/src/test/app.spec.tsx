import {App} from '../App';
import {shallow} from 'enzyme';
import {findByDataTestAttr} from './index'

const setup = () => shallow(<App />);

test(`components <App /> render without error`, () => {
  const wrapper = setup();
  const appComponent = findByDataTestAttr(wrapper, `container-app`);
  expect(appComponent).toHaveLength(1);
});
