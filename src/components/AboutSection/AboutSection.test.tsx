import React from 'react';
import { shallow } from 'enzyme';

import AboutSection from './AboutSection';

import fixture from './AboutSection.fixture';

describe('Components', () => {
  describe('AboutSection', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<AboutSection {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
