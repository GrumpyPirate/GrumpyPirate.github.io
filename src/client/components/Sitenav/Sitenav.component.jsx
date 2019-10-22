import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash-es';

import classes from './Sitenav.component.scss';

const navItems = [
  {
    key: uniqueId(),
    to: '/',
    label: 'About',
  },
  {
    key: uniqueId(),
    to: '/portfolio',
    label: 'Portfolio',
  },
];

const Sitenav = ({ onNavLinkClick }) => (
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

Sitenav.propTypes = {
  onNavLinkClick: PropTypes.func.isRequired,
};

export default Sitenav;
