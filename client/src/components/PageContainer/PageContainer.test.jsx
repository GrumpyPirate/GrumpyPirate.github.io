import React from 'react';
import { shallow } from 'enzyme';

import PageContainer from './PageContainer';

describe('<PageContainer />', () => {
  it('renders without crashing', () => {
    shallow(<PageContainer />);
  });
});
