import React, { useState, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { debounce } from 'lodash-es';

import Container from 'components/Layout/Container/Container.component';
import Icon from 'components/Icon/Icon.component';

import classes from './PageHeader.component.scss';

const getFullscreenHeight = () => {
  const windowHeight = window.innerHeight;

  return window.innerWidth < 992 ? `calc(${windowHeight - 50}px)` : `${windowHeight}px`;
};

const PageHeader = ({
  children, isFullscreen, scrollLabel, title,
}) => {
  const [height, setHeight] = useState(getFullscreenHeight());
  const elementRef = createRef();

  const onResize = debounce(() => {
    setHeight(getFullscreenHeight());
  }, 300);

  const onScrollDownClick = () => {
    const headerElement = elementRef.current;
    const elementHeight = headerElement.offsetHeight;
    const scrollOptions = {
      top: elementHeight,
      behavior: 'smooth',
    };

    if (window.innerWidth < 992) return window.scrollTo(scrollOptions);

    const scrollContainer = document.getElementById('main-content');
    if ('scrollTo' in scrollContainer) {
      return scrollContainer.scrollTo(scrollOptions);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <header
      className={classnames(
        classes['page-header'], {
          [classes['page-header--is-fullscreen']]: isFullscreen,
        },
      )}
      style={{ height: isFullscreen && height }}
      ref={elementRef}
    >
      <Container>
        <div className={classes['page-header__content']}>
          <div className={classes['page-header__title']}>
            <h1 className={classes['page-header__title__text']}>{title}</h1>
          </div>

          {children}
        </div>
      </Container>

      {isFullscreen && (
        <button
          type="button"
          className={classes['page-header__scroll-button']}
          onClick={onScrollDownClick}
        >
          <span className={classes['page-header__scroll-button__label']}>{scrollLabel}</span>
          <span className={classes['page-header__scroll-button__icon']}>
            <Icon glyph="chevron-down" />
          </span>
        </button>
      )}
    </header>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node,
  isFullscreen: PropTypes.bool,
  scrollLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
};

PageHeader.defaultProps = {
  isFullscreen: false,
  scrollLabel: 'Scroll for more',
  children: null,
};

export default PageHeader;
