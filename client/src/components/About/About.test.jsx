import React from 'react';
import { shallow } from 'enzyme';

import About from './About';

describe('<About />', () => {
  const props = {
    hasFetched: false,
    aboutSectionsRequest: jest.fn(),
  };

  it('should render as epected, without crashing', () => {
    const wrapper = shallow(<About {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
