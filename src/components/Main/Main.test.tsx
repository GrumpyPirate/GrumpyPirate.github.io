import { shallow } from 'enzyme';
import React from 'react';

import { withMockRouter, withMockStore } from 'utils/testing';

import Main from './Main';

describe('Components', () => {
  describe('Main', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockRouter(withMockStore(<Main />)));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
