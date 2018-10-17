import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash-es';

import classes from './Sitenav.scss';

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
    {navItems.map(navItem => (
      <li
        key={`sitenav__nav-item__${navItem.key}`}
        className={classes['sitenav__nav-item']}
      >
        <NavLink
          to={navItem.to}
          exact={Boolean(navItem.to === '/')}
          className={classes['sitenav__nav-link']}
          activeClassName={classes['sitenav__nav-link--active']}
          onClick={onNavLinkClick}
        >
          {navItem.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

Sitenav.propTypes = {
  onNavLinkClick: PropTypes.func.isRequired,
};

export default Sitenav;
