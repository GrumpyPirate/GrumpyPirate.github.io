import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { SitenavProps } from './Sitenav.component.types';
import navItems from './Sitenav.component.constants';
import classes from './Sitenav.component.scss';

const Sitenav: FunctionComponent<SitenavProps> = ({ onNavLinkClick }: SitenavProps) => (
  <ul className={classes['sitenav']} role="navigation">
    {navItems.map(({ key, label, to }) => (
      <li key={`sitenav__nav-item__${key}`} className={classes['sitenav__nav-item']}>
        <NavLink
          to={to}
          exact={Boolean(to === '/')}
          className={classes['sitenav__nav-link']}
          activeClassName={classes['sitenav__nav-link--active']}
          onClick={onNavLinkClick}
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Sitenav;
