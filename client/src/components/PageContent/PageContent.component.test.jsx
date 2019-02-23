import React from 'react';
import { shallow } from 'enzyme';

import PageContent from './PageContent.component';

import fixture from './PageContent.component.fixture';

describe('Components', () => {
  describe('PageContent', () => {
    const props = {
      ...fixture,
    };

    it('should be defined', () => {
      expect(PageContent).toBeDefined();
    });

    it('should be a function', () => {
      expect(typeof PageContent).toBe('function');
    });

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PageContent {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
