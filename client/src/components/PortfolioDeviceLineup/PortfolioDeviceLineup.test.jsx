import React from 'react';
import { shallow } from 'enzyme';

import PortfolioDeviceLineup from './PortfolioDeviceLineup';

describe('<PortfolioDeviceLineup />', () => {
  it('renders without crashing', () => {
    const props = {
      desktopImage: 'https://maggotpie.com/powdering/remove?a=ambit&b=antihypochondriac#unreliability',
      tabletImage: 'https://milleporous.com/meningomyelorrhaphy/unsettling?a=talao&b=guaranian#virgater',
      mobileImage: 'https://cockateel.com/patronizable/sapiutan?a=coxarthropathy&b=prodisplay#choes',
    };

    shallow(<PortfolioDeviceLineup {...props} />);
  });
});
