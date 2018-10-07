import React, { PureComponent, createRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Spinner from '../../Spinner/containers/Spinner'

import './Main.scss'

class Main extends PureComponent {
  constructor (props) {
    super(props)

    this.mainElement = createRef()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.mainElement.current.scrollTo(0, 0)
    }
  }

  render () {
    return (
      <main
        className={classnames('main', {
          'is--loading': this.props.isLoading
        })}
        ref={this.mainElement}
      >
        <Spinner />
        {this.props.children}
      </main>
    )
  }
}

Main.propTypes = {
  isLoading: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.node.isRequired
}

export default Main
