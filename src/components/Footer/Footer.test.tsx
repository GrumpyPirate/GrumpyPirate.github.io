import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Components', () => {
  describe('Footer', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Footer />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
