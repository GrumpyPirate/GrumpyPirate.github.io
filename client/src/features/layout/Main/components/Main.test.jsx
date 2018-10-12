import React from 'react';
import { shallow } from 'enzyme';

import MainContainer from './Main';

describe('<MainContainer />', () => {
  it('renders without crashing', () => {
    const props = {
      location: {
        pathname: 'test-pathname',
      },
      children: <div>Test</div>,
    };

    shallow(<MainContainer {...props} />);
  });
});
