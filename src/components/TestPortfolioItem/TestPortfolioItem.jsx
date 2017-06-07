// React
import React, { Component } from 'react'

import PortfolioListItem from '../PortfolioListItem/PortfolioListItem.jsx'

// Component
class TestPortfolioItem extends Component {
  constructor(props) {
    super(props)
  } // /constructor(props)

  render() {
    return (
      <PortfolioListItem to={`${this.props.match.url}/test-portfolio-item`}>
        <figure className="portfolio__item__media">
          <img src="https://unsplash.it/300/200?random" alt="" srcSet="https://unsplash.it/600/400?random 2x"  />
        </figure>
        <div className="portfolio__item__body last-child-mb-0">
          <h3 className="h4">Lorem ipsum dolor</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio dignissimos officiis quaerat fuga adipisci velit? Harum labore id quo temporibus mollitia vel. Sequi!
          </p>
        </div>
      </PortfolioListItem>
    )
  } // /render()
} // /class TestPortfolioItem extends Component

export default TestPortfolioItem
