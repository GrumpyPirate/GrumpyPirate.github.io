// React
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Util
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import { EventEmitter } from 'fbemitter'

// Config
import { animation } from 'config/animation'

// SCSS
import './MainContainer.scss'

// Components
import Icon from 'components/Icons/Icons'

// Define MainContainer
class MainContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: false,
      isLoadingComplete: true
    } // /this.state

    this.handleLoadStart = this.handleLoadStart.bind(this)
    this.handleLoadStop = this.handleLoadStop.bind(this)
  } // /constructor(props)

  // INTERNAL
  handleLoadStart () {
    this.setState({
      isLoading: true,
      isLoadingComplete: false
    })
  }

  handleLoadStop () {
    this.setState({
      isLoading: false,
      isLoadingComplete: false
    })

    if (this.loaderTimeout) {
      window.clearTimeout(this.loaderTimeout)
    }
    this.loaderTimeout = window.setTimeout(() => {
      this.setState({ isLoadingComplete: true })
    }, (animation.duration * 2))
  }

  // COMPONENT LIFECYCLE
  componentWillMount () {
    this.props.emitter.addListener('startLoading', this.handleLoadStart)
    this.props.emitter.addListener('stopLoading', this.handleLoadStop)
  } // /componentWillMount ()

  componentDidUpdate (prevProps) {
    // Scroll both the window, and the container element back to top
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
      this._container.scrollTop = 0
    } // /if (this.props.location !== prevProps.location)
  } // /componentDidUpdate (prevProps)

  render () {
    const classNames = ClassNames({
      'main': true,
      'is--loading': this.state.isLoading
    })

    return (
      <main className={classNames} ref={(container) => this._container = container}>
        {this.props.children}

        {!this.state.isLoadingComplete &&
          <div className="main__loader text-center py-4">
            <figure className="h1 main__loader__icon">
              <Icon glyph="loader"/>
            </figure>

            <h6 className="h4 mb-0">Loading...</h6>
          </div>
        }
      </main>
    )
  } // /render()
} // /class MainContainer extends React.Component

MainContainer.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  emitter: PropTypes.instanceOf(EventEmitter).isRequired,
  location: PropTypes.object.isRequired
}

// export with router, to allow access to Router's props (particularly location, which we need)
export default withRouter(MainContainer)
