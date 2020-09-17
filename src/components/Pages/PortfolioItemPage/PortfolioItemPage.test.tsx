import { shallow } from 'enzyme';
import React from 'react';

import { withMockRouter, withMockStore } from 'utils/testing';

import PortfolioItemPage from './PortfolioItemPage';

describe('Components', () => {
  describe('PortfolioPage', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockRouter(withMockStore(<PortfolioItemPage />)));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
