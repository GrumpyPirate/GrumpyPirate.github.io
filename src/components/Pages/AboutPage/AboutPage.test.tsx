import { shallow } from 'enzyme';
import React from 'react';

import { withMockStore } from 'utils/testing';

import AboutPage from './AboutPage';

describe('Components', () => {
  describe('About', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockStore(<AboutPage />));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
