import { shallow } from 'enzyme';
import React from 'react';

import { withMockStore } from 'utils/testing';

import Spinner from './Spinner';

describe('Components', () => {
  describe('Spinner', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(withMockStore(<Spinner />));

      expect(wrapper).toMatchSnapshot();
    });
  });
});
