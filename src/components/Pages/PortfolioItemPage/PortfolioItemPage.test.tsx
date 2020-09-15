import { MockedProvider } from '@apollo/client/testing';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import * as reactRouterDom from 'react-router-dom';

import { GET_PORTFOLIO_ITEM_BY_SLUG } from 'queries';
import withMockRouter from 'utils/testing';

import PortfolioItemPage from './PortfolioItemPage';
import mockGetPortfolioItemBySlugResponse from './PortfolioItemPage.fixture';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Components', () => {
  describe('PortfolioPage', () => {
    beforeEach(() => {
      jest.spyOn(reactRouterDom, 'useParams').mockReturnValue({
        slug: mockGetPortfolioItemBySlugResponse.portfolioItemCollection.items[0].slug,
      });
    });

    it('should render as expected, without crashing', async () => {
      const { container, getByText } = render(
        withMockRouter(
          <MockedProvider
            mocks={[
              {
                request: {
                  query: GET_PORTFOLIO_ITEM_BY_SLUG,
                  variables: {
                    slug: mockGetPortfolioItemBySlugResponse.portfolioItemCollection.items[0].slug,
                  },
                },
                result: { data: mockGetPortfolioItemBySlugResponse },
              },
            ]}
            addTypename={false}
          >
            <PortfolioItemPage />
          </MockedProvider>,
        ),
      );

      await waitFor(() =>
        expect(
          getByText(mockGetPortfolioItemBySlugResponse.portfolioItemCollection.items[0].title),
        ).toBeTruthy(),
      );

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
