import React, { PureComponent, createRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Spinner from '../../Spinner/containers/Spinner';

import './Main.scss';

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.mainElement = createRef();
  }

  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location } = this.props;

    if (prevLocation.pathname !== location.pathname) {
      this.mainElement.current.scrollTo(0, 0);
    }
  }

  render() {
    const { isLoading, children } = this.props;

    return (
      <main
        className={classnames('main', {
          'is--loading': isLoading,
        })}
        ref={this.mainElement}
      >
        <Spinner />
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
  children: PropTypes.node.isRequired,
};

Main.defaultProps = {
  isLoading: false,
};

export default Main;
