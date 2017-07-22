// React
import React from 'react'

// Routing
import { NavLink } from 'react-router-dom'

// // Styles
import './Sitenav.scss'

const Sitenav = () => {
  return (
    <ul className="sitenav list-unstyled m-0" role="navigation">
      <li className="sitenav__nav-item">
        <NavLink to="/" exact={true} className="sitenav__nav-link">About</NavLink>
      </li>

      <li className="sitenav__nav-item">
        <NavLink to="/webdev" className="sitenav__nav-link">Portfolio</NavLink>
      </li>

      {/*<li className="sitenav__nav-item">
        <NavLink to="/digital-art" className="sitenav__nav-link">Digital Art</NavLink>
      </li>*/}
    </ul>
  )
} // /const Sitenav

export default Sitenav
