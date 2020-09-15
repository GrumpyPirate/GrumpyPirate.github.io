import { render } from '@testing-library/react';
import React from 'react';

import withMockRouter from 'utils/testing';

import PortfolioPageHeader from './PortfolioPageHeader';
import fixture from './PortfolioPageHeader.fixture';

describe('Components', () => {
  describe('PortfolioPageHeader', () => {
    const props = {
      ...fixture,
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(<PortfolioPageHeader {...props} />));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
