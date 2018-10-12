import React from 'react';
import { shallow } from 'enzyme';

import Carousel from './Carousel';

it('renders without crashing', () => {
  const props = {
    children: <div>Test</div>,
  };

  shallow(<Carousel {...props} />);
});
