import { render } from '@testing-library/react';
import React from 'react';
import * as reactRouterDom from 'react-router-dom';

import { initialRootState, RootState } from 'store';
import { withMockRouter, withMockStore } from 'utils/testing';

import PortfolioItemPage from './PortfolioItemPage';
import portfolioItem from './PortfolioItemPage.fixture';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Components', () => {
  describe('PortfolioPage', () => {
    const mockState: RootState = {
      ...initialRootState,
      portfolio: {
        ...initialRootState.portfolio,
        portfolioItems: [portfolioItem],
      },
    };

    beforeEach(() => {
      jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({
        slug: portfolioItem.slug,
      });
    });

    it('should render as expected, without crashing', () => {
      const { container } = render(withMockRouter(withMockStore(<PortfolioItemPage />, mockState)));

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
