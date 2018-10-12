import React from 'react';
import { shallow } from 'enzyme';

import PortfolioPageContent from './PortfolioPageContent';

describe('<PortfolioPageContent />', () => {
  it('renders without crashing', () => {
    const props = {
      children: <div>Test</div>,
    };

    shallow(<PortfolioPageContent {...props} />);
  });
});
