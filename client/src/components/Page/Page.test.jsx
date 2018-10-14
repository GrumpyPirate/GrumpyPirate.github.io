import React from 'react';
import shallow from 'enzyme/shallow';

import Page from './Page';

describe('Component: Page', () => {
  const props = {
    children: <div>Test content</div>,
  };

  it('should render as expected, without crashing', () => {
    const wrapper = shallow(<Page {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
