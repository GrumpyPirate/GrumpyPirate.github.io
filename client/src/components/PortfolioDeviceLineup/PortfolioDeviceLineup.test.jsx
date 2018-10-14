import React from 'react';
import { shallow } from 'enzyme';

import PortfolioDeviceLineup from './PortfolioDeviceLineup';

describe('<PortfolioDeviceLineup />', () => {
  it('renders without crashing', () => {
    const props = {
      desktop: <div>Test1</div>,
      tablet: <div>Test2</div>,
      mobile: <div>Test3</div>,
    };

    shallow(<PortfolioDeviceLineup {...props} />);
  });
});
