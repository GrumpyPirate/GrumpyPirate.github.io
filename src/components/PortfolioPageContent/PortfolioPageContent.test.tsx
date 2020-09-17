import { shallow } from 'enzyme';
import React from 'react';

import PortfolioPageContent from './PortfolioPageContent';
import fixture from './PortfolioPageContent.fixture';

describe('Components', () => {
  describe('PortfolioPageContent', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioPageContent {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
