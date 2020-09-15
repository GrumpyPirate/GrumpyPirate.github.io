import { Action } from 'redux';

import { GenericActionError, AboutSectionFormatted } from 'types/common';

export interface AboutState {
  aboutSections: AboutSectionFormatted[];
  isFetching: boolean;
  hasFetched: boolean;
  fetchCount: number;
  error: GenericActionError;
  errorCount: number;
}

export interface AboutSectionsReceiveAction extends Action {
  aboutSections: AboutSectionFormatted[];
}

export interface AboutSectionsRequestFailedAction extends Action {
  error: GenericActionError;
}

export type AboutAction = Action | AboutSectionsReceiveAction | AboutSectionsRequestFailedAction;
