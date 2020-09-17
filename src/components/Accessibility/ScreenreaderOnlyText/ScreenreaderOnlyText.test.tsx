import { shallow } from 'enzyme';
import React from 'react';

import ScreenreaderOnlyText from './ScreenreaderOnlyText';
import fixture from './ScreenreaderOnlyText.fixture';

describe('Components', () => {
  describe('ScreenreaderOnlyText', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<ScreenreaderOnlyText {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
