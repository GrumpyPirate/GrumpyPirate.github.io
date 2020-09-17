import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

import fixture from './Container.fixture';

describe('Components', () => {
  describe('Container', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Container {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
