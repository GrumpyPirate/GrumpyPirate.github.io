import { shallow } from 'enzyme';
import React from 'react';

import PageContent from './PageContent';
import fixture from './PageContent.fixture';

describe('Components', () => {
  describe('PageContent', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PageContent {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
