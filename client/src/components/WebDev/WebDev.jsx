// React
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { EventEmitter } from 'fbemitter'

// Components
import PageHeader from '../PageHeader/PageHeader.jsx'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'
import PortfolioList from 'components/Portfolio/PortfolioList/PortfolioList'

// Services
import ContentService from 'services/ContentService'

// Style
import './WebDev.scss'

// Component - WebDev page
class WebDev extends Component {
  constructor (props) {
    super(props)

    this.contentService = new ContentService()

    this.state = {
      portfolioItems: null
    } // /this.state
  } // /constructor

  // Class methods
  getPortfolioItems () {
    return this.contentService.getPortfolioItems()
  } // /getPortfolioItems

  // Lifecycle
  componentWillMount () {
    this.props.emitter.emit('startLoading')

    this.getPortfolioItems()
      .then((items) => {
        this.setState({
          portfolioItems: items
        })
        window.setTimeout(() => {
          this.props.emitter.emit('stopLoading')
        })
      })
      .catch((e) => {
        this.props.emitter.emit('stopLoading')
        console.error(e)
      })
  } // /componentWillMount

  render () {
    return (
      <div>
        <PageHeader title="Portfolio">
          <PageHeaderSubtitle>
            Stuff I&#039;ve worked on
          </PageHeaderSubtitle>
        </PageHeader>

        <section className="portfolio">
          {this.state.portfolioItems &&
            <PortfolioList items={this.state.portfolioItems}/>
          }
        </section>
      </div>
    )
  } // /render ()
} // /class WebDev extends React.Component

WebDev.propTypes = {
  emitter: PropTypes.instanceOf(EventEmitter)
}

export default WebDev
