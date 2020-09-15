import React from 'react';
import { shallow } from 'enzyme';

import About from './About.component';

import fixture from './About.component.fixture';

describe('Components', () => {
  describe('About', () => {
    const props = {
      ...fixture,
      aboutSectionsRequest: jest.fn(),
    };

    it('should be defined', () => {
      expect(About).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof About).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<About {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
