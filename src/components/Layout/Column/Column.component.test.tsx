import React from 'react';
import { shallow } from 'enzyme';

import Column from './Column.component';

import fixture from './Column.component.fixture';

describe('Components', () => {
  describe('Column', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Column).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Column).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Column {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
