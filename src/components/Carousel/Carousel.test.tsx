import { shallow } from 'enzyme';
import React from 'react';

import Carousel from './Carousel';
import fixture from './Carousel.fixture';

describe('Components', () => {
  describe('Carousel', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Carousel {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
