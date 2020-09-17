import { shallow } from 'enzyme';
import React from 'react';

import PageHeaderSubtitle from './PageHeaderSubtitle';
import fixture from './PageHeaderSubtitle.fixture';

describe('Components', () => {
  describe('PageHeaderSubtitle', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PageHeaderSubtitle {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
