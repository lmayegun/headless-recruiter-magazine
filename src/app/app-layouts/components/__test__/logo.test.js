import React from 'react';
import {shallow} from 'enzyme';
import Logo from '../Logo';

test('should render Logo correctlly', () => {
  const wrapper = shallow(<Logo brandDescription={false}/>);
  expect(wrapper).toMatchSnapshot();
});
