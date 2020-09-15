import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container.component';

import fixture from './Container.component.fixture';

describe('Components', () => {
  describe('Container', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Container).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Container).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Container {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
