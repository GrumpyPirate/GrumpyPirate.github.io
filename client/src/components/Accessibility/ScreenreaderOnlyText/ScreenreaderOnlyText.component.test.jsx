import React from 'react';
import { shallow } from 'enzyme';

import ScreenreaderOnlyText from './ScreenreaderOnlyText.component';

import fixture from './ScreenreaderOnlyText.component.fixture';

describe('Components', () => {
  describe('ScreenreaderOnlyText', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(ScreenreaderOnlyText).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof ScreenreaderOnlyText).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<ScreenreaderOnlyText {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
