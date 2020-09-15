import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon.component';

import fixture from './Icon.component.fixture';

describe('Components', () => {
  describe('Icon', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Icon).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Icon).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Icon {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
