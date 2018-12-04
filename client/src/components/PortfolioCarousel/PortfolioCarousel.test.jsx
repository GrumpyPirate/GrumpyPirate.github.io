import React from 'react';
import { shallow } from 'enzyme';

import PortfolioCarousel from './PortfolioCarousel';

describe('<PortfolioCarousel />', () => {
  it('renders without crashing', () => {
    const props = {
      desktopImage: 'https://coexertion.com/hernant/antepretonic?a=porker&b=patriarch#keratonosus',
      tabletImage: 'https://echites.com/womanless/unaccusably?a=wodgy&b=interdispensation#stauter',
      mobileImage: 'https://firmer.com/akee/rubbler?a=pyrogenation&b=solidarism#uncharily',
    };

    shallow(<PortfolioCarousel {...props} />);
  });
});
