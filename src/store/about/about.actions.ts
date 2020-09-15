import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AboutSectionFormatted, GenericActionError } from 'types/common';

import contentService, { ContentService } from 'services/ContentService';

import {
  AboutSectionsReceiveAction,
  AboutSectionsRequestFailedAction,
  AboutAction,
  AboutState,
} from './about.types';

const ABOUT_SECTIONS_LOAD = 'ABOUT_SECTIONS_LOAD';
const ABOUT_SECTIONS_REQUEST = 'ABOUT_SECTIONS_REQUEST';
const ABOUT_SECTIONS_RECEIVED = 'ABOUT_SECTIONS_RECEIVED';
const ABOUT_SECTIONS_REQUEST_FAILED = 'ABOUT_SECTIONS_REQUEST_FAILED';

const aboutSectionsLoad = (): Action => ({
  type: ABOUT_SECTIONS_LOAD,
});

const aboutSectionsReceive = (
  aboutSections: AboutSectionFormatted[],
): AboutSectionsReceiveAction => ({
  type: ABOUT_SECTIONS_RECEIVED,
  aboutSections,
});

const aboutSectionsRequestFailed = (
  error: GenericActionError,
): AboutSectionsRequestFailedAction => ({
  type: ABOUT_SECTIONS_REQUEST_FAILED,
  error,
});

const aboutSectionsRequest = (
  service: ContentService = contentService,
): ThunkAction<{}, AboutState, {}, AboutAction> => (dispatch: Function): Promise<AboutAction> => {
  dispatch(aboutSectionsLoad());

  return service
    .getAboutSections()
    .then((sections: AboutSectionFormatted[]) => dispatch(aboutSectionsReceive(sections)))
    .catch((error: GenericActionError) => dispatch(aboutSectionsRequestFailed(error)));
};

export {
  ABOUT_SECTIONS_LOAD,
  ABOUT_SECTIONS_REQUEST,
  ABOUT_SECTIONS_RECEIVED,
  ABOUT_SECTIONS_REQUEST_FAILED,
  aboutSectionsLoad,
  aboutSectionsReceive,
  aboutSectionsRequestFailed,
  aboutSectionsRequest,
};
