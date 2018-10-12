import React from 'react';
import { shallow } from 'enzyme';

import PageContainer from './PageContainer';

describe('<PageContainer />', () => {
  it('renders without crashing', () => {
    const props = {
      children: <div>Test</div>,
    };

    shallow(<PageContainer {...props} />);
  });
});
