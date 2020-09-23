import contentService from 'services/ContentService';
import { AboutSectionFormatted } from 'types/common';
import { createMockStore } from 'utils/testing';

import { getAboutSections } from '.';
import aboutSection from './index.fixture';

jest.mock('services/ContentService');

describe('Ducks', () => {
  describe('about', () => {
    const mockAboutSections: AboutSectionFormatted[] = [aboutSection];

    describe('Thunks', () => {
      describe('getAboutSections', () => {
        beforeEach(() => {
          jest.spyOn(contentService, 'getAboutSections').mockResolvedValue(mockAboutSections);
        });

        test('should register the about sections as "loading"', () => {
          const store = createMockStore();
          const expectedState = expect.objectContaining({
            about: expect.objectContaining({
              isFetching: true,
            }),
          });

          expect(store.getState()).not.toEqual(expectedState);

          store.dispatch(getAboutSections.pending('request-1', undefined));
          expect(store.getState()).toEqual(expectedState);
        });

        test('should handle a rejected request', async () => {
          jest
            .spyOn(contentService, 'getAboutSections')
            .mockRejectedValue(new Error('Something went wrong'));
          const store = createMockStore();
          const expectedState = expect.objectContaining({
            about: expect.objectContaining({
              isFetching: false,
              hasFetched: true,
              fetchCount: 1,
              error: expect.any(Object),
              errorCount: 1,
            }),
          });

          expect(store.getState()).not.toEqual(expectedState);

          await store.dispatch(getAboutSections());
          expect(store.getState()).toEqual(expectedState);
        });

        test('should handle a fulfilled request', async () => {
          const store = createMockStore();
          const expectedState = expect.objectContaining({
            about: expect.objectContaining({
              aboutSections: mockAboutSections,
              fetchCount: 1,
              hasFetched: true,
              isFetching: false,
            }),
          });

          expect(store.getState()).not.toEqual(expectedState);

          await store.dispatch(getAboutSections());
          expect(store.getState()).toEqual(expectedState);
        });
      });
    });
  });
});
