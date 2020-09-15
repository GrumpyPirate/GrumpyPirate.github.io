import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner.component';

import fixture from './Spinner.component.fixture';

describe('Components', () => {
  describe('Spinner', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(Spinner).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof Spinner).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Spinner {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
