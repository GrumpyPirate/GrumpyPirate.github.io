import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sitenav = ({ onNavLinkClick }) => (
  <ul className="sitenav list-unstyled m-0" role="navigation">
    <li className="sitenav__nav-item">
      <NavLink
        to="/"
        exact
        className="sitenav__nav-link"
        onClick={onNavLinkClick}
      >
        About
      </NavLink>
    </li>

    <li className="sitenav__nav-item">
      <NavLink
        to="/webdev"
        className="sitenav__nav-link"
        onClick={onNavLinkClick}
      >
        Portfolio
      </NavLink>
    </li>
  </ul>
);

Sitenav.propTypes = {
  onNavLinkClick: PropTypes.func.isRequired,
};

export default Sitenav;
