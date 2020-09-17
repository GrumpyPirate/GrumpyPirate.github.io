import { shallow } from 'enzyme';
import React from 'react';

import Button from './Button';
import fixture from './Button.fixture';

describe('Components', () => {
  describe('Button', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Button {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
