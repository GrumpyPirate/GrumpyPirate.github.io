import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { debounce } from 'lodash-es';

import getElementAbsoluteOffsetTop from 'utils/dom';

import Icon from 'components/Icon/Icon';

import './PageHeader.scss';

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
    const elementAbsolutePosition = getElementAbsoluteOffsetTop(headerElement);
    const scrollContainer = document.getElementById('main-content');

    if ('scrollTo' in scrollContainer) {
      const scrollOptions = {
        top: elementAbsolutePosition + elementHeight - (window.innerWidth < 992 ? 50 : 0),
        behavior: 'smooth',
      };

      window.scrollTo(scrollOptions);
      scrollContainer.scrollTo(scrollOptions);
    }
  }

  render() {
    const { title, isFullscreen, children } = this.props;

    const { height } = this.state;

    return (
      <header
        className={classnames(
          'page-header', 'text-center', 'last-child-mb-0', {
            'page-header--is-fullscreen': isFullscreen,
          },
        )}
        style={{ height: isFullscreen && height }}
        ref={this.elementRef}
      >
        <div className="page-header__content">
          <div className="page-header__title">
            <div className="container-fluid">
              <h1 className="page-header__title__text">
                <div className="container-fluid">{title}</div>
              </h1>
            </div>
          </div>

          {!!children && (
            <div className="page-header__subtitle">
              {children}
            </div>
          )}
        </div>

        {!!isFullscreen && (
          <button
            type="button"
            className="page-header__scroll-button h5"
            onClick={this.onScrollDownClick}
          >
            <span className="page-header__scroll-button__label">Scroll for more</span>
            <span className="page-header__scroll-button__icon">
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
  children: PropTypes.node,
};

PageHeader.defaultProps = {
  isFullscreen: false,
  children: null,
};

export default PageHeader;
