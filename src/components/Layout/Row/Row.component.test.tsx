import React from 'react';
import { shallow } from 'enzyme';

import Row from './Row.component';

import fixture from './Row.component.fixture';

describe('Components', () => {
  describe('Row', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Row).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Row).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Row {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
