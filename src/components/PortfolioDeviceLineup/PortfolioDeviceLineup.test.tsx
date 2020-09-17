import { shallow } from 'enzyme';
import React from 'react';

import PortfolioDeviceLineup from './PortfolioDeviceLineup';
import fixture from './PortfolioDeviceLineup.fixture';

describe('Components', () => {
  describe('PortfolioDeviceLineup', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioDeviceLineup {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
