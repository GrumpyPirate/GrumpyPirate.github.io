import { ReactNode } from 'react';
import { ChildrenProps } from 'types';
import { RouteComponentProps } from 'react-router';
import { LocationState } from 'history';

interface MainProps extends ChildrenProps, RouteComponentProps {
  isLoading: boolean;
  isMobileNavigationOpen: boolean;
  renderLocation: (location: LocationState) => ReactNode;
  closeMobileNavigation: () => void;
}

export { MainProps };
