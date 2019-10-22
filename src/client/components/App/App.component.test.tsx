import React from 'react';
import { shallow } from 'enzyme';

import App from './App.component';

describe('Components', () => {
  describe('App', () => {
    it('should be defined', () => {
      expect(App).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof App).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<App />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
