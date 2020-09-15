import { ContentService } from 'services/ContentService';
import { AboutSectionFormatted } from 'types/common';

import {
  ABOUT_SECTIONS_LOAD,
  ABOUT_SECTIONS_RECEIVED,
  ABOUT_SECTIONS_REQUEST,
  ABOUT_SECTIONS_REQUEST_FAILED,
  aboutSectionsLoad,
  aboutSectionsReceive,
  aboutSectionsRequest,
  aboutSectionsRequestFailed,
} from './about.actions';
import aboutSection from './about.fixture';

jest.mock('services/ContentService');

describe('Actions', () => {
  describe('about', () => {
    describe('Action types', () => {
      it('should export expected action types', () => {
        expect(ABOUT_SECTIONS_LOAD).toBeDefined();
        expect(ABOUT_SECTIONS_REQUEST).toBeDefined();
        expect(ABOUT_SECTIONS_RECEIVED).toBeDefined();
        expect(ABOUT_SECTIONS_REQUEST_FAILED).toBeDefined();
      });
    });

    describe('Action creators', () => {
      describe('aboutSectionsLoad', () => {
        it('should return an action of an expected shape', () => {
          const expectedAction = {
            type: ABOUT_SECTIONS_LOAD,
          };

          expect(aboutSectionsLoad()).toEqual(expectedAction);
        });
      });

      describe('aboutSectionsReceive', () => {
        it('should return an action of an expected shape', () => {
          const aboutSections: AboutSectionFormatted[] = [
            { ...aboutSection, id: 'data1' },
            { ...aboutSection, id: 'data2' },
          ];
          const expectedAction = {
            type: ABOUT_SECTIONS_RECEIVED,
            aboutSections,
          };

          expect(aboutSectionsReceive(aboutSections)).toEqual(expectedAction);
        });
      });

      describe('aboutSectionsRequestFailed', () => {
        it('should return an action of an expected shape', () => {
          const error = new Error('Something went wrong');
          const expectedAction = {
            type: ABOUT_SECTIONS_REQUEST_FAILED,
            error,
          };

          expect(aboutSectionsRequestFailed(error)).toEqual(expectedAction);
        });
      });

      describe('aboutSectionsRequestRequest', () => {
        it('should immediately dispatch an aboutSectionsLoad action', () => {
          const mockDispatch = jest.fn();
          expect(mockDispatch).not.toHaveBeenCalled();

          const aboutSectionsLoadResult = aboutSectionsLoad();
          aboutSectionsRequest()(mockDispatch, jest.fn(), {});

          expect(mockDispatch).toHaveBeenCalledWith(aboutSectionsLoadResult);
        });

        it('should attempt fetch the about sections', () => {
          const mockService = new ContentService();
          const mockDispatch = jest.fn();
          const spy = jest.spyOn(mockService, 'getAboutSections');

          expect(spy).not.toHaveBeenCalled();

          aboutSectionsRequest(mockService)(mockDispatch, jest.fn(), {});
          expect(spy).toHaveBeenCalled();
        });
      });
    });
  });
});
