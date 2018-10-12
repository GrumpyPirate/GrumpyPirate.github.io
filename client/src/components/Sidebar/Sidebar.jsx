import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import animation from 'config/animation';

import Sitenav from 'components/Sitenav/Sitenav';

import './Sidebar.scss';

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      navMenuOpen: false,
      isClosing: false,
      isClosed: true,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({ isClosing: true });

    window.clearTimeout(this.menuCloseTimeout);
    this.menuCloseTimeout = window.setTimeout(() => {
      this.setState({
        navMenuOpen: false,
        isClosing: false,
      });
    }, animation.duration);
  }

  toggleMenu() {
    const { navMenuOpen } = this.state;

    if (navMenuOpen) {
      this.closeMenu();
    } else {
      this.setState({ navMenuOpen: true });
    }
  }

  render() {
    const { navMenuOpen, isClosing, isClosed } = this.state;
    const isOpen = Boolean(navMenuOpen && !isClosing);

    const mobileMenuclassnames = classnames('sidebar__menu hidden-md-up', {
      'is--closing': isClosing,
      'is--closed': isClosed,
      'is--open': isOpen,
    });

    return (
      <aside className="sidebar text-lg-right">
        <div className="sidebar__content container-fluid">
          <Link to="/" className="sidebar__brand">
            <figure className="sidebar__brand__image" alt="" width="52" height="52" />
            <span className="sidebar__brand__name ml-1">Edward Cobbold</span>
          </Link>
          <span className="sidebar__brand__job-title hidden-md-down">Frontend Developer</span>

          <hr className="hidden-md-down" />

          <div className="hidden-md-up">
            <button
              type="button"
              className="sidebar__btn-sitenav"
              onClick={this.toggleMenu}
              aria-expanded={navMenuOpen}
            >
              <span className="burger-bar" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>

          <div className="hidden-sm-down">
            <Sitenav />
          </div>
        </div>

        <menu
          className={mobileMenuclassnames}
          onClick={this.closeMenu}
        >
          <div className="container-fluid">
            <Sitenav />
          </div>
        </menu>
      </aside>
    );
  };
};

export default Sidebar;
