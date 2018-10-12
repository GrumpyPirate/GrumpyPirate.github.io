import React from 'react';
import { shallow } from 'enzyme';
import PortfolioPageHeader from './PortfolioPageHeader';

describe('<PortfolioPageHeader />', () => {
  it('renders without crashing', () => {
    const props = {
      bgImage: 'test',
      title: 'test title',
      tech: [
        {
          icon: 'test-icon',
          name: 'test-name',
        },
      ],
    };

    shallow(<PortfolioPageHeader {...props} />);
  });
});
