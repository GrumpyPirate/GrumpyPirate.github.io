import React from 'react';
import { shallow } from 'enzyme';

import PortfolioPageHeader from './PortfolioPageHeader';

import fixture from './PortfolioPageHeader.fixture';

describe('Components', () => {
  describe('PortfolioPageHeader', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PortfolioPageHeader {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
