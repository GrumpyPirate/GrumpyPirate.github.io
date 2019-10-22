import React from 'react';
import { shallow } from 'enzyme';

import PortfolioPageContent from './PortfolioPageContent.component';

import fixture from './PortfolioPageContent.component.fixture';

describe('Components', () => {
  describe('PortfolioPageContent', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PortfolioPageContent).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PortfolioPageContent).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioPageContent {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
