import classnames from 'classnames';
import { debounce } from 'lodash-es';
import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';

import Icon from 'components/Icon/Icon';
import Container from 'components/Layout/Container/Container';

import classes from './PageHeader.scss';
import { PageHeaderProps } from './PageHeader.types';

const getFullscreenHeight = (): string => {
  const windowHeight = window.innerHeight;

  return window.innerWidth < 992 ? `calc(${windowHeight - 50}px)` : `${windowHeight}px`;
};

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  children,
  isFullscreen = false,
  scrollLabel = 'Scroll for more',
  title,
}) => {
  const headerElement = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(getFullscreenHeight());

  const onResize = debounce(() => {
    setHeight(getFullscreenHeight());
  }, 300);

  const onScrollDownClick = useCallback(() => {
    if (headerElement && headerElement.current) {
      window.scrollTo({
        top: headerElement.current.offsetHeight,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <header
      className={classnames(classes['page-header'], {
        [classes['page-header--is-fullscreen']]: isFullscreen,
      })}
      style={{ ...(isFullscreen && { height }) }}
      ref={headerElement}
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

export default PageHeader;
