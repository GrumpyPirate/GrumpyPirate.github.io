import React from 'react';
import { shallow } from 'enzyme';

import AboutIcon from './AboutIcon.component';

import fixture from './AboutIcon.component.fixture';

describe('Components', () => {
  describe('AboutIcon', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(AboutIcon).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof AboutIcon).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<AboutIcon {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
