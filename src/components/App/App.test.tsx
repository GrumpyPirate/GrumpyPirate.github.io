import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Components', () => {
  describe('App', () => {
    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<App />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
