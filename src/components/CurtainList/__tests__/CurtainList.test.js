import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CurtainList } from '../CurtainList';
Enzyme.configure({ adapter: new Adapter() });

describe('CurtainList', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <CurtainList />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
