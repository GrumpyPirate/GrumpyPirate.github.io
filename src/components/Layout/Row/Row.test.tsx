import { shallow } from 'enzyme';
import React from 'react';

import Row from './Row';
import fixture from './Row.fixture';

describe('Components', () => {
  describe('Row', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const wrapper = shallow(<Row {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
