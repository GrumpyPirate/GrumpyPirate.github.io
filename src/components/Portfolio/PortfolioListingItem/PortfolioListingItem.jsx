// React
import React from 'react'
import PropTypes from 'prop-types'

// React Router
import { Link } from 'react-router-dom'

// SCSS
import './PortfolioListingItem.scss'

// Define PortfolioItem
const PortfolioItem = ({ portfolioItem }) => {
  return (
    <Link to={`/webdev/${portfolioItem.slug}`} className="pf__item" role="listitem">
      {/* Item image, 8:5 */}
      <figure className="pf__item__media">
        <img src={portfolioItem.headerImgSrc} alt=""/>
      </figure>

      <div className="pf__item__copy">
        {/* Item title */}
        <h3 className="h5 pf__item__title">{portfolioItem.title}</h3>

        {/* Item description */}
        <div className="last-child-mb-0">
          <p className="pf__item__desc">
            {portfolioItem.descriptionShort}
          </p>
        </div>
      </div>
    </Link>
  )
}

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.object.isRequired
}

export default PortfolioItem
