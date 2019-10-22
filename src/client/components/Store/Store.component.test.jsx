import React from 'react';
import { shallow } from 'enzyme';

import Store from './Store.component';

import fixture from './Store.component.fixture';

describe('Components', () => {
  describe('Store', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Store).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Store).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Store {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
