import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './Sidebar.component';

import fixture from './Sidebar.component.fixture';

describe('Components', () => {
  describe('Sidebar', () => {
    const props = {
      ...fixture,
      toggleMobileNavigation: jest.fn(),
    };

    it('should be defined', () => {
      expect(Sidebar).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Sidebar).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Sidebar {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
