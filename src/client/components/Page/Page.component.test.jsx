import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page.component';

import fixture from './Page.component.fixture';

describe('Components', () => {
  describe('Page', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Page).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Page).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Page {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
