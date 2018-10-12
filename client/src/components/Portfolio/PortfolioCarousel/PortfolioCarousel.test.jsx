import React from 'react';
import { shallow } from 'enzyme';

import PortfolioCarousel from './PortfolioCarousel';

describe('<PortfolioCarousel />', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioCarousel />);
  });
});
