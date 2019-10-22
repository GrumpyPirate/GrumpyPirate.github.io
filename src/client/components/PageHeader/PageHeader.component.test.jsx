import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from './PageHeader.component';

import fixture from './PageHeader.component.fixture';

describe('Components', () => {
  describe('PageHeader', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PageHeader).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PageHeader).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PageHeader {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
