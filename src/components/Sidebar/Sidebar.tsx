import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ScreenreaderOnlyText from 'components/Accessibility/ScreenreaderOnlyText/ScreenreaderOnlyText';
import Container from 'components/Layout/Container/Container';
import Sitenav from 'components/Sitenav/Sitenav';
import { AppDispatch, RootState } from 'store';
import { toggleMobileNavigation } from 'store/ui/ui.actions';

import classes from './Sidebar.scss';

const Sidebar: FunctionComponent = () => {
  const isMobileNavigationOpen = useSelector((state: RootState) => state.ui.isMobileNavigationOpen);
  const dispatch: AppDispatch = useDispatch();

  return (
    <aside className={classes['sidebar']}>
      <Container>
        <div className={classes['sidebar__content']}>
          <Link to="/" className={classes['sidebar__brand']}>
            <figure className={classes['sidebar__brand__image']} />
            <span className={classes['sidebar__brand__name']}>Edward Cobbold</span>
          </Link>
          <span className={classes['sidebar__brand__job-title']}>Frontend Developer</span>

          <hr className={classes['sidebar__divider']} />

          <div className={classes['sidebar__btn-sitenav-container']}>
            <button
              type="button"
              className={classes['sidebar__btn-sitenav']}
              onClick={() => {
                dispatch(toggleMobileNavigation());
              }}
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
          classes['sidebar__sitenav-wrapper--mobile'],
          {
            [classes['sidebar__sitenav-wrapper--mobile--is--closed']]: !isMobileNavigationOpen,
          },
        )}
      >
        <Container>
          <Sitenav />
        </Container>
      </menu>
    </aside>
  );
};

export default Sidebar;
