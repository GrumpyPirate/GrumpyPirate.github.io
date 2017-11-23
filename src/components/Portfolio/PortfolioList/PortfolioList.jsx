import React from 'react'
import PropTypes from 'prop-types'

import PortfolioListingItem from 'components/Portfolio/PortfolioListingItem/PortfolioListingItem'

import './PortfolioList.scss'

const PortfolioList = ({ items }) => {
  return (
    <div className="container-fluid">
      <div className="pf__list" role="listbox">
        {items.map((item, i) => (
          <PortfolioListingItem portfolioItem={item} key={i} />
        ))}
      </div>
    </div>
  )
} // /const PortfolioList

PortfolioList.propTypes = {
  items: PropTypes.array.isRequired
}

export default PortfolioList
