import { shallow } from 'enzyme';
import React from 'react';

import { withMockStore } from 'utils/testing';

import Sitenav from './Sitenav';

describe('Components', () => {
  describe('Sitenav', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockStore(<Sitenav />));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
