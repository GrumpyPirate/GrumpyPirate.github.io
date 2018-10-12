import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

describe('<Icon />', () => {
  it('renders without crashing', () => {
    const props = {
      glyph: 'test-glyph',
      altText: 'test-alt',
    };

    shallow(<Icon {...props} />);
  });
});
