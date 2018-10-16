import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('<Heading />', () => {
  const props = {
    text: 'Test',
  };

  it('should be defined', () => {
    expect(Heading).toBeDefined();
  });

  it('should be a component', () => {
    expect(typeof Heading).toBe('function');
  });

  describe('props: level', () => {
    it('should render an h5 element, by default', () => {
      const wrapper = shallow(<Heading {...props} />);
      expect(wrapper.find('h5').exists()).toBe(true);
    });

    it('should render appropriate heading elements, when given level props of 1-6', () => {
      [1, 2, 3, 4, 5, 6].forEach((level) => {
        const wrapper = shallow(<Heading {...{ ...props, level }} />);
        expect(wrapper.find(`h${level}`).exists()).toBe(true);
      });
    });

    it('should render heading elements with appropriate classes, when given level props of 1-6', () => {
      [1, 2, 3, 4, 5, 6].forEach((level) => {
        const wrapper = shallow(<Heading {...{ ...props, level }} />);
        expect(wrapper.hasClass(`heading--level-${level}`)).toBe(true);
      });
    });
  });
});
