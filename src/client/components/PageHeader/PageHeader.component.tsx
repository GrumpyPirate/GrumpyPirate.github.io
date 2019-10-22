import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
import classnames from 'classnames';
import { debounce } from 'lodash-es';

import Container from 'components/Layout/Container/Container.component';
import Icon from 'components/Icon/Icon.component';

import { PageHeaderProps } from './PageHeader.component.d';
import classes from './PageHeader.component.scss';

const getFullscreenHeight = () => {
  const windowHeight = window.innerHeight;

  return window.innerWidth < 992 ? `calc(${windowHeight - 50}px)` : `${windowHeight}px`;
};

const PageHeader: FunctionComponent<PageHeaderProps> = ({
  children,
  isFullscreen = false,
  scrollLabel = 'Scroll for more',
  title,
}: PageHeaderProps) => {
  const headerElement = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(getFullscreenHeight());

  const onResize = debounce(() => {
    setHeight(getFullscreenHeight());
  }, 300);

  const onScrollDownClick = () => {
    if (headerElement && headerElement.current) {
      const top = headerElement.current.offsetHeight;
      const scrollOptions: ScrollToOptions = {
        top,
        behavior: 'smooth',
      };

      window.scrollTo(scrollOptions);
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
