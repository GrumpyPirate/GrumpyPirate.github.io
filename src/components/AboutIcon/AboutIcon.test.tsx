import { shallow } from 'enzyme';
import React from 'react';

import AboutIcon from './AboutIcon';
import fixture from './AboutIcon.fixture';

describe('Components', () => {
  describe('AboutIcon', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<AboutIcon {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
