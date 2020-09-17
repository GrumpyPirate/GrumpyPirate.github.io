import { shallow } from 'enzyme';
import React from 'react';

import Column from './Column';
import fixture from './Column.fixture';

describe('Components', () => {
  describe('Column', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Column {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
