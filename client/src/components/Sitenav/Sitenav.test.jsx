import React from 'react';
import { shallow } from 'enzyme';

import Sitenav from './Sitenav';

describe('<Sitenav />', () => {
  it('renders without crashing', () => {
    shallow(<Sitenav />);
  });
});
