import React from 'react';
import { NavLink } from 'react-router-dom';

const Sitenav = () => (
  <ul className="sitenav list-unstyled m-0" role="navigation">
    <li className="sitenav__nav-item">
      <NavLink to="/" exact className="sitenav__nav-link">About</NavLink>
    </li>

    <li className="sitenav__nav-item">
      <NavLink to="/webdev" className="sitenav__nav-link">Portfolio</NavLink>
    </li>
  </ul>
);

export default Sitenav;
