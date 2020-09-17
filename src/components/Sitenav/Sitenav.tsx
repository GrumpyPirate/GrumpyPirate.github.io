import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AppDispatch } from 'store';
import { closeMobileNavigation } from 'store/ui/ui.actions';

import navItems from './Sitenav.constants';
import classes from './Sitenav.scss';

const Sitenav: FunctionComponent = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul className={classes['sitenav']} role="navigation">
      {navItems.map(({ key, label, to }) => (
        <li key={`sitenav__nav-item__${key}`} className={classes['sitenav__nav-item']}>
          <NavLink
            to={to}
            exact={Boolean(to === '/')}
            className={classes['sitenav__nav-link']}
            activeClassName={classes['sitenav__nav-link--active']}
            onClick={() => {
              dispatch(closeMobileNavigation());
            }}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Sitenav;
