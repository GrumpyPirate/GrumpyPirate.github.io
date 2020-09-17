import React from 'react';
import { shallow } from 'enzyme';

import HTTPNotFoundPage from './HTTPNotFoundPage';

describe('Components', () => {
  describe('HTTPNotFoundPage', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<HTTPNotFoundPage />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
