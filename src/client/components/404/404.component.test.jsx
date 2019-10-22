import React from 'react';
import { shallow } from 'enzyme';

import HTTPNotFound from './404.component';

describe('Components', () => {
  describe('HTTPNotFound', () => {
    it('should be defined', () => {
      expect(HTTPNotFound).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof HTTPNotFound).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<HTTPNotFound />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
