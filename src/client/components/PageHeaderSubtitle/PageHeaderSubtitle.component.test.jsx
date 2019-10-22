import React from 'react';
import { shallow } from 'enzyme';

import PageHeaderSubtitle from './PageHeaderSubtitle.component';

import fixture from './PageHeaderSubtitle.component.fixture';

describe('Components', () => {
  describe('PageHeaderSubtitle', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PageHeaderSubtitle).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PageHeaderSubtitle).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PageHeaderSubtitle {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
