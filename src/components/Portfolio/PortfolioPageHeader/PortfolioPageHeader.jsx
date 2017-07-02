// React
import React from 'react'

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

      <div className="pf-page-header__title">
        <div className="container-fluid">
          <h1>{title}</h1>
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
