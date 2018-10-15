import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Sitenav from 'containers/Sitenav/Sitenav';

import './Sidebar.scss';

const Sidebar = ({ isMobileNavigationOpen, toggleMobileNavigation }) => (
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
          onClick={toggleMobileNavigation}
          aria-expanded={isMobileNavigationOpen}
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
        'is--closed': !isMobileNavigationOpen,
      })}
    >
      <div className="container-fluid">
        <Sitenav />
      </div>
    </menu>
  </aside>
);

Sidebar.propTypes = {
  isMobileNavigationOpen: PropTypes.bool.isRequired,
  toggleMobileNavigation: PropTypes.func.isRequired,
};

export default Sidebar;
