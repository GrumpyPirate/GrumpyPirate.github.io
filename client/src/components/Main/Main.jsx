import React, { PureComponent, createRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Spinner from 'containers/Spinner/Spinner';

import classes from './Main.scss';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.mainElement = createRef();
  }

  componentDidUpdate(prevProps) {
    const { location: { pathname: prevPathname } } = prevProps;
    const { location: { pathname }, closeMobileNavigation } = this.props;
    const scrollOptions = {
      top: 0,
      behavior: prevPathname !== pathname ? 'instant' : 'smooth',
    };

    window.scrollTo(scrollOptions);
    this.mainElement.current.scrollTo(scrollOptions);

    closeMobileNavigation();
  }

  render() {
    const {
      isLoading, renderLocation, location, children,
    } = this.props;

    return (
      <main
        className={classnames(classes['main'], {
          [classes['main--is-loading']]: isLoading,
        })}
        id="main-content"
        ref={this.mainElement}
      >
        <Spinner />
        {renderLocation(location)}
        {children}
      </main>
    );
  }
}

Main.propTypes = {
  isLoading: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  renderLocation: PropTypes.func.isRequired,
  closeMobileNavigation: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Main.defaultProps = {
  isLoading: false,
};

export default withRouter(Main);
