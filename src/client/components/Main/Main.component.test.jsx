import React from 'react';
import { shallow } from 'enzyme';

import Main from './Main.component';

import fixture from './Main.component.fixture';

describe('Components', () => {
  describe('Main', () => {
    const props = {
      ...fixture,
      history: {
        listen: jest.fn(),
      },
      renderLocation: jest.fn(),
      closeMobileNavigation: jest.fn(),
    };

    it('should be defined', () => {
      expect(Main).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Main).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Main {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
