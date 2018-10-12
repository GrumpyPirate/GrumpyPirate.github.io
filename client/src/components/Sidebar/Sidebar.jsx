import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Sitenav from 'components/Sitenav/Sitenav';

import './Sidebar.scss';

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  closeMenu() {
    this.setState({ isOpen: false });
  }

  toggleMenu() {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

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
              aria-expanded={isOpen}
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
          className={classnames('sidebar__menu hidden-md-up', {
            'is--closed': !isOpen,
          })}
        >
          <div className="container-fluid">
            <Sitenav />
          </div>
        </menu>
      </aside>
    );
  }
}

export default Sidebar;
