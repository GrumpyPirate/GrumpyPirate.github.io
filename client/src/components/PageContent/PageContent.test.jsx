import React from 'react';
import { shallow } from 'enzyme';

import PageContent from './PageContent';

describe('<PageContent />', () => {
  it('renders without crashing', () => {
    const props = {
      children: <div>Test</div>,
    };

    shallow(<PageContent {...props} />);
  });
});
