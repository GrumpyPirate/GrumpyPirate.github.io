// React
import React from 'react'

import PageContainer     from '../PageContainer/PageContainer.jsx'
import PageContent       from '../PageContent/PageContent.jsx'
import PageHeader        from '../PageHeader/PageHeader.jsx'
import TestPortfolioItem from '../TestPortfolioItem/TestPortfolioItem.jsx'

// Style
import './WebDev.scss'

// Component - PortfolioList
// ---------------------------------------------------------------------------------------------------------------------
const PortfolioList = (props) => {
  // NEEDTO: Trigger Modal Content for each PortfolioListItem
  return (
    <ul className="portfolio__list list-unstyled">
      <TestPortfolioItem {...props} />
      <TestPortfolioItem {...props} />
    </ul>
  ) // /return
} // /const PortfolioList

// Component - WebDev page
// ---------------------------------------------------------------------------------------------------------------------
class WebDev extends React.Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <div>
        <PageHeader title="Web Dev" subtitle="Stuff I've worked on" />

        <PageContainer>
          <PageContent>
            <section className="portfolio">
              <PortfolioList {...this.props} />
            </section>
          </PageContent>
        </PageContainer>
      </div>
    )
  } // /render()
} // /class WebDev extends React.Component

export default WebDev
