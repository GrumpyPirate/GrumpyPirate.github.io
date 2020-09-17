import { shallow } from 'enzyme';
import React from 'react';

import { withMockStore } from 'utils/testing';

import PortfolioPage from './PortfolioPage';

describe('Components', () => {
  describe('Portfolio', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockStore(<PortfolioPage />));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
