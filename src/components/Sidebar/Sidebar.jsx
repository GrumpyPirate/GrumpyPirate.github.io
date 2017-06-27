// React
import React from 'react'

// Routing
import { NavLink, Link } from 'react-router-dom'

// Components
import Sitenav from 'components/Sitenav/Sitenav.jsx'

// SCSS
import './Sidebar.scss'

// Images
import Logo from 'images/avatar-ed--head-only.png'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navMenuOpen: false
    }

    // Lexical this binding
    this.toggleMenu = this.toggleMenu.bind(this)
  } // /constructor(props)

  toggleMenu() {
    this.setState({
      navMenuOpen: !this.state.navMenuOpen
    })
  } // /openMenu()

  render() {
    const CREATION_YEAR = 2017
    const CURR_YEAR     = new Date().getFullYear()
    const navMenuOpen   = this.state.navMenuOpen

    return (
      <aside className="sidebar text-lg-right">
        <div className="sidebar__content container-fluid">
          <Link to="/" className="sidebar__brand">
            <img className="sidebar__brand__image" src={Logo} alt="" width="52" height="52"/>
            {/*<span className="sidebar__brand__name ml-1">Edward Cobbold</span>*/}
            <span className="sidebar__brand__name ml-1">Lorem Ipsum</span>
          </Link>
          {/*<span className="sidebar__brand__job-title hidden-md-down">Frontend Developer</span>*/}
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
                <Sitenav/>
              </div>
            </menu>
          </div>

          {/* Tablet+ nav */}
          <div className="hidden-sm-down">
            <Sitenav/>
          </div>
        </div>

        <div className="sidebar__credits hidden-md-down">
          <div className="container-fluid">
            <p>
              <small>&copy; {CURR_YEAR > CREATION_YEAR ?
                <span className="sidebar__credits__date">{CREATION_YEAR}&mdash;{CURR_YEAR}</span> :
                <span className="sidebar__credits__date">{CURR_YEAR}</span>
              }</small>
            </p>
          </div>
        </div>
      </aside>
    )
  } // /render()
} // /export default class Sidebar extends React.Component

export default Sidebar
