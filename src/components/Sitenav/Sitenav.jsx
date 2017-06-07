// React
import React, { Component } from 'react'

// Routing
import { NavLink, Link } from 'react-router-dom'
import Routes from '../../config/routes'

// // Styles
import './Sitenav.scss'

class Sitenav extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  // Component lifecycle hooks
  // -----------------------------------------------------------------------------------------------------------------
  // getInitialState()
  // getDefaultProps()
  // componentWillMount()
  // componentDidMount()
  // shouldComponentUpdate()
  // componentWillUpdate()
  // componentWillReceiveProps()

  // Render
  // -----------------------------------------------------------------------------------------------------------------
  render() {
    return (
      <ul className="sitenav list-unstyled m-0" role="navigation">
        {Routes.map((route, index) =>
          (
            <li className="sitenav__nav-item" key={index}>
              <NavLink to={route.path} exact={route.exact} className="sitenav__nav-link">
                {route.name}
              </NavLink>
            </li>
          )
        )}
      </ul>
    )
  } // /render()

  // componentDidUpdate
  // componentWillUnmount
  // componentDidUnmount
} // /class Sitenav extends Component

export default Sitenav
