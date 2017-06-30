// React
import React from 'react'
import PropTypes from 'prop-types'

// SCSS
import './PortfolioItem.scss'

// Define PortfolioItem
const PortfolioItem = ({ item }) => {
  return (
    <div className="portfolio__item" role="listitem">
      {/* Item image, 8:5 */}
      <figure className="portfolio__item__media">
        <picture>
          <source media="(min-width: 576px)" srcSet="https://placehold.it/576x360 1x, https://placehold.it/1152x720 2x"/>
          <source srcSet="https://placehold.it/320x200 1x, https://placehold.it/640x400 2x"/>
          <img src="https://placehold.it/320x200" srcSet="https://placehold.it/640x400 2x" alt=""/>
        </picture>
      </figure>

      <div className="portfolio__item__copy">
        {/* Item title */}
        <h3 className="h5 portfolio__item__title">
          Excepturi maiores
        </h3>

        {/* Item description */}
        <div className="last-child-mb-0">
          <p className="portfolio__item__desc">
            Maxime aperiam beatae accusamus ullam in, reiciendis veritatis incidunt eveniet doloremque, minima quis ipsum ipsam rem esse velit.
          </p>
        </div>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default PortfolioItem
