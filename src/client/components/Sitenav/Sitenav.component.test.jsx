import React from 'react';
import { shallow } from 'enzyme';

import Sitenav from './Sitenav.component';

describe('Components', () => {
  describe('Sitenav', () => {
    const props = {
      onNavLinkClick: jest.fn(),
    };

    it('should be defined', () => {
      expect(Sitenav).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Sitenav).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Sitenav {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
