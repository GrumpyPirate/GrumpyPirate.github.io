import React from 'react';
import { shallow } from 'enzyme';

import PageHeaderSubtitle from './PageHeaderSubtitle';

describe('<PageHeaderSubtitle />', () => {
  it('renders without crashing', () => {
    shallow(<PageHeaderSubtitle />);
  });
});
