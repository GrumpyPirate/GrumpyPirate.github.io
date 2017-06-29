// React
import React from 'react'
// import PropTypes from 'prop-types'

// Routing
import { Link } from 'react-router-dom'

// Components
import Sitenav from 'components/Sitenav/Sitenav.jsx'

// SCSS
import './Sidebar.scss'

// Images
import Logo from 'images/avatar-ed--head-only.png'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      navMenuOpen: false
    }

    // Lexical this binding
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  } // /constructor(props)

  toggleMenu () {
    this.setState({ navMenuOpen: !this.state.navMenuOpen })
  } // /toggleMenu

  closeMenu () {
    this.setState({ navMenuOpen: false })
  } // /closeMenu

  render () {
    const navMenuOpen = this.state.navMenuOpen

    return (
      <aside className="sidebar text-lg-right">
        <div className="sidebar__content container-fluid">
          <Link to="/" className="sidebar__brand">
            <img className="sidebar__brand__image" src={Logo} alt="" width="52" height="52"/>
            {/* <span className="sidebar__brand__name ml-1">Edward Cobbold</span> */}
            <span className="sidebar__brand__name ml-1">Lorem Ipsum</span>
          </Link>
          {/* <span className="sidebar__brand__job-title hidden-md-down">Frontend Developer</span> */}
          <span className="sidebar__brand__job-title hidden-md-down">Culpa similique</span>

          <hr className="hidden-md-down"/>

          {/* Mobile nav */}
          <div className="hidden-md-up">
            <button type="button" className="sidebar__btn-sitenav" onClick={this.toggleMenu} aria-expanded={navMenuOpen}>
              <span className="burger-bar"></span>
              <span className="sr-only">Toggle menu</span>
            </button>

            <menu className="sidebar__menu" hidden={!navMenuOpen}>
              <div className="container-fluid">
                <Sitenav closeMenu={this.closeMenu}/>
              </div>
            </menu>
          </div>

          {/* Tablet+ nav */}
          <div className="hidden-sm-down">
            <Sitenav closeMenu={this.closeMenu}/>
          </div>
        </div>
      </aside>
    )
  } // /render ()
} // /export default class Sidebar extends React.Component

export default Sidebar
