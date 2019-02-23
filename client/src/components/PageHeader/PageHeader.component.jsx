import React, { PureComponent, createRef } from 'react';
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

class PageHeader extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      height: getFullscreenHeight(),
    };

    this.elementRef = createRef();

    this.onResize = debounce(this.onResize.bind(this), 300);
    this.onScrollDownClick = this.onScrollDownClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.setState({ height: getFullscreenHeight() });
  }

  onScrollDownClick() {
    const headerElement = this.elementRef.current;
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
  }

  render() {
    const {
      title, isFullscreen, scrollLabel, children,
    } = this.props;
    const { height } = this.state;

    return (
      <header
        className={classnames(
          classes['page-header'], {
            [classes['page-header--is-fullscreen']]: isFullscreen,
          },
        )}
        style={{ height: isFullscreen && height }}
        ref={this.elementRef}
      >
        <Container>
          <div className={classes['page-header__content']}>
            <div className={classes['page-header__title']}>
              <h1 className={classes['page-header__title__text']}>{title}</h1>
            </div>

            {children}
          </div>
        </Container>

        {!!isFullscreen && (
          <button
            type="button"
            className={classes['page-header__scroll-button']}
            onClick={this.onScrollDownClick}
          >
            <span className={classes['page-header__scroll-button__label']}>{scrollLabel}</span>
            <span className={classes['page-header__scroll-button__icon']}>
              <Icon glyph="chevron-down" />
            </span>
          </button>
        )}
      </header>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  isFullscreen: PropTypes.bool,
  scrollLabel: PropTypes.string,
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  isFullscreen: false,
  scrollLabel: 'Scroll for more',
  children: null,
};

export default PageHeader;
