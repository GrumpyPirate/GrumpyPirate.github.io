import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AboutSectionFormatted } from 'types';

import contentService, { ContentService } from 'services/ContentService';
import { GenericActionError } from 'store';

import {
  AboutSectionsReceiveAction,
  AboutSectionsRequestFailedAction,
  AboutAction,
  AboutState,
} from './about.d';

const ABOUT_SECTIONS_LOAD: string = 'ABOUT_SECTIONS_LOAD';
const ABOUT_SECTIONS_REQUEST: string = 'ABOUT_SECTIONS_REQUEST';
const ABOUT_SECTIONS_RECEIVED: string = 'ABOUT_SECTIONS_RECEIVED';
const ABOUT_SECTIONS_REQUEST_FAILED: string = 'ABOUT_SECTIONS_REQUEST_FAILED';

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
