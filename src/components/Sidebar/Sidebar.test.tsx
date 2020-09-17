import { shallow } from 'enzyme';
import React from 'react';

import { withMockStore } from 'utils/testing';

import Sidebar from './Sidebar';

describe('Components', () => {
  describe('Sidebar', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockStore(<Sidebar />));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
