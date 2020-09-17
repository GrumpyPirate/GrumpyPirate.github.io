import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

import fixture from './Icon.fixture';

describe('Components', () => {
  describe('Icon', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Icon {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
