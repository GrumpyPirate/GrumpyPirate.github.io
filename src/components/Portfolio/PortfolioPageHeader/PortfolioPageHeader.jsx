// React
import React from 'react'

// Router
import { Link } from 'react-router-dom'

// PropTypes
import PropTypes from 'prop-types'

// SCSS
import './PortfolioPageHeader.scss'

const PortfolioPageHeader = ({ bgImage, title }) => {
  return (
    <header className="pf-page-header text-left">
      <figure className="pf-page-header__media">
        <img src={bgImage} alt={title} />
      </figure>

      <div className="pf-page-header__copy">
        <div>
          <Link to="/webdev" className="pf-page-header__back h6 mb-0">&lt; Portfolio</Link>
        </div>

        <div>
          <h1 className="pf-page-header__title">{title}</h1>
        </div>
      </div>
    </header>
  )
} // /const PortfolioPageHeader

PortfolioPageHeader.propTypes = {
  bgImage: PropTypes.any,
  title: PropTypes.string.isRequired
} // /PortfolioPageHeader.propTypes

export default PortfolioPageHeader
