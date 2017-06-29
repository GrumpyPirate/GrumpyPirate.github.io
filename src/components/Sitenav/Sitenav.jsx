// React
import React from 'react'
import PropTypes from 'prop-types'

// Routing
import { NavLink } from 'react-router-dom'
import Routes from '../../config/routes'

// // Styles
import './Sitenav.scss'

const Sitenav = ({ closeMenu }) => {
  return (
    <ul className="sitenav list-unstyled m-0" role="navigation">
      {Routes.map((route, index) =>
        (
          <li className="sitenav__nav-item" key={index}>
            <NavLink to={route.path} exact={route.exact} className="sitenav__nav-link" onClick={closeMenu}>
              {route.name}
            </NavLink>
          </li>
        )
      )}
    </ul>
  )
} // /const Sitenav

Sitenav.propTypes = {
  closeMenu: PropTypes.func.isRequired
}

export default Sitenav
