import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import React from 'react';

import { GET_PORTFOLIO_ITEM_LIST } from 'queries';
import withMockRouter from 'utils/testing';

import PortfolioPage from './PortfolioPage';
import mockGetPortfolioItemsResponse from './PortfolioPage.fixture';

describe('Components', () => {
  describe('Portfolio', () => {
    it('should render as expected, without crashing', async () => {
      const { container, getAllByTestId } = render(
        withMockRouter(
          <MockedProvider
            mocks={[
              {
                request: { query: GET_PORTFOLIO_ITEM_LIST },
                result: { data: mockGetPortfolioItemsResponse },
              },
            ]}
            addTypename={false}
          >
            <PortfolioPage />
          </MockedProvider>,
        ),
      );

      await waitFor(() =>
        expect(getAllByTestId('portfolio-page__list__item')).toHaveLength(
          mockGetPortfolioItemsResponse.portfolioItemCollection.items.length,
        ),
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
