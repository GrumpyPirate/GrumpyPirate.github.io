// React
import React from 'react'

import PageHeader from '../PageHeader/PageHeader.jsx'
import PageHeaderSubtitle from 'components/PageHeaderSubtitle/PageHeaderSubtitle'
import PortfolioListingItem from 'components/Portfolio/PortfolioListingItem/PortfolioListingItem'

// Style
import './WebDev.scss'

// Component - WebDev page
class WebDev extends React.Component {
  componentWillMount () {
    const portfolioItems = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 }
    ]

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
          <div className="pf__list" role="listbox">
            {this.state.portfolioItems.map((item, i) => (
              <PortfolioListingItem portfolioItem={item} key={i} />
            ))}
          </div>
        </section>
      </div>
    )
  } // /render ()
} // /class WebDev extends React.Component

export default WebDev
