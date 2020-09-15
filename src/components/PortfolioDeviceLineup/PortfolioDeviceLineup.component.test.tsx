import React from 'react';
import { shallow } from 'enzyme';

import PortfolioDeviceLineup from './PortfolioDeviceLineup.component';

import fixture from './PortfolioDeviceLineup.component.fixture';

describe('Components', () => {
  describe('PortfolioDeviceLineup', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PortfolioDeviceLineup).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PortfolioDeviceLineup).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioDeviceLineup {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
