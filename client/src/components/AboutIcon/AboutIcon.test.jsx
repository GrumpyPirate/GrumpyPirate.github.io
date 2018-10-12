import React from 'react';
import { shallow } from 'enzyme';

import AboutIcon from './AboutIcon';

it('renders without crashing', () => {
  const props = {
    iconName: 'test-icon-name',
    large: false,
  };

  shallow(<AboutIcon {...props} />);
});
