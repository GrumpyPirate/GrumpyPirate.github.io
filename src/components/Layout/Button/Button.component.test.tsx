import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button.component';

import fixture from './Button.component.fixture';

describe('Components', () => {
  describe('Button', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Button).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Button).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
