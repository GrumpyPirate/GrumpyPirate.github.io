import { Action } from 'redux';

import { GenericActionError } from 'store';
import { AboutSectionFormatted } from 'types';

interface AboutState {
  aboutSections: AboutSectionFormatted[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchCount: number;
  error: GenericActionError;
  errorCount: number;
}

interface AboutSectionsReceiveAction extends Action {
  aboutSections: AboutSectionFormatted[];
}

interface AboutSectionsRequestFailedAction extends Action {
  error: GenericActionError;
}

type AboutAction = Action | AboutSectionsReceiveAction | AboutSectionsRequestFailedAction;

export { AboutAction, AboutState, AboutSectionsReceiveAction, AboutSectionsRequestFailedAction };
