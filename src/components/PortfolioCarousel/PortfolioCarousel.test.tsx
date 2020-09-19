import { render } from '@testing-library/react';
import React from 'react';

import PortfolioCarousel from './PortfolioCarousel';
import fixture from './PortfolioCarousel.fixture';

describe('Components', () => {
  describe('PortfolioCarousel', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(<PortfolioCarousel {...props} />);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
