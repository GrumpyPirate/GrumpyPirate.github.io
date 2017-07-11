// React
import React, { Component } from 'react'

// Components
import PageHeader from '../PageHeader/PageHeader.jsx'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'
import PortfolioList from 'components/Portfolio/PortfolioList/PortfolioList'
import Loader from 'components/Loader/Loader'

// Services
import ContentService from 'services/ContentService'

// Style
import './WebDev.scss'

// Component - WebDev page
class WebDev extends Component {
  constructor () {
    super()

    this.state = {
      contentService: new ContentService(),
      portfolioItems: null
    }
  }

  componentWillMount () {
    this.state.contentService
      .getPortfolioItems()
      .then((items) => {
        this.setState({
          portfolioItems: items
        })
      })
      .catch((e) => {
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
          {this.state.portfolioItems
            ? (<PortfolioList items={this.state.portfolioItems}/>)
            : (
               <div className="container-fluid">
                 <Loader />
               </div>
            )
          }
        </section>
      </div>
    )
  } // /render ()
} // /class WebDev extends React.Component

export default WebDev
