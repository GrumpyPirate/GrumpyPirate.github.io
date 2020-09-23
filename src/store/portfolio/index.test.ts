import contentService from 'services/ContentService';
import { PortfolioItemFormatted } from 'types/common';
import { createMockStore } from 'utils/testing';

import { getPortfolioItems } from '.';
import portfolioItems from './index.fixture';

jest.mock('services/ContentService');

describe('Ducks', () => {
  describe('portfolio', () => {
    const mockPortfolioItems: PortfolioItemFormatted[] = portfolioItems;

    describe('Thunks', () => {
      describe('getPortfolioItems', () => {
        beforeEach(() => {
          jest.spyOn(contentService, 'getPortfolioItems').mockResolvedValue(mockPortfolioItems);
        });

        test('should register the portfolio items as "loading"', () => {
          const store = createMockStore();
          const expectedState = expect.objectContaining({
            portfolio: expect.objectContaining({
              isFetching: true,
            }),
          });

          expect(store.getState()).not.toEqual(expectedState);

          store.dispatch(getPortfolioItems.pending('request-1', undefined));
          expect(store.getState()).toEqual(expectedState);
        });

        test('should handle a rejected request', async () => {
          jest
            .spyOn(contentService, 'getPortfolioItems')
            .mockRejectedValue(new Error('Something went wrong'));
          const store = createMockStore();
          const expectedState = expect.objectContaining({
            portfolio: expect.objectContaining({
              isFetching: false,
              hasFetched: true,
              fetchCount: 1,
              error: expect.any(Object),
              errorCount: 1,
            }),
          });

          expect(store.getState()).not.toEqual(expectedState);

          await store.dispatch(getPortfolioItems());
          expect(store.getState()).toEqual(expectedState);
        });

        test('should handle a fulfilled request', async () => {
          const store = createMockStore();
          const expectedState = expect.objectContaining({
            portfolio: expect.objectContaining({
              portfolioItems: mockPortfolioItems,
              fetchCount: 1,
              hasFetched: true,
              isFetching: false,
            }),
          });

          expect(store.getState()).not.toEqual(expectedState);

          await store.dispatch(getPortfolioItems());
          expect(store.getState()).toEqual(expectedState);
        });
      });
    });
  });
});
