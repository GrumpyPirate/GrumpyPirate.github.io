import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from './PageHeader';

describe('<PageHeader />', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'test title',
    };

    shallow(<PageHeader {...props} />);
  });
});
