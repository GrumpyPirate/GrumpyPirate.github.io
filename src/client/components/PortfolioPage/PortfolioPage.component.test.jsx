import React from 'react';
import { shallow } from 'enzyme';

import PortfolioPage from './PortfolioPage.component';

import fixture from './PortfolioPage.component.fixture';

describe('Components', () => {
  describe('PortfolioPage', () => {
    const props = {
      ...fixture,
      history: {
        push: jest.fn(),
      },
      requestPortfolioItems: jest.fn(),
    };

    it('should be defined', () => {
      expect(PortfolioPage).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PortfolioPage).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioPage {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
