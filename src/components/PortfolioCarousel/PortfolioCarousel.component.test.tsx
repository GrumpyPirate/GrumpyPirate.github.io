import React from 'react';
import { shallow } from 'enzyme';

import PortfolioCarousel from './PortfolioCarousel.component';

import fixture from './PortfolioCarousel.component.fixture';

describe('Components', () => {
  describe('PortfolioCarousel', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PortfolioCarousel).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PortfolioCarousel).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioCarousel {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
