import React from 'react';
import { shallow } from 'enzyme';

import PortfolioCarousel from './PortfolioCarousel';

import fixture from './PortfolioCarousel.fixture';

describe('Components', () => {
  describe('PortfolioCarousel', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioCarousel {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
