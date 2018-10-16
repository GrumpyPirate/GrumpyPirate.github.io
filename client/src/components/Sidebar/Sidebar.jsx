import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import Sitenav from 'containers/Sitenav/Sitenav';
import Container from 'components/Layout/Container/Container';
import ScreenreaderOnlyText from 'components/Accessibility/ScreenreaderOnlyText/ScreenreaderOnlyText';

import classes from './Sidebar.scss';

const Sidebar = ({ isMobileNavigationOpen, toggleMobileNavigation }) => (
  <aside className={classes['sidebar']}>
    <Container>
      <div className={classes['sidebar__content']}>
        <Link to="/" className={classes['sidebar__brand']}>
          <figure className={classes['sidebar__brand__image']} alt="" width="52" height="52" />
          <span className={classes['sidebar__brand__name']}>Edward Cobbold</span>
        </Link>
        <span className={classes['sidebar__brand__job-title']}>Frontend Developer</span>

        <hr className={classes['sidebar__divider']} />

        <div className={classes['sidebar__btn-sitenav-container']}>
          <button
            type="button"
            className={classes['sidebar__btn-sitenav']}
            onClick={toggleMobileNavigation}
            aria-expanded={isMobileNavigationOpen}
          >
            <span className={classes['burger-bar']} />
            <ScreenreaderOnlyText text="Toggle menu" />
          </button>
        </div>

        <div
          className={classnames(
            classes['sidebar__sitenav-wrapper'],
            classes['sidebar__sitenav-wrapper--desktop'],
          )}
        >
          <Sitenav />
        </div>
      </div>
    </Container>

    <menu
      className={classnames(
        classes['sidebar__sitenav-wrapper'],
        classes['sidebar__sitenav-wrapper--mobile'], {
          [classes['is--closed']]: !isMobileNavigationOpen,
        },
      )}
    >
      <Container>
        <Sitenav />
      </Container>
    </menu>
  </aside>
);

Sidebar.propTypes = {
  isMobileNavigationOpen: PropTypes.bool.isRequired,
  toggleMobileNavigation: PropTypes.func.isRequired,
};

export default Sidebar;
