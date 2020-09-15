import { ReactNode } from 'react';
import { ChildrenProps } from 'types/common';
import { RouteComponentProps } from 'react-router';
import { LocationState } from 'history';

export interface MainProps extends ChildrenProps, RouteComponentProps {
  isLoading: boolean;
  isMobileNavigationOpen: boolean;
  renderLocation: (location: LocationState) => ReactNode;
  closeMobileNavigation: () => void;
}
