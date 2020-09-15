import React from 'react';
import { shallow } from 'enzyme';

import PortfolioPageHeader from './PortfolioPageHeader.component';

import fixture from './PortfolioPageHeader.component.fixture';

describe('Components', () => {
  describe('PortfolioPageHeader', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PortfolioPageHeader).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PortfolioPageHeader).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioPageHeader {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
