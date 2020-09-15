import React from 'react';
import { shallow } from 'enzyme';

import Portfolio from './Portfolio.component';

import fixture from './Portfolio.component.fixture';

describe('Components', () => {
  describe('Portfolio', () => {
    const props = {
      ...fixture,
      requestPortfolioItems: jest.fn(),
    };

    it('should be defined', () => {
      expect(Portfolio).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Portfolio).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Portfolio {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
