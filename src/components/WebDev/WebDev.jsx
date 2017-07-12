// React
import React, { Component } from 'react'

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

    this.state = {
      contentService: new ContentService(),
      portfolioItems: null
    } // /this.state
  } // /constructor

  componentWillMount () {
    this.props.emitter.emit('startLoading')

    this.state.contentService
      .getPortfolioItems()
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
        {/* <PageHeader title="Web Dev" subtitle="Stuff I've worked on" /> */}
        <PageHeader title="Quis iure">
          <PageHeaderSubtitle>
            Lorem ipsum dolor sit amet, consectetur adipisicing
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

export default WebDev
