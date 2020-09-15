import { Location } from 'history';
import { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router';

import { ChildrenProps } from 'types/common';

export interface MainProps extends ChildrenProps, RouteComponentProps {
  isLoading: boolean;
  isMobileNavigationOpen: boolean;
  renderLocation: (location: Location) => ReactElement;
  closeMobileNavigation: () => void;
}
