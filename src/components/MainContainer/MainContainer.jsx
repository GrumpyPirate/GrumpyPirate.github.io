// React
import React, { Component } from 'react'

import ClassNames from 'classnames'

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

  componentWillMount () {
    this.props.emitter.addListener('startLoading', this.handleLoadStart)
    this.props.emitter.addListener('stopLoading', this.handleLoadStop)
  } // /componentWillMount ()

  render () {
    const classNames = ClassNames({
      'main': true,
      'is--loading': this.state.isLoading
    })

    return (
      <main className={classNames}>
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

export default MainContainer
