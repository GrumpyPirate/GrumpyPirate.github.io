import React from 'react';
import { shallow } from 'enzyme';

import PortfolioList from './PortfolioList';

describe('<PortfolioList />', () => {
  it('renders without crashing', () => {
    const minProps = {
      items: [],
    };

    shallow(<PortfolioList {...minProps} />);
  });
});
