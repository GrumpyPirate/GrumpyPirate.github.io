import { Component } from 'react'
import PropTypes from 'prop-types'

class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default ScrollToTop
