import React from 'react';
import { shallow } from 'enzyme';

import PortfolioDeviceLineup from './PortfolioDeviceLineup';

describe('<PortfolioDeviceLineup />', () => {
  it('renders without crashing', () => {
    shallow(<PortfolioDeviceLineup />);
  });
});
