import { render } from '@testing-library/react';
import React from 'react';

import PortfolioDeviceLineup from './PortfolioDeviceLineup';
import fixture from './PortfolioDeviceLineup.fixture';

describe('Components', () => {
  describe('PortfolioDeviceLineup', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<PortfolioDeviceLineup {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
