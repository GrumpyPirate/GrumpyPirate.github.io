import React from 'react';
import { shallow } from 'enzyme';

import Page from './Page';

import fixture from './Page.fixture';

describe('Components', () => {
  describe('Page', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Page {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
