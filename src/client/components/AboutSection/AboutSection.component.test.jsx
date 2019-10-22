import React from 'react';
import { shallow } from 'enzyme';

import AboutSection from './AboutSection.component';

import fixture from './AboutSection.component.fixture';

describe('Components', () => {
  describe('AboutSection', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(AboutSection).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof AboutSection).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<AboutSection {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
