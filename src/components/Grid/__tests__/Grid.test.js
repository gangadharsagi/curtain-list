import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { Grid } from '../Grid';

describe('Grid', () => {
  it('should render component', () => {
    const wrapper = shallow(
      <Grid />,
    );
    const expected = wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
