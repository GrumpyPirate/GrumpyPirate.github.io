import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer.component';

describe('Components', () => {
  describe('Footer', () => {
    it('should be defined', () => {
      expect(Footer).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Footer).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Footer />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
