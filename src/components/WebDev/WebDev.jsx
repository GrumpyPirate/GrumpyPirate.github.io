// React
import React from 'react'

import PageHeader from '../PageHeader/PageHeader.jsx'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'
import PortfolioItem from 'components/PortfolioItem/PortfolioItem'

// Style
import './WebDev.scss'

// Component - WebDev page
class WebDev extends React.Component {
  componentWillMount () {
    const portfolioItems = [{}, {}, {}, {}, {}, {}, {}, {}]

    this.setState({
      portfolioItems: portfolioItems
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
          <div className="portfolio__list" role="listbox">
            {this.state.portfolioItems.map((item, i) => (
              <PortfolioItem item={item} key={i} />
            ))}
          </div>
        </section>
      </div>
    )
  } // /render ()
} // /class WebDev extends React.Component

export default WebDev
