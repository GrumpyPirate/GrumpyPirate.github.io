import { SyntheticEvent } from 'react';

export interface SitenavNavItem {
  key: number;
  to: string;
  label: string;
}

export interface SitenavProps {
  onNavLinkClick: (event: SyntheticEvent) => void;
}
