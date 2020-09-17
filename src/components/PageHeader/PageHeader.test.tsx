import { shallow } from 'enzyme';
import React from 'react';

import PageHeader from './PageHeader';
import fixture from './PageHeader.fixture';

describe('Components', () => {
  describe('PageHeader', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<PageHeader {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
