import React from 'react';
import {shallow} from 'enzyme';
import Logo from '../Logo';

test('should render Logo correctlly', () => {
  const wrapper = shallow(<Logo />);
  expect(wrapper).toMatchSnapshot();
});
