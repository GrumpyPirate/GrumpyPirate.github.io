import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel.component';

import fixture from './Carousel.component.fixture';

describe('Components', () => {
  describe('Carousel', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Carousel).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Carousel).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Carousel {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
