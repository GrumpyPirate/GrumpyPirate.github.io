// React
import React from 'react'
import { Link } from 'react-router-dom'

// Vendor
import classnames from 'classnames'

// Config
import animation from 'config/animation'

// Components
import Sitenav from 'components/Sitenav/Sitenav.jsx'

// SCSS
import './Sidebar.scss'

// Images
// import Logo from './head-sprite.png'

class Sidebar extends React.Component {
  constructor () {
    super()

    this.state = {
      navMenuOpen: false,
      isClosing: false
    } // /state

    // this binding
    this.toggleMenu = this.toggleMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  } // /constructor()

  closeMenu () {
    this.setState({ isClosing: true })

    window.clearTimeout(this.menuCloseTimeout)
    this.menuCloseTimeout = window.setTimeout(() => {
      this.setState({
        navMenuOpen: false,
        isClosing: false
      })
    }, animation.duration)
  }

  toggleMenu () {
    if (this.state.navMenuOpen) {
      this.closeMenu()
    } else {
      this.setState({ navMenuOpen: true })
    }
  } // /toggleMenu

  // Lifecycle
  render () {
    const navMenuOpen = this.state.navMenuOpen
    const isClosing = this.state.isClosing
    const isClosed = !this.state.navMenuOpen
    const isOpen = (this.state.navMenuOpen && !this.state.isClosing)

    const mobileMenuclassnames = classnames({
      'sidebar__menu hidden-md-up': true,
      'is--closing': isClosing,
      'is--closed': isClosed,
      'is--open': isOpen
    })

    return (
      <aside className="sidebar text-lg-right">
        <div className="sidebar__content container-fluid">
          <Link to="/" className="sidebar__brand">
            <figure className="sidebar__brand__image" alt="" width="52" height="52"></figure>
            <span className="sidebar__brand__name ml-1">Edward Cobbold</span>
          </Link>
          <span className="sidebar__brand__job-title hidden-md-down">Frontend Developer</span>

          <hr className="hidden-md-down"/>

          {/* Mobile nav */}
          <div className="hidden-md-up">
            <button type="button" className="sidebar__btn-sitenav" onClick={this.toggleMenu} aria-expanded={navMenuOpen}>
              <span className="burger-bar"></span>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>

          {/* Tablet+ nav */}
          <div className="hidden-sm-down">
            <Sitenav />
          </div>
        </div>

        <menu className={mobileMenuclassnames} onClick={this.closeMenu}>
          <div className="container-fluid">
            <Sitenav />
          </div>
        </menu>
      </aside>
    )
  } // /render ()
} // /export default class Sidebar extends React.Component

export default Sidebar
