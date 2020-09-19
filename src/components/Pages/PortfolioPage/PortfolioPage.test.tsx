import { render } from '@testing-library/react';
import React from 'react';

import { initialRootState, RootState } from 'store';
import { withMockRouter, withMockStore } from 'utils/testing';

import PortfolioPage from './PortfolioPage';
import portfolioItems from './PortfolioPage.fixture';

describe('Components', () => {
  describe('Portfolio', () => {
    const mockState: RootState = {
      ...initialRootState,
      portfolio: {
        ...initialRootState.portfolio,
        portfolioItems,
      },
    };

    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(withMockStore(<PortfolioPage />, mockState)));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
