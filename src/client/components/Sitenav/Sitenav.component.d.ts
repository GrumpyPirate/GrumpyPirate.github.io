import { SyntheticEvent } from 'react';

interface SitenavNavItem {
  key: number;
  to: string;
  label: string;
}

interface SitenavProps {
  onNavLinkClick: (event: SyntheticEvent) => void;
}

export { SitenavProps, SitenavNavItem };
