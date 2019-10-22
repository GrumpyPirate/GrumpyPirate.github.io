import {
  ABOUT_SECTIONS_LOAD,
  ABOUT_SECTIONS_REQUEST,
  ABOUT_SECTIONS_RECEIVE,
  ABOUT_SECTIONS_REQUEST_FAILED,
  aboutSectionsLoad,
  aboutSectionsReceive,
  aboutSectionsRequestFailed,
  aboutSectionsRequest,
} from './about';

describe('Actions', () => {
  describe('about', () => {
    describe('Action types', () => {
      it('should export expected action types', () => {
        expect(ABOUT_SECTIONS_LOAD).toBeDefined();
        expect(ABOUT_SECTIONS_REQUEST).toBeDefined();
        expect(ABOUT_SECTIONS_RECEIVE).toBeDefined();
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
          const aboutSections = [{ test: 'data1' }, { test: 'data2' }];
          const expectedAction = {
            type: ABOUT_SECTIONS_RECEIVE,
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
          aboutSectionsRequest()(mockDispatch);

          expect(mockDispatch).toHaveBeenCalledWith(aboutSectionsLoadResult);
        });

        it('should attempt fetch the about sections', () => {
          const mockService = {
            getAboutSections: jest.fn().mockResolvedValue(true),
          };
          const mockDispatch = jest.fn();
          expect(mockService.getAboutSections).not.toHaveBeenCalled();

          aboutSectionsRequest()(mockDispatch, null, mockService);
          expect(mockService.getAboutSections).toHaveBeenCalled();
        });
      });
    });
  });
});
