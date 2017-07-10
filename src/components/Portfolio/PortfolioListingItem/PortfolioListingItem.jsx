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
    <Link to={`/webdev/${portfolioItem.id}`} className="pf__item" role="listitem">
      {/* Item image, 8:5 */}
      <figure className="pf__item__media">
        <picture>
          <source media="(min-width: 576px)" srcSet="https://unsplash.it/576/360/?random 1x, https://unsplash.it/1152/720/?random 2x"/>
          <source srcSet="https://unsplash.it/320/200/?random 1x, https://unsplash.it/640/400/?random 2x"/>
          <img src="https://unsplash.it/320/200/?random" srcSet="https://unsplash.it/640/400/?random 2x" alt=""/>
        </picture>
      </figure>

      <div className="pf__item__copy">
        {/* Item title */}
        <h3 className="h5 pf__item__title">
          Excepturi maiores
        </h3>

        {/* Item description */}
        <div className="last-child-mb-0">
          <p className="pf__item__desc">
            Maxime aperiam beatae accusamus ullam in, reiciendis veritatis incidunt eveniet doloremque, minima quis ipsum ipsam rem esse velit.
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
